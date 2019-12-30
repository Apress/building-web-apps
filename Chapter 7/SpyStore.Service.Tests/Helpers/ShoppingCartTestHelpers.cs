using AutoMapper;
using Newtonsoft.Json;
using SpyStore.Models.Entities;
using SpyStore.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace SpyStore.Service.Tests.Helpers
{
    public static class ShoppingCartTestHelpers
    {
        static ShoppingCartTestHelpers()
        {
            Mapper.Initialize(
                cfg =>
                {
                    cfg.CreateMap<CartRecordWithProductInfo, ShoppingCartRecord>();
                });
        }
        public static async Task<CartWithCustomerInfo> GetCart(int customerId, string serviceAddress, string rootAddress)
        {
            using (var client = new HttpClient())
            {
                var response =
                    await client.GetAsync($"{serviceAddress}{rootAddress}/{customerId}");
                //Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<CartWithCustomerInfo>(jsonResponse);
            }
        }

        public static async Task<CartRecordWithProductInfo> GetCartItemWithProduct(
            int cartRecordId, string serviceAddress, string rootAddress)
        {
            using (var client = new HttpClient())
            {
                var response =
                    await client.GetAsync($"{serviceAddress}{rootAddress}/{cartRecordId}");
                //Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<CartRecordWithProductInfo>(jsonResponse);
            }

        }
        public static async Task<ShoppingCartRecord> GetCartItem(
            int cartRecordId, string serviceAddress, string rootAddress)
        {
            using (var client = new HttpClient())
            {
                var response =
                    await client.GetAsync($"{serviceAddress}{rootAddress}/{cartRecordId}");
                //Assert.True(response.IsSuccessStatusCode);
                var jsonResponse = await response.Content.ReadAsStringAsync();
                var fullCartObject = JsonConvert.DeserializeObject<CartRecordWithProductInfo>(jsonResponse);
                return Mapper.Map<CartRecordWithProductInfo, ShoppingCartRecord>(fullCartObject);
            }
        }
    }
}
