using System.Data.Entity;
using Domain;

namespace Data
{
    public class ToDoContext : DbContext
    {
        public DbSet<ToDoItem> ToDoItems { get; set; }
    }
}