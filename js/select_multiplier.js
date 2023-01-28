$(document).ready(function() {
    $('#select-multiplier').on('click', function(event) {
        $('.selector-dropdown').not('#select-multiplier-dropdown').hide();
        $('.selector-arrow').not('#select-multiplier-arrow').removeClass('flip');
        
        $('#select-multiplier-dropdown').toggle();
        $('#select-multiplier-arrow').toggleClass('flip');
        
        event.stopPropagation();
    });
    
    $('html').on('click', function(e) {
        $('#select-multiplier-dropdown').hide();
        $('#select-multiplier-arrow').removeClass('flip');
    });
});

function initSelectMultiplier(gameid, assetid) {
    $('#select-multiplier').val('');
    $('#select-multiplier').data('multiplier', '');
    $('#select-multiplier-data').empty();
    $('#select-multiplier-data-preloader').show();
    
    var data = {
        gameid: gameid,
        assetid: assetid
    };
    
    $.ajax({
        url: config.apiUrl + '/gamble/variants',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json",
    })
    .retry(config.retry)
    .done(function (data) {
        if(data.success) {
            $.each(data.variants, function(k, v) {
                $('#select-multiplier-data').append(`
                    <div class="select-multiplier-item row p-1 hoverable" data-multiplier="${v.multiplier}" data-gvid="${v.gvid}">
                        <div class="col-2 my-auto">
                            <strong>x${v.multiplier}</strong>
                        </div>
                        <div class="col-10 small">
                            <span class="secondary">Min bet:</span> ${v.bet_min} ${assetid}
                            <br>
                            <span class="secondary">Max bet:</span> ${v.bet_max} ${assetid}
                        </div>
                    </div>
                `);
            });
            
            $('#select-multiplier').trigger('dataLoaded');
                
            $('.select-multiplier-item').on('click', function() {
                $('#select-multiplier').val('x' + $(this).attr('data-multiplier'));
                $('#select-multiplier').data('gvid', $(this).attr('data-gvid'));
                $('#select-multiplier').trigger('change');
            });
        } else {
            msgBox(data.error);
        }
        
        $('#select-multiplier-data-preloader').hide();
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        msgBoxNoConn(true);
    });
}
