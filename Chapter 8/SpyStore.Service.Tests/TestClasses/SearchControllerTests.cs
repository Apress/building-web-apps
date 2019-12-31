using System;
using System.Collections.Generic;
using System.Net.Http;
using Newtonsoft.Json;
using SpyStore.Models.Entities;
using SpyStore.Models.ViewModels;
using SpyStore.Service.Tests.TestClasses.Base;
using SpyStore.Service.Tests.ViewModels;
using Xunit;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public class SearchControllerTests : BaseTestClass
    {
        public SearchControllerTests()
        {
            RootAddress = "api/search";
        }

        [Fact]
        public async void ShouldReturnProductsWithCategoryName()
        {
            //Search Products: http://localhost:55882/api/search/{searchString} 
            // Note: encode spaces with % 20
            //http://localhost:55882/api/search/persuade%20anyone

            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/persuade%20anyone");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var productWithCategoryNames = JsonConvert.DeserializeObject<List<ProductViewModel>>(jsonResponse);
                Assert.Single(productWithCategoryNames);
                Assert.Equal("Communications",productWithCategoryNames[0].CategoryName);
            }
        }

        [Fact]
        public async void ShouldNotFailIfBadSearchId()
        {
            //Get Products with Category Name: http://localhost:55882/api/search/persuade%20anyone
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/FooBar");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var productWithCategoryNames = JsonConvert.DeserializeObject<List<Product>>(jsonResponse);
                Assert.Null(productWithCategoryNames);
            }
        }
    }
}
