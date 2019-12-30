using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Configuration;

namespace SpyStore.Mvc.Controllers.Base
{
    public class BaseController : Controller
    {
        private readonly IConfiguration _configuration;

        public BaseController(IConfiguration configuration) => _configuration = configuration;

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            ViewBag.CustomerId = _configuration.GetValue<int>("CustomerId");
        }
    }
}
