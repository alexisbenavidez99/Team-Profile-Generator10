const Engineer = require('../lib/Engineer');

test('Allows github username to be set and return', () => {
    const github = 'alexisbenavidez99';
    const e = new Engineer('Alexis', 1, 'test@test.com', github);
    expect(e.github).toBe(github);
});

test('Allows getRole() to return "Engineer"', () => {
    const role = 'Engineer';
    const e = new Engineer('Alexis', 1, 'test@test.com', 'alexisbenavidez99');
    expect(e.getRole()).toBe(role);
});

test('Allows getGithub() to return github username', () => {
    const github = 'alexisbenavidez99';
    const e = new Engineer('Alexis', 1, 'test@test.com', github);
    expect(e.getGithub()).toBe(github);
});
