import { expect, test, describe } from "bun:test";
import { calculateElectricityBill } from "./calculator";

describe("Kalkulator Tagihan Listrik PLN", () => {
  test("Menghitung tagihan R1 1300VA untuk 250 kWh dengan benar", () => {
    const result = calculateElectricityBill(250, "R1_1300", 3);
    expect(result.baseCost).toBe(361175);
    expect(result.ppjCost).toBe(10835);
    expect(result.adminFee).toBe(3000);
    expect(result.totalCost).toBe(375010);
  });

  test("Mengembalikan tagihan Rp 0 jika pemakaian 0 kWh", () => {
    const result = calculateElectricityBill(0, "R1_1300", 3);
    expect(result.totalCost).toBe(0);
    expect(result.adminFee).toBe(0);
  });

  test("Melempar error jika input kWh bernilai negatif", () => {
    expect(() => calculateElectricityBill(-15, "R1_1300", 3)).toThrow();
  });
});