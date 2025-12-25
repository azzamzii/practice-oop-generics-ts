describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  // eventhough the parameter is of type Employee, we can pass a Manager or VicePresident object to it.
  function sayHello(employee: Employee) {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello Vice President ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
  }

  it("should support polymorphism", () => {
    let employee: Employee = new Employee("Eko");
    console.info(employee);

    employee = new Manager("Eko"); // this is polymorphism because the employee variable is of type Employee, but we are assigning a Manager object to it.
    console.info(employee);

    employee = new VicePresident("Eko"); // this is polymorphism because the employee variable is of type Employee, but we are assigning a VicePresident object to it.
    console.info(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Eko"));
    sayHello(new Manager("Budi"));
    sayHello(new VicePresident("Joko"));
  });
});
