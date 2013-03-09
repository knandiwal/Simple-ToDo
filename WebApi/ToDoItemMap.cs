using System;
using System.Collections.Generic;
using AutoMapper;
using Contract;
using Domain;

namespace WebApi
{
    public class ToDoItemMap : IMap<ToDoItem, ToDoItemDto>
    {
        public ToDoItemMap()
        {
            Mapper.CreateMap<ToDoItem, ToDoItemDto>();
            Mapper.CreateMap<Priority, string>()
                .ConvertUsing(src => src.ToString());

            Mapper.CreateMap<ToDoItemDto, ToDoItem>()
                // TODO use formatter here
                .ForMember(m => m.DateCreated, opt => opt.MapFrom(x => DateTime.Now));
        }

        public ToDoItemDto Map(ToDoItem value)
        {
            return Mapper.Map<ToDoItemDto>(value);
        }

        public IEnumerable<ToDoItemDto> Map(IEnumerable<ToDoItem> items)
        {
            return Mapper.Map<IEnumerable<ToDoItemDto>>(items);
        }

        public ToDoItem MapReverse(ToDoItemDto value)
        {
            return Mapper.Map<ToDoItem>(value);
        }
    }
}