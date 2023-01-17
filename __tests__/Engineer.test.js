const Engineer = require('../lib/Engineer');

test('Allows github username to be set and return', () => {
    const github = 'alexisbenavidez99';
    const testExample = new Engineer('Alexis', 1, 'test@email.com', github);
    expect(testExample.github).toBe(github);
});

test('Allows getRole() to return "Engineer"', () => {
    const role = 'Engineer';
    const testExample = new Engineer('Alexis', 1, 'test@email.com', 'alexisbenavidez99');
    expect(testExample.getRole()).toBe(role);
});

test('Allows getGithub() to return github username', () => {
    const github = 'alexisbenavidez99';
    const testExample = new Engineer('Alexis', 1, 'test@email.com', github);
    expect(testExample.getGithub()).toBe(github);
});
