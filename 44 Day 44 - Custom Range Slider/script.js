const range = document.getElementById('range')

range.addEventListener('input', e => {
  // ! value, min, max - String. Better transform to number!
  let { value, min, max } = e.target
  const label = e.target.nextElementSibling

  const range_width = getComputedStyle(e.target).getPropertyValue('width')
  const label_width = getComputedStyle(label).getPropertyValue('width')
  const num_range_width = +range_width.substring(0, range_width.length - 2)
  const num_label_width = +label_width.slice(0, -2)

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, [inMin, inMax], [outMin, outMax]) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

  const left =
    value * (num_range_width / max) -
    num_label_width / 2 +
    scale(value, [min, max], [10, -10])

  label.style.left = `${left}px`
  label.innerHTML = value
})
