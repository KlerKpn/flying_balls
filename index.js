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
            this.posY = max + 50
            this.moveY = moveY
            this.moveX = moveX
            this.startLine = max
            this.div = document.createElement('div')
        }

        start() {
            const id = Math.floor(Math.random() * 10000000000)
            this.div.className = 'balls'
            this.div.setAttribute('style', `top: ${this.posY}px`)
            this.div.setAttribute('id', id)
            this.interval = setInterval(() => {
                const elem = document.getElementById(`${id}`)
                this.posY = this.posY - 1
                elem.style.top = `${this.posY}px`
                if (elem.style.top < `${min}px`) {
                    elem.remove()
                    clearInterval(this.interval)
                }
            }, 5)

            return this.div
        }

        static genPosX() {

        }

    }

    let genSpeed = 1000

    // setInterval(() => {
    //     const div = new Ball()
    //     gameScreen.appendChild(div.start())
    // }, genSpeed)

    const div = new Ball()
    gameScreen.appendChild(div.start())
})