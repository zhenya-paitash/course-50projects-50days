const audio = document.querySelectorAll('audio')
// const audio = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

audio.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound.id

  btn.addEventListener('click', () => {
    stopSounds()
    sound.play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSounds() {
  audio.forEach(song => {
    song.pause()
    song.currentTime = 0
  })
}
