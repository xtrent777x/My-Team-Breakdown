// name / id / email getname() getId() getEmail() getRole()
const Manager = require ('../lib:/Manager');
const Employee = require ('../lib:/Employee');



// office number
test('get office number from getOffice', () => {
const testValue = 50;
const m = new Manager("foo, 1, testValue");
expect(m.getOfficeNumber()).toBE(testValue);
});



// test manager role
test('get()return "Manager"', () => {
    const testValue = 'Manager';
    const M = new Manager('Foo', 1,'email@email.com', 50);
    expect(m.getRole()).toBE(testValue);
});
// name id email from employee