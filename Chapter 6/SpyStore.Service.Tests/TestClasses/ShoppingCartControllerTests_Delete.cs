using System;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SpyStore.Models.ViewModels;
using SpyStore.Service.Tests.Helpers;
using Xunit;
using SpyStore.Service.Tests.TestClasses.Base;

namespace SpyStore.Service.Tests.TestClasses
{
    public partial class ShoppingCartRecordControllerTests
    {
        [Fact]
        public async void ShouldDeleteRecordInTheCart()
        {
            // Remove Cart Item: http://localhost:55882/api/shoppingcart/{id} HTTPDelete
            // http://localhost:55882/api/shoppingcart/1
            var cartRecord = await ShoppingCartTestHelpers.GetCartItem(_cartRecordId, ServiceAddress, RootAddress);
            //throw new Exception($"{cartRecord.Quantity}");
            using (var client = new HttpClient())
            {
                var targetUrl = $"{ServiceAddress}{RootAddress}/{cartRecord.Id}";
                //throw new Exception(targetUrl);

                var response = await client.DeleteAsJsonAsync(targetUrl,cartRecord);
                Assert.True(response.IsSuccessStatusCode, response.ReasonPhrase);
            }
            // validate the cart item was updated
            CartWithCustomerInfo cartWithCustomerInfo = await ShoppingCartTestHelpers.GetCart(_customerId, ServiceAddress, "api/shoppingcart");
            Assert.Empty(cartWithCustomerInfo.CartRecords);
        }

        [Fact]
        public async void ShouldNotDeleteMissingRecord()
        {
            // Remove Cart Item: http://localhost:55882/api/shoppingcart/{id} HTTPDelete
            // http://localhost:55882/api/shoppingcart/1
            var cartRecord = await ShoppingCartTestHelpers.GetCartItem(_cartRecordId, ServiceAddress, RootAddress);
            using (var client = new HttpClient())
            {
                var targetUrl = $"{ServiceAddress}{RootAddress}/100";
                var response = await client.DeleteAsJsonAsync(targetUrl, cartRecord);
                Assert.False(response.IsSuccessStatusCode);
                Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
            }
        }

    }
}
