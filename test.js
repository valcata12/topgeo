function solve() {
    let x1 = 30000
    let y1 = 29000

    let x2 = 24970
    let y2 = 21953

    let dx = x2 - x1
    let dy = y2 - y1
    
    let distance = Math.sqrt(dx**2 + dy**2)
    let ang = Math.atan2(y2-y1, x2-x1)
    let degrees = ang * (180/Math.PI) / 6
    if(degrees < 0) {
        degrees += 60
    }
    console.log(degrees.toFixed(2))
    console.log(distance.toFixed(0))
}
solve()