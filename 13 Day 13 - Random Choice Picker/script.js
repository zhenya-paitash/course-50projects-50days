const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
textarea.addEventListener('keyup', inputHandler)

function inputHandler(e) {
  const tags = e.target.value.split`,`.map(tag => tag.trim()).filter(Boolean)
  clearTags()
  createTags(tags)
  if (e.key === 'Enter') randomSelect(e)
}

function clearTags() {
  tagsEl.innerHTML = ''
}

function createTags(tags) {
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect(e) {
  setTimeout(() => {
    e.target.value = ''
  }, 10)

  const times = 30
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => highlightTag(randomTag), 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    highlightTag(pickRandomTag())
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.toggle('highlight')
}
