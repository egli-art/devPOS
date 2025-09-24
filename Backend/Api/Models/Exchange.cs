namespace Api.Models;

public class Exchange
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string? WebsiteUrl { get; set; }
    public string? LogoUrl { get; set; }
    public string Description { get; set; } = string.Empty;

    public ICollection<Rating> Ratings { get; set; } = new List<Rating>();
}
