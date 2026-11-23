import { TARIFF_RATES, DEFAULT_APPLIANCES } from "../src/tariffs.js";

export default function handler(request) {
  if (request.method !== "GET") {
    return Response.json({ success: false, error: "Method tidak diizinkan" }, { status: 405 });
  }

  return Response.json({
    tariffs: TARIFF_RATES,
    defaultAppliances: DEFAULT_APPLIANCES,
  });
}
