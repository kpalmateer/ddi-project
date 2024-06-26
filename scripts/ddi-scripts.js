const navButton = document.getElementById("nav-btn");

function mobileLayout() {
    var mobileNav = document.getElementById("nav-list");
    var navBtn = document.getElementById("nav-btn");
    var hdrNav = document.getElementById("hdr");

    if (mobileNav.className === "nav-list") {
        mobileNav.className = "nav-list-mob";
    } else {
        mobileNav.className = "nav-list";
    };

    if (navBtn.className === "nav-btn") {
        navBtn.className = "nav-btn-on";
    } else {
        navBtn.className = "nav-btn";
    };

    if (hdrNav.className === "hdr") {
        hdrNav.className = "hdr-nav";
    } else {
        hdrNav.className = "hdr";
    };
};

navButton.addEventListener("click", () => {
    mobileLayout()
});

// image slider
const slider = document.getElementById("img-slider");
const afterWrapper = document.getElementById("after-wrapper");
const sliderLine = document.getElementById("slider")

slider.addEventListener("mousemove", sliderMove);
slider.addEventListener("touchmove", sliderMove);

function sliderMove(event) {
    if (sliderLocked) return;

    const sliderPos = slider.offsetLeft;
    const imgWidth = slider.clientWidth;
    const sliderWidth = sliderLine.clientWidth;

    let mousePos = (event.clientX || event.touches[0].clientX) - sliderPos;

    if (mousePos < 0) mousePos = 0;
    else if (mousePos > imgWidth) mousePos = imgWidth;

    afterWrapper.style.width = `${((1 - mousePos / imgWidth) * 100).toFixed(4)}%`;
    sliderLine.style.left = `calc(${((mousePos / imgWidth) * 100).toFixed(4)}% - ${sliderWidth / 2}px)`;
}

let sliderLocked = false;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touchend", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseDown(event) {
    if (sliderLocked) sliderLocked = false;
    sliderMove(event);
}

function sliderMouseUp() {
    if (!sliderLocked) sliderLocked = true;
}

function sliderMouseLeave() {
    if (sliderLocked) sliderLocked = false;
}