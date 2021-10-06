function sayHiLater() {
    let what = 'hi'
    setTimeout(() => {
        console.log(what)
    }, 3000);
}

sayHiLater()

//sayHiLater then finishes it's code, settimeout goes out and count, waiting, drop an event, and say-
//hey, my time has finished, engine said: any other function listening?


function greeting() {
    let what = 'hi'
    return function() {
        console.log(what)
    }
}

console.dir(greeting())