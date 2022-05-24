const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

const types = ['success', 'info', 'warning', 'danger']
const notifications = [
  'Message ONE 🤣',
  'Message TWO 😱',
  'Message THREE 😂',
  'Message FOUR 🥶',
  'Message FIVE 🥵',
]

let dark = false

btn.addEventListener('click', () => {
    // createNotification('This is invalid data', 'danger')
    // createNotification('This is invalid data')
    createNotification()
  })

function createNotification(msg, type) {
  const notif = document.createElement('div')
  notif.classList.add('toast')

  // LIGHT / DARK
  dark && notif.classList.add('toast__dark')
  dark = !dark
  // TYPE
  notif.classList.add(type ?? getRandomType())
  // MESSAGE
  notif.innerText = msg ?? getRandomMessage()

  toasts.insertBefore(notif, toasts.firstChild)
  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return notifications[Math.floor(Math.random() * notifications.length)]
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
