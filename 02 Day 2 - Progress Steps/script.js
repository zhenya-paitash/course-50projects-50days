const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive < circles.length && currentActive++
  update()
})
prev.addEventListener('click', () => {
  currentActive > 1 && currentActive--
  update()
})

function update() {
  circles.forEach((circle, idx) => {
    idx < currentActive
      ? circle.classList.add('active')
      : circle.classList.remove('active')
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = 1
  } else if (currentActive === circles.length) {
    next.disabled = 1
  } else {
    next.disabled = 0
    prev.disabled = 0
  }
}
