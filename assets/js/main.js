/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============
    Đoạn mã JavaScript bạn chia sẻ có chức năng xử lý việc ẩn 
    menu điều hướng khi người dùng nhấn vào một liên kết trong menu.*/

    const navLink = document.querySelectorAll('.nav__link')
    const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))
    
    /* const navLink = document.querySelectorAll('.nav__link')
        → Lấy tất cả các phần tử có class là nav__link (thường là các thẻ <a> trong menu).

        const linkAction = () => {...}
        → Định nghĩa hàm để ẩn menu bằng cách xóa class show-menu khỏi phần tử có id nav-menu.

        navLink.forEach(n => n.addEventListener('click', linkAction))
        → Gắn sự kiện click cho từng liên kết trong nav. Khi nhấn vào một liên kết, menu sẽ tự động ẩn đi. */


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD SHADOW HEADER ===============*/


/*=============== SWIPER POPULAR ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

