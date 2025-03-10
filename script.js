// Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding getMakeModel method to Car prototype
Car.prototype.getMakeModel = function() {
    return this.make + " " + this.model;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call the Car constructor
    this.topSpeed = topSpeed;
}

// Inheriting from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;