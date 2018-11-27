function Person(firstName,lastName, dob){
    this.firstName = firstName
    this.lastName = lastName;
    this.birthday = new Date(dob)
}

//calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() -1970);
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
const mobeen = new Person('Mobeen', 'Raza', '11-02-92');
console.log(mobeen.calculateAge()); 
console.log(mobeen.getFullName());  
/*
    console.log(this)
}
console.log(this);
//const mobeen = new Person('Mobeen',26);
//const moteen = new Person('Moteen',23);

const mobeen = new Person('Mobeen', '11-02-1992');
console.log(mobeen) */

