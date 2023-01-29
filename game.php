<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include('../../templates/head.php'); ?>
        <link rel="stylesheet" href="/gamble/css/styles.css?<?php echo filemtime(__DIR__.'/css/styles.css'); ?>">
        <title>Infinex Gamble</title>
    </head>
    <body>
    
        <!-- Preloader -->
        <?php include('../../templates/preloader.html'); ?>
        
        <!-- Navbar -->
        <?php include('../../templates/navbar.php'); ?>
        <?php include(__DIR__.'/templates/navbar.php'); ?>
        
        <!-- Root container -->
        <div id="root" class="container-fluid container-1500 container-rest p-0 user-only">
        <div class="row m-0 h-rest">
        
        <!-- Main column -->
        <div class="col-12 p-0 ui-card ui-column rest-of-height">
            
            <div id="game-header" class="row pb-3">
                <div class="col-12 col-md-auto my-auto">
                    <h3 class="game-name m-0"></h3>
                </div>
                <div class="col-12 col-md-auto my-auto">
                    <div class="row m-1">
                        <div class="col-auto rounded my-auto px-2 py-1" style="background-color: var(--color-input)">
                            <strong class="game-multiplier small secondary"></strong>
                        </div>
                        <div class="col-auto my-auto">
                            <span class="secondary">Bet:</span>
                            <span class="game-bet-min"></span>
                            <span class="game-asset"></span>
                            <span class="secondary">-</span>
                            <span class="game-bet-max"></span>
                            <span class="game-asset"></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="game-container" class="ratio">
                <iframe id="game-frame" frameborder="0" scrolling="no" allowfullscreen allowtransparency allow="autoplay"></iframe>
            </div>
        
        <!-- / Main column -->
        </div>
            
        <!-- / Root container -->    
        </div>
        </div>
        
        <script src="/gamble/js/js_sizing.js?<?php echo filemtime(__DIR__.'/js/js_sizing.js'); ?>"></script>
        <script src="/gamble/js/backend_io.js?<?php echo filemtime(__DIR__.'/js/backend_io.js'); ?>"></script>
        <script src="/gamble/js/game.js?<?php echo filemtime(__DIR__.'/js/game.js'); ?>"></script>
        
        <?php include('../../templates/modals.php'); ?>
        <?php include(__DIR__.'/templates/mobile_nav.php'); ?>
    
    </body>
</html>
