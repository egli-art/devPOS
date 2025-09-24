using Api.Data;
using Api.Models;
using Api.Services;
using BCrypt.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly IJwtTokenService _jwt;

    public AuthController(AppDbContext db, IJwtTokenService jwt)
    {
        _db = db;
        _jwt = jwt;
    }

    public record SignupRequest(string Email, string Password, string DisplayName);
    public record LoginRequest(string Email, string Password);

    [HttpPost("signup")]
    public async Task<IActionResult> Signup([FromBody] SignupRequest req)
    {
        if (string.IsNullOrWhiteSpace(req.Email) || string.IsNullOrWhiteSpace(req.Password))
            return BadRequest("Email and password are required");

        var exists = await _db.Users.AnyAsync(u => u.Email == req.Email);
        if (exists) return Conflict("Email already in use");

        var user = new User
        {
            Id = Guid.NewGuid(),
            Email = req.Email.Trim().ToLowerInvariant(),
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(req.Password),
            DisplayName = string.IsNullOrWhiteSpace(req.DisplayName) ? req.Email.Split('@')[0] : req.DisplayName.Trim()
        };

        _db.Users.Add(user);
        await _db.SaveChangesAsync();

        var token = _jwt.GenerateToken(user.Id, user.Email, user.DisplayName);
        return Ok(new { token, user = new { user.Id, user.Email, user.DisplayName } });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest req)
    {
        var email = req.Email.Trim().ToLowerInvariant();
        var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == email);
        if (user == null) return Unauthorized("Invalid credentials");

        var valid = BCrypt.Net.BCrypt.Verify(req.Password, user.PasswordHash);
        if (!valid) return Unauthorized("Invalid credentials");

        var token = _jwt.GenerateToken(user.Id, user.Email, user.DisplayName);
        return Ok(new { token, user = new { user.Id, user.Email, user.DisplayName } });
    }
}
