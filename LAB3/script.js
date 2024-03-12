//Task 1.2.3
let car1 = new Object();
car1.color = "green";
car1.maxSpeed = 220;

car1.driver = new Object();
car1.driver.name = "Anna Hus";
car1.driver.category = "C";
let driverPropName = "personal limitations";
car1.driver[driverPropName] = "No driving at night";

car1.tuning = true;
let carPropName = "number of accidents";
car1[carPropName] = 0;

//Task 1.2.4
let car2 = {
    color: "violet",
    maxSpeed: 177,
    driver: {
        name: "Anna Hus",
        category: "B",
        "personal limitations": null,
    },
    tuning: false,
    "number of accidents": 2 ,
    
};

//Task 1.2.5
car1.drive = function() {
    console.log("I am not driving at night");
};
console.log("Demonstration of work of the method drive() for car1");
car1.drive();

//Task 1.2.6
car2.drive = function() {
    console.log("I can drive anytime");
};
console.log("Demonstration of work of the method drive() for car2");
car2.drive();

//Task 1.2.7
function Truck(color, weight, avgSpeed, brand, model) {

    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    //Task 1.2.9
    this.trip = function() {
        if (!this.hasOwnProperty("driver")) {
            console.log("No driver assigned");
          } else {
            let message = "Driver " + this.driver.name;
            if (this.driver.nightDriving) {
              message += " drives at night";
            } else {
              message += " does not drive at night";
            }
            message += " and has " + this.driver.experience + " years of experience";
            console.log(message);
    }
   };
};

//Task 1.2.8
Truck.prototype.AssignDriver =
     function(name, nightDriving, experience) {
        this.driver = {
            name: name,
            nightDriving: nightDriving,
            experience: experience,     
  };
};
//Task 1.2.10
let truck1 = new Truck("pink", 10000, 90, "Renault", "Magnum");
truck1.AssignDriver("Anna Hus", true, 5);
console.log("Demonstration of work of the method trip() for truck1");
truck1.trip();
let truck2 = new Truck("teal", 4000, 100, "Volkswagen", "Crafter");
truck2.AssignDriver("Anna Hus", false, 3);
console.log("Demonstration of work of the method trip() for truck2");
truck2.trip();

//Task 1.2.12
class Square {
    //Task 1.2.13
    constructor(a) {
        this.a = a;
    }
    //Task 1.2.14
    static help() {
        console.log("Square is a regular quadrilateral, which means that it has four sides of equal length and four equal angles. \n" +
          "Properties:\n" + " * a (integer) - side of the square.\n");
      }
    //Task 1.2.15
    length() {
        console.log("Sum of all sides = " + this.a * 4);
    }   
    square(){
        console.log("Area = " + this.a * this.a);
    }
    info(){
        console.log('Side lengths = ' + this.a + '\n' + 
        'All angles = 90 degrees'+ '\n');
        this.length();
        this.square();
    }
}


