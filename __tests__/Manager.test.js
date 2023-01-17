const Manager = require('../lib/Manager');

test('Allows office number to be set and return', () => {
    const officeNum = 123;
    const testExample = new Manager('Alexis', 1, 'test@email.com', officeNum);
    expect(testExample.officeNum).toBe(officeNum);
});

test('Allows getRole() to return "Manager"', () => {
    const role = 'Manager';
    const testExample = new Manager('Alexis', 1, 'test@email.com', role);
    expect(testExample.getRole()).toBe(role);
});

test('Allows getOfficeNumber() to return office number', () => {
    const officeNum = 123;
    const testExample = new Manager('Alexis', 1, 'test@email.com', officeNum);
    expect(testExample.getOfficeNumber()).toBe(officeNum);
});