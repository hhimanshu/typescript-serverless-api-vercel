import {VercelRequest, VercelResponse} from "@vercel/node";
import {addressGenerator, AllowedAddressTypes} from "../src/addressGenerator";
import {MAX_ENTRIES_ALLOWED} from "../src/constants";

export default (req: VercelRequest, res: VercelResponse) => {
    const {total = 1, type = 'city'} = req.query
    const totalEntries = total as number
    const addressType = type as AllowedAddressTypes

    if (total > MAX_ENTRIES_ALLOWED) {
        res.status(400).send(`You can ask for maximum of ${MAX_ENTRIES_ALLOWED} entries`);
        return;
    }

    let result = addressGenerator(totalEntries, addressType);
    console.log("result", total, result);
    res.status(200).send({[addressType]: result});
}