const Manager = require('../lib/Manager');

// Manager test
test('Should set the office number using constructor', () => {
        const testOffice = 10;
        const manager = new Manager('Manager', 1, 'test@noemail.com', testOffice);
        expect(manager.officeNumber).toBe(testOffice);
    });

// getRole() Method Jest test
test('Should return \"Manager\" using getRole()', () => {
        const testRole = 'Manager';
        const manager = new Manager('Role', 1, 'test@noemail.com', 10);
        expect(manager.getRole()).toBe(testRole);
    });

// getOfficeNumber() Method Jest test
test('Should get the office number using getOfficeNumber()', () => {
        const testOfficeNo = 10;
        const manager = new Manager('Office', 1, 'test@noemail.com', testOfficeNo);
        expect(manager.getOfficeNumber()).toBe(testOfficeNo);
    });
