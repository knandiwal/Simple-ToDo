
// this global variable is where all the script goes so that
// it doesn't polute the global namespace
var ToDoApp = ToDoApp || {};

ToDoApp.run = (function() {
    // create the Kendo UI Mobile application
    ToDoApp.app = new kendo.mobile.Application(document.body, { transition: "slide" }); 
});

ToDoApp.datasource = new kendo.data.DataSource(
{
   transport: {
       read: {
           url: "http://192.168.1.98/ToDoWebApp/api/todo/",
           dataType: "json"
       }
   }
});

// this is called when the intial view shows. it prevents the flash
// of unstyled content (FOUC)
ToDoApp.show = (function() {
    $(document.body).show();
});

// this function runs at startup and attaches to the 'deviceready' event
// which is fired by PhoneGap when the hardware is ready for native API
// calls. It is self invoking and will run immediately when this script file is 
// loaded.
(function() {
    if (navigator.userAgent.indexOf('Browzr') > -1) {
        // blackberry
        setTimeout(ToDoApp.run, 250)    
    } else {
        // attach to deviceready event, which is fired when phonegap is all good to go.
        document.addEventListener('deviceready', ToDoApp.run, false);
    }
})();
