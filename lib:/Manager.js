const Employee = require ('./Employee')


// office and role rest from employee

module.exports = class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}