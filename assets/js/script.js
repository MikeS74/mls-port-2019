window.onload = function () {
    //Checking inner width
    var intFrameHeight = window.innerHeight;
    console.log(intFrameHeight);

};

if ('CSS' in window && CSS.supports('mix-blend-mode', 'screen')) {
    console.log("mix-blend-mode is suported");
};