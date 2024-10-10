
const taskStatus = false;

// define promise
const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(taskStatus){
            resolve('proceed your task');
        } else {
            reject('failed');
        }
    }, 2000);
});

promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(error){
        console.log(error);
    })