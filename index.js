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


function diffBilling() {
    const addressFields = document.getElementById('diff');
    addressFields.classList.toggle("active")

}
