// ***********************************Type Annotation*****************************************//

let numberOfApple:number = 5; //:number is type annotation 
// let numberOfApple:boolean = 5 // this will give an error
console.log(numberOfApple)

let nothing:null=null; 

let date:Date = new Date();
console.log(date)

//Array
let colors:string[] = ['blue','green','yellow'];

let table:number[] = [1,2,3,4];


//classes
class Car {

}
let car:Car = new Car();

//object literal 
let point:{x:number,y:number}={
    x:20,
    y:39,
}

//Functions 

const ln : (i:number)=> void = (i:number) =>{  // (i:number) => void      
    console.log(i);                            //  inputs       output    of the function
}                                              // i is inout    nothing is output

// ***********************************Type Annotation*****************************************//



// *********************************** Type Inference *****************************************//

let numberOfApple2 = 5; // if variable iniatialization and declaration at same it type inference 
                        //Type Inference is typescript guesses the type by itself

//Any
let nameOfPerson;       // here the typescript guesses type as (Any) because it is not define;

//Avoid variable with (Any) Type Everytime
let coordinate;
coordinate=JSON.parse('{x:20,y:30}') // This json.parse function returns type Any
coordinate.sjdsjkdhsjk;  //because of (Any) Type here typescript is not giving error

//Fixing (Any) Type
let coordinate2:{x:number,y:number} = JSON.parse('{x:20,y:30}'); //Here we are defining what value is expected to coordinate varaible from json.parse 

// (coordinate2.djsndjs;) //because of Fixing (Any) Type here typescript is giving an error

//A variable that can be two type depending on different place

let age:number | string = 20;  // very important
age = 'twenty';

// *********************************** Type Inference *****************************************//


//* * * * * ** *** * * * * * * * * * * Functions * * * *  * * * * * * * * * * * * * * * * * * * //

//actual function declararion

const multiply =(a:number,b:number):number=>{
    return a*b;
}

const message = (msg:string):void=>{        //void output function can returns "null" and "undefined"
    console.log(msg);
}

//never type in throw error
const throwError = (err:string):never=>{
    throw new Error(err);
}

//                              Destructuring                          //

const todaysWeather = {
    date:new Date(),
    weather:'sunny',
}

const tomorrowsWeatherDate = ({date,weather}:{date:Date,weather:string}):void => {
    console.log(date);
    console.log(weather);
}

tomorrowsWeatherDate(todaysWeather)




const profile = {
    name11:'taj',
    age:19,
    coords:{
        x:20,
        y:30
    },
    setAge(newAge:number):void{
        this.age = newAge; 
    }
}

const {name11}:{name11:string} = profile;

const {coords:{x,y}}:{coords:{x:number,y:number}} = profile;  // nested object properties


//                              Destructuring                          //


//******************************************* Arrays **********************************************//


const cars:string[][] = [
    ['bmw','mercedes'],
    ['honda','swift']
]                                               //declaration of 2d arrays
console.log(cars);
const newCars = cars.map((car:string[]):string[]=>{
    return car.map((c:string):string=>{
        return c.toUpperCase();
    })
})

console.log(newCars)
//******************************************* Arrays **********************************************//


//******************************************* Tuples *********************************************//

type Drink = [string,number,boolean];

const pepsi:Drink = ['brown',20,true];

const fanta:Drink = ['orange',25,false];

//******************************************* Tuples *********************************************//





//******************************************* Interfaces ****************************************//


const swift = {
    name:'swift',
    year:2012,
    available:true,
}

const printVehicle = (vehicle:{name:string,year:number,available:boolean}):void => {  // witout interface
    console.log(vehicle.name);
    console.log(vehicle.year);
}

printVehicle(swift);



interface Vehicle {
    name:string,
    year:number,
    available:boolean
}

const printVehicle2 = (vehicle:Vehicle):void => {   // Vehicle interface saves that much repeatitive of code
    console.log(vehicle.name)
    console.log(vehicle.year);
}

printVehicle2(swift)

//******************************************* Interfaces ****************************************//


//******************************************** Classes ******************************************//

class Vehicles{
    drive():void{
        console.log("Drive it");
    }
}

const bike = new Vehicles();

bike.drive();

class Truck extends Vehicles{
    horn():void{
        console.log('pom pom');
    }
}

const truck1 = new Truck();
truck1.drive();

//Public    ---------> generally all properties are public in classes
//private
//Protected ---------> can be access by the child classes

class Ship extends Vehicles{
    private sail():void{
        console.log("sailing")
    }

    sailGetter():void{
        this.sail();
    }
}

const ship1 = new Ship();
ship1.sail();    // sail is private now 

// to access this we use getters and setters

ship1.sailGetter(); // Through this we can get sail method 


// Constructors

class Aeroplane{
    speed:number;
    color:string;
    constructor(speed:number,color:string){
        this.speed = speed;
        this.color = color
    }
}

const AirIndia = new Aeroplane(1500,'white');

console.log(AirIndia.color)

//******************************************** Classes ******************************************//
