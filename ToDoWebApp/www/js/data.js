http = {
    GET: "get",
    PUT: "put",
    POST: "post",
    DELETE: "delete"
};

data = {
    JSON: "json",
    XML: "xml",
    HTML: "html"
};

var dataservices = (function() {

    function handleError(error) {
        console.log("Error in dataservices: " + error.message);
    };

    return {
        create: function(service, item) {
            console.log("Dataservices: create: " + service);
            return $.ajax({
                url: service,
                type: http.POST,
                dataType: data.JSON,
                data: item
            }).fail(function(error) {
                handleError(error);
            });
        },

        getAll: function(service) {
            console.log("Dataservices: getAll: " + service);
            return $.ajax({
                url: service,
                type: http.GET,
                dataType: data.JSON
            }).fail(function(error) {
                handleError(error);
            });
        },

        destroy: function(service, id) {
            console.log("Dataservices: delete: " + service + id);
            return $.ajax({
                url: service + id,
                type: http.DELETE
            }).fail(function(error) {
                handleError(error);
            });
        }
    };
}());