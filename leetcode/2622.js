/**
 * 2622. Cache With Time Limit
 * link: https://leetcode.com/problems/cache-with-time-limit/description/
 */

// Prototypical solution
function TimeLimitedCache() {
    this.cache = new Map();
};


TimeLimitedCache.prototype.set = function(key, value, duration) {

    const hasKey = this.cache.get(key);
    if(hasKey) {
        clearTimeout(hasKey.timeoutId);
    }

    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {value, timeoutId});

    return Boolean(hasKey);

};

TimeLimitedCache.prototype.get = function(key) {
    if(this.cache.has(key)) {
        return this.cache.get(key).value;
    }

    return -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

// Class based solution:
// class TimeLimitedCache {
//     constructor() {
//         this.cache = new Map();
//     }

//     set(key, value, duration) {
//         const hasKey = this.cache.get(key);

//         if(hasKey) {
//             clearTimeout(timeoutId.hasKey);
//         }

//         const timeoutId = setTimeout(() => {
//             this.cache.delete(key);
//         }, duration);

//         this.cache.set(key, {value, timeoutId});

//         return Boolean(hasKey);
//     }

//     get(key) {
//         return this.cache.has(key) ? this.cache.get(key).value : -1;
//     }

//     count() {
//         return this.cache.size;
//     }
// }