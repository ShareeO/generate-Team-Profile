// Obtain / Require Intern Class
const Intern = require('../lib/Intern');

// Intern Class Constructor Jest test
test('Should set school using constructor', () => {
        const testSchool = 'University of Birmingham';
        const intern = new Intern('School', 1, 'test@noemail.com', testSchool);
        expect(intern.school).toBe(testSchool);
    });

// getRole() Method Jest test
test('Should return \"Intern\" using getRole()', () => {
        const testRole = 'Intern';
        const intern = new Intern('Role', 1, 'test@noemail.com', 'University of Birmingham');
        expect(intern.getRole()).toBe(testRole);
    });

// getSchool() Method Jest test
test('Should get school using getSchool()', () => {
        const testSchool = 'University of Birmingham';
        const intern = new Intern('School', 1, 'test@noemail.com', testSchool);
        expect(intern.getSchool()).toBe(testSchool);
    });
