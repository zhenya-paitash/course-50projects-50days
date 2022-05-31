const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', e => {
  const { value } = e.target
  const blurValue = 20 - value.length * 2
  background.style.filter = `blur(${blurValue}px)`
})
