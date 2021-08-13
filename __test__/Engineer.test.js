// name / id / email / GitHub  getname() getId() getEmail() getRole() getGitHub ()

const Engineer = require('../lib:/Engineer');



// test engineer role
test('getRole() return \'Engineer\'', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'email@email.com', 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
  });


// test github

test('get GitHub username from getGithub()', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Foo', 1, 'email@email.com', testValue);
    expect(e.getGithub()).toBe(testValue);
  });
// name email id from employee