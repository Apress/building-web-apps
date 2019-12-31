using System;
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
    public class OrdersControllerTests : BaseTestClass
    {
        private string _customerId = "/1";
        public OrdersControllerTests()
        {
            RootAddress = "api/orders";
            SampleDataInitializer.InitializeData(new StoreContextFactory().CreateDbContext(null));

        }

        [Fact]
        public async void ShouldGetAllOrdersForACustomer()
        {
            //Get Order History: http://localhost:55882/api/orders/{customerId}
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}{_customerId}");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var ordersWithTotal = JsonConvert.DeserializeObject<List<Order>>(jsonResponse);
                Assert.Single(ordersWithTotal);
                Assert.Equal(4414.90M,ordersWithTotal[0].OrderTotal);
            }
        }

    }
}
