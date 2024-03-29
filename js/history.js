function renderHistoryItem(data) {     
    var cTime = new Date(data.time * 1000).toLocaleString();
    
    var profitClass = '';
    var profitBn = new BigNumber(data.profit);
    
    if(profitBn.isGreaterThan(0))
        profitClass = 'text-green';
    else if(profitBn.isLessThan(0))
        profitClass = 'text-red';
    
    return `
        <div class="row p-2 hoverable">
            <div class="col-3 d-none d-lg-block">
                ${cTime}
            </div>
            <div class="col-3 d-none d-lg-block">
                <div class="row">
                    <div class="col-3 my-auto">
                        <img src="${data.game_cover}" class="img-fluid">
                    </div>
                    <div class="col-9 my-auto">
                        <strong>${data.game_name}</strong>
                    </div>
                </div>
            </div>
            <div class="col-2 d-none d-lg-block text-end">
                ${data.bet} ${data.assetid}
            </div>
            <div class="col-2 d-none d-lg-block text-end">
                ${data.win} ${data.assetid}
            </div>
            <div class="col-2 d-none d-lg-block text-end ${profitClass}">
                ${data.profit} ${data.assetid}
            </div>
            <div class="col-2 d-lg-none">
                <img src="${data.game_cover}" class="img-fluid">
            </div>
            <div class="col-6 d-lg-none my-auto">
                <small class="secondary">
                    ${cTime}
                </small>
                <br>
                ${data.game_name}
            </div>
            <div class="col-4 d-lg-none text-end ${profitClass}">
                <strong>${data.profit} ${data.assetid}</strong>
            </div>
        </div>
    `;
}

$(document).ready(function() {
    window.renderingStagesTarget = 1;
});

$(document).on('authChecked', function() {
    if(window.loggedIn) {
        window.historyAS = new AjaxScroll(
            $('#history-data'),
            $('#history-data-preloader'),
            {
                api_key: window.apiKey
            },
            function() {
                this.data.offset = this.offset;
                var thisAS = this;
                    
                $.ajax({
                    url: config.apiUrl + '/gamble/session/history',
                    type: 'POST',
                    data: JSON.stringify(thisAS.data),
                    contentType: "application/json",
                    dataType: "json",
                })
                .retry(config.retry)
                .done(function (data) {
                    if(data.success) {
                        $.each(data.history, function() {
                            thisAS.append(renderHistoryItem(this));
                        });
                        
                        thisAS.done();
                    
                        if(thisAS.offset == 0)
                            $(document).trigger('renderingStage');
                            
                        if(data.history.length != 50)
                            thisAS.noMoreData();
                    }
                    else {
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
    }
});