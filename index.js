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


// document.addEventListener('DOMContentLoaded',function () {
//     const checkbox = document.getElementById("differentBilling")
    
// }
// )
function diffBilling() {
    const addressFields = document.getElementById('diff');
    addressFields.classList.toggle("active")
    // Get all elements with class 'diff'
    // let diffElements = document.querySelectorAll('diff');
    // let isChecked = document.getElementById('differentBilling').checked;

    // Toggle the 'active' class on each element
    // diffElements.forEach(element => {
    //     if (isChecked) {
    //         element.classList.add('active');
    //     } else {
    //         element.classList.remove('active');
    //     }
    // });
}
