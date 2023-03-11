class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
       const dif1 = p2.x - p1.x;
       const dif2 = p2.y - p1.y;
       return Math.sqrt(dif1**2 + dif2**2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
