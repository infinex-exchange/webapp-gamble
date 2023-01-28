function gotoGame(item) {
    if(!window.loggedIn) {
        gotoLogin();
        return;
    }
    
    // Reset
    window.selectedGameId = $(item).data('gameid');
    $('#select-coin').val('');
    $('#select-multiplier').val('')
                           .data('gvid', '')
                           .prop('disabled', true);
    
    $('.msg-title').html( $(item).data('name') );
    $('#modal-start-game').modal('show');
}

function renderGame(data) {   
    return `
        <div class="game-item col-6 col-md-4 col-lg-2 py-2" data-gameid="${data.gameid}" data-name="${data.name}" onClick="gotoGame(this)">
            <div class="card h-100 hoverable">
                <a href="#_" class="d-flex h-100">
                    <img src="${data.cover}" class="card-img-top my-auto">
                </a>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <h5 class="card-title">${data.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;        
}

$(document).ready(function() {
    window.renderingStagesTarget = 1;
    
    $('#select-coin').on('change', function() {
        $('#select-multiplier').prop('disabled', false);
        initSelectMultiplier(window.selectedGameId, $(this).val());
    });
    
    $('#msg-submit').click(function() {
        var gvid = $('#select-multiplier').data('gvid');
        
        if(gvid == '')
            return;
        
        $('#modal-start-game').modal('hide');
        
        $.ajax({
            url: config.apiUrl + '/gamble/session/start',
            type: 'POST',
            data: JSON.stringify({
                api_key: window.apiKey,
                gvid: parseInt(gvid)
            }),
            contentType: "application/json",
            dataType: "json",
        })
        .retry(config.retry)
        .done(function (data) {
            if(data.success) {
                alert(data);
            } else {
                msgBox(data.error);
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            msgBoxNoConn(false);
        });
    });
    
    window.gamesAS = new AjaxScroll(
        $('#games-data'),
        $('#games-data-preloader'),
        {},
        function() {
            this.data.offset = this.offset;
            var thisAS = this;
            
            $.ajax({
                url: config.apiUrl + '/gamble/games',
                type: 'POST',
                data: JSON.stringify(thisAS.data),
                contentType: "application/json",
                dataType: "json",
            })
            .retry(config.retry)
            .done(function (data) {
                if(data.success) {
                    $.each(data.games, function(k, v) {
                        thisAS.append(renderGame(v));
                    });
                    
                    thisAS.done();
            
                    if(thisAS.offset == 0)
                        $(document).trigger('renderingStage');
                        
                    if(data.games.length != 50)
                        thisAS.noMoreData();
                } else {
                    msgBoxRedirect(data.error);
                    thisAS.done();
                    thisAS.noMoreData();
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                msgBoxNoConn(true);
                thisAS.done();
                thisAS.noMoreData();
            });
        },
        true,
        true
    );

    initSelectCoin();
});
