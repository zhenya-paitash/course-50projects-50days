const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
  code.addEventListener('keydown', ({ key }) => {
    if (key >= 0 && key <= 9) {
      if (idx === codes.length - 1) {
        codes[idx].value = key
        return codes[idx].blur()
      }

      codes[idx].value = ''
      setTimeout(() => codes[idx + 1].focus(), 10)
    } else if (key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10)
    }
  })
})
