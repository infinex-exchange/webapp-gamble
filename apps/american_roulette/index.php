<!DOCTYPE html>
<html>

<head>
    <title></title>
    <link rel="stylesheet" href="css/reset.css" type="text/css">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <link rel="stylesheet" href="css/orientation_utils.css" type="text/css">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
    <meta name="msapplication-tap-highlight" content="no" />

    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/createjs-2015.11.26.min.js"></script>
    <script type="text/javascript" src="js/howler.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <?php include_once(__DIR__.'/../../inc/iframe.inc.php'); ?>

</head>

<body ondragstart="return false;" ondrop="return false;">
    <div style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%"></div>
    <script>
        $(document).ready(function() {
            var oMain = new CMain({
                money: 0, //STARING CREDIT FOR THE USER
                min_bet: 1, //MINIMUM BET
                max_bet: 3000, //MAXIMUM BET
                time_bet: 0, //TIME TO WAIT FOR A BET IN MILLISECONDS. SET 0 IF YOU DON'T WANT BET LIMIT
                time_winner: 1500, //TIME FOR WINNER SHOWING IN MILLISECONDS    
                fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
                check_orientation: true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT 
            });

            if (isIOS()) {
                setTimeout(function() {
                    sizeHandler();
                }, 200);
            } else {
                sizeHandler();
            }
        });
    </script>
    <canvas id="canvas" class='ani_hack' width="1280" height="768"> </canvas>
    <div data-orientation="landscape" class="orientation-msg-container">
        <p class="orientation-msg-text">Please rotate your device</p>
    </div>
    <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>
</body>

</html>