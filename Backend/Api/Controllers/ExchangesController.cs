using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExchangesController : ControllerBase
{
    private readonly AppDbContext _db;

    public ExchangesController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var items = await _db.Exchanges
            .Select(e => new
            {
                e.Id,
                e.Name,
                e.Slug,
                e.WebsiteUrl,
                e.LogoUrl,
                e.Description,
                AverageScore = e.Ratings.Any() ? e.Ratings.Average(r => r.Score) : 0,
                RatingsCount = e.Ratings.Count
            })
            .ToListAsync();
        return Ok(items);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var e = await _db.Exchanges.Include(x => x.Ratings).FirstOrDefaultAsync(x => x.Id == id);
        if (e == null) return NotFound();
        return Ok(new
        {
            e.Id,
            e.Name,
            e.Slug,
            e.WebsiteUrl,
            e.LogoUrl,
            e.Description,
            Ratings = e.Ratings.OrderByDescending(r => r.CreatedAtUtc).Select(r => new { r.Id, r.Score, r.Comment, r.CreatedAtUtc, r.UserId })
        });
    }

    [Authorize]
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Exchange e)
    {
        if (string.IsNullOrWhiteSpace(e.Name) || string.IsNullOrWhiteSpace(e.Slug))
            return BadRequest("Name and Slug are required");
        var exists = await _db.Exchanges.AnyAsync(x => x.Slug == e.Slug);
        if (exists) return Conflict("Slug already exists");
        _db.Exchanges.Add(e);
        await _db.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = e.Id }, e);
    }
}
