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
                        <div class="col my-auto">
                            ${v.multiplier}
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
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        msgBoxNoConn(true);
    });
}
