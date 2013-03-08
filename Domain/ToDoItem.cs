using System;

namespace Domain
{
    public class ToDoItem
    {
        public int Id { get; set; }
        public string Title {get;set;}
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public Priority Priority { get; set; }
    }
}