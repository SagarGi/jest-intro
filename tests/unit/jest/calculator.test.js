const calculatorModule = require("../../../calculator");

describe("Calculator", () => {
  describe("addition", () => {
    test("adds 1 + 2 equal to 3", () => {
      expect(calculatorModule.add(1, 2)).toBe(3);
    });
  });

  describe("subtraction", () => {
    test("subtraction 1 - 2 equal to -1", () => {
      expect(calculatorModule.subtract(1, 2)).toBe(-1);
    });
  });
});

describe("Mock Function", () => {
  describe("mock add with very basic", () => {
    test("directly mock add fucntion", () => {
      const originalAdd = calculatorModule.add;
      calculatorModule.add = jest.fn().mockImplementation(() => 10);
      expect(calculatorModule.add(1, 1)).toBe(10);
      calculatorModule.add = originalAdd;
      expect(calculatorModule.add(1, 1)).toBe(2);
    });
  });

  describe("mock add ", () => {
    test("when called inside another function applySomeOfAbove", () => {
      const originalAdd = calculatorModule.add;
      calculatorModule.add = jest.fn().mockImplementation(() => 10);
      const res = calculatorModule.applySomeOfAbove();
      expect(res).toBe(14);
      calculatorModule.add = originalAdd;
      expect(calculatorModule.add(1, 1)).toBe(2);
    });
  });

  describe("mock add", () => {
    test("with spy on", () => {
      const spyOnAdd = jest.spyOn(calculatorModule, "add").mockReturnValue(10);
      const res = calculatorModule.applySomeOfAbove();
      expect(spyOnAdd).toBeCalledTimes(1);
      expect(res).toBe(14);
      spyOnAdd.mockRestore();
    });
  });
});
