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

    function handleError(textStatus, errorThrown) {
        console.log("Error in dataservices: " + textStatus + " " + errorThrown);
    };

    return {
        create: function(service, item) {
            console.log("Dataservices: create.");
            return $.ajax({
                url: service,
                type: http.POST,
                dataType: data.JSON,
                data: item
            }).fail(function(jqXHR, textStatus, errorThrown) {
                handleError(error);
            });
        },

        getAll: function(service) {
            console.log("Dataservices: getAll.");
            return $.ajax({
                url: service,
                type: http.GET,
                dataType: data.JSON,
            }).fail(function(jqXHR, textStatus, errorThrown) {
                handleError(textStatus, errorThrown);
            });
        },

        destroy: function(service, id) {
            console.log("Dataservices: delete: " + id);
            return $.ajax({
                url: service,
                type: http.DELETE,
                dataType: data.JSON,
                data: id,
            }).fail(function(jqXHR, textStatus, errorThrown) {
                handleError(textStatus, errorThrown);
            });
        }
    }
}());