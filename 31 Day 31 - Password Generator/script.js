const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateBtn = document.getElementById('generate')
const clipboardBtn = document.getElementById('clipboard')

// const randomFunc = {
//   upper: getRandom.bind(null, 'upper'),
//   lower: getRandom.bind(null, 'lower'),
//   number: getRandom.bind(null, 'number'),
//   symbol: getRandom.bind(null, 'symbol'),
// }

clipboardBtn.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  if (!password) return

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied to clipboard!')
})

generateBtn.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasUpper = uppercaseEl.checked
  const hasLower = lowercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked

  resultEl.innerText = generatePassword(
    length,
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol
  )
})

function generatePassword(length, upper, lower, number, symbol) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol
  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    i => Object.values(i)[0]
  )
  
  if (!typesCount || length > 20) return ''

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      // generatedPassword += randomFunc[funcName]()
      generatedPassword += getRandom(funcName)
    })
  }

  const finalPassword = generatedPassword.slice(0, length)
  return finalPassword
}

function getRandom(type) {
  const $ = {
    upper: [26, 65],
    lower: [26, 97],
    number: [10, 48],
    symbol: '!@#$%^&*(){}[]=<>/<.',
  }

  if (type in $) {
    if (type === 'symbol') {
      // const symbols = '!@#$%^&*(){}[]=<>/<.'
      // return symbols[Math.floor(Math.random() * symbols.length)]
      return $[type][Math.floor(Math.random() * $[type].length)]
    }

    return String.fromCharCode(
      Math.floor(Math.random() * $[type][0]) + $[type][1]
    )
  }
}
