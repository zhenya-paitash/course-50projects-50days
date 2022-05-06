const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let load = 0

let interval = setInterval(() => {
  load++
  if (load > 99) clearInterval(interval)
  loadingText.innerText = load + '%'
  loadingText.style.opacity = scale(load, [0, 100], [1, 0])
  bg.style.filter = `blur(${scale(load, [0, 100], [30, 0])}px)`
}, 30)

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, [inMin, inMax], [outMin, outMax]) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
