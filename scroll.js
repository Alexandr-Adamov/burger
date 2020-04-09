//скрол контента
var contant = document.querySelector('.maincontent')
var inScroll = false
var allLink = document.getElementsByClassName('fixed__link')

contant.addEventListener('touchmove', function(e){
    e.preventDefault()
    e.target.loading = false
    console.log(e)
    console.log(e.target.loading)
})





var scrollAcc = 0;
var scroll = addEventListener('wheel', function (e) {
    var deltaY = e.deltaY
    if (inScroll === false) {
        inScroll = true
        if (deltaY < 0 && scrollAcc < 0) {
            scrollAcc += 100
        }
        if (deltaY > 0 && scrollAcc > ( allLink.length-1)*100*-1) {
            scrollAcc -= 100
        }
        contant.style.transform = 'translateY(' + scrollAcc + '%)'
        setTimeout(() => {
            inScroll = false
        }, 1000)
        var activeSection = scrollAcc / 100
        if (activeSection < 0) {
            activeSection = [activeSection * -1]
        }
        for (var i = 0; i < allLink.length; i++) {
            if (allLink[i] !== [activeSection * -1]) {
                allLink[i].classList.remove('fixed__link_active')
            }else{
                return
            }
        }
        allLink[activeSection].classList.add('fixed__link_active')
    }
});

//клик на боковой скрол-лист
var displayMenu = document.querySelector('.fixed__menu')
displayMenu = addEventListener('click', function (event) {
    var currentLi = event.target.closest('.fixed__link')
    for (var i = 0; i < allLink.length; i++) {
        if(!currentLi){
        return
        }
        if (allLink[i]!== currentLi) {
            allLink[i].classList.remove('fixed__link_active')
        }
        if (allLink[i] === currentLi) {
            currentLi.classList.add('fixed__link_active')
            var indexNumber = -i * 100;
            scrollAcc = indexNumber
        }
    }
    contant.style.transform = 'translateY(' + indexNumber + '%)'
});


//свайп контента
var swipeAcc = 0;
    var initialPoint;
    var finalPoint;
    var swipeContent = document.querySelector('.maincontent')
    swipeContent = addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    initialPoint=event.changedTouches[0];
    }, false)
    swipeContent = addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();
    finalPoint=event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs < 1 || yAbs < 1){
        
        return
    }
    if (finalPoint.pageY < initialPoint.pageY ){
        
        if(scrollAcc/100*-1 < allLink.length-1){
            
            swipeAcc= swipeAcc -100;
            contant.style.transform = 'translateY(' + swipeAcc + '%)'
        }
        scrollAcc = swipeAcc
    }else{
        if (scrollAcc/100*-1 !== 0) {
            
            swipeAcc= swipeAcc +100;
            contant.style.transform = 'translateY(' + swipeAcc + '%)'
        }
        scrollAcc = swipeAcc
        }
}, false);

//скрол на блок form при нажатии на кнопку "Заказать"
var headerBtnA = document.querySelector('.order-link')
function scrollInForm(e){
    var headerBtn = e.target.closest('.header__btn')
    if(headerBtn){
        contant.style.transform = 'translateY(' + -700 + '%)'
        var scrollToForm = -700
        swipeAcc = scrollToForm
        scrollAcc = scrollToForm
        var displayMenu = document.querySelector('.fixed__menu')
        displayMenu.children[0].classList.remove('fixed__link_active')
        displayMenu.children[scrollToForm/100*-1].classList.add('fixed__link_active')
    }
}
headerBtnA = addEventListener('click', function(e){
    scrollInForm(e)
});
    
// скорл по клику на header menu
var nav = document.querySelector('.nav')
nav.addEventListener('click', function(e){
    headerScrollMenu (e)
})

var hamburgerMenuList = document.querySelector('.hamburger__menu_list')
hamburgerMenuList.addEventListener('click', function(e){
    headerScrollMenu(e)
})

//функция удаляет все активные классы у бокового скрол меню
function removeActiveClass (e) {
    Array.from(allLink).forEach((allLink) => {
        if (allLink.classList.contains('fixed__link_active')) {
            allLink.classList.remove('fixed__link_active')
        }
    })
}
// функция скорл по клику на header menu
function headerScrollMenu (e) {
    e.preventDefault()
    var data = e.target.dataset.goto
    var navItem = e.target.dataset.goto*100*-1
    contant.style.transform = 'translateY(' + navItem + '%)'
    swipeAcc = navItem
    scrollAcc = navItem
    removeActiveClass (e)
    hamburgerButtonMenu ()
}
//скрол при клике на стрелку вниз
var arrow = document.querySelector('.arrow')
arrow.addEventListener('click',function (e){
    removeActiveClass (e)
    contant.style.transform = 'translateY(' + -100 + '%)'
    allLink[1].classList.add('fixed__link_active')
})


console.log(e)