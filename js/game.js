$(document).ready(function() {
    window.renderingStagesTarget = 1;
});

function backendPing() {
    $.ajax({
        url: config.apiUrl + '/gamble/session/ping',
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
        if(!data.success) {
            msgBoxRedirect(data.error, true);
        }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        msgBoxNoConn(true);
    });
}

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
            window.credit = data.credit;
            
            document.title = data.name + ' | ' + document.title;
            
            $('.game-name').html(data.name);
            $('#game-container').addClass('ratio-' + data.aspect);
            $('.game-asset').html(data.assetid);
            $('.game-bet-min').html(data.bet_min);
            $('.game-bet-max').html(data.bet_max);
            $('.game-multiplier').html('x' + data.multiplier);
            $('#game-frame').attr('src', '/gamble/apps/' + data.frontend + '/');
            
            setInterval(backendPing, 30000);
            
            $(document).trigger('renderingStage');
        } else {
            msgBoxRedirect(data.error, true);
        }
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        msgBoxNoConn(true);
    });
});