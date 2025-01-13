/* Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array. */

/* Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed. */

let obj = {"a": null, "b": [false, 1]};

function compactObject(obj) {
    if(obj === null || typeof obj !== "object") {
        return obj;
    }

    // if(Array.isArray(obj)) {
    //     return obj.filter(Boolean).map(compactObject);
    // }
    // solve this using loop
    // case for array
    const resArr = [];
    if(Array.isArray(obj)) {
        for(let key in obj) {
            let value = compactObject(obj[key])
            if(value) resArr.push(value);
        }
        return resArr;
    }

    const resObj = {};
    for(let key in obj) {
        let value = compactObject(obj[key]);
        if(value) resObj[key] = value;
    }

    return resObj;
}

console.log(compactObject(obj));