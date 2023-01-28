function backend(request, callback) {
    $.ajax({
        url: config.apiUrl + '/gamble/backend_io',
        type: 'POST',
        data: JSON.stringify({
            api_key: window.apiKey,
            gvid: window.gvid,
            secret: window.secret,
            request: request
        }),
        contentType: "application/json",
        dataType: "json",
    })
    .retry(config.retry)
    .done(function (data) {
        if(data.success) {
            callback(data.response);
        } else {
            msgBoxRedirect(data.error, true);
        }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        msgBoxNoConn(true);
    });
}