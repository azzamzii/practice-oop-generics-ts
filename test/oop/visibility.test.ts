describe("Visibility", () => {
  class Counter {
    // private counter: number = 0; // cannot be accessible through the child class, only accessible inside the class
    protected counter: number = 0; // can be accessible through the child class

    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): void {
      this.counter += 2;
    }
  }

  it("should support private", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });

  it("should support protected", () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });
});
