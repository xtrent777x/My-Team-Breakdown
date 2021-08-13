// name / id / email / School getSchool() getname() getId() getEmail() getRole()
const { TestWatcher } = require('jest');
const Intern = require ('../lib:/Intern');




// test intern role
test ('getRole() return \'intern\'', () => {
    const testValue = "Intern";
    const i = new Intern('foo', 1, 'email@email.com', 'BYU');
    expect(i.getRole()).toBe(testValue);
});
// school
test('Can get school from getSchool()', () => {
    const testValue = 'BYU';
    const i = new Intern('Foo', 1, 'email@email.com', testValue);
    expect(i.getSchool()).toBe(testValue);
})
// name id email from employee