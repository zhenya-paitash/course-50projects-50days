const poke_container = document.getElementById('poke-container')
const API_URL = 'https://pokeapi.co/api/v2'
const pokemon_count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#f5f5f5',
  fighting: '#e6e0d4',
  normal: '#f5f5f5',
}
const main_types = Object.keys(colors)

const fetchPokemons = async () => {
  for (let id = 1; id <= pokemon_count; id++) await getPokemon(id)
}

const getPokemon = async id => {
  const url = `${API_URL}/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()

  createPokemonCard(data)
}


// ? POKEMON IMG https://pokeres.bastionbot.org COUNTRY NOT ALLOWED 😞
const createPokemonCard = ({ id, name, sprites, types }) => {
  const pokeEl = document.createElement('div')
  pokeEl.classList.add('pokemon')

  const poke_number = id.toString().padStart(3, '0')
  const poke_name = name[0].toUpperCase() + name.slice(1)
  const poke_types = types.map(type => type.type.name)
  const poke_type = main_types.find(type => poke_types.indexOf(type) > -1)
  const poke_color = colors[poke_type]

  pokeEl.style.backgroundColor = poke_color
  pokeEl.innerHTML = `
    <div class="img-container">
      <img src="${sprites.front_default}" alt="${name}">
    </div>
    <div class="info">
      <span class="number">#${poke_number}</span>
      <h3 class="name">${poke_name}</h3>
      <small class="type">Type: <span>${poke_type}</span> </small>
    </div>
  `

  poke_container.appendChild(pokeEl)
}

fetchPokemons()
