import fetch from "node-fetch";
import {CURRENCY_GRAPHQL_ENDPOINT} from "./constants";

const query = `{
    rates(currency: "USD") {
        currency
    }
}`;
export const getCurrencies = async () => {
    return await fetch(CURRENCY_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
};
