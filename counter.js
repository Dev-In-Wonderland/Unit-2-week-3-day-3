
const myTimer = document.getElementById('counter')
const start = document.querySelector('button')

let counterValue = parseInt(sessionStorage.getItem('lastCounterValue')) || 0

let counter = 0
const assignCounterToDOM = function () {
  // qua la definisco
  myTimer.innerHTML= counterValue

}
const increaseCounter = setInterval(function(){
    counterValue ++
    assignCounterToDOM()
    sessionStorage.setItem('lastcountervalue', counterValue)
}, 1000)


