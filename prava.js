function firstProblemFn() {
  let x1 = document.getElementById('x-1').value
  console.log(x1 + 'x1')
  let y1 = document.getElementById('y-1').value
  console.log(y1 + 'y1')
  
  let distance = document.getElementById('dist').value
  console.log(distance + 'distance')
  let ang1 = document.getElementById('ang-1').value
  console.log(ang1 + 'ang1')
  let ang2 = document.getElementById('ang-2').value
  console.log(ang2 + 'ang2')
  let ang = ang1 + '.' + ang2
  console.log(ang + 'ang')
  
  let asRad = ang * (Math.PI / 180)*6
  console.log(asRad + 'asrad')
  console.log(Math.cos(asRad))
  let x2=(distance * Math.cos(asRad)) + Number(x1)
  let y2 = (distance * Math.sin(asRad)) + Number(y1)
  
  console.log(x2)
  document.getElementById('x-2').value = (Number(x2)).toFixed(0)
  document.getElementById('y-2').value = (Number(y2)).toFixed(0)
}
export {firstProblemFn}