//Task 1.2.16 , 1.2.17
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    static help() {
        console.log("Rectangle is a quadrilateral with four right angles.\n" +
          "Properties:\n" + " * a (integer) - rectangle length\n" + 
          " * b (integer) - rectangle width.\n");
      }
    length() {
        console.log("Sum of all sides = " + (this.a + this.b) * 2);
    }
    square(){
        console.log("Area = " + this.a * this.b);
    }
    info(){
        console.log('Side length = ' + this.a +'\n'+ 
        'Rectangle width = ' + this.b + '\n' +
        'All angles = 90 degrees' + '\n' );
        this.length();
        this.square();
    }
    //Task 1.2.22
    get a() {
        return this._a;
    }
    set a(newA) {
        this._a = newA;
    }
    get b() {
        return this._b;
    }
    set b(newB) {
        this._b = newB;
    }   
 }
 //Task 1.2.18 i 1.2.19
 class Rhombus extends Square{
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }
    static help() {
        console.log("Rhombus is a quadrilateral with all sides have the same length.\n" +
        "Properties:\n" + " * a (integer) - side of the rhombus\n" + 
        " * alpha (integer) - measure of obtuse angle \n" +
        " * beta (integer) - measure of acute angle.\n");
      }
    length() {
         console.log("Sum of all sides = " + this.a * 4);
    }
    square(){
         console.log("Area = " + this.a * this.a * Math.sin(this.alpha*Math.PI/180));
    }
    info(){
        console.log('Side length = ' + this.a + '\n' + 
        "Measure of obtuse angle = " + this.alpha+ '\n' +
        "Measure of acute angle = "+ this.beta + '\n'  );
        this.length();
        this.square();
    }
 }

 //Task 1.2.20 i 1.2.21
 class Parallelogram extends Rhombus{
 constructor(a, b, alpha, beta) {
    super(a, alpha, beta);
    this.b = b;
 }
 static help() {
    console.log("Parallelogram is a quadrilateral with opposite sides are parallel and equal in length.\n" +
    "Properties:\n" + " * a (integer) - parallelogram lenght\n" + 
    " * b (integer) - parallelogram width\n" + 
    " * alpha (integer) - measure of obtuse angle \n" +
    " * beta (integer) - measure of acute angle.\n");
  }
    length() {
      console.log("Sum of all sides = " + (this.a + this.b) * 2);
    }
    square(){
      console.log("Area = " + this.a * this.b * Math.sin((this.alpha * Math.PI) / 180));
    }
    info(){
        console.log('Side length = ' + this.a +'\n'+ 
        'Parallelogram width = ' + this.b + '\n' +
        "Measure of obtuse angle = " +  this.alpha+ '\n' +
        "Measure of acute angle = "+ this.beta + '\n'  );
        this.length();
        this.square();
    }
 }
 //Task 1.2.23
 console.log("Demonstration of work of the method help() for  class Square ");
 Square.help();
  console.log("Demonstration of work of the method help() for  class Rectangle ");
 Rectangle.help();
  console.log("Demonstration of work of the method help() for  class Rhombus ");
 Rhombus.help(); 
  console.log("Demonstration of work of the method help() for  class Parallelogram ");
 Parallelogram.help();

 //Task 1.2.24
 console.log("Demonstration of work of the method info() for  class Square ");
 const SquareObj = new Square(7);
 SquareObj.info();
 console.log("Demonstration of work of the method info() for  class Rectangle ");
 const RectangleObj = new Rectangle(5, 7);
 RectangleObj.info();
  console.log("Demonstration of work of the method info() for  class Rhombus ");
 const RhombusObj = new Rhombus(7, 110, 70);
 RhombusObj.info();
  console.log("Demonstration of work of the method info() for  class Parallelogram ");
 const ParallelogramObj = new Parallelogram(5, 7, 110, 70);
 ParallelogramObj.info();

//Task 1.2.25
function Triangular(a = 3 , b = 4 , c = 5){
     return {a, b, c};
}

//Task 1.2.26
console.log("Demonstration of work of the function Triangular()");
const triangle1 = Triangular();
console.log(triangle1);
const triangle2 = Triangular(7, 8, 9);
console.log(triangle2);
const triangle3 = Triangular(13, 17, 22);
console.log(triangle3);

//Task 1.2.27
function PiMultiplier (num){
    return function(){
        return num * Math.PI;
    }
}

//Task 1.2.28
console.log("Demonstration of work of the function PiMultiplier()");
let PiMultiplierBy2= PiMultiplier(2);
console.log("Pi * 2 = " + PiMultiplierBy2());
let PiMultiplierBy2_3 = PiMultiplier(2/3);
console.log("Pi * 2/3 = " + PiMultiplierBy2_3());
let PiMultiplierBy1_2= PiMultiplier(1/2);
console.log("Pi * 1/2 = " + PiMultiplierBy1_2());

//Task 1.2.29
function Painter(color){
    return function (obj) {
        if (obj.hasOwnProperty("type")) {
          console.log("Color - " + color +'\n' + "Type - " + obj.type);
        } else {
          console.log("No 'type' property occurred!");
        }
      };
    };

//Task 1.2.30
const paintBlue = Painter("blue");
const paintRed = Painter("red");
const paintYellow = Painter("yellow");

//Task 1.2.31
console.log("Demonstration of work of the functions paintBlue() , paintRed() and paintYellow()");
const obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta",
  };
  paintBlue(obj1);
  paintRed(obj1);
  paintYellow(obj1);
  
  const obj2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400,
  };
  paintBlue(obj2);
  paintRed(obj2);
  paintYellow(obj2);
  
  const obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true,
  };
  paintBlue(obj3);
  paintRed(obj3);
  paintYellow(obj3);
