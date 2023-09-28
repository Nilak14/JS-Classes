// class is used to create object 

//  class -> object 

// Instance properties: what they Have 
//         - name
//         - age 
//         - height

// Instance Methods : what they do 
//         - talk 
//         - run 
//         - jump

//  Constructor runs only once while object is creating

class Rectangle {
    // constructor is used to setup the object
    constructor() {
        this.width = 5;
        this.height = 3
        this.color = 'red';
    }
}
// creating new object using class
let myRectangle1 = new Rectangle();
console.log(myRectangle1)


class Rect {
    constructor(height, width, color) {
        // instance properties
        this.height = height
        this.width = width
        this.color = color
    }

    // instance methods
    getArea() {
        return this.width * this.height
    }


}

let myRect = new Rect(4, 10, 'red');
let myRect1 = new Rect(5, 15, 'black')
// console.log(Rect)
// console.log(Rect1)
console.log(myRect.getArea())