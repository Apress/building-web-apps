﻿using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SpyStore.Dal.EfStructures;
using SpyStore.Dal.Initialization;
using SpyStore.Models.Entities;
using Xunit;

namespace SpyStore.Dal.Tests.ContextTests
{
    [Collection("SpyStore.Dal")]
    public class CategoryTests : IDisposable
    {
        private readonly StoreContext _db;

        public CategoryTests()
        {
            _db = new StoreContextFactory().CreateDbContext(new string[0]);
            CleanDatabase();
        }

        public void Dispose()
        {
            CleanDatabase();
            _db.Dispose();
        }
        private void CleanDatabase()
        {
            SampleDataInitializer.ClearData(_db);
        }

        [Fact]
        public void FirstTest()
        {
            Assert.True(true);
        }

        [Fact]
        public void ShouldAddACategoryWithDbSet()
        {
            var category = new Category { CategoryName = "Foo" };
            _db.Categories.Add(category);
            Assert.Equal(EntityState.Added, _db.Entry(category).State);
            Assert.True(category.Id < 0);
            Assert.Null(category.TimeStamp);
            _db.SaveChanges();
            Assert.Equal(EntityState.Unchanged, _db.Entry(category).State);
            Assert.NotNull(category.TimeStamp);
            Assert.Equal(1, _db.Categories.Count());
        }
        [Fact]
        public void ShouldAddACategoryWithContext()
        {
            var category = new Category { CategoryName = "Foo" };
            _db.Add(category);
            Assert.Equal(EntityState.Added, _db.Entry(category).State);
            Assert.True(category.Id < 0);
            Assert.Null(category.TimeStamp);
            _db.SaveChanges();
            Assert.Equal(EntityState.Unchanged, _db.Entry(category).State);
            Assert.NotNull(category.TimeStamp);
            Assert.Equal(1, _db.Categories.Count());
        }
        [Fact]
        public void ShouldGetAllCategoriesOrderedByName()
        {
            _db.Categories.Add(new Category { CategoryName = "Foo" });
            _db.Categories.Add(new Category { CategoryName = "Bar" });
            _db.SaveChanges();
            var categories = _db.Categories.OrderBy(c => c.CategoryName).ToList();
            Assert.Equal(2, _db.Categories.Count());
            Assert.Equal("Bar", categories[0].CategoryName);
            Assert.Equal("Foo", categories[1].CategoryName);
        }

        [Fact]
        public void ShouldUpdateACategory()
        {
            var category = new Category { CategoryName = "Foo" };
            _db.Categories.Add(category);
            _db.SaveChanges();
            category.CategoryName = "Bar";
            _db.Categories.Update(category);
            Assert.Equal(EntityState.Modified, _db.Entry(category).State);
            _db.SaveChanges();
            Assert.Equal(EntityState.Unchanged, _db.Entry(category).State);
            StoreContext context;
            using (context = new StoreContextFactory().CreateDbContext(null))
            {
                Assert.Equal("Bar", context.Categories.First().CategoryName);
            }
        }

        [Fact]
        public void ShouldNotUpdateANonAttachedCategory()
        {
            var category = new Category { CategoryName = "Foo" };
            _db.Categories.Add(category);
            category.CategoryName = "Bar";
            Assert.Throws<InvalidOperationException>(() => _db.Categories.Update(category));
        }

        [Fact]
        public void ShouldDeleteACategory()
        {
            var category = new Category { CategoryName = "Foo" };
            _db.Categories.Add(category);
            _db.SaveChanges();
            Assert.Equal(1, _db.Categories.Count());
            _db.Categories.Remove(category);
            Assert.Equal(EntityState.Deleted, _db.Entry(category).State);
            _db.SaveChanges();
            Assert.Equal(EntityState.Detached, _db.Entry(category).State);
            Assert.Equal(0, _db.Categories.Count());
        }
        [Fact]
        public void ShouldDeleteACategoryWithTimestampData()
        {
            var category = new Category { CategoryName = "Foo" };
            _db.Categories.Add(category);
            _db.SaveChanges();
            var context = new StoreContextFactory().CreateDbContext(null);
            var catToDelete = new Category { Id = category.Id, TimeStamp = category.TimeStamp };
            context.Entry(catToDelete).State = EntityState.Deleted;
            var affected = context.SaveChanges();
            Assert.Equal(1, affected);
        }
        [Fact]
        public void ShouldNotDeleteACategoryWithoutTimestampData()
        {
            var category = new Category { CategoryName = "Foo" };
            _db.Categories.Add(category);
            _db.SaveChanges();
            var context = new StoreContextFactory().CreateDbContext(null);
            var catToDelete = new Category { Id = category.Id };
            context.Categories.Remove(catToDelete);
            var ex = Assert.Throws<DbUpdateConcurrencyException>(() => context.SaveChanges());
            Assert.Equal(1, ex.Entries.Count);
            Assert.Equal(category.Id, ((Category)ex.Entries[0].Entity).Id);
        }

    }
}

