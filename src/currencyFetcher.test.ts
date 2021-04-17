import { getCurrencies } from "./currencyFetcher";

describe("Currency Fetcher", () => {
  it("should fetch currency from remote GraphQL endpoint", () => {
    return getCurrencies()
      .then((res) => res.json())
      .then((d) => {
        expect(d).toHaveProperty("data");
        expect(d["data"]).toHaveProperty("rates");
        const rates: unknown[] = d["data"]["rates"];
        expect(rates.length).toBeGreaterThan(1);
        rates.forEach(rate => expect(rate).toHaveProperty("currency"))
      });
  });
});
