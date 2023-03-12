namespace MT.WebApi.Models
{
    public class CardUpdateItem
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public int Position { get; set; }
        public string AsigneeId { get; set; }

        public CardUpdateItem(string id, string title, string description, int status, int position, string asigneeId)
        {
            Id = id;
            Title = title;
            Description = description;
            Status = status;
            Position = position;
            AsigneeId = asigneeId;
        }
    }
}
