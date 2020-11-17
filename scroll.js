const contant = document.querySelector('.maincontent')
let firstPoint = 0;
let inScroll = false;
let currentDataGoto = document.getElementsByClassName('fixed__link_active')[0].dataset.goto
const allLink = document.getElementsByClassName('fixed__link')
let displayMenu = document.querySelector('.fixed__menu')


contant.addEventListener('touchmove', (e) => {
    // console.log(e)
    e.preventDefault()
})


const chengePage =(scrollAcc) => {
    contant.style.transform = 'translateY(' + scrollAcc + '%)'
    removeActiveClass(scrollAcc/100 * -1)
    firstPoint = scrollAcc
}


const scroll = addEventListener('wheel', function (e) {
    // console.log(e)
    let deltaY = e.deltaY
    if (inScroll === false) {
        inScroll = true
        if(deltaY < 0 && !(( firstPoint * -1) < 100)) {
            chengePage(firstPoint += 100)
        }
        if (deltaY > 0 && !(( firstPoint * -1) > 700)) {
            chengePage(firstPoint -= 100 )
        }
    }else{
        return
    }
        setTimeout(() => {
            inScroll = false
        }, 1000)
});


const removeActiveClass = (num) => {
        Array.from(allLink).forEach((allLink) => {
            if (allLink.classList.contains('fixed__link_active')) {
                allLink.classList.remove('fixed__link_active')
            }
            document.getElementsByClassName('fixed__link')[num].classList.add('fixed__link_active')
        })
    }


    displayMenu = addEventListener("click", (e) => {
        chengePage((e.target.dataset.goto*100-100)*-1)
    })


    var swipeAcc = 0;
    var initialPoint;
    var finalPoint;
    var swipeContent = document.querySelector('.maincontent')
    swipeContent = addEventListener('touchstart', function(event) {
    initialPoint=event.changedTouches[0];
    }, false)
    swipeContent = addEventListener('touchend', function(event) {
    finalPoint=event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs < 1 || yAbs < 1){
        return
    }
    if (finalPoint.pageY < initialPoint.pageY ){
        if(firstPoint/100*-1 < allLink.length-1){
            swipeAcc= swipeAcc -100;
            chengePage(swipeAcc)
        }
        firstPoint = swipeAcc
    }else{
        if (firstPoint/100*-1 !== 0) {
            swipeAcc= swipeAcc +100;
            chengePage(swipeAcc)
        }
        firstPoint = swipeAcc
        }
}, false);