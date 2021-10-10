let bars = document.querySelector(".material-icons");
let menu__right = document.querySelector(".menu__right");
let menu__left = document.querySelector(".menu__left");
let body = document.querySelector("body");
let search = document.querySelector(".search");
let logo = document.querySelector(".logo");
let return_top = document.querySelector(".return__top");
bars.addEventListener("click", barsX);

function barsX() {
    if (bars.innerHTML == 'menu') {
        bars.style.transform = 'rotate(180deg)';
        bars.style.transition = 'all 0.5s';
        bars.style.color = '#fff';
        bars.innerHTML = 'close';
        menu__right.style.animation = 'menu__right__animation 0.5s linear';
        menu__right.style.display = 'block';
        search.style.display = 'none';
        logo.style.display = 'none';
        menu__left.style.backgroundColor = '#ff722a';
        return_top.style.display = 'none';
        body.style.overflow = 'hidden';
    } else {
        bars.style.transform = 'rotate(360deg)';
        bars.style.transition = 'all 0.5s';
        bars.style.color = '#ff722a';
        bars.innerHTML = 'menu';
        menu__right.style.animation = 'menu__right__animation2 0.5s linear ';
        setTimeout(function() {
            menu__right.style.display = 'none';
        }, 490);
        search.style.display = 'block';
        logo.style.display = 'block';
        menu__left.style.backgroundColor = '#fff';
        return_top.style.display = 'block';
        body.style.overflowY = 'scroll';
    }


}