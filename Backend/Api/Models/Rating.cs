namespace Api.Models;

public class Rating
{
    public int Id { get; set; }
    public int ExchangeId { get; set; }
    public Guid UserId { get; set; }
    public int Score { get; set; } // 1-5
    public string? Comment { get; set; }
    public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;

    public Exchange? Exchange { get; set; }
    public User? User { get; set; }
}
