const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgsText = document.querySelectorAll('.animated-bg__text')

setTimeout(showCard, 2500)

function showCard() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287" alt="unsplash credit card">'
  title.innerText = 'Lorem ipsum dolor sit amet.'
  excerpt.innerText =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, reiciendis?'
  profile_img.innerHTML =
    '<img src="http://randomuser.me/api/portraits/men/45.jpg" alt="user-avatar"></img>'
  name.innerText = 'John Doe'
  date.innerText = 'May 21, 2022'

  animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
  animatedBgsText.forEach(bg => bg.classList.remove('animated-bg__text'))
}
