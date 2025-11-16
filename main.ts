let _time = 0
player.onChat("start", function () {
    mobs.clearEffect(mobs.target(ALL_PLAYERS))
    gameplay.setDifficulty(PEACEFUL)
    gameplay.timeSet(gameplay.time(DAY))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
    gameplay.setGameRule(PV_P, true)
    gameplay.setGameRule(DROWNING_DAMAGE, true)
    gameplay.setGameRule(FALL_DAMAGE, true)
    gameplay.setGameRule(FIRE_DAMAGE, true)
    gameplay.setGameRule(DAYLIGHT_CYCLE, true)
    gameplay.setGameRule(MOB_SPAWNING, true)
    gameplay.setGameRule(SHOW_COORDINATES, true)
    gameplay.title(mobs.target(ALL_PLAYERS), "躲藏階段", "開始逃跑吧!")
    for (let index = 0; index <= 15; index++) {
        loops.pause(1000)
        player.say(15 - index)
    }
    gameplay.title(mobs.target(ALL_PLAYERS), "捉迷藏遊戲開始!", "鬼可以開始取抓人了!")
    in_game(600)
    end_game()
})
function in_game (time: number) {
    _time = time
    _time += -1
    loops.pause(1000)
    if (time % 60 == 0) {
        player.say("時間剩下 " + _time / 60 + " 分鐘")
    }
}
function end_game () {
    mobs.applyEffect(REGENERATION, mobs.target(ALL_PLAYERS), 60, 255)
    gameplay.title(mobs.target(ALL_PLAYERS), "遊戲結束!", "")
}
