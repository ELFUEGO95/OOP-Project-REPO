console.log('Build your own TACO!!')
//here we have the options of taco
class Meat {
    constructor(){
    this.alPastor= "Al Pastor"
    this.carneAsada= "Carne Asada"
    this.polloAsado = "Pollo Asado"
} 
}//end of meat Class
// Here is the method to select meat type , using else if statements
let meatPrompt= prompt(`what kind of meat would you like?
    1. Al Pastor
    2.Carne Asada
    3.Pollo Asado
`)
//depending on what meat is chosen, will print oon console
    if (meatPrompt === "Al Pastor"){
        testMeat = new Meat ()
        console.log ("AL Pastor Taco")
        testMeat.alPastor = "Al Pastor"
    }else if (meatPrompt === "Carne Asada"){
        testMeat = new Meat()
        console.log("Carne Asada Taco")
       testMeat.carneAsada = "Carne Asada"
    }else if (meatPrompt === "Pollo Asado"){
    testMeat = new Meat () 
    console.log("Pollo Asado Taco")
    testMeat.polloAsado = "Pollo Asado"
    }
    // here we will begin our salsa class ,I Dont think it needs a class but it's there lol 
    class Salsa{
        constructor(){
            this.red
            this.green
        }

    }
    // I used an arrow function with the array...
    let salsaOptions = ["1.Red" , "2.Green"]
    let salsaPrompt = prompt(`${salsaOptions.map((salsa) => (" " + salsa + " \n"))}
    Input your salsa here.`) 
// Used if else statement to print out salsa kind
    if (salsaPrompt === "Red"){
        console.log(" with Red salsa")
    }else if(salsaPrompt === "Green"){
        console.log(" with Green salsa")
    }

class Garnish {
    constructor(){
        this.onion='Onion'
        this.tomato= "Tomato"
        this.lettuce= "Lettuce"
    }

}
// here we'll have the prompt for garnish
let  garnishPrompt=prompt("there is the option to have, Onion, Tomato, or Lettuce...")
if (garnishPrompt==="Onion"){
    testGarnish = new Garnish ()
    console.log(`,Onion`)
    testGarnish.Onion = "Onion"
}else if (garnishPrompt==="Tomato"){
    testGarnish = new Garnish()
    console.log(`,Tomato`)
    testGarnish.tomato = "Tomato"
}else if (garnishPrompt==="Lettuce"){
    testGarnish = new Garnish()
    console.log (`,Lettuce`)
}
let tortillaOptions = ["1.Flour" , "2.Corn"]
let tortillaPrompt = prompt(`${tortillaOptions.map((tortilla) => (" " + tortilla + " \n"))}
Choose your Tortilla here.`) 
// Used if else statement to print out our Tortilla kind
if (tortillaPrompt === "Flour"){
    console.log(" and a Flour tortilla")
}else if(tortillaPrompt === "Corn"){
    console.log(" and a Corn Tortilla")
}
// I am still not sure how to put all of this together ih a better way, but every option is being printed out in the console.....

    

