using Newtonsoft.Json.Linq;
using SpyStore.Service.Tests.TestClasses.Base;
using System.Net.Http;
using System.Text;
using SpyStore.Dal.EfStructures;
using SpyStore.Dal.Initialization;
using SpyStore.Models.ViewModels;
using SpyStore.Service.Tests.Helpers;
using Xunit;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public class ShoppingCartControllerNoUpdateTests : BaseTestClass
    {
        private readonly int _customerId = 1;
        private readonly int _productId = 33;
        public ShoppingCartControllerNoUpdateTests()
        {
            RootAddress = "api/shoppingcart";
            SampleDataInitializer.InitializeData(new StoreContextFactory().CreateDbContext(null));

        }
        public override void Dispose()
        {
        }


        [Fact]
        public async void ShouldReturnCustomersCart()
        {
            //Get Cart: http://localhost:55882/api/shoppingcart/{customerId}
            CartWithCustomerInfo cartWithCustomerInfo = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, RootAddress);
            Assert.Single(cartWithCustomerInfo.CartRecords);
            Assert.Equal(_productId, cartWithCustomerInfo.CartRecords[0].ProductId);
            Assert.Equal("Travel", cartWithCustomerInfo.CartRecords[0].CategoryName);
        }

        [Fact]
        public async void ShouldNotFailIfBadCustomerId()
        {
            //Get Cart: http://localhost:55882/api/shoppingcart/{customerId}
            CartWithCustomerInfo cartWithCustomerInfo = await ShoppingCartTestHelpers.GetCart(100, ServiceAddress, RootAddress);
            Assert.Empty(cartWithCustomerInfo.CartRecords);
        }
    }
}
