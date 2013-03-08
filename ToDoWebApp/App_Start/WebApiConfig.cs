using System.Reflection;
using System.Web.Http;
using Autofac;
using Autofac.Integration.WebApi;
using Contract;
using Domain;
using Newtonsoft.Json.Serialization;
using WebApi;

namespace ToDoWebApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new {id = RouteParameter.Optional}
                );

            config.EnableQuerySupport();
            config.EnableSystemDiagnosticsTracing();

            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver =
             new CamelCasePropertyNamesContractResolver();

            var builder = new ContainerBuilder();

            builder.RegisterType<ToDoItemMap>().As<IMap<ToDoItem, ToDoItemDto>>();

            var webApiAssembly = Assembly.Load("WebApi");
            builder.RegisterApiControllers(webApiAssembly);

            var dataAssembly = Assembly.Load("Data");
            builder.RegisterAssemblyTypes(dataAssembly)
                .Where(t => t.Name.EndsWith("Repository"))
                .AsImplementedInterfaces()
                .InstancePerApiRequest();

            var container = builder.Build();
            var resolver = new AutofacWebApiDependencyResolver(container);
            config.DependencyResolver = resolver;
        }
    }
}