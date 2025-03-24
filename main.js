let SideBarMenu = document.getElementById("container");
let Overlay = document.getElementById("overlay");

function openSideBarMenu(){
    container.classList.add("show");
    Overlay.classList.add("show");
}

function closeSideBarMenu(){
    container.classList.remove("show");
    Overlay.classList.remove("show");
}

