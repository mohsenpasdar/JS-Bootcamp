// Callback

const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('error has taken place', undefined)
    }, 2000)
}

getDataCallback((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

// Promise 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is the promise data')
        reject('Error in promise')
    }, 2000)
})

myPromise.then((data)=> {
    console.log(data);
}, (err) => {
    console.log(err);
})

myPromise.then((data)=> {
    console.log(data);
}, (err) => {
    console.log(err);
})