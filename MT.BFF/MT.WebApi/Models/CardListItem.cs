namespace MT.WebApi.Models
{
    public class CardListItem
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public int Position { get; set; }

        public CardListItem(string id, string title, string description, int status, int position)
        {
            Id = id;
            Title = title;
            Description = description;
            Status = status;
            Position = position;
        }
    }
}
