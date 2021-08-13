// name / id / email getname() getId() getEmail() getRole()
// https://jestjs.io/docs/expect
// https://devhints.io/expectjs
//https://www.tabnine.com/code/javascript/functions/jest/Matchers/toBe
//https://www.tabnine.com/code/javascript/functions/foo
//https://www.youtube.com/watch?v=7r4xVDI2vho
const Employee = require('../lib:/Employee');





// Name
test('Can set name from constructor ', () => {
    const name = 'Jim';
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
// ID
test('Can set id via constructor argument', () => {
    const testValue = 50;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
  });
// EMAIL
test('Can set email via constructor argument', () => {
    const testValue = 'email@email.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
  });
//getName()     *PROJECT REQUIREMENTS*
//getId()
//getEmail()
// getRole()