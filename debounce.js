// summation function
function doSum(a, b) {
    let add = a + b;
    console.log(`Summation of a and b is : ${add}`);
}

function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        if(timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

const debounceFunc = debounce(doSum, 2000);
debounceFunc(5, 6);