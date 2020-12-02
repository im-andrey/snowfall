const btn = document.getElementById('snowBtn')
const wrap = document.getElementById('wrap')
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYears = '01 Jan 2021';
let toggle = true
var timer


btn.addEventListener('click', () => {
    const body = document.body.style

    toggle = !toggle
    
    if (!toggle) {
        wrap.classList.add('active')
        timer = setInterval(createSnow, 100)

    } else {
        wrap.classList.remove('active')
        clearInterval(timer)
    }
})

function createSnow() {
    const snow = document.createElement('div')
    snow.classList.add('snow')

    snow.style.left = Math.random() * 80 + 3 + 'vw'
    snow.style.animationDuration = Math.random() * 3 + 2 + 's'

    snow.innerText = `❄️`

    document.body.appendChild(snow)

    setTimeout(() => {
        snow.remove()
    }, 5000)
}


function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}
// Initial call
countdown()

setInterval(countdown, 1000)
