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

let reduce = document.getElementById("reduce");
let increase = document.getElementById("increase");
let quantity = document.getElementById("quantity");

reduce.addEventListener("click", reduce_quantity);
increase.addEventListener("click", increase_quantity)

function reduce_quantity() {
    if (quantity.value > 1) {
        quantity.value = quantity.value - 1;
    } else {
        quantity.value = 1;
    }
}

function increase_quantity() {
    quantity.value = Number(quantity.value) + 1;
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