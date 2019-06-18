import OpponentService from "./OpponentService.js";

let _oppService = new OpponentService()

function drawOpp() {
  let oppElem = document.querySelector("#opponent")
  let opponent = _oppService.Opponent
  let template =
    `<h1>${opponent.name}</h1>
    <img src="https://cdn.shopify.com/s/files/1/1211/8882/products/Happy_Morty_Web_1024x1024.jpg?v=1503605432" height="200" width="200" class="img">
    <h2>Health: ${opponent.health}</h2>
    <h3>Hit Count: ${opponent.hitCount}</h3>`

  oppElem.innerHTML = template
}


export default class OpponentController {
  constructor() {
    drawOpp()
    console.log("Hello from Opponent Controller")
  }

  slapOpp() {
    _oppService.slapOpp()
    drawOpp()
  }
  punchOpp() {
    _oppService.punchOpp()
    drawOpp()
  }
  kickOpp() {
    _oppService.kickOpp()
    drawOpp()
  }

  resetGame() {

    _oppService.resetGame()
    drawOpp()
  }
}