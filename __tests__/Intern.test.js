const Intern = require('../lib/Intern');

test('Allows school to be set and return', () => {
    const school = 'Vanderbilt';
    const testExample = new Intern('Alexis', 1, 'test@email.com', school);
    expect(testExample.school).toBe(school);
});

test('Allows getRole() to return "Intern"', () => {
    const role = 'Intern';
    const testExample = new Intern('Alexis', 1, 'test@email.com', 'Vanderbilt');
    expect(testExample.getRole()).toBe(role);
});

test('Allows getSchool() to return school', () => {
    const school = 'Vanderbilt';
    const testExample = new Intern('Alexis', 1, 'test@email.com', school);
    expect(testExample.getSchool()).toBe(school);
});