const Intern = require("../lib/Intern");

test("Set School via the constructor argument", () => {
  const testValue = "UCLA";
  const emp = new Intern("mo", 11, "test@test.com", testValue);
  expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
  const testValue = "Intern";
  const emp = new Intern("UCLA", 11, "test@test.com", "UCLA");
  expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
  const testValue = "UCLA";
  const emp = new Intern("mo", 11, "test@test.com", testValue);
  expect(emp.getSchool()).toBe(testValue);
});