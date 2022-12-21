const Manager = require('../lib/Manager');

test('Allows office number to be set and return', () => {
    const office = 2;
    const e = new Manager('Alexis', 1, 'test@test.com', office);
    expect(e.office).toBe(office);
});

test('Allows getRole() to return "Manager"', () => {
    const role = 'Manager';
    const e = new Manager('Alexis', 1, 'test@test.com', role);
    expect(e.getRole()).toBe(role);
});

test('Allows getOfficeNumber() to return office number', () => {
    const office = 2;
    const e = new Manager('Alexis', 1, 'test@test@gmail.com', office);
    expect(e.getOfficeNumber()).toBe(office);
});