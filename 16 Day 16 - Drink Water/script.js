const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.querySelector('#remained small')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCup(idx))
})

function highlightCup(goalIdx) {
  if (
    smallCups[goalIdx].classList.contains('full') &&
    !smallCups[goalIdx].nextElementSibling?.classList.contains('full')
  ) {
    goalIdx--
  }

  smallCups.forEach((cup, idx) => {
    idx <= goalIdx ? cup.classList.add('full') : cup.classList.remove('full')
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  // PERCENTAGE
  percentage.style.visibility = fullCups ? 'visible' : 'hidden'
  percentage.style.height = `${(fullCups / totalCups) * 350}px`
  percentage.innerText = `${(fullCups / totalCups) * 100}%`

  // REMANED
  if (fullCups === totalCups) {
    remained.innerHTML = ''
    liters.innerHTML = ''
    liters.style.visibility = 'hidden'
    remained.style.visibility = 'hidden'
  } else {
    remained.innerHTML = 'Remained'
    liters.innerText = `${2 - (fullCups * 250) / 1000} L`
    liters.style.visibility = 'visible'
    remained.style.visibility = 'visible'
  }
}
