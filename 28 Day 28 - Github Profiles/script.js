const API_URL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// getUser('zhenya-paitash')

form.addEventListener('submit', e => {
  e.preventDefault()
  const user = search.value.trim()

  if (!user) return

  getUser(user)
  search.value = ''
})

async function getUser(username) {
  try {
    const { data } = await axios.get(API_URL + username)
    createUserCard(data)
    getUserRepos(username)
  } catch (err) {
    if (err.response.status === 404)
      createErrorCard('No profile with this username')
  }
}

async function getUserRepos(username) {
  try {
    const { data } = await axios.get(API_URL + username + '/repos?sort=created')
    addUserReposToCard(data)
  } catch (err) {
    createErrorCard('Problem fetching repos')
  }
}

function createUserCard(user) {
  const { avatar_url, login, name, bio, followers, following, public_repos } =
    user

  const cardHTML = ` 
    <div class="card">
      <div>
        <img src="${avatar_url}" alt="${login}" class="avatar">
      </div>
      <!-- USER INFO -->
      <div class="user-info">
        <h2>${name}</h2>
        <p>${bio}</p>

        <ul>
          <li>${followers} <strong>Followers</strong></li>
          <li>${following} <strong>Following</strong></li>
          <li>${public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>

    </div>
  `

  main.innerHTML = cardHTML
}

function addUserReposToCard(repos) {
  const reposEl = document.getElementById('repos')

  repos.slice(0, 20).forEach(repo => {
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name

    reposEl.appendChild(repoEl)
  })
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `

  main.innerHTML = cardHTML
}
