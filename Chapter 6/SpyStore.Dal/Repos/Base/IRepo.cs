using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using SpyStore.Dal.EfStructures;
using SpyStore.Models.Entities.Base;


namespace SpyStore.Dal.Repos.Base
{
    public interface IRepo<T> : IDisposable where T: EntityBase
    {
        DbSet<T> Table { get; }
        StoreContext Context { get; }
        (string Schema, string TableName) TableSchemaAndName { get; }
        bool HasChanges { get; }
        T Find(int? id);
        T FindAsNoTracking(int id);
        T FindIgnoreQueryFilters(int id);
        IEnumerable<T> GetAll();
        IEnumerable<T> GetAll(Expression<Func<T, object>> orderBy);
        IEnumerable<T> GetRange(IQueryable<T> query, int skip, int take);
        int Add(T entity, bool persist = true);
        int AddRange(IEnumerable<T> entities, bool persist = true);
        int Update(T entity, bool persist = true);
        int UpdateRange(IEnumerable<T> entities, bool persist = true);
        int Delete(T entity, bool persist = true);
        int DeleteRange(IEnumerable<T> entities, bool persist = true);
        int SaveChanges();
    }
}
