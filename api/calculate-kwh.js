import { calculateBillFromKwh } from "../src/calculator.js";

export default async function handler(request) {
  if (request.method !== "POST") {
    return Response.json({ success: false, error: "Method tidak diizinkan" }, { status: 405 });
  }

  try {
    const body = await request.json();
    const result = calculateBillFromKwh(
      Number(body.kwh),
      body.tariffKey,
      Number(body.ppjPercent ?? 3)
    );
    return Response.json({ success: true, data: result });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 400 });
  }
}
