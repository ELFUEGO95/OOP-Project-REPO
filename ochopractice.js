class Student {
    constructor (firstName,lastName,phoneNumber,grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber= phoneNumber;
        this.grade = grade;
    }
    // ^This is where all classes are initialized

   // a method is a function that belongs to a class which is "introduced"
    introduce(){
        console.log (`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);

    }

}
let student1 = new Student ('Tom', 'Sawyer','5053040171', 'A');
let student2 = new Student ('Argonadura','Ajajmalabafitbulgado','30987654332',"F-");

student1.introduce();
student2.introduce();

class Animal {
    constructor(name,type,weight,height,location) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.height = height;
        this.location = location;
    }
    describe(){
        console.log("Animal Description");
        console.log ("-----------------");
        console.log ("\tName: " + this.name);
        console.log ("\tType: " + this.type);
        console.log ("\tWeight: "+ this.weight + "lb.");
        console.log ("\tHeight: " + this.height + "in.");
        console.log ("\tLocation: " + this.location);
    }
}
 let elephant = new Animal ("Dumbo","elephant",8000,108,"Disneyland");
 elephant.describe();



 
