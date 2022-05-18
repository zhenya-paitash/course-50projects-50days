const buttons = document.querySelectorAll('.ripple')

buttons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const { clientX, clientY } = e
    const { offsetTop, offsetLeft } = e.target
    const x = clientX - offsetLeft
    const y = clientY - offsetTop

    // const { offsetX: x, offsetY: y } = e

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = y + 'px'
    circle.style.left = x + 'px'

    this.appendChild(circle)

    // REMOVE CIRCLE
    setTimeout(() => circle.remove(), 500)
  })
})
