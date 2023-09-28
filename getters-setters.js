class Square {
    constructor(width) {
        this.width = width
        this.height = width;
    }

    get area() {
        return this.width * this.height
    }

    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
}

let mySq1 = new Square(25);

mySq1.area = 25
console.log(mySq1.area);