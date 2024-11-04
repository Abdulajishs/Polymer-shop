// function toggleMenu() {
//     const nav = document.querySelector(".nav-container");
//     nav.style.display = nav.style.display === "flex" ? "none" : "flex";
// }

function toggleMenu() {
    const sideMenu = document.getElementById("navContainer");
    const overlay = document.getElementById("overlay");

    console.log(sideMenu.classList)
    sideMenu.classList.toggle("active")
    overlay.classList.toggle("active")
    console.log(sideMenu.classList)

    if(overlay.classList.contains("active")){
        document.body.style.overflow = "hidden";
    }else {
        document.body.style.overflow = "auto";
    }
}