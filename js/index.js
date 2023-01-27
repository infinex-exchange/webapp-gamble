function renderGame(data) {     
    return `
        <div class="game-item col-12 col-md-3 col-lg-3 py-2" data-gameid="${data.gameid}" onClick="gotoGame(${data.gameid})">
            <div class="card h-100 hoverable">
                <a href="#_" class="d-flex h-100" onClick="gotoGame(${data.gameid})">
                    <img src="${data.cover}" class="card-img-top my-auto">
                </a>
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <h5 class="card-title">${data.name}</h5>
                        </div>
                        <div class="col-12 pt-2 small secondary">
                            <span>${data.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;        
}

$(document).ready(function() {
    window.renderingStagesTarget = 1;
    
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
});