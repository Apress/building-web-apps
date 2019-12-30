using System;
using System.Linq;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using SpyStore.Dal.EfStructures;
using SpyStore.Dal.Initialization;
using SpyStore.Models.ViewModels;
using SpyStore.Service.Tests.TestClasses.Base;
using Xunit;
using SpyStore.Models.Entities;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public class OrderDetailsControllerTests : BaseTestClass
    {
        public OrderDetailsControllerTests()
        {
            RootAddress = "api/orderdetails";
            SampleDataInitializer.InitializeData(new StoreContextFactory().CreateDbContext(null));

        }

        [Fact]
        public async void ShouldGetOneOrder()
        {
            //Get One Order: http://localhost:55882/api/orderdetails/{orderId}
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/1");
                Assert.True(response.IsSuccessStatusCode,response.ReasonPhrase);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var orderWithTotal = JsonConvert.DeserializeObject<Order>(jsonResponse);
                Assert.Equal(4414.90M,orderWithTotal.OrderTotal);
                Assert.Equal(3,orderWithTotal.OrderDetails.Count);
            }
        }

        [Fact]
        public async void ShouldFailIfBadOrderId()
        {
            //Get One Order: http://localhost:55882/api/orderdetails/{orderId}
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/100");
                Assert.False(response.IsSuccessStatusCode);
                Assert.Equal(HttpStatusCode.NotFound,response.StatusCode);
            }
        }
    }
}
