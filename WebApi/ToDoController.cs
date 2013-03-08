using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using Contract;
using Data;
using Domain;

namespace WebApi
{
    public class ToDoController : ApiController
    {
        public ToDoController(IRepository<ToDoItem> repository, IMap<ToDoItem, ToDoItemDto> mapper)
        {
            Mapper = mapper;
            Repository = repository;
        }

        private IMap<ToDoItem, ToDoItemDto> Mapper { get; set; }
        private IRepository<ToDoItem> Repository { get; set; }

        // GET api/<controller>
        public IEnumerable<ToDoItemDto> Get()
        {
            IQueryable<ToDoItem> items = Repository.All();
            IEnumerable<ToDoItemDto> toDoItemDtos = Mapper.Map(items);

            return toDoItemDtos;
        }

        // GET api/<controller>/5
        public ToDoItemDto Get(int id)
        {
            ToDoItem toDoItem = Repository.Find(x => x.Id == id).SingleOrDefault();

            if (toDoItem == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            ToDoItemDto item = Mapper.Map(toDoItem);

            return item;
        }

        // POST api/<controller>
        public void Post(ToDoItemDto item)
        {
            //todo automapper guff...
            ToDoItem newItem = Repository.Insert(null);

            //todo return newItemDto mapped with automapper.
        }

        // PUT api/<controller>/5
        public void Put(ToDoItemDto item)
        {
            Repository.Update(null);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}