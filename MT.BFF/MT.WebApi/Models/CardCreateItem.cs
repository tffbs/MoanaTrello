namespace MT.WebApi.Models
{
    public class CardCreateItem
    {
        public string Title { get; set; }
        public string Description { get; set; }

        public CardCreateItem(string title, string description)
        {
            Title = title;
            Description = description;
        }
    }
}
