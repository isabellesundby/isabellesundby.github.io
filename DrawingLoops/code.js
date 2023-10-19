//canvas 1
let canvas = document.getElementById("myCanvas1")
let painter = canvas.getContext("2d")

painter.fillStyle = "#000000"
painter.fillRect(1,1,400,400)

let m = 0
let n = 10
while (m<13){
    painter.fillStyle = "#FF0000"
    painter.fillRect (n,370,20,20)
    n = n + 30
    m = m + 1
}

let l = 0
let k = 40
while (l<13){
    painter.fillStyle = "#FF0000"
    painter.fillRect (k,340,20,20)
    if (k < 330){
        k = k + 30
    }
    l = l + 1
}

let x = 0
let y = 70
while (x<13){
    painter.fillStyle = "#FF0000"
    painter.fillRect (y,310,20,20)
    if (y < 300){
        y = y + 30
    }
    x = x + 1
}

let h = 0
let g = 100
while (h<13){
    painter.fillStyle = "#FF0000"
    painter.fillRect (g,280,20,20)
    if (g < 270){
        g = g + 30
    }
    h = h + 1
}

let v = 0
let z = 130
while (v<13){
    painter.fillStyle = "#FF0000"
    painter.fillRect (z,250,20,20)
    if (z < 240){
        z = z + 30
    }
    v = v + 1
}

let a = 0
let b = 160
while (a<13){
    painter.fillStyle = "#FF0000"
    painter.fillRect (b,220,20,20)
    if (b < 210){
        b = b + 30
    }
    a = a + 1
}

let cc = 0
let d = 190
while (cc<13){
    painter.fillStyle = "#FF0000"
    painter.fillRect (d,190,20,20)
    if (d < 190){
        d = d + 30
    }
    cc = cc + 1
}

//canvas 2
let canvas2 = document.getElementById("myCanvas2")
let painter2 = canvas2.getContext("2d")

painter2.fillStyle = "#000000"
painter2.fillRect(0,0,400,400)

painter2.fillStyle = "#FF0000"
for (let r = 0; r < 13; ++r){
    for (let c = 0; c < 13; ++c){
        if ((c+r)%2 === 0){
            painter2.fillRect(10+c*30,10+r*30,20,20)
        }
    }
}