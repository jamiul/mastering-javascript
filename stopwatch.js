// In this project, you'll learn Objects
// constructor function
function Stopwatch() {
    let startTime, endTime, isRunning, duration = 0;

    this.start = function() {
        if(isRunning) {
            throw new Error("Stopwatch has already started.");
        }
        isRunning = true;
        startTime = new Date();
    }

    this.stop = function() {
        if(!isRunning) {
            throw new Error('Stopwatch is not started');
        }
        isRunning = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        duration = 0;
        isRunning = false;
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}