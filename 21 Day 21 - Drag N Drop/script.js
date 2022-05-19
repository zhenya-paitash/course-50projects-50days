const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

// EVENTS
fill.addEventListener('dragstart', onDragStart)
fill.addEventListener('dragend', onDragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', onDragOver)
  empty.addEventListener('dragenter', onDragEnter)
  empty.addEventListener('dragleave', onDragLeave)
  empty.addEventListener('drop', onDragDrop)
}

// DRAG FUNCTIONS
function onDragStart() {
  this.classList.add('hold')
  setTimeout(() => (this.className = 'invisible'), 0)
}
function onDragEnd() {
  this.className = 'fill'
}
function onDragOver(e) {
  e.preventDefault()
}
function onDragEnter(e) {
  e.preventDefault()
  this.classList.add('hovered')
}
function onDragLeave() {
  this.classList.remove('hovered')
}
function onDragDrop() {
  this.className = 'empty'
  this.append(fill)
}
