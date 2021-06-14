// Obtain / Require Intern Class
const Manager = require('../lib/Manager');

// Intern Class Constructor Jest test
describe('Manager', () => {
    it('Should set the office number using constructor', () => {
        const testOffice = 10;
        const manager = new Manager('Manager', 1, 'test@noemail.com', testOffice);
        expect(manager.officeNumber).toBe(testOffice);
    });
});

// getRole() Method Jest test
describe('getRole', () => {
    it('Should return \"Manager\" using getRole()', () => {
        const testRole = 'Manager';
        const manager = new Manager('Role', 1, 'test@noemail.com', 10);
        expect(manager.getRole()).toBe(testRole);
    });
});

// getOfficeNumber() Method Jest test
describe('getOfficeNumber', () => {
    it('Should get the office number using getOfficeNumber()', () => {
        const testOfficeNo = 10;
        const manager = new Manager('Office', 1, 'test@noemail.com', testOfficeNo);
        expect(manager.getOfficeNumber()).toBe(testOfficeNo);
    });
});