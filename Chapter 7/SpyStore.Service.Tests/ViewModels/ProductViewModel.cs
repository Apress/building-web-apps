using SpyStore.Models.Entities;

namespace SpyStore.Service.Tests.ViewModels
{
  public class ProductViewModel : Product
  {
    public new string CategoryName { get; set; }
  }
}