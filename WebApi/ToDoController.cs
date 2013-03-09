using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
        public HttpResponseMessage Post(ToDoItemDto item)
        {
            try
            {
                ToDoItem todo = Mapper.MapReverse(item);

                ToDoItem toDoItem = Repository.Insert(todo);

                HttpResponseMessage response = CreateHttpResponse(HttpStatusCode.OK, toDoItem);

                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(ToDoItemDto item)
        {
            try
            {
                ToDoItem todo = Mapper.MapReverse(item);
                ToDoItem toDoItem = Repository.Update(todo);

                HttpResponseMessage response = CreateHttpResponse(HttpStatusCode.OK, toDoItem);

                return response;
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
        }

        // DELETE api/<controller>/5
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                Repository.Delete(new ToDoItem { Id = id});
                HttpResponseMessage response = CreateHttpResponse(HttpStatusCode.OK);

                return response;
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }
        }

        private HttpResponseMessage CreateHttpResponse(HttpStatusCode httpStatusCode)
        {
            return Request.CreateResponse(httpStatusCode);
        }

        private HttpResponseMessage CreateHttpResponse(HttpStatusCode httpStatusCode, ToDoItem toDoItem)
        {
            HttpResponseMessage response = Request.CreateResponse(httpStatusCode);
            string uri = Url.Route(null, new { id = toDoItem.Id });
            response.Headers.Location = new Uri(Request.RequestUri, uri);
            return response;
        }
    }
}