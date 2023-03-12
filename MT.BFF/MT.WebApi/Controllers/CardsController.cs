using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MT.WebApi.Models;

namespace MT.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardsController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public CardsController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public Task<ActionResult<IEnumerable<CardListItem>>> GetAll()
        {
            throw new NotImplementedException();
        }

        [HttpGet("{id}")]
        public Task<ActionResult<Card>> GetCardById(string id)
        {
            throw new NotImplementedException();
        }

        [HttpPost("add")]
        public Task AddCard([FromBody] CardCreateItem card)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        public Task DeleteCardById(string id)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public Task UpdateCard([FromBody] CardUpdateItem card)
        {
            throw new NotImplementedException();
        }
    }
}
