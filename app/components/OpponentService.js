import Opponent from "../models/Opponent.js";


let _opponent = new Opponent("Morty")

export default class OpponentService {
  slapOpp() {
    if (_opponent.health > 0) {
      _opponent.health -= 1
      _opponent.hitCount += 1;
    }
  }
  // giveFire() {

  // }
  // giveShock() {

  // }
  // giveShield() {

  // }
  punchOpp() {
    if (_opponent.health >= 5) {
      _opponent.hitCount += 1
      _opponent.health -= 5
    }
  }
  kickOpp() {
    if (_opponent.health >= 10) {
      _opponent.hitCount += 1
      _opponent.health -= 10
    }
  }
  get Opponent() {
    return _opponent
  }

  resetGame() {
    _opponent.hitCount = 0
    _opponent.health = 100;
  }

  constructor() {
    console.log("Hello from OpponentService")
  }
}