using System.Collections.Generic;

namespace WebApi
{
    public interface IMap<in TSource, out TDestination>
        where TSource : class
        where TDestination : class
    {
        TDestination Map(TSource value);
        IEnumerable<TDestination> Map(IEnumerable<TSource> items);
    }
}