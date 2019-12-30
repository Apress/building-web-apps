﻿using System.Collections.Generic;
using System.Linq;
using SpyStore.Dal.Repos;
using SpyStore.Dal.Repos.Interfaces;
using SpyStore.Dal.Tests.RepoTests.Base;
using SpyStore.Models.Entities;
using Xunit;

namespace SpyStore.Dal.Tests.RepoTests
{
    [Collection("SpyStore.Dal")]
    public class CategoryRepoAddTests : RepoTestsBase
    {
        private readonly ICategoryRepo _repo;

        public CategoryRepoAddTests()
        {
            _repo = new CategoryRepo(Context);
        }
        public override void Dispose()
        {
            _repo.Dispose();
        }

        [Fact]
        public void ShouldAddACategory()
        {
            var category = new Category { CategoryName = "Foo" };
            var count = _repo.Add(category);
            Assert.Equal(1, count);
            Assert.Equal(1, category.Id);
            Assert.Equal(1, _repo.Table.Count());
        }
        [Fact]
        public void ShouldAddACategoryAndNotSaveChanges()
        {
            var category = new Category { CategoryName = "Foo" };
            var count = _repo.Add(category, false);
            Assert.Equal(0, count);
            Assert.True(category.Id < 0);
            Assert.Equal(0, _repo.Table.Count());
        }

        [Fact]
        public void ShouldAddSeveralCategories()
        {
            var categories = new List<Category>()
            {
                new Category { CategoryName = "Foo" },
                new Category { CategoryName = "Bar" },
                new Category { CategoryName = "FooBar" }
            };
            var count = _repo.AddRange(categories);
            Assert.Equal(3, count);
            Assert.Equal(3, _repo.GetAll().Count());
            Assert.Equal(3, _repo.Table.Count());
        }

        [Fact]
        public void ShouldShowHasChanges()
        {
            var categories = new List<Category>()
            {
                new Category { CategoryName = "Foo" },
                new Category { CategoryName = "Bar" },
                new Category { CategoryName = "FooBar" }
            };
            _repo.AddRange(categories, false);
            Assert.True(_repo.Context.ChangeTracker.HasChanges());
            _repo.SaveChanges();
            Assert.False(_repo.Context.ChangeTracker.HasChanges());
        }
    }

}
