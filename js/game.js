$(document).ready(function() {
    window.renderingStagesTarget = 1;
});

$(document).on('authChecked', function() {
    if(!window.loggedIn)
        return;
    
    var urlParams = new URLSearchParams(window.location.search);
    window.gsid = urlParams.get('gsid');
    window.secret = urlParams.get('secret');
    
    if(window.gsid == null || window.secret == null) {
        msgBoxRedirect('Session parameters not set');
        return;
    }
    
    window.gsid = parseInt(window.gsid);
    
    $.ajax({
        url: config.apiUrl + '/gamble/session/bind',
        type: 'POST',
        data: JSON.stringify({
            api_key: window.apiKey,
            gsid: window.gsid,
            secret: window.secret
        }),
        contentType: "application/json",
        dataType: "json",
    })
    .retry(config.retry)
    .done(function (data) {
        if(data.success) {
            $('.game-name').html(data.name);
            $('#game-frame').attr('src', '/gamble/apps/' + data.frontend);
            $(document).trigger('renderingStage');
        } else {
            msgBoxRedirect(data.error, true);
        }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        msgBoxNoConn(true);
    });
});