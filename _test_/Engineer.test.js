const Engineer = require("../lib/Engineer");

test("Set GitHub Account via constructor argument", () => {
  const testValue = "engGithub";
  const emp = new Engineer("mo", 11, "test@test.com", testValue);
  expect(emp.github).toBe(testValue);
});

test("getRole() functions correctly", () => {
  const testValue = "Engineer";
  const emp = new Engineer("mo", 11, "test@test.com", "engGithub");
  expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub UN via getGitHub()", () => {
  const testValue = "engGithub";
  const emp = new Engineer("mo", 11, "test@test.com", testValue);
  expect(emp.getGitHub()).toBe(testValue);
});