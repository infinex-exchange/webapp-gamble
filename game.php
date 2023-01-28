<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include('../../templates/head.php'); ?>
        <link rel="stylesheet" href="/gamble/css/styles.css?<?php echo filemtime(__DIR__.'/css/styles.css'); ?>">
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
        <div class="col-12 p-0 ui-card ui-column">
            
            <div class="row pb-3">
                <div class="col-12 col-lg-auto my-auto">
                    <h3 class="game-name m-0"></h3>
                </div>
                <div class="col-12 col-lg-auto my-auto">
                    <div class="row">
                        <div class="col-auto rounded my-auto p-1" style="background-color: var(--color-input)">
                            <h5 class="game-multiplier m-0"></h5>
                        </div>
                        <div class="col-auto my-auto">
                            <span class="secondary">Bet:</span>
                            <span class="game-bet-max"></span>
                            <span class="game-asset"></span>
                            <span class="secondary">-</span>
                            <span class="game-bet-max"></span>
                            <span class="game-asset"></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-12">
                    <div id="game-container" class="ratio">
                        <iframe id="game-frame" frameborder="0" scrolling="no" allowfullscreen allowtransparency allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        
        <!-- / Main column -->
        </div>
            
        <!-- / Root container -->    
        </div>
        </div>
        
        <script src="/gamble/js/backend_io.js?<?php echo filemtime(__DIR__.'/js/backend_io.js'); ?>"></script>
        <script src="/gamble/js/game.js?<?php echo filemtime(__DIR__.'/js/game.js'); ?>"></script>
        
        <?php include('../../templates/modals.php'); ?>
        <?php include(__DIR__.'/templates/mobile_nav.php'); ?>
    
    </body>
</html>
