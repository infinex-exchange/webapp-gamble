<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include('../../templates/head.php'); ?>
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
                    <strong>Popular casino games available in all cryptocurrencies supported by the exchange</strong>
                </div>
            </div>
            
            <div class="row gx-0 gx-lg-3 gy-3 m-0">
                
                <div class="col-12">
        	        <div class="p-2 p-lg-4 background rounded">
        	            <div class="row">
        	                <div class="col-12 pt-2 pb-4 text-center">
                                <h3>Ending soon</h3>
        		            </div>
        		            <div class="col-12">
                                <div id="last-minute-data" class="row">
                                </div>
        		            </div>
        	            </div>
        	        </div>
        	    </div>
                
                <div class="col-12">
        	        <div class="p-2 p-lg-4 background rounded">
        	            <div class="row">
        	                <div class="col-12 pt-2 pb-4 text-center">
                                <h3>Popular NFTs</h3>
        		            </div>
        		            <div class="col-12">
                                <div id="featured-nft-data" class="row">
                                </div>
        		            </div>
        	            </div>
        	        </div>
        	    </div>
                
                <div class="col-12">
        	        <div class="p-2 p-lg-4 background rounded">
        	            <div class="row">
        	                <div class="col-12 pt-2 pb-4 text-center">
                                <h3>Low price</h3>
        		            </div>
        		            <div class="col-12">
                                <div id="low-price-data" class="row">
                                </div>
        		            </div>
        	            </div>
        	        </div>
        	    </div>
                
            </div>
        
        <!-- / Root container -->
        </div>
        
        <?php include('../../templates/modals.php'); ?>
        <script src="/gamble/js/index.js?<?php echo filemtime(__DIR__.'/js/index.js'); ?>"></script>
        
        <!-- Footer -->
        <?php include('../../templates/footer.html'); ?>
        <?php include(__DIR__.'/templates/mobile_nav.php'); ?>
    
    </body>
</html>
