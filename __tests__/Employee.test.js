const Employee = require('../lib/Employee');

test('Can initiate Employee object', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('Can set name arguments', () => {
    const name = 'Alexis';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Can set ID arguments', () => {
    const id = 1;
    const e = new Employee('Alexis', id);
    expect(e.id).toBe(id);
});

test('Can set email arguments', () => {
    const email = 'test@test.com';
    const e = new Employee('Alexis', 1, email);
    expect(e.email).toBe(email);
});

test('Allows getName() to return name', () => {
    const name = 'Alexis';
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

test('Allows getId() to return ID', () => {
    const id = 1;
    const e = new Employee('Alexis', id);
    expect(e.getId()).toBe(id);
});

test('Allows for getEmail() to return email', () => {
    const email = 'test@test.com';
    const e = new Employee('Alexis', 1, email);
    expect(e.id).toBe(id);
});

test('Allows getRole() to return "Employee"', () => {
    const role = 'Employee';
    const e = new Employee('Alexis', 1, 'test@test.com');
    expect(e.getRole()).toBe(role);
});