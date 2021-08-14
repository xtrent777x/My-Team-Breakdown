// name / id / email getname() getId() getEmail() getRole()
const Manager = require ('../lib:/Manager');
const Employee = require ('../lib:/Employee');



// test manager role
test('get()return "Manager"', () => {
    const testValue = 'Manager';
    const m = new Manager('Foo', 1,'email@email.com', 50);
    expect(m.getRole()).toBe(testValue);
});


// office number
test('get office number from getOffice()', () => {
    const testValue = 50;
    const m = new Manager("Foo", 1, "email@email.com", testValue);
    expect(m.getOfficeNumber()).toBe(testValue);
  });

// name id email from employee