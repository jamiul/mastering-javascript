/**
 * @param {Function} fn
 * @return {Object}
 */
/* Array.prototype.groupBy = function(fn) {
    let result = {};
    for(let obj of this) {
        const key = fn(obj);
        // if(!result.hasOwnProperty(key)) {
        //     result[key] = [];
        // }
        result[key] = result[key] || [];
        result[key].push(obj);
    }
    return result;
}; */

Array.prototype.groupBy = function(fn) {
    let result = {};
    this.forEach(obj => {
        const key = fn(obj);
        result[key] = result[key] || [];
        result[key].push(obj);
    })
    return result;
}


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

console.log([1,2,3].groupBy(String));