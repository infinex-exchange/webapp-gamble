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
                    <div class="select-multiplier-item row p-1 hoverable" data-multiplier="${v.multiplier}">
                        <div class="col-4 my-auto">
                            <strong>x${v.multiplier}</strong>
                        </div>
                        <div class="col-8">
                            Min bet: ${v.bet_min}
                            <br>
                            Max bet: ${v.bet_max}
                        </div>
                    </div>
                `);
            });
            
            $('#select-multiplier').trigger('dataLoaded');
                
            $('.select-multiplier-item').on('click', function() {
                $('#select-multiplier').val('x' + $(this).attr('data-multiplier'));
                $('#select-multiplier').data('multiplier', $(this).attr('data-multiplier'));
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
