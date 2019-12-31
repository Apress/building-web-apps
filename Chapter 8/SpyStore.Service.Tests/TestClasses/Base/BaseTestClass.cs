using System;
using SpyStore.Dal.EfStructures;
using SpyStore.Dal.Initialization;

namespace SpyStore.Service.Tests.TestClasses.Base
{
    public abstract class BaseTestClass:IDisposable
    {
        protected string ServiceAddress = "http://localhost:55882/";
        protected string RootAddress = String.Empty;


        public virtual void Dispose()
        {
        }

        protected void ResetTheDatabase()
        {
            SampleDataInitializer.InitializeData(new StoreContextFactory().CreateDbContext(null));
        }
    }
}