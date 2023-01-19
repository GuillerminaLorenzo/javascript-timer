class Timer {
    constructor(durationInput, startButton, pauseButton, callback) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callback) {
            this.onStart = callback.onStart;
            this.onTick = callback.onTick;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.timeLeft <= 0) {
            this.pause();
        } else {
            if (this.onTick){
                this.onTick();
            }
            this.timeLeft = this.timeLeft - 1;
        }
    }

    get timeLeft() {
        return parseFloat(this.durationInput.value);
    }

    set timeLeft(time) {
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log('Timer started');
    },
    onTick() {
        console.log('Timer ticked down');
    }
})