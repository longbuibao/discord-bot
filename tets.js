function Bird(name) {
    this.name = name
}

Bird.prototype = {
    //  constructor: Bird,
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

const bird = new Bird('yo')
console.log(bird.constructor)