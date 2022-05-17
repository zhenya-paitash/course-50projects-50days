const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

// setActiveSlide()
setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
  setBgToBody()
}

leftBtn.addEventListener('click', () => {
  activeSlide = activeSlide ? activeSlide - 1 : slides.length - 1
  setBgToBody()
  setActiveSlide()
})
rightBtn.addEventListener('click', () => {
  activeSlide = activeSlide === slides.length - 1 ? 0 : activeSlide + 1
  setBgToBody()
  setActiveSlide()
})
