using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SpyStore.Models.Entities;
using SpyStore.Models.ViewModels;
using SpyStore.Mvc.Controllers.Base;
using SpyStore.Mvc.Support;

namespace SpyStore.Mvc.Controllers
{
    [Route("[controller]/[action]")]
    public class OrdersController : BaseController
    {
        private readonly SpyStoreServiceWrapper _serviceWrapper;
        public OrdersController(SpyStoreServiceWrapper serviceWrapper, IConfiguration configuration) : base(configuration)
        {
            _serviceWrapper = serviceWrapper;
        }

        [Route("/Orders")]
        [Route("/Orders/Index")]
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            ViewBag.Title = "Order History";
            ViewBag.Header = "Order History";
            IList<Order> orders = await _serviceWrapper.GetOrdersAsync(ViewBag.CustomerId);
            return View(orders);
        }

        [HttpGet("{orderId}")]
        public async Task<IActionResult> Details(int orderId)
        {
            ViewBag.Title = "Order Details";
            ViewBag.Header = "Order Details";
            OrderWithDetailsAndProductInfo orderDetails = await _serviceWrapper.GetOrderDetailsAsync(orderId);
            if (orderDetails == null) return NotFound();
            return View(orderDetails);
        }
    }
}
