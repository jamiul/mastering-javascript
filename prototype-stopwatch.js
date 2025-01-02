function Stopwatch() {
    // property
    let startTime, endTime, isRunning = false, duration = 0;

    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; }
    })

    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; }
    })

    Object.defineProperty(this, 'isRunning', {
        get: function() { return isRunning; },
        set: function() { return isRunning; }
    })

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value; }
    })
}

// Prototypical Instances
Stopwatch.prototype.start = function() {
    if(this.isRunning) {
        throw new Error("Stopwatch is already running !");
    }

    this.startTime = new Date();
    this.isRunning = true;
}

Stopwatch.prototype.stop = function() {
    if(!this.isRunning) {
        throw new Error('Start the stopwatch first !');
    }

    this.endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
}

Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.isRunning = false;
    this.duration = 0;
}
