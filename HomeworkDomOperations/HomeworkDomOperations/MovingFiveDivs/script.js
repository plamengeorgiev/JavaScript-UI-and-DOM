function onSpinDivsBtnClick() {

    var divs = Array(5);

    for (var i = 0; i < divs.length; i++) {
        var currDiv = document.createElement('div');
        document.body.appendChild(currDiv);
        divs[i] = currDiv;
    }

    var centerX = 200;
    var centerY = 200;
    var radius = 200;

    var angle = 0;

    var functionTimer = setInterval(function moveDivs() {
        angle++;
        if (angle == 360) {
            angle = 0;
        }

        for (var i = 0; i < divs.length; i++) {
            //to space out the divs
            var addition = (360 / divs.length) * i;

            var left = centerX + Math.cos((2 * 3.14 / 180) * (angle + addition)) * radius;
            var right = centerY + Math.sin((2 * 3.14 / 180) * (angle + addition)) * radius;
            divs[i].style.left = left + "px";
            divs[i].style.top = right + "px";
        }
    }, 100);
}