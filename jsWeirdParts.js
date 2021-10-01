document.getElementById('sendButton').addEventListener('click', () => alert('hello'))

let n = 0

//this need to be done, then the click event can be execute
while (n < 10e+4) {
    n++
    console.log(n)
}