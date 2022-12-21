const Manager = require('../lib/Manager');

test('Allows office number to be set and return', () => {
    const officeNumber = 123;
    const e = new Manager('Alexis', 1, 'test@test.com', officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

test('Allows getRole() to return "Manager"', () => {
    const role = 'Manager';
    const e = new Manager('Alexis', 1, 'test@test.com', role);
    expect(e.getRole()).toBe(role);
});

test('Allows getOfficeNumber() to return office number', () => {
    const officeNumber = 123;
    const e = new Manager('Alexis', 1, 'test@test.com', officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});