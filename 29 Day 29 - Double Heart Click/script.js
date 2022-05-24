const likeit = document.querySelector('.likeit')
const times = document.getElementById('times')

let clickTime = 0
let timeClicked = 0
let isAnimation = false

// likeit.addEventListener('dblclick', e => {})

// ? CUSTOM DBLCLICK
likeit.addEventListener('click', e => {
  const clickSpeed = new Date().getTime() - clickTime
  if (clickSpeed > 800) {
    return (clickTime = new Date().getTime())
  }

  createHeart(e)
  clickTime = 0
})

const createHeart = e => {
  if (isAnimation) return
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const { offsetX: x, offsetY: y } = e

  // const { clientX, clientY } = e
  // const { offsetLeft, offsetTop } = e.target
  // const [x, y] = [clientX - offsetLeft, clientY - offsetTop]

  heart.style.left = x + 'px'
  heart.style.top = y + 'px'

  likeit.appendChild(heart)
  isAnimation = true
  times.innerText = ++timeClicked

  setTimeout(() => {
    heart.remove()
    isAnimation = false
  }, 1000)
}
