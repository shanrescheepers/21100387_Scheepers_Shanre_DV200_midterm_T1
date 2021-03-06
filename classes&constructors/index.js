// Mid Term Assessment: Classes & Constructors 
// Assessment Duration: 45 Min
// Assessment Total: 100
// DV200: Assessment A

// Instructions: 
// Using Classes and the basic principles of OOP, refactor the below procedural code into Object Oriented Code. 

// PART ONE: Super Class 
// 1. Using the information provided below, convert the following variables and functions into a class template called USER. 
// 2. Using the principle of Abstraction, ensure the setSystemId method and sys_id property, are set private
// 3. The setSystemId method must run automatically when the constructor function is invoked.

//PART TWO: Class Inheritance 
// 4. Create a New Class that inherits from your Super class, call this new sub-class 'DivisionHead'
// 5. The constructor method must include 4 Parameters, 'first', 'last', 'department' and 'sector'
// 6. Dont forget to use the super(); function in gain access to the super class properties.  
// 7. Take a look at SNIPPET ONE, include the Method in the sub-class as a public method.

//PART THREE: Final Instance  
// 8. Create a New Class that inherits from your DivisionHead class, call this new sub-class 'Intern'
// 9. The constructor must take two parameters, 'first' and 'last'
// 10. Take a look at SNIPPET TWO, include the Method in the sub-class as a public method.

//PART FOUR: Invoking Constructors 

// 11. Assign a let variable called userEx and create a new instance of the USER class.
// 12. Assign a let variable called divHead and create a new instance of the DivisionHead class.
// 13. Assign a let variable called internOne and create a new instance of the Intern class.
// 14. Invoke the assignHead Method from internOne


// var first = "John";
// var last = "Doe";
// var username = "JohnnyD420";
// var email = "johndoe@genericemail.com"
// var sys_id = "";
// var dutyStatus = false;
class user {
    constructor(first, last, username, email, sys_id, dutyStatus) {
        this.first = first;
        this.last = last;
        this.username = username;
        this.email = email;
        this.sys_id = sys_id;
        this.dutyStatus = dutyStatus;
        //set perm
    };
    setPermissions() {
        console.log(this.sys_id + this.setSystemId + " has been set private");

        function setSystemId() {
            sys_id = Math.round(Math.random() * 100000);
            alert(first + " " + last + " has been assigned system id: " + sys_id);
        };
    };
}
class DivisionHead extends user {
    constructor(first, last, department, sector) {
        super(first, last);
        this.department = department;
        this.sector = sector;
    }

}

function onDuty() {
    if (!dutyStatus) {
        dutyStatus = true;
        message = "On"
        alert(first + " " + last + " is now " + message + " duty...");
    } else {
        dutyStatus = false;
        message = "Off"
        alert(first + " " + last + " is now " + message + " duty...");
    }
}

// SNIPPET ONE: class DivisionHead public method:

updateSector(first, last, sector){
    let value = Math.round(Math.random() * 4);
    const sectors = ['', 'Sector A', 'Sector B', 'Sector C', 'Sector X'];
};
class Intern extends DivisionHead {
    constructor(first, last, sectors) {
        super(first, last);
        this.sectors = sectors[value];

        alert(this.first + " " + this.last + " has been assigned to " + this.sector);
        console.log(this.first + " " + this.last + " has been assigned to " + this.sector);
    }
}
let



// SNIPPET TWO: class Intern public method:
const divHeads = ['', 'Michael Scott', 'Pam Beesly', 'Jim Helpert', 'Creed Baton'];
assignHead(sector, divHeads){
    this.sector = divHeads[value];
    let value = Math.round(Math.random() * 4);
    alert(this.first + " " + this.last + " has been assigned to " + this.sector);

// }
