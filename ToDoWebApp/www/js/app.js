// this global variable is where all the script goes so that it doesn't polute the global namespace
var ToDoApp = ToDoApp || {};

$(function() {
    window.onerror = function (errorMsg, url, lineNumber) {
        console.log("Uncaught error: " + errorMsg + " in " + url + ", line " + lineNumber);
    };
    document.addEventListener('deviceready', ToDoApp.deviceready, false);
});

ToDoApp.deviceready = function() {
    ToDoApp.run();
};

ToDoApp.run = function() {
    ToDoApp.app = new kendo.mobile.Application(document.body, { transition: "slide" }); 
};

ToDoApp.addItem = function(item){
    ToDoApp.datasource.add(item);
};

ToDoApp.show = function() {
    $(document.body).show();
};

ToDoApp.datasource = new kendo.data.DataSource(
{
   transport: {
       read: {
        url: endpoints.todo,
        dataType: "json",
       },
       create: {
        url: endpoints.todo,
        data: {
          title: "hello-world",
        }
       }
   }
});