class Player {
    constructor() {
        this.name = null
        this.index = null
        this.distance = 0
    }
    getCount() {
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value",(data)=> {
            playerCount = data.val()

        })
            }
    updateCount(count) {
        database.ref("/").update({
            playerCount: count}
        )
    }
    update() {
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).set({
        playerName: this.name,
    distance: this.distance})    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref("players")
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val()
        })
    }
    static deletePlayers() {
        database.ref("players").remove()
    }
}