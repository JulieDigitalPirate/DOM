// querySelector
'use strict';

// const name = document.querySelector('.name')
// console.log(name)

// const address = document.querySelector('#address')
// console.log(address)

// const input = document.querySelectorAll('.last-two')
// console.dir(input)

// const mai = document.querySelector('.main')
// const mainInputs = mai.querySelectorAll('input')
// console.dir(mainInputs)

const secondNameDiv = document.createElement('div')
secondNameDiv.className = 'second-name'

const secondNameLabel = document.createElement('label')
secondNameLabel.innerText = 'Second name: '

const secondNameInput = document.createElement('input')
secondNameInput.id = 'second-name-id'
secondNameInput.name = 'second-name-name'
secondNameInput.placeholder = 'Enter second name'
secondNameInput.type = 'text'

secondNameLabel.append(secondNameInput)
secondNameDiv.append(secondNameLabel)

// const main = document.querySelector('.main')
// main.append(secondNameDiv)

const name = document.querySelector('.name')
name.insertAdjacentElement('afterend', secondNameDiv)
console.dir(name.className)
console.dir(name.dataset.name)
