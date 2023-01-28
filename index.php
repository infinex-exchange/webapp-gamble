<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include('../../templates/head.php'); ?>
        <script src="/js/ajax_scroll.js?<?php echo filemtime(__DIR__.'/../../js/ajax_scroll.js'); ?>"></script>
        <link rel="stylesheet" href="/gamble/css/styles.css?<?php echo filemtime(__DIR__.'/css/styles.css'); ?>">
        <title>Infinex Gamble</title>
    </head>
    <body class="body-background">
    
        <!-- Preloader -->
        <?php include('../../templates/preloader.html'); ?>
        
        <!-- Navbar -->
        <?php include('../../templates/navbar.php'); ?>
        <?php include(__DIR__.'/templates/navbar.php'); ?>
        
        <!-- Root container -->
        <div id="root" class="container-fluid container-1500 h-rest pt-2 p-0">
        
            <div class="jumbotron-gamble row m-0 px-4">
                <div class="col-12">
                    <h1>Infinex Gamble</h1>
                    <strong>Popular casino games available in all cryptocurrencies supported by exchange</strong>
                </div>
            </div>
            
            <div class="row gx-0 gx-lg-3 gy-3 m-0">
                
                <div class="col-12">
        	        <div class="p-2 p-lg-4 background rounded">
        	            <div class="row">
        	                <div class="col-12 pt-2 pb-4 text-center">
                                <h3>Games list</h3>
        		            </div>
        		            <div class="col-12">
                                <div id="games-data" class="row">
                                </div>
        		            </div>
        	            </div>
        	        </div>
        	    </div>
                
            </div>
        
        <!-- / Root container -->
        </div>

        <div class="modal fade" tabindex="-1" role="dialog" id="modal-start-game">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="ps-1 modal-title msg-title"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div class="modal-body">
                    
                        <div class="row">
                            <div class="col-12">
                                <h5>Coin:</h5>
                            </div>
                            <div class="col-12 pt-1">
                                <?php include(__DIR__.'/../../templates/select_coin.php'); ?>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 pt-3">
                                <h5>Multiplier:</h5>
                            </div>
                            <div class="col-12 pt-1">
                                <?php include(__DIR__.'/templates/select_multiplier.php'); ?>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="modal-close btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <a href="#_" id="msg-submit" class="btn btn-primary">Start game</a>
                    </div>
                </div>
            </div>
        </div>
        
        <?php include('../../templates/modals.php'); ?>
        <script src="/gamble/js/index.js?<?php echo filemtime(__DIR__.'/js/index.js'); ?>"></script>
        
        <!-- Footer -->
        <?php include('../../templates/footer.html'); ?>
        <?php include(__DIR__.'/templates/mobile_nav.php'); ?>
    
    </body>
</html>
