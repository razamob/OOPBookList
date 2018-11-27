class Person{
constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`
}
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName,lastName);

        this.phone = phone;
        this.membership= membership;
    }

    static getMembershipCost(){
        return 500;
    }
}

const mobe  = new Customer('Mobeen', 'Raza', '905-922-1865', 'Standard');

console.log(mobe.greeting());

console.log(Customer.getMembershipCost());