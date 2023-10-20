import {firstProblemFn} from './prava.js'

window.onload = function () {
    const selectionDropdown = document.getElementById('problemo')

    selectionDropdown.addEventListener('change', function () {
        console.log(selectionDropdown.value)
        if (selectionDropdown.value !=  'first') {
            document.getElementById('prava-zadacha').style.display = "none"
            document.getElementById('obratna-zadacha').style.display = "block"
        } else {
            document.getElementById('prava-zadacha').style.display = "block"
            document.getElementById('obratna-zadacha').style.display = "none"
        }
    })
    
    const pravaForm = document.getElementById('prava-buton')
    pravaForm.addEventListener('click', firstProblemFn)
    const obratnaForm = document.getElementById('obratna-button')
    obratnaForm.addEventListener('click', () => {
        let xnp = document.getElementById('x-1o').value
        console.log(xnp)
        let ynp = document.getElementById('y-1o').value
        console.log(ynp)
        let xcel = document.getElementById('x-2o').value
        console.log(xcel)
        let ycel = document.getElementById('y-2o').value
        console.log(ycel)

        let dx = xcel - xnp
        let dy = ycel - ynp

        let distance = (Math.sqrt(dx**2 + dy**2)).toFixed(0)
        let ang = Math.atan2(ycel-ynp, xcel-xnp)
        let degrees = ang * (180/Math.PI) / 6
        if(degrees < 0) {
            degrees += 60
        }
        
        let distEle = document.getElementById('dist-o')
        distEle.value = distance
        degrees = degrees.toFixed(2)
        degrees = degrees.toString()
        let strDegrees = degrees.split('.')
        let firstAngle = document.getElementById('ang-1o')
        let secondAngle = document.getElementById('ang-2o')
        firstAngle.value = strDegrees[0]
        secondAngle.value = strDegrees[1]

    })
}