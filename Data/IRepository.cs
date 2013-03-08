using System;
using System.Linq;
using System.Linq.Expressions;

namespace Data
{
    public interface IRepository<TEntity> : IDisposable where TEntity : class
    {
        IQueryable<TEntity> All();
        IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
        TEntity Insert(TEntity entity);
        void Delete(TEntity entity);
        TEntity Update(TEntity entity);
    }
}