const FOLDERS = [
  '01 Day 1 - Expanding Cards',
  '02 Day 2 - Progress Steps',
  '03 Day 3 - Rotating Navigation',
  '04 Day 4 - Hidden Search Widget',
  '05 Day 5 - Blurry Loading',
  '06 Day 6 - Scroll Animation',
  '07 Day 7 - Split Landing Page',
  '08 Day 8 - Form Wave Animation',
  '09 Day 9 - Sound Board',
  '10 Day 10 - Dad Jokes',
  '11 Day 11 - Event KeyCodes',
  '12 Day 12 - FAQ Collapse',
  '13 Day 13 - Random Choice Picker',
  '14 Day 14 - Animated Navigation',
  '15 Day 15 - Incrementing Counter',
  '16 Day 16 - Drink Water',
  '17 Day 17 - Movie App',
  '18 Day 18 - Background Slider',
  '19 Day 19 - Theme Clock',
  '20 Day 20 - Button Ripple Effect',
  '21 Day 21 - Drag N Drop',
  '22 Day 22 - Drawing App',
  '23 Day 23 - Kinetic CSS Loader',
  '24 Day 24 - Content Placeholder',
  '25 Day 25 - Sticky Navbar',
  '26 Day 26 - Double Vertical Slider',
  '27 Day 27 - Toast Notification',
  '28 Day 28 - Github Profiles',
  '29 Day 29 - Double Heart Click',
  '30 Day 30 - Auto Text Effect',
  '31 Day 31 - Password Generator',
  '32 Day 32 - Good Cheap Fast Checkboxes',
  '33 Day 33 - Notes App',
  '34 Day 34 - Animated Countdown',
  '35 Day 35 - Image Carousel',
  '36 Day 36 - Hoverboard',
  '37 Day 37 - Pokedex',
  '38 Day 38 - Mobile Tab Navigation',
  '39 Day 39 - Password Strength Background',
  '40 Day 40 - 3D Background Boxes',
  '41 Day 41 - Verify Account UI',
  '42 Day 42 - Live User Filter',
  '43 Day 43 - Feedback UI Design',
  '44 Day 44 - Custom Range Slider',
  '45 Day 45 - Netflix Navigation',
  '46 Day 46 - Quiz App',
  '47 Day 47 - Testimonial Box Switcher',
  '48 Day 48 - Random Image Feed',
  '49 Day 49 - Todo List',
  '50 Day 50 - Insect Catch Game',
]
const containerEl = document.getElementById('container')

FOLDERS.forEach((folder, idx) => {
  const day = folder.split` - `[0].slice(3)
  const name = folder.split` - `[1]
  const cardImg = String(idx + 1).padStart(2, '0')

  const card = document.createElement('a')
  card.classList.add('card')
  card.href = `./${folder}/index.html`
  card.style.backgroundImage = `url(./demo/img/${cardImg}.png)`
  card.innerHTML = `
    <div class="card__bg"></div>
    <div class="card__content">
      <h1>${day}</h1>
      <p>${name}</p>
    </div>
  `

  containerEl.appendChild(card)
})
