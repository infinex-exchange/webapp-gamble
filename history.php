<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include('../../templates/head.php'); ?>
        <?php include('../../imports/bignumber.html'); ?>
        <script src="/js/ajax_scroll.js?<?php echo filemtime(__DIR__.'/../../js/ajax_scroll.js'); ?>"></script>
        <link rel="stylesheet" href="/gamble/css/styles.css?<?php echo filemtime(__DIR__.'/css/styles.css'); ?>">
        <title>History | Infinex Gamble</title>
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
            
            <div class="row p-2">
                <h3>History</h3>
            </div>
            
            <div class="row p-2 secondary d-none d-lg-flex">
                <div class="col-3">
                    <h5>Date</h5>
                </div>
                <div class="col-3">
                    <h5>Game</h5>
                </div>
                <div class="col-2 text-end">
                    <h5>Total stake</h5>
                </div>
                <div class="col-2 text-end">
                    <h5>Total win</h5>
                </div>
                <div class="col-2 text-end">
                    <h5>Profit</h5>
                </div>
            </div>
            
            <div id="history-data">
            </div>
        
        <!-- / Main column -->
        </div>
            
        <!-- / Root container -->    
        </div>
        </div>
        
        <script src="/gamble/js/history.js?<?php echo filemtime(__DIR__.'/js/history.js'); ?>"></script>
        
        <?php include('../../templates/modals.php'); ?>
        <?php include(__DIR__.'/templates/mobile_nav.php'); ?>
    
    </body>
</html>
