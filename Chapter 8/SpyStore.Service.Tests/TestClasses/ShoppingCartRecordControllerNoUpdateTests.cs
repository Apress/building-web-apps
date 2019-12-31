using Newtonsoft.Json.Linq;
using SpyStore.Service.Tests.TestClasses.Base;
using System.Net.Http;
using System.Text;
using SpyStore.Dal.EfStructures;
using SpyStore.Dal.Initialization;
using SpyStore.Service.Tests.Helpers;
using Xunit;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public class ShoppingCartRecordControllerNoUpdateTests : BaseTestClass
    {
        private readonly int _customerId = 1;
        private readonly int _cartRecordId = 1;
        private readonly int _productId = 33;
        public ShoppingCartRecordControllerNoUpdateTests()
        {
            RootAddress = "api/shoppingcartrecord";
            SampleDataInitializer.InitializeData(new StoreContextFactory().CreateDbContext(null));
            var foo = "foo";
        }
        public override void Dispose()
        {
        }


        [Fact]
        public async void ShouldReturnCustomersCartItem()
        {
            //Get Cart: http://localhost:55882/api/shoppingcartrecord/{cartRecordId}
            var cartRecordWithProductDetails = await ShoppingCartTestHelpers.GetCartItemWithProduct(_cartRecordId, ServiceAddress, RootAddress);
            Assert.Equal(_productId, cartRecordWithProductDetails.ProductId);
            Assert.Equal(1, cartRecordWithProductDetails.Quantity);
            Assert.Equal("Travel", cartRecordWithProductDetails.CategoryName);
        }

        [Fact]
        public async void ShouldNotUpdateCartRecordOnAddIfNotEnoughInventory()
        {
            // Add to Cart: http://localhost:55882/api/shoppingcartrecord/{customerId} HTTPPost
            // Note: ProductId and Quantity in the body {"ProductId":22,"Quantity":2}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = _productId;
                var quantity = 5;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_cartRecordId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity},\"CustomerId\":{_customerId}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.False(response.IsSuccessStatusCode);
                var message =
                    await response.Content.ReadAsStringAsync();
                dynamic messageObject = JObject.Parse(message);
                Assert.Equal("Can't add more product than available in stock", messageObject.Message.ToString());
            }
        }

        [Fact]
        public async void ShouldNotAddRecordToTheCartIfNotEnoughStock()
        {
            using (var client = new HttpClient())
            {
                var productId = 2;
                var quantity = 10;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity},\"CustomerId\":{_customerId}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.False(response.IsSuccessStatusCode);
                var message =
                    await response.Content.ReadAsStringAsync();
                dynamic messageObject = JObject.Parse(message);
                Assert.Equal("Can't add more product than available in stock", messageObject.Message.ToString());
            }
        }
    }
}
