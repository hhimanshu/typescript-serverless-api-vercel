import fetch from "node-fetch";

if (!process.env.STAGING_URL) {
  console.error("STAGING_URL is not available in environment variable.");
}

let STAGING_API_ENDPOINT = process.env.STAGING_URL + "/api/";
describe("Address API", () => {
  it('should return "Hello Harit"', () => {
    const name = "Harit";
    return fetch(`${STAGING_API_ENDPOINT} + hello?name=${name}`).then((res) =>
      res.json().then((data) => {
        expect(data).toBe(`Hello ${name}`);
      })
    );
  });
});