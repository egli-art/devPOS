using System.Security.Claims;
using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/exchanges/{exchangeId:int}/[controller]")]
public class RatingsController : ControllerBase
{
    private readonly AppDbContext _db;

    public RatingsController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IActionResult> GetForExchange(int exchangeId)
    {
        var exists = await _db.Exchanges.AnyAsync(e => e.Id == exchangeId);
        if (!exists) return NotFound();
        var ratings = await _db.Ratings.Where(r => r.ExchangeId == exchangeId)
            .OrderByDescending(r => r.CreatedAtUtc)
            .Select(r => new { r.Id, r.Score, r.Comment, r.CreatedAtUtc, r.UserId })
            .ToListAsync();
        return Ok(ratings);
    }

    [Authorize]
    [HttpPost]
    public async Task<IActionResult> Create(int exchangeId, [FromBody] Rating body)
    {
        if (body.Score < 1 || body.Score > 5) return BadRequest("Score must be 1-5");
        var userIdStr = User.FindFirstValue(ClaimTypes.NameIdentifier) ?? User.FindFirstValue("sub");
        if (!Guid.TryParse(userIdStr, out var userId)) return Unauthorized();

        var exists = await _db.Exchanges.AnyAsync(e => e.Id == exchangeId);
        if (!exists) return NotFound();

        var rating = new Rating
        {
            ExchangeId = exchangeId,
            UserId = userId,
            Score = body.Score,
            Comment = body.Comment
        };
        _db.Ratings.Add(rating);
        await _db.SaveChangesAsync();
        return Ok(rating);
    }
}
