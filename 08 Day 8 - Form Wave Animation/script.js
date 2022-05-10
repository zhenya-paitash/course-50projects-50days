const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split``
    .map((i, idx) => `<span style="transition-delay: ${50 * idx}ms">${i}</span>`)
    .join``
})
