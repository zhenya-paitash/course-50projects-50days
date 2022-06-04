const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const navs = document.querySelectorAll('.nav')

openBtn.addEventListener('click', toggleVisible)
closeBtn.addEventListener('click', toggleVisible)

function toggleVisible() {
  for (let nav of navs) nav.classList.toggle('visible')
}
