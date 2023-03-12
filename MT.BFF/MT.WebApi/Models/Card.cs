namespace MT.WebApi.Models
{
    public class Card
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public int Position { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }
        public string OwnerId { get; set; }
        public string AsigneeId { get; set; }

        public Card(string id, string title, string description, int status, int position, DateTime createdAt, DateTime modifiedAt, string ownerId, string asigneeId)
        {
            Id = id;
            Title = title;
            Description = description;
            Status = status;
            Position = position;
            CreatedAt = createdAt;
            ModifiedAt = modifiedAt;
            OwnerId = ownerId;
            AsigneeId = asigneeId;
        }
    }
}
