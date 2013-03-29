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
        console.log("Error in dataservices: " + error);
    };

    return {
        create: function(service, item) {
            return $.ajax({
                url: service,
                type: http.POST,
                dataType: data.JSON,
                data: item
            }).fail(function(error) {
                handleError(error);
            });
        }
    }
}());