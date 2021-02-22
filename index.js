document.addEventListener("DOMContentLoaded", () => {
    const max = 698
    const min = 0
    const speedNeedle = 15
    let position = Math.ceil(max / 2)

    const gameScreen = document.getElementById('window')
    const needle = document.getElementById('needle')
    needle.setAttribute('style', `left:${position}px;`)

    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 37) {
            position -= speedNeedle
        } else if (e.keyCode === 39) {
            position += speedNeedle
        }

        if (position < min) {
            position = min
        } else if (position > max) {
            position = max
        }
        needle.style.left = `${position}px`
    })

    class Ball {
        constructor(posX, posY, moveX, moveY) {
            this.posX = posX
            this.posY = posY
            this.moveY = moveY
            this.moveX = moveX
            this.style = ` "color": "#2e2e2e"; 'border-radius': '99px';width':'30px'; 'height': '30px' `
        }

        start() {
            let div = document.createElement('div')
            // setInterval(() => {
            //     posY + 1
            // }, 50)
            return div
        }
    }

    let genSpeed = 1000

    setInterval(() => {
        let div = new Ball()
        gameScreen.appendChild(div.start())
    }, genSpeed)
})