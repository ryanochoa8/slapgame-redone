import OpponentController from "./components/OpponentController.js"


class App {
  constructor() {
    this.controllers = {
      opponentController: new OpponentController()
    }
  }
}

window["app"] = new App()