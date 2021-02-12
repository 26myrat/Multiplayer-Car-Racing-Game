class Game {
    constructor() {

    }
    getState() {
        var gamestateRef = database.ref("gameState")
        gamestateRef.on("value", function (data) {
            gameState = data.val()
        })
    }
    update(state) {
      database.ref("/").update({
          gameState:state
      })
    }
    async start() {
        if(gameState===0) {
            player = new Player()
            var playerCountref = await database.ref("playerCount").once("value")
            if(playerCountref.exists()) {
                playerCount = playerCountref.val()
                player.getCount()
            }
            form = new Form()
            form.display();
        }
        car1 = createSprite(100,200)
        car1.addImage(car1Img)
        car2 = createSprite(300,200)
        car2.addImage(car2Img)
        car3 = createSprite(500,200)
        car3.addImage(car3Img)
        car4 = createSprite(700,200)
        car4.addImage(car4Img)
        cars = [car1, car2, car3, car4]
    }
    play() {
        //console.log("play")
        form.hide();
        textSize(20)
        text("Start Game", 120, 100)
        Player.getPlayerInfo()
        if (allPlayers !== undefined) {
            background("#c68767")
            image(trackImg, 0,-displayHeight*4, displayWidth, displayHeight*5)
            var index = 0
            var xpos = 250
            var ypos = 0
            //var displayPosition = 130
            for(var plr in allPlayers) {
                index = index + 1
                xpos = xpos + 300
                ypos = displayHeight - allPlayers[plr].distance
                cars[index-1].x = xpos
                cars[index-1].y = ypos
                if (index===player.index) {
                    fill("red")
                    ellipse(xpos,ypos,60,60)             
                    cars[index-1].shapeColor= "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }

                //displayPosition += 20
                //textSize(16)
                //text(allPlayers[plr].playerName +":" + allPlayers[plr].distance, 120, displayPosition)
            }
        }
        console.log(player.index)
        if(keyIsDown(UP_ARROW)&& player.index != null) {
            player.distance += 50
            player.update()
        }
        if(player.distance>5250) {
            gameState = 2
        }
        drawSprites();
    }
    end() {
        console.log("gameEnded")
    }
}