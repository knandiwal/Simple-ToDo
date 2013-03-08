using System.Collections.Generic;

namespace WebApi
{
    public interface IMap<TSource, TDestination>
        where TSource : class
        where TDestination : class
    {
        TDestination Map(TSource value);
        IEnumerable<TDestination> Map(IEnumerable<TSource> items);
        TSource MapReverse(TDestination value);
    }
}