document.addEventListener("DOMContentLoaded", () => {
    const max = 698
    const min = 0
    const speedNeedle = 15
    let timer = 60
    let position = Math.ceil(max / 2)

    let userScore = 0

    const screenScore = document.getElementById('score')
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
        constructor() {
            this.posY = max + 50
            this.startLine = max
            this.div = document.createElement('div')
        }

        start() {
            const id = Math.floor(Math.random() * 10000000000)
            this.div.className = 'balls'
            this.div.setAttribute('style', `top: ${this.posY}px`)
            this.div.setAttribute('style', `left: ${Ball.genPosX(min, max)}px`)
            this.div.setAttribute('id', id)
            this.interval = setInterval(() => {

                const elem = document.getElementById(`${id}`)
                this.posY = this.posY - 1
                elem.style.top = `${this.posY}px`

                this.top = elem.style.top.replace('px', '')
                if (this.top < (min - 100)) {
                    clearInterval(this.interval)
                    elem.remove()
                }

                if (this.top <= 100 && this.top >= 80) {
                    const x = parseInt(elem.style.left.replace('px', ''))
                    if (position <= (x + 50) && position >= x) {
                        userScore++
                        screenScore.innerHTML = userScore
                        clearInterval(this.interval)
                        elem.remove()
                    }
                }
            }, 5)

            return this.div
        }

        static genPosX(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    let genSpeed = 1000


    setInterval(() => {
        document.getElementById('timer').innerHTML = timer
        timer > 0
            ? gameScreen.appendChild(new Ball().start())
            : alert('Ur score' + userScore)
            timer --
    }, genSpeed)

})