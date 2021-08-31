let header = document.getElementById("header");
let main = document.getElementById("main");

window.onscroll = function() {
    header_scroll()
};

function header_scroll() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        header.style.position = "fixed";
        header.style.animation = "animation4  ease 1s";
        main.style.paddingTop = "90px";
    }

}

let product = document.getElementById("product-list1");
let width_image = document.getElementById("product-items-images").clientWidth;
let next_product = document.getElementById("product-list1");
let image = next_product.getElementsByTagName("img");
let total_image = image.length;
let max = 12 * total_image + width_image * total_image - width_image * 4;
let index = 0;

let next1 = document.getElementById("next1");
let return1 = document.getElementById("return1");
next1.addEventListener('click', button_next1);
return1.addEventListener('click', button_return1);


function button_next1() {
    if (index < max) {
        index = index + (width_image * 2 + 12 * 2);
    } else {
        index = 0;
    }
    product.style.marginLeft = "-" + index + "px";

}

function button_return1() {
    if (index > 0) {
        index = index - (width_image * 2 + 12 * 2);
    } else {
        index = 0;
    }
    product.style.marginLeft = "-" + index + "px";

}

let product2 = document.getElementById("product-list2");
let next2 = document.getElementById("next2");
let return2 = document.getElementById("return2");
next2.addEventListener('click', button_next2);
return2.addEventListener('click', button_return2);


function button_next2() {
    if (index < max) {
        index = index + (width_image * 2 + 12 * 2);
    } else {
        index = 0;
    }
    product2.style.marginLeft = "-" + index + "px";

}

function button_return2() {
    if (index > 0) {
        index = index - (width_image * 2 + 12 * 2);
    } else {
        index = 0;
    }
    product2.style.marginLeft = "-" + index + "px";

}

let product3 = document.getElementById("product-list3");
let next3 = document.getElementById("next3");
let return3 = document.getElementById("return3");
next3.addEventListener('click', button_next3);
return3.addEventListener('click', button_return3);


function button_next3() {
    if (index < max) {
        index = index + (width_image * 2 + 12 * 2);
    } else {
        index = 0;
    }
    product3.style.marginLeft = "-" + index + "px";

}

function button_return3() {
    if (index > 0) {
        index = index - (width_image * 2 + 12 * 2);
    } else {
        index = 0;
    }
    product3.style.marginLeft = "-" + index + "px";

}