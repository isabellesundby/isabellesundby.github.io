let brush = document.getElementById("c").getContext("2d")
let w = 400
let h = 400
dx = 10
let rects = [[50,100,50], [150,200,60],[300,50,20]]
let min = 0
let max = 80

setInterval(drawFrame, 200)

function drawFrame(){
    updateData()
    drawBackground()
    drawRects()
}

function updateData(){
    for (let i = 0; i < rects.length; ++i){
        rects[i][0] -= dx
        if (rects[i][0] < 0){
            rects[i][0] = w + Math.floor(Math.random()*(max-min)+min)
            rects[i][0] += Math.floor(Math.random()*(max-min)+min)
            if (rects[i][1] <= 0 || rects[i][1] >= 3/4*h){
                rects[i][1] = 1/4*h
            }
        }
    }
}

function drawBackground(){
    brush.fillStyle = "#000045"
    brush.fillRect(0, 0, w, 3/4*h)
    brush.fillStyle = "#006600"
    brush.fillRect(0, 3/4*h, w, 1/4*h)
}

function drawRects(){
    for (let i=0; i < rects.length; ++i){
        brush.fillStyle = "#FF0000"
        brush.fillRect (rects[i][0], rects[i][1], rects[i][2], 3/4*h-rects[i][1])
    }
}
