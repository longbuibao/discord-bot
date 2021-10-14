// const a = {
//     name: 'long',
//     age: 12
// }
// console.log(JSON.parse(JSON.stringify(a)).name)

// const b = {
//     "name": "long"
// }

// console.log(b.name)

//make a string like object in javasript istead of xml
//string of data but look like object literals


// ----------------------------------------------
//FUNCTION ARE OBJECT

//first class function
//everything you can do with other types (object, string, number, boolean), you can do with function
//e.g assign them with variable, pass them arround, create them

// const func = function hello1() { console.log('hello') }
// func()
// console.log(func.name)


//this will point to different object, different thing, depending on how a function is called

// var c = {
//     name: 'c object',
//     log: function() {
//         this.name = 'updated c object'

//         var setname = function(who) {
//             who.name = 'updated again c object'
//         }

//         setname(this)
//     }
// }
// c.log()
// console.log(c)





//js agruments: looklike array, but not a array, it has only 2 properties: length + callee(who's this agruments)



/*


*/
// function silly(name) {
//     console.log(name)
// }

// function silly(...args) {
//     console.log(args)
// }

// silly(1, 2, 3, 4, "long bui")


function hello() {
    const arr = []
    for (var i = 0; i < 3; i++) {
        // tao mot scope function moi de giu lai gia tri cua i, luu lai vao bien j
        // tai sao phai can them bien j?
        // tai vi can co bien j de j tro thanh mot bien co o trong execution context cua- 
        // function moi duoc tao ra
        // -------------------
        // |context   (var j)|
        // |------------------|

        //neu khong co bien j, thi ben trong no cha co bien moi truong nao het, vi vay no van tro-
        // den bien i ben ngoai (which is 3)
        //first way to do that
        // (function() {
        //     var j = i;
        //     arr.push(function() {
        //         console.log(j)
        //     })
        // })();
        // second way to do that :D
        arr.push(
            (function(i) {
                return function() {
                    console.log(i)
                }
            })(i)
        )
    }
    return arr
}

const result = hello()
result[0]()
result[1]()
result[2]()


function hello2() {
    const arr = []
    for (let i = 0; i < 3; i++) {
        //every time this loop run, i will be a new variable in memory
        arr.push(function() {
            console.log(i) // different loop will point to different spot within that memory
        })
    }
    return arr
}

const result2 = hello2()
result2[0]()
result2[1]()
result2[2]()