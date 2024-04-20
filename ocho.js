console.log("Welcome to ocho.js....");

//here we will choose what kind of tacos we want
class Tacos {
    constructor(meatTypes,garnishTypes,salsaTypes,tortillaTypes){
        this.meatTypes
        this.garnishTypes
        this.salsaTypes 
       this.tortillaTypes 
        this.cheeseTypes
    }
describe(){
    console.log("This is my test tacos:", testTacos);

}
    
} // end of tacos class
let meatOptions = ["Carne Asada","Al Pastor","Barbacoa","Pollo Asado"]
 let meatPrompt = prompt(`${meatOptions.map((meat) => ("-" + meat + " \n"))}
 Input your meat here.`)
 let testTacos = new Tacos(meatPrompt,"lettuce","red")
 console.log("This is my test tacos:", testTacos);

 testTacos.describe()

//salsa class
class Salsa {
    constructor(){
        this.red = null
        this.green = null
    }

    selectedSalsa(){
        console.log("Selecting a salsa...");
        if(this.red != null) {
            console.log("you selected red..");
            return this.red = "red"
        } else if (this.green != null) {
            console.log("you selected green..");
            return this.green = "green"
        }
    }
    
}
class Meat {
    constructor(){
        this.chicken =null
        this.beef= null 
        this.carnitas= null
    }
    selectedMeat(){
        console.log("selecting Protein....");
        if (this.chicken != null){
            console.log("you selected Chicken!..");
            return this.chicken = "chicken"
        }else if (this.beef != null) {
            console.log("you selected BEEF!...");
            return this.beef = "BEEF"
        }else if (this.carnitas != null){
            console.log("You Selected Carnitas!!...");
            return this.carnitas ="Carnitas"
        }
    }
    
    }




//here we have the methods for salsa and meat type let testMeat = null

let meatType = prompt("What meat would you like?")

if(meatType === "chicken"){
testMeat = new Meat()
testMeat.chicken = "chicken"


} else if (meatType === "Beef"){
    testMeat = new Meat()
   testMeat.Beef = "Beef"
    
}
let testSalsa = null

let salsaType = prompt("What salsa would you like?")
let beefType = prompt("What meat would you like?")
if(salsaType === "red"){
testSalsa = new Salsa()
testSalsa.red = "red"


} else if (salsaType === "green"){
    testSalsa = new Salsa()
   testSalsa.green = "green"
    
}



console.log("Salsa!!!!!!!", testSalsa)
testSalsa.selectedSalsa()

//let testTacos = new Tacos(meatType,"lettuce",testSalsa)
//console.log("This is my test tacos:", testTacos);

// testTacos.describe()

//menu class
//class Menu {
  //  constructor () {
   //     this.tacos =[]
  //      this.selectedgarnish

    
   // }
//buildATaco(){
   // console.log("Building your taco...");
//}

//}
