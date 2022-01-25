let scrollToTop = document.querySelector('.scrollToTop')
let navbar = document.querySelector('.navbar')
window.onscroll = function () {
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = "#ccc"
        scrollToTop.style.display = "block"
    } else {
        scrollToTop.style.display = "none"
        navbar.style.backgroundColor = "transparent"
    }
}


scrollToTop.onclick = function () {
    window.scrollTo(0, 0)
}




let listOfLinks = document.querySelectorAll('.navbar .collapse .navbar-nav .nav-item .nav-link')
for (let index = 0; index < listOfLinks.length; index++) {

    listOfLinks[index].onclick = function () {
        for (let childIndex = 0; childIndex < listOfLinks.length; childIndex++) {
            listOfLinks[childIndex].classList.remove('active')
        }
        listOfLinks[index].classList.add('active')
    }

}

let listOfItems = document.querySelectorAll('.changePictureOnClick .list-group .list-group-item')
let imagesAction = document.querySelectorAll('.changePictureOnClick .image-action')
for (let index = 0; index < listOfItems.length; index++) {
    listOfItems[index].onclick = function () {
        for (let index = 0; index < listOfItems.length; index++) {
            // imagesAction[index].classList.remove('active-image')

            listOfItems[index].classList.remove('active-bg-list')
            imagesAction[index].style.display = "none"
        }
        // imagesAction[index].classList.add('active-image')
        listOfItems[index].classList.add('active-bg-list')
        imagesAction[index].style.display = "block"

    }
}jv 