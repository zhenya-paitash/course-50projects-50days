const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', getJoke)

getJoke()

// USING .then().catch()
// function getJoke() {
//   const config = { headers: { Accept: 'application/json' } }

//   fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => (jokeEl.innerHTML = data.joke))
//     .catch(err => (jokeEl.innerHTML = '🤬' + err))
// }

// USING async/await
async function getJoke() {
  const config = { headers: { Accept: 'application/json' } }

  try {
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
  } catch (e) {
    jokeEl.innerHTML = '🤬' + e
  }
}
