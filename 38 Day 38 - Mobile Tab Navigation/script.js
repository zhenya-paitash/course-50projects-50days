const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((li, idx) => {
  li.addEventListener('click', () => {
    hideAllContentsAndItems()

    li.classList.add('active')
    contents[idx].classList.add('show')
  })
})

function hideAllContentsAndItems() {
  for (let img of contents) img.classList.remove('show')
  for (let li of listItems) li.classList.remove('active')
}
