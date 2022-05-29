const container = document.getElementById('container')

const colors = [
  '#7D5A50', '#B4846C', '#E5B299', '#FCDEC0',
  '#B5EAEA', '#EDF6E5', '#FFBCBC', '#F38BA0',
  '#FCFFA6', '#C1FFD7', '#B5DEFF', '#CAB8FF',
  '#52006A', '#CD113B', '#FF7600', '#FFA900',
  '#FFCC8F', '#FFDAAF', '#A760FF', '#CA82FF',
  '#293462', '#F24C4C', '#EC9B3B', '#F7D716',
  '#92B4EC', '#FFFFFF', '#FFE69A', '#FFD24C',
  '#2E0249', '#570A57', '#A91079', '#F806CC',
  '#B4FF9F', '#F9FFA4', '#FFD59E', '#FFA1A1',
  '#E9EFC0', '#B4E197', '#83BD75', '#4E944F',
  '#06113C', '#FF8C32', '#DDDDDD', '#EEEEEE',
  '#9FC088', '#E8C07D', '#CC704B', '#614124',
]

let originColor
let originShadow

const SQUARES = 900

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  // SET ORIGIN STYLES
  if (!originColor) originColor = square.style.backgroundColor
  if (!originShadow) originShadow = square.style.boxShadow

  // GET RANDOM COLOR
  square.addEventListener('pointerover', () => setColor(square))
  square.addEventListener('pointerout', () => removeColor(square))

  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = originColor
  element.style.boxShadow =  originShadow
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}