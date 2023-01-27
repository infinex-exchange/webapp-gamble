<div class="selector-wrapper">
    <form>
        <div class="selector-inner">
            <input readonly id="select-multiplier" type="text" class="form-control selector-input" placeholder="Select...">
            <i id="select-multiplier-arrow" class="fa-solid fa-angle-down flippable selector-arrow"></i>
        </div>
    </form>
    <div id="select-multiplier-dropdown" class="selector-dropdown">
        <div id="select-multiplier-data" class="scrollable selector-data"></div>
        <div id="select-multiplier-data-preloader">
            Loading...
        </div>
    </div>
</div>
<script src="/gamble/js/select_multiplier.js?<?php echo filemtime(__DIR__.'/../js/select_multiplier.js'); ?>"></script>
