describe("No Generics", () => {
  class Data {
    value: any;
    constructor(value: any) {
      this.value = value;
    }
  }
  it("should accept all values", () => {
    const data = new Data("Azzam");

    // data.value = 100; // error

    console.info(data.value.toUpperCase());
  });
});
