using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpyStore.Mvc.Controllers.Base;
using SpyStore.Mvc.Models.ViewModels;
using SpyStore.Mvc.Support;

namespace SpyStore.Mvc.Controllers
{
    [Route("[controller]/[action]")]
    public class ProductsController : BaseController
    {
        private readonly SpyStoreServiceWrapper _serviceWrapper;
        public ProductsController(SpyStoreServiceWrapper serviceWrapper, IConfiguration configuration) : base(configuration)
        {
            _serviceWrapper = serviceWrapper;
        }

        [Route("/")]
        [Route("/Products")]
        [Route("/Products/Index")]
        [HttpGet]
        public ActionResult Index()
        {
            return RedirectToAction(nameof(Featured));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> ProductList(int id)
        {
            var cat = await _serviceWrapper.GetCategoryAsync(id);
            ViewBag.Title = cat?.CategoryName;
            ViewBag.Header = cat?.CategoryName;
            ViewBag.ShowCategory = false;
            ViewBag.Featured = false;
            var vm = _serviceWrapper.GetProductsForACategoryAsync(id);
            return View(await vm);
        }

        [HttpGet]
        public async Task<IActionResult> Featured()
        {
            ViewBag.Title = "Featured Products";
            ViewBag.Header = "Featured Products";
            ViewBag.ShowCategory = true;
            ViewBag.Featured = true;
            IList<ProductViewModel> vm = await _serviceWrapper.GetFeaturedProductsAsync();
            return View("ProductList", vm);
        }

        [Route("[controller]/[action]")]
        [HttpPost("{searchString}")]
        public async Task<IActionResult> Search(string searchString)
        {
            ViewBag.Title = "Search Results";
            ViewBag.Header = "Search Results";
            ViewBag.ShowCategory = true;
            ViewBag.Featured = false;
            var vm = await _serviceWrapper.SearchAsync(searchString);
            return View("ProductList", vm);
        }

        [HttpGet("{id}")]
        public ActionResult Details(int id)
        {
            return RedirectToAction(nameof(CartController.AddToCart),
                nameof(CartController).Replace("Controller", ""),
                new
                {
                    productId = id,
                    cameFromProducts = true
                });
        }
    }
}
