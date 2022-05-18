const hourEl = document.querySelector('.needle__hour')
const minuteEl = document.querySelector('.needle__minute')
const secondEl = document.querySelector('.needle__second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const [days, months] = [
  [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
]

toggle.addEventListener('click', e => {
  const html = document.querySelector('html')

  html.classList.toggle('dark')
  e.target.innerText = html.classList.contains('dark')
    ? // ? '☀️ Light mode'
      // : '🌙 Dark mode'
      'Light mode'
    : 'Dark mode'
})

function setTime() {
  const time = new Date()

  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours24 = time.getHours()
  const hours12 = hours24 % 12
  const ampm = Math.floor(hours24 / 12) ? 'PM' : 'AM'
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, [inMin, inMax], [outMin, outMax]) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hours12,
    [0, 11],
    [0, 360]
  )}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    [0, 59],
    [0, 360]
  )}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    [0, 59],
    [0, 360]
  )}deg)`

  timeEl.innerText = `${hours12}:${(minutes < 10 ? '0' : '') + minutes} ${ampm}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// INITIAL
setTime()
// RUN CLOCK
setInterval(setTime, 1000)
