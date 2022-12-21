const Intern = require('../lib/Intern');

test('Allows school to be set and return', () => {
    const school = 'Vanderbilt';
    const e = new Intern('Alexis', 1, 'test@test.com', school);
    expect(e.school).toBe(school);
});

test('Allows getRole() to return "Intern"', () => {
    const role = 'Intern';
    const e = new Intern('Alexis', 1, 'test@test.com', 'Vanderbilt');
    expect(e.getRole()).toBe(role);
});

test('Allows getSchool() to return school', () => {
    const school = 'Vanderbilt';
    const e = new Intern('Alexis', 1, 'test@test@gmail.com', school);
    expect(e.getSchool()).toBe(school);
});