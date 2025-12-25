describe("Relationship", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const employee: Employee = new Manager("John");
    console.info(employee.name);
  });
});
