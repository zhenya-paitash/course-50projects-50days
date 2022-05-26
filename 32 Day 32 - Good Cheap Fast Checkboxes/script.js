const toggles = document.querySelectorAll('.toggle')

const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

toggles.forEach(toggle =>
  toggle.addEventListener('change', e => {
    const clickEl = e.target

    if ([good, cheap, fast].every(i => i.checked)) {
      // clickEl === good && (fast.checked = false)
      // clickEl === cheap && (good.checked = false)
      // clickEl === fast && (cheap.checked = false)

      switch (clickEl) {
        case good:
          fast.checked = false
          break
        case cheap:
          good.checked = false
          break
        case fast:
          cheap.checked = false
      }
    }
  })
)
