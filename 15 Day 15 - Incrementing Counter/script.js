const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updCounter = () => {
    const now = +counter.innerText
    const target = +counter.getAttribute('data-target')
    const increment = target / 500

    // update
    if (now < target) {
      counter.innerText = `${Math.ceil(now + increment)}`
      setInterval(updCounter, 1)
    } else {
      counter.innerText = target
    }
  }

  updCounter()
})