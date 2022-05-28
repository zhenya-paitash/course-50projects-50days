const imgContainer = document.getElementById('imgs')
const imgs = imgContainer.querySelectorAll('img')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const runTime = 2000
let idx = 0

let interval = setInterval(run, runTime)

function run() {
  idx++
  changeImg()
}

function changeImg() {
  if (idx > imgs.length - 1) {
    idx = 0
  } else if (idx < 0) {
    idx = imgs.length - 1
  }

  imgContainer.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, runTime)
}

nextBtn.addEventListener('click', () => {
  idx++
  changeImg()
  resetInterval()
})
prevBtn.addEventListener('click', () => {
  idx--
  changeImg()
  resetInterval()
})
