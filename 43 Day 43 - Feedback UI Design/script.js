const panel = document.getElementById('panel')
const ratings = document.querySelectorAll('.rating')
const sendBtn = document.getElementById('send')

let selectedRating = 'Satisfied'

ratings.forEach(rating =>
  rating.addEventListener('click', () => {
    ratings.forEach(el => el.classList.remove('active'))
    rating.classList.add('active')
    selectedRating = rating.querySelector('small').innerText
  })
)

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
    <i class="ri-heart-fill"></i>
    <strong>Thenk You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})
