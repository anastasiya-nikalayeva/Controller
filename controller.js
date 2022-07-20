
class Controller {

    constructor({ container, timeline, play = true, pause = true, reverse = true, restart = true, fastSpeed = true, normalSpeed = true, hideControlls = true  }) {
        container.insertAdjacentHTML('afterend', `<div id='controller'></div>`)
        const controls = document.querySelector('#controller')
        controls.classList.add("active")

        this.play = play;
        this.pause = pause;
        this.reverse = reverse;
        this.restart = restart;
        this.fastSpeed = fastSpeed;
        this.normalSpeed = normalSpeed;
        this.hideControlls = hideControlls;

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

            {
                id: 'hideControlls',
                text: '▲',
                isVisible: this.hideControlls
            },
        ]

        this.createButtons(arr, controls);
        this.toHandleEvents(timeline, controls);
        this.showTimelineLength(timeline);
        this.addCss();
        this.positionControlls(controls, container);
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
    positionControlls = (controls, container) => {
        return controls.style.left = container.offsetWidth + 'px';
    }

    // show timeline's length
    showTimelineLength = (timeline) => {
        console.log(timeline.totalDuration());
    }

    // link css
    addCss = () => {
        const head  = document.getElementsByTagName('head')[0];
        const link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://anastasiya-nikalayeva.github.io/Controller/controller-styles.css';
        link.media = 'all';
        head.appendChild(link);
    }

    // handle button's events
    toHandleEvents = (timeline, controls) => {
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

        if (this.hideControlls) {
            hideControlls.addEventListener("click", function () { toHideControlls(controls) });

            function toHideControlls(controls) {

                if (!controls.classList.contains("active")) {

                    gsap.to(controls, 0.5, { y: 0, x: 0 });
                    controls.classList.add("active");
                    hideControlls.innerHTML = '▲'

                } else {

                    gsap.to(controls, 0.5, { y: - (controls.offsetHeight * (controls.childNodes.length - 1) / controls.childNodes.length), x: 0 });
                    controls.classList.remove("active");
                    hideControlls.innerHTML = '▼'
                }

            }
        }

    }

}