window.onload = function () {
    //Checking inner width
    var intFrameHeight = window.innerHeight;
    console.log(intFrameHeight);

};

//Browser detection
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || safari.pushNotification);

var isIE = /*@cc_on!@*/ false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isBlink = (isChrome || isOpera) && !!window.CSS;

console.log('isFirefox: ' + isFirefox);
console.log('isChrome: ' + isChrome);
console.log('isSafari: ' + isSafari);
console.log('isOpera: ' + isOpera);
console.log('isIE: ' + isIE);
console.log('isEdge: ' + isEdge);
console.log('isBlink: ' + isBlink);

//Remove texture-gradient if browser is Edge
var textureGradient = document.getElementById("texture-gradient");

if (isEdge === true) {
    textureGradient.classList.remove("texture-gradient");
}