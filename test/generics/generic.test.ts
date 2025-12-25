describe("Generic", () => {
  class GenericData<T> {
    value: T;
    constructor(value: T) {
      this.value = value;
    }

    get(): T {
      return this.value;
    }

    set(value: T) {
      this.value = value;
    }
  }

  function create<T>(value: T) {
    return value;
  }

  it("should support multiple data type", () => {
    const dataNumber = new GenericData<number>(123);

    // dataNumber.value = "100"; //error
    console.info(dataNumber.value);
    expect(dataNumber.value).toBe(123);

    const dataString = new GenericData<string>("Azzam");
    dataString.value = "Hello";
    console.info(dataString.value);

    const dataBoolean = new GenericData<boolean>(true);
    dataBoolean.value = false;
    console.info(dataBoolean.value);

    const result = create<number>(123);
    expect(result).toBe(123);
  });

  class Entry<K, V> {
    constructor(public key: K, public value: V) {}
  }

  class Triple<T, U, V> {
    constructor(public first: T, public second: U, public third: V) {}
  }

  it("should support multiple generic type", () => {
    const entry = new Entry<string, number>("Azzam", 123);
    expect(entry.key).toBe("Azzam");
    expect(entry.value).toBe(123);

    const triple = new Triple<string, string, number>("Azzam", "Hello", 123);
    expect(triple.first).toBe("Azzam");
    expect(triple.second).toBe("Hello");
    expect(triple.third).toBe(123);
  });

  class SimpleGeneric<T = string> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }

  it("should create simple generic", () => {
    const simple = new SimpleGeneric(); // No need to specify the type because it is already defined as string from the class declaration
    simple.setValue("Azzam");
    // simple.setValue(123);
    // simple.setValue(true);
    expect(simple.getValue()!.toUpperCase).toBe("Azzam");
  });

  interface Employee {
    id: string;
    name: string;
  }

  interface Manager extends Employee {
    totalEmployee: number;
  }

  interface VP extends Manager {
    totalManager: number;
  }

  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }

  it("should support constraint", async () => {
    const data1 = new EmployeeData<Employee>({ id: "1", name: "Azzam" });

    const data2 = new EmployeeData<Manager>({
      id: "2",
      name: "Budi",
      totalEmployee: 10,
    });

    const data3 = new EmployeeData<VP>({
      id: "3",
      name: "Charlie",
      totalEmployee: 10,
      totalManager: 2,
    });

    console.info(data1.employee);
    console.info(data2.employee);
    console.info(data3.employee);
  });

  it("should suppor array generic", () => {
    const names: Array<string> = ["Azzam", "Budi", "Charlie"];
    const numbers: Array<number> = [1, 2, 3];

    expect(names[0]).toBe("Azzam");
    expect(numbers[0]).toBe(1);
  });

  it("should support set generic", () => {
    const set = new Set<string>();
    set.add("Azzam");
    set.add("Budi");
    set.add("Charlie");

    expect(set.size).toBe(3);
    expect(set.has("Azzam")).toBe(true);
    expect(set.has("Budi")).toBe(true);
    expect(set.has("Charlie")).toBe(true);
  });

  it("should support map generic", () => {
    const names: Map<string, string> = new Map<string, string>();
    names.set("1", "Azzam");
    names.set("2", "Budi");
    names.set("3", "Charlie");

    expect(names.get("1")).toBe("Azzam");
    expect(names.get("2")).toBe("Budi");
    expect(names.get("3")).toBe("Charlie");
  });

  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value === "Azzam") {
          resolve("Hello " + value);
        } else {
          reject("Data not found");
        }
      }, 1000);
    });
  }

  it("should support promise generic", async () => {
    const result = await fetchData("Azzam");
    expect(result).toBe("Hello Azzam");

    try {
      await fetchData("Budi");
    } catch (error) {
      expect(error).toBe("Data not found");
    }
  });
});
