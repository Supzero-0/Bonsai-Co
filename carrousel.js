document.body.onload = function () {
    nbrImg = 6;
    position = 0;
    container = document.getElementById("carrouselContainer");
    btnLeft = document.getElementById("btnLeft");
    btnRight = document.getElementById("btnRight");

    for (i = 1; i <= nbrImg; i++) {
        div = document.createElement("div");
        div.className = "picture";
        div.style.backgroundImage = "url('images/bonsai-" + i + ".jpg')";
        container.appendChild(div);
    }
    hide();
}

if (window.matchMedia("(max-width: 768px)").matches) {
    btnLeft.onclick = function () {
        if (position > -nbrImg + 1) {
            position--;
            container.style.transform = "translate(" + position * 19.5 + "rem)";
            container.style.transition = "all 0.5s ease";
            hide();
        }
    }

    btnRight.onclick = function () {
        if (position < 0) {
            position++;
            container.style.transform = "translate(" + position * 19.5 + "rem)";
            container.style.transition = "all 0.5s ease";
            hide();
        }
    }
} else if (window.matchMedia("(max-width: 1224px)").matches) {
    btnLeft.onclick = function () {
        if (position > -nbrImg + 1) {
            position--;
            container.style.transform = "translate(" + position * 29.25 + "rem)";
            container.style.transition = "all 0.5s ease";
            hide();
        }
    }

    btnRight.onclick = function () {
        if (position < 0) {
            position++;
            container.style.transform = "translate(" + position * 29.25 + "rem)";
            container.style.transition = "all 0.5s ease";
            hide();
        }
    }
} else {
    btnLeft.onclick = function () {
        if (position > -nbrImg + 1) {
            position--;
            container.style.transform = "translate(" + position * 39 + "rem)";
            container.style.transition = "all 0.5s ease";
            hide();
        }
    }

    btnRight.onclick = function () {
        if (position < 0) {
            position++;
            container.style.transform = "translate(" + position * 39 + "rem)";
            container.style.transition = "all 0.5s ease";
            hide();
        }
    }
}


function hide() {
    if (position == -nbrImg + 1) {
        btnLeft.style.visibility = "hidden";
    } else {
        btnLeft.style.visibility = "visible";
    }
    if (position == 0) {
        btnRight.style.visibility = "hidden";
    } else {
        btnRight.style.visibility = "visible";
    }
}
