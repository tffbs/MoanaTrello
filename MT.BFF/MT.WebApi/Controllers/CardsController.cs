using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MT.WebApi.Models;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Text;

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
        public async Task<ActionResult<IEnumerable<CardListItem>>> GetAll()
        {

            var client = _httpClientFactory.CreateClient();

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer","");

            var response = await client.GetAsync("http://217.13.111.9:5010/Cards/GetAll");

            var result = JsonConvert.DeserializeObject<IEnumerable<CardListItem>>(await response.Content.ReadAsStringAsync());

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Card>> GetCardById(string id)
        {
            var client = _httpClientFactory.CreateClient();

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer","");

            var response = await client.GetAsync($"http://217.13.111.9:5010/Cards/GetById?id={id}");

            var result = JsonConvert.DeserializeObject<Card>(await response.Content.ReadAsStringAsync());
            
            return Ok(result);
        }

        [HttpPost("add")]
        public async Task AddCard([FromBody] CardCreateItem card)
        {
            var json = JsonConvert.SerializeObject(card);
            var data = new StringContent(json, Encoding.UTF8, "application/json");

            var client = _httpClientFactory.CreateClient();

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer","");

            await client.PostAsync("http://217.13.111.9:5010/Cards/Add", data);
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
