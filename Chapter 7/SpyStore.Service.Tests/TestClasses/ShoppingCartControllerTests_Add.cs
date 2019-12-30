using System.Net.Http;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SpyStore.Models.ViewModels;
using SpyStore.Service.Tests.Helpers;
using Xunit;

namespace SpyStore.Service.Tests.TestClasses
{
    public partial class ShoppingCartRecordControllerTests
    {

        [Fact]
        public async void ShouldAddRecordToTheCart()
        {
            // Add to Cart: http://localhost:55882/api/shoppingcartrecord/{customerId} HTTPPost
            // Note: ProductId and Quantity in the body
            // http://localhost:55882/api/shoppingcartrecord/1 {"ProductId":22,"Quantity":2,"CustomerId":1}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = 2;
                var quantity = 1;
                //var request = new HttpRequestMessage(
                //    HttpMethod.Post,
                //    $"{_serviceAddress}{_rootAddress}{_customerId}")
                //{
                //    Content = new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity}" + "}", Encoding.UTF8, "application/json")
                //};
                //var response = await client.SendAsync(request);
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity},\"CustomerId\":{_customerId}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.True(response.IsSuccessStatusCode,response.ReasonPhrase);
                Assert.Equal($"{ServiceAddress}api/shoppingcart/{_customerId}".ToUpper(),
                    response.Headers.Location.AbsoluteUri.ToUpper());
            }
            // validate the cart was added
            CartWithCustomerInfo cartWithCustomerInfo = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, "api/shoppingcart");
            Assert.Equal(2, cartWithCustomerInfo.CartRecords.Count);
            var cartRecord = cartWithCustomerInfo.CartRecords[cartWithCustomerInfo.CartRecords.Count-1];
            Assert.Equal(2, cartRecord.Id);
            Assert.Equal("Munitions", cartRecord.CategoryName);
            Assert.Equal(1, cartRecord.Quantity);
        }

        [Fact]
        public async void ShouldUpdateCartRecordOnAddIfAlreadyExists()
        {
            // Add to Cart: http://localhost:55882/api/shoppingcartrecord/{customerId} HTTPPost
            // http://localhost:55882/api/shoppingcartrecord/1 {"ProductId":22,"Quantity":2,"CustomerId":1}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = _productId;
                var quantity = 3;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity},\"CustomerId\":{_customerId}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.True(response.IsSuccessStatusCode, response.ReasonPhrase);
                Assert.Equal($"{ServiceAddress}api/shoppingcart/{_customerId}".ToUpper(),
                    response.Headers.Location.AbsoluteUri.ToUpper());
            }
            // validate the cart was added
            CartWithCustomerInfo cartWithCustomerInfo = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, "api/shoppingcart");
            Assert.Single(cartWithCustomerInfo.CartRecords);
            var cartRecord = cartWithCustomerInfo.CartRecords[cartWithCustomerInfo.CartRecords.Count-1];
            Assert.Equal(_productId, cartRecord.ProductId);
            Assert.Equal("Travel", cartRecord.CategoryName);
            Assert.Equal(4, cartRecord.Quantity);
        }


        [Fact]
        public async void ShouldRemoveRecordOnAddIfQuantityBecomesZero()
        {
            // Add to Cart: http://localhost:55882/api/shoppingcartrecord/{customerId} HTTPPost
            // http://localhost:55882/api/shoppingcartrecord/1 {"ProductId":22,"Quantity":2,"CustomerId":1}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = _productId;
                var quantity = -1;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity},\"CustomerId\":{_customerId}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.True(response.IsSuccessStatusCode, response.ReasonPhrase);
                Assert.Equal($"{ServiceAddress}api/shoppingcart/{_customerId}".ToUpper(),
                    response.Headers.Location.AbsoluteUri.ToUpper());
            }
            // validate the cart was added
            CartWithCustomerInfo cartWithCustomerInfo = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, "api/shoppingcart");
            Assert.Empty(cartWithCustomerInfo.CartRecords);
        }

        [Fact]
        public async void ShouldRemoveRecordOnAddIfQuantityBecomesLessThanZero()
        {
            // Add to Cart: http://localhost:55882/api/shoppingcart/{customerId} HTTPPost
            // http://localhost:55882/api/shoppingcartrecord/1 {"ProductId":22,"Quantity":2,"CustomerId":1}
            // Content - Type:application / json
            using (var client = new HttpClient())
            {
                var productId = _productId;
                var quantity = -10;
                var targetUrl = $"{ServiceAddress}{RootAddress}/{_customerId}";
                var response = await client.PostAsync(targetUrl,
                    new StringContent("{" + $"\"ProductId\":{productId},\"Quantity\":{quantity},\"CustomerId\":{_customerId}" + "}",
                        Encoding.UTF8, "application/json"));
                Assert.True(response.IsSuccessStatusCode, response.ReasonPhrase);
                Assert.Equal($"{ServiceAddress}api/shoppingcart/{_customerId}".ToUpper(),
                    response.Headers.Location.AbsoluteUri.ToUpper());
            }
            // validate the cart was added
            CartWithCustomerInfo cartWithCustomerInfo = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, "api/shoppingcart");
            Assert.Empty(cartWithCustomerInfo.CartRecords);
        }
    }
}
