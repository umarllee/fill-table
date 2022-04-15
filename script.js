function openHamburger() {
    let hamburger = document.getElementById("btn-hamburger");
    let formVisible = document.getElementById("myForm");
    if (formVisible.style.display === "block") {
        formVisible.style.display = "none";
        hamburger.innerHTML = '<i class="fa fa-bars"></i>'
    } else {
        formVisible.style.display = "block";
        hamburger.innerHTML = '<i class="fa fa-close"></i>'
    }
}

const getById = function (selector) {
    return document.getElementById(selector);
}

const getByClassName = function (selector) {
    return document.getElementsByClassName(selector);
}


