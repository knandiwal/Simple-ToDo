using System;

namespace Contract
{
    public class ToDoItemDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public string Priority { get; set; }
    }
}