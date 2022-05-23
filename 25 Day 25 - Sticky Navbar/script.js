const nav = document.querySelector('nav')
const navLinks = document.querySelectorAll('.nav li a')

window.addEventListener('scroll', fixNav)

function fixNav() {
  window.scrollY > nav.offsetHeight + 150
    ? nav.classList.add('active')
    : nav.classList.remove('active')
}

for (let link of navLinks)
  link.addEventListener('click', () => {
    navLinks.forEach(i => i.classList.remove('current'))
    link.classList.add('current')
  })
