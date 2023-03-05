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
        [HttpPost("signin")]
        public async Task<ActionResult<SignInToken>> GetJWTBearerToken(string email, string password)
        {
            var client = new HttpClient();

            var json = JsonConvert.SerializeObject(new User(email, password));

            var data = new StringContent(json, Encoding.UTF8, "application/json");

            var response = await client.PostAsync("http://217.13.111.9:5010/Authentication/SignIn", data);

            var result = JsonConvert.DeserializeObject<SignInToken>(await response.Content.ReadAsStringAsync());

            return Ok(result);
        }
    }
}
