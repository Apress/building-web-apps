using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using AutoMapper;
using Newtonsoft.Json;
using SpyStore.Dal.EfStructures;
using SpyStore.Dal.Initialization;
using SpyStore.Models.Entities;
using SpyStore.Models.ViewModels;
using SpyStore.Service.Tests.TestClasses.Base;
using Xunit;

namespace SpyStore.Service.Tests.TestClasses
{
    [Collection("Service Testing")]
    public partial class ShoppingCartRecordControllerTests : BaseTestClass
    {
        private int _customerId = 1;
        private int _cartRecordId = 1;
        private int _productId = 33;
        public ShoppingCartRecordControllerTests()
        {
            RootAddress = "api/shoppingcartrecord";
            SampleDataInitializer.InitializeData(new StoreContextFactory().CreateDbContext(null));
        }

        public override void Dispose()
        {
        }


    }
}
