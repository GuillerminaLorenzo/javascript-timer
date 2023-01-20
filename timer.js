class Timer {
    constructor(durationInput, startButton, pauseButton, callback) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callback) {
            this.onStart = callback.onStart;
            this.onTick = callback.onTick;
            this.onPause = callback.onPause;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeLeft);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50);
    }

    pause = () => {
        if (this.onPause) {
            this.onPause();
        }
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.timeLeft <= 0) {
            this.pause();
        } else {
            this.timeLeft = this.timeLeft - .05;
            if (this.onTick){
                this.onTick(this.timeLeft);
            }
        }
    }

    get timeLeft() {
        return parseFloat(this.durationInput.value);
    }

    set timeLeft(time) {
        this.durationInput.value = time.toFixed(2);
    }
}