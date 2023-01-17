const Employee = require('../lib/Employee');

test('Can create Employee object', () => {
    const testExample = new Employee();
    expect(typeof(testExample)).toBe('object');
});

test('Can set name arguments', () => {
    const name = 'Alexis';
    const testExample = new Employee(name);
    expect(testExample.name).toBe(name);
});

test('Can set ID arguments', () => {
    const id = 1;
    const testExample = new Employee('Alexis', id);
    expect(testExample.id).toBe(id);
});

test('Can set email arguments', () => {
    const email = 'test@email.com';
    const testExample = new Employee('Alexis', 1, email);
    expect(testExample.email).toBe(email);
});

test('Allows getName() to return name', () => {
    const name = 'Alexis';
    const testExample = new Employee(name);
    expect(testExample.getName()).toBe(name);
});

test('Allows getId() to return ID', () => {
    const id = 1;
    const testExample = new Employee('Alexis', id);
    expect(testExample.getId()).toBe(id);
});

test('Allows for getEmail() to return email', () => {
    const email = 'test@email.com';
    const testExample = new Employee('Alexis', 1, email);
    expect(testExample.getEmail()).toBe(email);
});

test('Allows getRole() to return "Employee"', () => {
    const role = 'Employee';
    const testExample = new Employee('Alexis', 1, 'test@email.com');
    expect(testExample.getRole()).toBe(role);
});