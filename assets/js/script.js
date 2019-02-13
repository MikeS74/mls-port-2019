window.onload = function () {
    //Checking inner width
    var intFrameHeight = window.innerHeight;
    console.log(intFrameHeight);

};

if ('CSS' in window && CSS.supports('background-blend-mode', 'screen')) {
	console.log("background-blend-mode is suported");
};