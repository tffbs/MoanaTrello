using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MT.WebApi.Models;
using Newtonsoft.Json;
using System.Text;

namespace MT.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public UserController()
        {
            _httpClient = new HttpClient();
        }

        [HttpPost("signin")]
        public async Task<ActionResult<SignInToken>> GetJWTBearerToken([FromBody] User user)
        {

            var json = JsonConvert.SerializeObject(user);

            var data = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync("http://217.13.111.9:5010/Authentication/SignIn", data);

            var result = JsonConvert.DeserializeObject<SignInToken>(await response.Content.ReadAsStringAsync());

            return Ok(result);
        }
    }
}
