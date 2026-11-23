export const TARIFF_RATES = {
  R1_900: 1352,
  R1_1300: 1444.70,
  R1_2200: 1444.70,
  R2_3500: 1699.53,
};

export function calculateElectricityBill(kwh, tariffKey = 'R1_1300', ppjPercent = 3) {
  if (typeof kwh !== 'number' || Number.isNaN(kwh) || kwh < 0) {
    throw new Error('Konsumsi kWh tidak boleh negatif atau bukan angka');
  }
  if (!TARIFF_RATES[tariffKey]) {
    throw new Error('Golongan tarif tidak valid');
  }
  if (ppjPercent < 0 || ppjPercent > 100) {
    throw new Error('Persentase PPJ harus antara 0 - 100');
  }

  const rate = TARIFF_RATES[tariffKey];
  const baseCost = kwh * rate;
  const ppjCost = baseCost * (ppjPercent / 100);
  const adminFee = kwh > 0 ? 3000 : 0;
  const totalCost = Math.round(baseCost + ppjCost + adminFee);

  return {
    kwh,
    rate,
    baseCost: Math.round(baseCost),
    ppjCost: Math.round(ppjCost),
    adminFee,
    totalCost,
  };
}