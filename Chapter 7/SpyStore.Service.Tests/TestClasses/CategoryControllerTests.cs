using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using SpyStore.Models.Entities;
using SpyStore.Service.Tests.TestClasses.Base;
using Xunit;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public class CategoryControllerTests : BaseTestClass
    {
        public CategoryControllerTests()
        {
            RootAddress = "api/category";
        }

        [Fact]
        public async void ShouldGetAllCategoriesAsync()
        {
            //Get All Categories: http://localhost:55882/api/category
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var cats = JsonConvert.DeserializeObject<List<Category>>(jsonResponse);
                Assert.Equal(7,cats.Count);
            }
        }
        [Theory]
        [InlineData(1,"Communications")]
        [InlineData(2,"Deception")]
        [InlineData(3,"Travel")]
        [InlineData(4,"Protection")]
        [InlineData(5,"Munitions")]
        [InlineData(6,"Tools")]
        [InlineData(7,"General")]
        public async void ShouldGetOneCategoryAsync(int catId, string categoryName)
        {
            //Get One Category: http://localhost:55882/api/category/1
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/{catId}");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var cat = JsonConvert.DeserializeObject<Category>(jsonResponse);
                Assert.Equal(categoryName,cat.CategoryName);
            }
        }

        [Fact]
        public async void ShouldFailIfBadCategoryIdAsync()
        {
            //Get One Category: http://localhost:55882/api/category/0
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/100");
                Assert.False(response.IsSuccessStatusCode);
                Assert.Equal(HttpStatusCode.NotFound,response.StatusCode);
            }
        }

        [Theory]
        [InlineData(1, 5)]
        [InlineData(2, 5)]
        [InlineData(3, 6)]
        [InlineData(4, 6)]
        [InlineData(5, 3)]
        [InlineData(6, 7)]
        [InlineData(7, 9)]
        public async void ShouldGetProductsForACategoryAsync(int catId, int productCount)
        {
            //Get Products For Category: http://localhost:55882/api/category/{id}/products
            using (var client = new HttpClient())
            {
                var response = await client.GetAsync($"{ServiceAddress}{RootAddress}/{catId}/products");
                Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var prods = JsonConvert.DeserializeObject<IList<Product>>(jsonResponse);
                Assert.Equal(productCount,prods.Count);

            }
        }
    }
}
