class Square {
    constructor(width) {
        this.width = width;
        this.height = width
    }

    static equals(a, b) {
        return a.width * a.height === b.width * b.height ? 'Equal' : 'Not equal'
    }
}

let sq1 = new Square(5)
let sq2 = new Square(5)
console.log(sq1)
console.log(Square.equals(sq1, sq2))