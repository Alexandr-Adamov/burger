//кнопка гамбургер меню
var burgerBtn = document.getElementById('burger-btn');
var burgerForm = document.getElementById('burger-form');
var hamburgerMenu = document.getElementById('hamburger-menu');
var hamburgerList = document.getElementById('hamburger-list');
function hamburgerButtonMenu () {
    burgerForm.classList.toggle('burger__form--open')
    hamburgerMenu.classList.toggle('hero__burger_menu')
    hamburgerList.classList.toggle('hamburger__menu_list--hidden')
    
}
burgerBtn.addEventListener('click',  function (e) {
    if(e.isTrusted === false){
        hamburgerButtonMenu ();
    }
});

// меню аккордион секции team
var memberTeam = document.getElementsByClassName('team__item');
var teamAccordion = document.querySelector('.team__accordion');
function menuAccordionTeam (e){
    var currentTeamAccordion = e.target.closest('.team__item')
    for (i = 0; i < memberTeam.length; i++) {
        if (memberTeam[i] !== currentTeamAccordion) {
            memberTeam[i].classList.remove('team__item_activ')
        }
    }
    currentTeamAccordion.classList.toggle('team__item_activ')
}
teamAccordion.addEventListener('click', function (e) {
    menuAccordionTeam (e)
})

// меню аккордион секции menu
var menuList = document.querySelector('.menu__list');
var menuItem = document.getElementsByClassName('menu__block');
function menuAccordionMenu (e) {
    currentMenuItem = e.target.closest('.menu__block')
    currentMenuItem.classList.toggle('menu__block_active')
    for (i = 0; i < menuItem.length; i++) {
        if (menuItem[i] !== currentMenuItem) {
            menuItem[i].classList.remove('menu__block_active')
        }
    }
}
menuList.addEventListener('click', function (e) {
    menuAccordionMenu (e)
});

// клик на фото секции reviews
var reviewsOnClickClose = document.querySelector('.reviews__onclick_close');
var noActive = document.querySelector('.reviews__no-active');
var reviews = document.querySelector('.reviews');
var onclickHidden = document.querySelector('.reviews__onclick_hidden');
var reviewsOnClickContent = document.querySelector('.reviews__onclick_hidden');
var reviewsPopup = document.querySelector('.review__popup');
var reviewsButton = document.querySelector('.reviews__list');
var popupText = reviewsPopup.querySelector('.review__block-text')
function closeContantReviews (e){
    var closedButton = e.target.closest('.reviews__onclick_close')
    if (closedButton) {
        reviewsPopup.classList.toggle('review__popup_show')
    }
}
function showContantReviews (e){
    e.preventDefault();
    var currentButton = e.target.closest('.reviews__btn')
    if (currentButton) {
        var textBlock = e.currentTarget.querySelector('.reviews__hover_text').innerHTML
        reviewsPopup.classList.toggle('review__popup_show')
        popupText.innerHTML = textBlock
    }
}
reviewsButton.addEventListener('click', function (e) {
showContantReviews (e)
})
reviewsPopup.addEventListener('click', function (e) {
    closeContantReviews (e)
})

//слайдер секции dark
var darkTitle = document.querySelector('.dark__title');
var sliderItems = document.querySelectorAll('.dark__item');
var arrowRight = document.querySelector('.arrow__right');
var arrowLeft = document.querySelector('.arrow__left');
var acc = 0;
function arrowClickLeft (e){
    if (sliderItems.length - 1 > acc) {
        acc = 4 * 100
    }
    else {
        acc = acc - 100
    }
    darkTitle.style.left = '-' + acc + '%'
}
function arrowClickRight (e){
    acc += 1 * 100
    if (sliderItems.length - 1 < acc / 100) {
        acc = 0
    }
    darkTitle.style.left = '-' + acc + '%'
}
arrowRight.addEventListener('click', function (e) {
    arrowClickRight (e)
});
arrowLeft.addEventListener('click', function (e) {
    arrowClickLeft (e)
});

//меню бургеров секции dark
var iconMiniMenu = document.querySelector('.dark__title')
function showMiniMenu (e){
    var iconBlock = e.target.closest('.dark__composition')
    if(iconBlock){
        iconBlock.children[1].classList.toggle('dark__mini_menu--show')
    }
    else{
        return
    }
    
}

iconMiniMenu.addEventListener('click', function(e){
    showMiniMenu (e)
})
// клик на контент на touchpad
var maincontent =document.querySelector('.maincontent')
maincontent.addEventListener('touchstart', function(e){
    var target = e.target
    target.click();
})
var fixedMenu =document.querySelector('.fixed__menu')
fixedMenu.addEventListener('touchstart', function(e){
    var target = e.target
    target.click();
    
})