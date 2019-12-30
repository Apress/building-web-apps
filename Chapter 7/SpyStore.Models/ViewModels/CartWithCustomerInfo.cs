﻿using System;
using System.Collections.Generic;
using System.Text;
using SpyStore.Models.Entities;

namespace SpyStore.Models.ViewModels
{
    public class CartWithCustomerInfo
    {
        public Customer Customer { get; set; }
        public IList<CartRecordWithProductInfo> CartRecords { get; set; }
        = new List<CartRecordWithProductInfo>();
    }
}
