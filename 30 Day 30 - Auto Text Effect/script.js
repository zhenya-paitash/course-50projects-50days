const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Happy Programming Day! 😍'

let idx = 1
let speedMS = 300
let speed = speedMS / speedEl.value

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)

  idx++
  if (idx > text.length) idx = 1

  setTimeout(writeText, speed)
}

speedEl.addEventListener('change', e => {
  let { value, max, min } = e.target
  value = value < min ? min : value > max ? max : value
  speedEl.value = value
  speed = speedMS / value
})
