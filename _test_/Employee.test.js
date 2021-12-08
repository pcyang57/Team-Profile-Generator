const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("", () => {
    const newEmp = new Employee();
    expect(typeof newEmp).toBe("object");
  });
  it("set a new emp", () => {
    const testName = "Mohamed";
    const newEmp = new Employee(testName, 11, "email");
    expect(newEmp.name).toBe(testName);
  });
  it("set up the id", () => {
    const id = 11;
    const newEmp = new Employee("name", id, "email");
    expect(newEmp.id).toEqual(id);
  });
  it("set up the email", () => {
    const email = "test@test.com";
    const newEmp = new Employee("name", 11, email);
    expect(newEmp.email).toBe(email);
  });
  it("time to get testName", () => {
    const testName = "Mohamed";
    const newEmp = new Employee(testName, 11, "email");
    expect(newEmp.getName()).toBe(testName);
  });
  it("time to get the id", () => {
    const id = 11;
    const newEmp = new Employee("name", id, "email");
    expect(newEmp.getId()).toBe(id);
  });
  it("time to get the email", () => {
    const email = "test@test.com";
    const newEmp = new Employee("name", 1, email);
    expect(newEmp.getEmail()).toBe(email);
  });
  it(`getRole() should return "Employee"`, () => {
    const newEmp = new Employee();
    expect(newEmp.getRole()).toBe("Employee");
  });
});