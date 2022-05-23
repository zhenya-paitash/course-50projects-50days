const sliderContainer = document.querySelector('.slider-container')
const slideLeft = document.querySelector('.slide__left')
const slideRight = document.querySelector('.slide__right')
const btnDown = document.querySelector('.btn__down')
const btnUp = document.querySelector('.btn__up')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlide = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

btnUp.addEventListener('click', () => changeSlide('up'))
btnDown.addEventListener('click', () => changeSlide('down'))

function changeSlide(side) {
  const { clientHeight } = sliderContainer
  if (side === 'up') {
    activeSlide = activeSlide === slidesLength - 1 ? 0 : activeSlide + 1
  } else if (side === 'down') {
    activeSlide = activeSlide ? activeSlide - 1 : slidesLength - 1
  }

  slideRight.style.transform = `translateY(-${activeSlide * clientHeight}px)`
  slideLeft.style.transform = `translateY(+${activeSlide * clientHeight}px)`
}
