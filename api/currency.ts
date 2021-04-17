import { VercelRequest, VercelResponse } from "@vercel/node";
import { getCurrencies } from "../src/currencyFetcher";

export default async (req: VercelRequest, res: VercelResponse) => {
  getCurrencies()
    .then((response) => response.json())
    .then((json) => res.status(200).send(json));
};
