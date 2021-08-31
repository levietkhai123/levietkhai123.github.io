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

let catalog = document.querySelector(".catalog-bottom-right");
let catalog_length = catalog.querySelectorAll("img").length;
let catalog_top_right = document.querySelector(".catalog-top-right");
let catalog_top_span = catalog_top_right.querySelector('span');
catalog_top_span.innerText = "Hiển thị tất cả " + catalog_length + " kết quả";
console.log(catalog_top_span);


