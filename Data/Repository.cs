using System;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace Data
{
    public class Repository<TDbContext, TEntity> : IRepository<TEntity>
        where TEntity : class
        where TDbContext : DbContext, new()
    {
        private readonly TDbContext context = new TDbContext();

        protected TDbContext Context
        {
            get { return context; }
        }

        public virtual IQueryable<TEntity> All()
        {
            return context.Set<TEntity>();
        }

        public virtual IQueryable<TEntity> Find(Expression<Func<TEntity, bool>> predicate)
        {
            return All().Where(predicate);
        }

        public virtual TEntity Insert(TEntity entity)
        {
            context.Set<TEntity>().Add(entity);
            Save();

            return entity;
        }

        public virtual void Delete(TEntity entity)
        {
            context.Entry(entity).State = EntityState.Deleted;
            Save();
        }

        public virtual TEntity Update(TEntity entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            Save();

            return entity;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                context.Dispose();
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }
    }
}