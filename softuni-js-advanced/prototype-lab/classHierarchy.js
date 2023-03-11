function solve() {
    class Figure {
        constructor() {
            this.units = 'cm';
        }
        get area() {
        }

        changeUnits (unit) {
            this.units = unit;
        }

        toString() {
            return `Figures units: ${this.units}`
        }

    }

    class Circle extends Figure {
        constructor(radius) {
            super()
            this.radius = radius;
        }

        get area() {
            let a =  Math.PI * this.radius * this.radius;
            if(this.units === 'mm') {
                return a * 100;
            } else if (this.units === 'm') {
                return a / 10;
            }
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super()
            this.width = width;
            this.height = height;
            super.changeUnits(unit);
        }

        get area() {
            let a = this.width * this.height;
            if(this.units === 'mm') {
                return a * 100;
            } else if (this.units === 'm') {
                return a / 10;
            }
            return this.width * this.height;
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
   
}

let s = solve();
let Circle = s.Circle;
let Rectangle = s.Rectangle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12


console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
