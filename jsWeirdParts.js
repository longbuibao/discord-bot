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

function silly(...args) {
    console.log(args)
}

silly(1, 2, 3, 4, "long bui")