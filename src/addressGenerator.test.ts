import {addressGenerator} from "./addressGenerator";

describe("Address Generator", () => {
    it('should return 4 cities when asked about it', () => {
        let cities = addressGenerator(4, "city");
        expect(cities).toHaveLength(4);
    });
})