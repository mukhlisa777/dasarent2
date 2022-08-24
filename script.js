const seconds = document.querySelector('.s'),
      minutes = document.querySelector('.m'),
      hours   = document.querySelector('.h'),
      minute   = document.querySelector('.minutes'),
      hour   = document.querySelector('.hours');

function clock() {
    let time = new Date()
    let h = time.getHours() * 30
    let m = time.getMinutes() * 6
    let s = time.getSeconds() * 6

    seconds.style.transform = `rotate(${s}deg)`
    minutes.style.transform = `rotate(${m}deg)`
    hours.style.transform = `rotate(${h}deg)`

    time.getHours() < 10 ? hour.innerHTML = '0' + time.getHours() : hour.innerHTML = time.getHours()
    time.getMinutes() < 10 ? minutes.innerHTML = '0' + time.getMinutes() : minutes.innerHTML = time.getMinutes()
    setTimeout(() => {
        clock()
    }, 1000);
}
clock()

const tabHead = document.querySelectorAll('.tabsItem'),
      tabBody = document.querySelectorAll('.tabsContentItem');


for (let i = 0; i < tabHead.length; i++) {
    tabHead[i].addEventListener('click',function (e) {
        e.preventDefault()
        for (let x = 0; x < tabHead.length; x++) {
            tabHead[x].classList.remove('active')
            tabBody[x].classList.remove('active')
        }
        tabActive(this,tabBody[i],e)
    })
    
}
function tabActive(a,b,c) {
   a.classList.add('active')
   b.classList.add('active')
//    if (c.target.innerHTML == "Часы") {
//     interval = setInterval(() => {
//         stopwatchAudio.play()
//     }, 1000);
//     }else{
//         clearInterval(interval)
//     }
}

// stopwatch

const stopwatchSec = document.querySelector('.stopwatch__seconds')
const stopwatchMin = document.querySelector('.stopwatch__minutes')
const stopwatchHour = document.querySelector('.stopwatch__hours')
const stopwatchBtn = document.querySelector('.stopwatch__btn')
const stopwatchSpan = document.querySelector('.tabsLink__span')
const stopwatchAudio = document.querySelector('#stopwatchAudio')

stopwatchBtn.addEventListener('click', function () {
    if (this.innerHTML.toLowerCase() == 'start') {
        stopwatchBtn.innerHTML = 'stop'
        stopwatchSpan.style.display = 'block'
        interval = setInterval(()=>{
            stopwatch()
        },1000)
    }else if (this.innerHTML.toLowerCase() == 'stop') {
        stopwatchBtn.innerHTML = 'clear'
        stopwatchSpan.style.background = 'red'
        clearInterval(interval)
    }else if (this.innerHTML.toLowerCase() == 'clear') {
        stopwatchBtn.innerHTML = 'start'
        stopwatchSpan.style.display = 'none'
        stopwatchSpan.style.background = 'white'
        stopwatchSec.innerHTML = 0
        stopwatchMin.innerHTML = 0
        stopwatchHour.innerHTML = 0
        sanoq = 0
    }
})
let sanoq = 0
function stopwatch() {
    stopwatchAudio.play()
    sanoq++
    if (sanoq <= 59) {
        stopwatchSec.innerHTML = sanoq
    }
    if(sanoq > 59){
        sanoq = 0
        stopwatchMin.innerHTML++
    }
    if (stopwatchMin.innerHTML > 59) {
        stopwatchMin.innerHTML = 0
        stopwatchHour.innerHTML++
    }
}


// calculator

const calcScreen = document.querySelector('.calc__screen-out'),
      calcBtns = Array.from(document.querySelectorAll('.calc__btn'));

calcBtns.map((btn)=>{
    btn.addEventListener('click', function (e) {
        let answer = e.target.innerHTML
        numSize()
        if (answer == 'ac') clear()
        else if (answer == 'ce') del()
        else if (answer == '√') squareRoot()
        else if (answer == '+/-') plusMinus()
        else if (answer == '=') equal()
        else numLength(answer)
    })
})
function numSize() {
    if (calcScreen.innerHTML.length >= 20) {
        calcScreen.style.fontSize = '20px'
    }else if (calcScreen.innerHTML.length >= 12) {
        calcScreen.style.fontSize = '30px'
    }else if (calcScreen.innerHTML.length < 12) {
        calcScreen.style.fontSize = '40px'
    }
}
function numLength(answer) {
    calcScreen.innerHTML.length >= 32 ? calcScreen.innerHTML = calcScreen.innerHTML : calcScreen.innerHTML += answer
}
function clear() {
    calcScreen.innerHTML = ''
}
function del() {
    calcScreen.innerHTML = calcScreen.innerHTML.slice(0,-1)
}
function squareRoot() {
    calcScreen.innerHTML = Math.sqrt(calcScreen.innerHTML)
    numSize()
}
function plusMinus() {
    calcScreen.innerHTML = parseFloat(calcScreen.innerHTML) * -1
}
function equal() {
    calcScreen.innerHTML = eval(calcScreen.innerHTML)
    numSize()
}

// timer

const timerHour = document.querySelector('.timer__hours');
const timerMin = document.querySelector('.timer__minutes');
const timerSec = document.querySelector('.timer__seconds');
const timerBtns = Array.from(document.querySelectorAll('.timer__btn, .timer__set, .timer__clear'));
const timerSet = document.querySelector('.timer__set');

timerBtns.map((btn)=>{
    btn.addEventListener('click', function (e) {
        let click = e.target.innerHTML
        press(click)
    })
})
function press(click) {
    if(click.toUpperCase() == 'PLAY') {
        timerSet.innerHTML = 'PAUSE'
        interval = setInterval(() => {
            timer()
        }, 1000);
    }else if(click.toUpperCase() == 'PAUSE') {
        timerSet.innerHTML = 'PLAY'
        clearInterval(interval)
    }else if(click.toUpperCase() == 'CLEAR') {
        timerSet.innerHTML = 'PLAY'
        clearInterval(interval)
        num = 0
    }else{
        if (timerSec.innerHTML.length < 2) {
            timerSec.innerHTML += click
        }else if (timerSec.innerHTML.length >= 2 && timerMin.innerHTML.length < 2) {
            timerMin.innerHTML += click
        }else if (timerMin.innerHTML.length >= 2 && timerHour.innerHTML.length < 2) {
            timerHour.innerHTML += click
        }
    }
}
let num = 0
function timer(params) {
    num--
}