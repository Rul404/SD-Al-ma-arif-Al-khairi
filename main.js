const menuLink = document.getElementById("menuLink")

function myFunction() {
    var x = document.getElementById("menuLink");
    if (x.style.display === "flex") {
        x.style.display = "none"
    } else {
        x.style.display = "flex"
    }
}

const linkLokasi = document.getElementById("linkLokasi")

function myLokasi () {
    var x = document.getElementById("linkLokasi");
    if (x.style.display === "flex") {
        x.style.display = "none"
    } else {
        x.style.display = "flex"
    }
}

const linkGuru = document.getElementById("linkGuru")
const tombolLink = document.getElementById("tombolLink")

linkGuru.style.maxHeight = "0px" 

tombolLink.addEventListener("click", () => {
    if (linkGuru.style.maxHeight === "800px") {
        linkGuru.style.maxHeight = "0px";
    } else {
        linkGuru.style.maxHeight = "800px"
    }
})

linkGuru.style.maxHeight = "0px" 

tombolClose.addEventListener("click", () => {
    if (linkGuru.style.maxHeight === "0px") {
        linkGuru.style.maxHeight = "800px";
    } else {
        linkGuru.style.maxHeight = "0px"
    }
})


const linkGuru1 = document.getElementById("linkGuru1")
const tombolLink1 = document.getElementById("tombolLink1")

linkGuru1.style.maxHeight = "0px" 

tombolLink1.addEventListener("click", () => {
    if (linkGuru1.style.maxHeight === "800px") {
        linkGuru1.style.maxHeight = "0px";
    } else {
        linkGuru1.style.maxHeight = "800px"
    }
})

linkGuru1.style.maxHeight = "0px" 

tombolClose1.addEventListener("click", () => {
    if (linkGuru1.style.maxHeight === "0px") {
        linkGuru1.style.maxHeight = "800px";
    } else {
        linkGuru1.style.maxHeight = "0px"
    }
})