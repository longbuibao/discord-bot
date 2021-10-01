function a() {
    b()
    var myVar = 2

    function b() {
        console.log(this.myVar)
        console.log(myVar)
    }

    var obj = {
        method: function() {
            console.log(this)
        }
    }

    obj.method()
}

var myVar = 1
a()