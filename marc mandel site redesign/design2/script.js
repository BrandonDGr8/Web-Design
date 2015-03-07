function moveScroller() {
    var move = function() {
        var st = $(window).scrollTop();
        var ot = $("#navbar-anchor").offset().top;
        var s = $("#navbar");
        if(st > ot) {
            s.css({
                position: "fixed",
                top: "0px"
            });
        } else {
            if(st <= ot) {
                s.css({
                    position: "absolute",
                    top: ""
                });
            }
        }
    };
    $(window).scroll(move);
    move();
}

$(window).load(function () {
	moveScroller();
});