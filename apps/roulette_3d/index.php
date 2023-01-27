<!DOCTYPE html>
<html>

<head>
    <title>3D Roulette</title>
    <link rel="stylesheet" href="css/reset.css" type="text/css">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <link rel="stylesheet" href="css/orientation_utils.css" type="text/css">
    <link rel="stylesheet" href="css/ios_fullscreen.css" type="text/css">
    <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico' />
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
                                            money: 0,       //STARING CREDIT FOR THE USER
                                            min_bet: 1,      //MINIMUM BET
                                            max_bet: 3000,     //MAXIMUM BET
                                            time_bet: 0,       //TIME TO WAIT FOR A BET IN MILLISECONDS. SET 0 IF YOU DON'T WANT BET LIMIT
                                            time_winner: 3000, //TIME FOR WINNER SHOWING IN MILLISECONDS    
                                            fullscreen:true,     //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
                                            audio_enable_on_startup:false, //ENABLE/DISABLE AUDIO WHEN GAME STARTS 
                                            check_orientation:true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
                                            show_credits:true,           //SET THIS VALUE TO FALSE IF YOU DON'T TO SHOW CREDITS BUTTON
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

    <div class="check-fonts">
        <p class="check-font-1">test 1</p>
        <p class="check-font-2">test 2</p>
    </div>

    <canvas id="canvas" class='ani_hack' width="750" height="600"> </canvas>
    <div data-orientation="landscape" class="orientation-msg-container">
        <p class="orientation-msg-text">Please rotate your device</p>
    </div>
    <div id="block_game" style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display:none"></div>
</body>

</html>