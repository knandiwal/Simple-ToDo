var dataservices = (function () {
	return {
		getList: function (service) {
            if (!navigator.onLine) {
                return getLocal(service);
            }
            else {
                return $.ajax({
                    url: service,
                    type: httpVerbs.GET,
                    dataType: dataTypes.JSON,
                    beforeSend: function (xhr) { beforeSend(xhr); },
                    timeout: 15000,
                    maxTries: 3,
                    retryCodes: [500]
                })
                    .always(function () {
                        $.publish(dataServicesEvents.endaction);
                    })
                    .success(function (data) {
                        amplify.store.sessionStorage(service, data);
                    })
                    .fail(function (error) {
                        handleServiceError(error);
                    });
            }
        },
	}
});