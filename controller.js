
class Controller {

    constructor({ container, timeline, play = true, pause = true, reverse = true, restart = true, fastSpeed = true, normalSpeed = true }) {
        const controls = document.createElement('div')
        controls.setAttribute('id', 'controller')
        container.appendChild(controls)

        this.play = play;
        this.pause = pause;
        this.reverse = reverse;
        this.restart = restart;
        this.fastSpeed = fastSpeed;
        this.normalSpeed = normalSpeed;

        let arr = [
            {
                id: 'play',
                text: 'play',
                isVisible: this.play
            },

            {
                id: 'pause',
                text: 'pause',
                isVisible: this.pause
            },

            {
                id: 'reverse',
                text: 'reverse',
                isVisible: this.reverse
            },

            {
                id: 'restart',
                text: 'restart',
                isVisible: this.restart
            },

            {
                id: 'fastSpeed',
                text: 'fastSpeed',
                isVisible: this.fastSpeed
            },

            {
                id: 'normalSpeed',
                text: 'normalSpeed',
                isVisible: this.normalSpeed
            },
        ]

        this.createButtons(arr, controls);
        this.toHandleEvents(timeline);
        this.showTimelineLength(timeline);
        this.addCss();
        this.positionControlls(controls);
    }

    // create buttons
    createButtons = (arr, controls) => {
        return (
            arr.map((panel) => {
                if (panel.isVisible) {
                    return (
                        controls.insertAdjacentHTML('beforeend', `<button id=${panel.id}>${panel.text}</button>`)
                    )
                }
            })
        )
    }

    // position controlls
    positionControlls = (controls) => {
        return controls.style.left = wrapper.offsetWidth + 'px';
    }

    // show timeline's length
    showTimelineLength = (timeline) => {
        console.log(timeline.totalDuration());
    }

    // link css
    addCss = () => {
        return document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel='stylesheet' type='text/css' href='controller-styles.css'>");
    }

    // handle button's events
    toHandleEvents = (timeline) => {
        if (this.play) {
            play.addEventListener("click", function () { toPlay(timeline) });

            function toPlay(timeline) {
                if (timeline.progress() < 1) {
                    timeline.play()
                } else {
                    timeline.restart();
                }
            }
        }

        if (this.pause) {
            pause.addEventListener("click", function () { toPause(timeline) });
            function toPause(timeline) {
                timeline.pause();
            }

        }

        if (this.reverse) {
            reverse.addEventListener("click", function () { toReverse(timeline) });

            function toReverse(timeline) {
                timeline.reverse();
            }

        }

        if (this.restart) {
            restart.addEventListener("click", function () { toRestart(timeline) });

            function toRestart(timeline) {
                timeline.restart();
            }

        }

        if (this.fastSpeed) {
            fastSpeed.addEventListener("click", function () { toSpeedUp(timeline) });

            function toSpeedUp(timeline) {
                timeline.timeScale(4);
            }

        }

        if (this.normalSpeed) {
            normalSpeed.addEventListener("click", function () { toNormalSpeed(timeline) });

            function toNormalSpeed() {
                timeline.timeScale(1);
            }

        }

    }

}