using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace SpyStore.Dal.EfStructures
{
  public class StoreContextFactory : IDesignTimeDbContextFactory<StoreContext>
  {
    public StoreContext CreateDbContext(string[] args)
    {
      var optionsBuilder = new DbContextOptionsBuilder<StoreContext>();
#if SQL2017
            //use sqllocaldb to update/create localdb instances
            var path = Environment.GetEnvironmentVariable("APPDATA");
            var connectionString =
                $@"Data Source=(localdb)\mssqllocaldb2017;Initial Catalog=SpyStore21;Trusted_Connection=True;MultipleActiveResultSets=true;AttachDbFileName={path}\SpyStore21.mdf;";
#elif LOCALDB
            var connectionString =
                @"Server=(localdb)\mssqllocaldb;Database=SpyStore21;Trusted_Connection=True;MultipleActiveResultSets=true;";
#else
      var connectionString =
        @"Server=.,5433;Database=SpyStore21;User ID=sa;Password=P@ssw0rd;MultipleActiveResultSets=true;";
#endif
      optionsBuilder
        .UseSqlServer(connectionString, options => options.EnableRetryOnFailure());
      optionsBuilder
        .ConfigureWarnings(warnings => warnings.Throw(RelationalEventId.QueryClientEvaluationWarning));
      Console.WriteLine(connectionString);
      return new StoreContext(optionsBuilder.Options);
    }
  }
}