using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using SpyStore.Models.Entities.Base;

namespace SpyStore.Models.Entities
{
  [Table("OrderDetails", Schema = "Store")]
  public class OrderDetail : OrderDetailBase
  {
    [ForeignKey(nameof(OrderId))]
    public Order OrderNavigation { get; set; }

    [ForeignKey(nameof(ProductId))]
    public Product ProductNavigation { get; set; }
  }
}