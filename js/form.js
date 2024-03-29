class Form {
    constructor() {
        this.input = createInput("Insert Name")
        this.button = createButton("ENTER")
        this.resetButton = createButton("Reset")
        this.greeting =createElement("h3")
    }
    display() {
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(displayWidth/2-50, 0)
        this.input.position(displayWidth/2-40, displayHeight/2-80)
        this.button.position(displayWidth/2+30, displayHeight/2)
        this.resetButton.position(displayWidth-200, 50)
        this.resetButton.mousePressed(()=>{
            game.update(0)
            player.updateCount(0)
            Player.deletePlayers()
        })
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value()
            playerCount+= 1
            player.index = playerCount
            player.update()  
            player.updateCount(playerCount)
            this.greeting.html("Hello " +player.name)
            this.greeting.position(displayWidth/2-50, displayHeight/2)      })
    }
    hide() {
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
    }
}
