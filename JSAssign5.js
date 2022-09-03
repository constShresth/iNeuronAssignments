// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);

// obj.getVolume();

// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr**2h
// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr**3
// where r is the radius
// 3) Cone- Volume= πr**2h/3
// where r is the radius and h is the height of the cone.

class Cylinder {

    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * (this.radius ** 2) * this.height).toFixed(4)

    }
}

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }
    getVolume() {
        return ((4 / 3) * Math.PI * (this.radius ** 3)).toFixed(4)
    }
}

class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        return (Math.PI * (this.radius ** 2) * this.height / 3).toFixed(4)
    }
}


let a = new Cylinder(6, 7);
let b = new Sphere(6)
let c = new Cone(6, 7);

console.log(a.getVolume());
console.log(b.getVolume());
console.log(c.getVolume());
