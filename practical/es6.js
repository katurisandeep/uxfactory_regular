// var x = 6;
// document.write(x);
// 1. round off all the decimal numbers in an array and sum all the values
let decimal = [3.4,5.4, 5,34.5,6.3];
let sum = Math.round(decimal.reduce(e => {
    return e;
}))
console.log(sum);


// 2.get all the person name based on age greater than and equal to 18, eligible to vote
let voterlist = [{name:'Upendra',age: 24},{name:'Pujitha',age: 18},{name:'Kalyan',age: 16}]
let eligible = voterlist.filter(e => {
    return e.age >= 18;
});
console.log(eligible);


//3. sum all the elements of an array [90, 89, 56, 45]
let arr = [90, 89, 56, 45];
sum = arr.reduce((total, num) => {
    console.log(num);
    console.log(total);
    return num + total;
});
console.log(sum);


//5. sum of all the salaries and display it 
var ctc = [
    {
        name : 'kiran',
        salary: 45000,
    },
    {
        name : 'san',
        salary: 10000,
    },
    {
        name : 'kittu',
        salary: 50000,
    },
    {
        name : 'joy',
        salary: 95000,
    }
]
let sal = ctc.reduce((total, num) => {
    return (total + num.salary);
},0)
console.log(sal);


// 4. check element is odd or even in an array [90, 89, 56, 45]
var arry = [90,89,56,45,0];
var check = arry.filter(e =>{
    if(e % 2 === 0){
    document.write(' even number,');
    }
    else{
    document.write(' odd number,');
    }
})

//6. class Animal, methods: walk(), fly(), eat(), run()
// display this
// animal can walk 
// bird can fly
//lion can run
class Animal{
    constructor(walk,fly,run){
        this.Tortoises = walk;
        this.bird = fly;
        this.Lion = run;

    }
    walk(){
        console.log(this.Tortoises + '  will walk');

    }
    fly(){
        console.log(this.bird + '  will fly');

    }
    run(){
        console.log(this.Lion + '  will run');

    }

}
const Hab = new Animal('Tortoises','bird','Lion'); 
console.log(Hab);
Hab.walk();
Hab.fly();
Hab.run();

// inheritense
class electronics{
    constructor(id){
       this.id=id;
    }
    brandName(){
        console.log( 'company name ' +this.id );
    }
    sound(){
        console.log('sound by BANG & OLUFSEN');
    }
    MadeIn(){
        console.log(' made in INDIA');
    }
    Os(){
        console.log(' software '+this.id);
    }
    
}
class laptop extends electronics{
    constructor(id,processor){
     super();
     this.id=id;
     this.processor = processor;
    }
    type(){
       console.log('processor  '+this.processor);
    }
}
class iphone extends electronics{
    constructor(id){
     super();
     this.id=id;
    }
    modle(){
        console.log('latest release '+this.id);
    }
}
class mobile extends electronics{
    constructor(id,wire){
     super();
     this.id=id;
     this.wire = wire;
    }
    ram(){
      console.log('Having ram ' +this.id);
    }
    charge(){
        console.log('charging type'+this.wire);
    }
}
class tablet extends electronics{
    constructor(id,name){
      super();
      this.id=id;
      this.name = name;
    }
    company(){
        console.log('this device belongs to ' +this.id);

    }
    brand(){
        console.log('Belongs to  '+this.name);

    }
}
const lap =new laptop('HP','intel i5');
lap.brandName();
lap.type();
lap.sound();
const mob =new mobile('8GB','wireless');
mob.ram();
mob.charge();
mob.MadeIn();
const apple = new iphone ('13promax');
apple.modle();
const tab = new tablet('Android','SAMSUNG');
tab.Os();
tab.brand();
// spread operator for objects
let spread1 = { A: 37, B: 40 };
let spread2 = { C: 12, D: 25 };
// let spread3 = spread1;
// spread3.A = 25;
// console.log(spread1, spread3);
// using spread operator
let spread3 = {...spread1};
 spread3.A = 25;
 console.log(spread1, spread3);

 //spread operator for array
let arry1 = [100, 25, 67];
let arr2 = [98, 155, 32];
let arr3 = [...arry1, 89, ...arr2];
console.log(arr3);

//destructuring of array
let des1 = [100, 25, 67,70];
let [des2, des4, , des3] = des1;
console.log(des2 + ' ' + des3);

//assign rest of an array to a variable
const ass1 = [100, 25, 67,70];
const [ass2, ...assrest] = ass1;
console.log(assrest);


//assign new variable names to property value
const some = {
    sur: 'katuri',
    mid:'sandeep',
    age1: 22
}
const { sur: surname, mid: midname ,age1:age2} = some;
console.log(surname);
console.log(midname);
console.log(age2);

// variable & substition
let fn = 'sandeep';
let ln = 'katuri';
// let fulln = 'nameis ' + fn + ' ' + ln;
// console.log(fulln);

let fulln = `nameis ${fn}  ${ln}`;
console.log(fulln);


