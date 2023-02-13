let cards = document.querySelector('.cards')

// console.dir(cards)
let allCards = document.querySelectorAll('.card')
console.dir(allCards)

for (let i = 0; i < 4; i++){
    let newBox = document.createElement('div')
    newBox.className = 'card'
    cards.appendChild(newBox)
    newBox.innerText = `Card ${allCards.length + 1}`
    newBox.style.cssText = `
        border-radius: 50%;
        background-color: yellow;
        font-weight: bold;
        font-size: 20px;
        padding-top: 7px;
        display: flex;
        justify-content: center
    `
    allCards = document.querySelectorAll('.card')
}


for (let i = 0; i < allCards.length; i++){
allCards[i].style.cssText = `
    border-radius: 50%;
    background-color: rgb(${rand()}, ${rand()}, ${rand()});
    font-weight: bold;
    font-size: 20px;
    padding-top: 7px;
    display: flex;
    position: relative;
    justify-content: center
`


let innerDiv = document.createElement('div')
innerDiv.className = 'innerDiv'
allCards[i].appendChild(innerDiv)
innerDiv.innerText = getNum(allCards[i])
innerDiv.style.cssText = `
    background-color: red;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    line-height: 50%;
    color: white;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 40%;
    transform: translate(-50; -50%)
    `

}

function getNum (elem) {
    let text = elem.innerText.trim();
    return text[text.length-1]
}
function rand() {
    return Math.floor(Math.random() * 255)
}

cards.addEventListener('click', (Event) => {
    Event.preventDefault()

    for (let i = 0; i < allCards.length; i++){

        if (Event.target == allCards[i]){
            allCards[i].style.cssText = `
    border-radius: 50%;
    background-color: rgb(${rand()}, ${rand()}, ${rand()});
    font-weight: bold;
    font-size: 20px;
    padding-top: 7px;
    display: flex;
    position: relative;
    justify-content: center
`

        }
        
      
    }
})

let btn = document.createElement('button')
btn.innerText = ' Нажми МЕНЯ =)'
btn.style.cssText = `
background-color: red ;
color: black;
`
cards.appendChild(btn)
btn.addEventListener('click', event => {
    event.preventDefault();
    for (let i = 0; i < allCards.length; i++){
        allCards[i].style.cssText = `
            border-radius: 50%;
            background-color: rgb(${rand()}, ${rand()}, ${rand()});
            font-weight: bold;
            font-size: 20px;
            padding-top: 7px;
            display: flex;
            position: relative;
            justify-content: center
        `
        
        
        let innerDiv = document.createElement('div')
        innerDiv.className = 'innerDiv'
        allCards[i].appendChild(innerDiv)
        innerDiv.innerText = getNum(allCards[i])
        innerDiv.style.cssText = `
            background-color: red;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            vertical-align: middle;
            line-height: 50%;
            color: white;
            width: 40px;
            height: 40px;
            position: absolute;
            top: 40%;
            transform: translate(-50; -50%)
            `
        
        }
})

for(let i = 0; i < allCards.length; i++){
allCards[i].innerHTML = `Card ${i+ 1}`
allCards = document.querySelectorAll('.card')



}