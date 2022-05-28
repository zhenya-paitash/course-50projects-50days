const preload = document.querySelector('.preload-counter')
const page = document.querySelector('.page-content')
const nums = document.querySelectorAll('.nums span')
const replyBtn = document.getElementById('replay')

runAnimation()

replyBtn.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})

function runAnimation() {
  nums.forEach((num, idx) => {
    const lastIdx = nums.length - 1

    num.addEventListener('animationend', e => {
      if (e.animationName === 'goIn' && idx !== lastIdx) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        preload.classList.add('hide')
        page.classList.add('show')
      }
    })
  })
}

function resetDOM() {
  preload.classList.remove('hide')
  page.classList.remove('show')

  for (let num of nums) num.classList.value = ''
  nums[0].classList.add('in')
}
