using System;
using System.Collections.Generic;
using System.Net;
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
    public class ProductControllerTests : BaseTestClass
    {
        public ProductControllerTests()
        {
            RootAddress = "api/product";
        }

        [Fact]
        public async void ShouldGetOneProductWithCategoryName()
        {
            //Get One Product With Category Name: http://localhost:55882/api/product/2
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/2");
                Assert.True(response.IsSuccessStatusCode, response.ReasonPhrase);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var productWithCategoryName = JsonConvert.DeserializeObject<ProductViewModel>(jsonResponse);
                Assert.Equal("Multi-Purpose Rubber Band", productWithCategoryName.Details.ModelName);
                Assert.Equal("Munitions",productWithCategoryName.CategoryName);
            }
        }

        [Fact]
        public async void ShouldFailIfBadProductId()
        {
            //Get One Product with Category Name: http://localhost:55882/api/product/1
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/100");
                //Assert.True(response.IsSuccessStatusCode, response.ReasonPhrase);
                Assert.Equal(HttpStatusCode.NotFound,response.StatusCode);
            }
        }
    }
}
