const JUnitDeserialiser = require("../src/lib/junitDeserialiser");
const path = require("path");
const fs = require("fs");

const fixturesPath = path.join(__dirname, "fixtures");

describe('src/lib/junitDeserialiser', () => {
    let xml = "";
    beforeAll(() => {
        const junitFixture = path.join(fixturesPath, "junit.xml");
        xml = fs.readFileSync(junitFixture, 'utf-8');
    });
    it('should deserialise', () => {
        const jud = new JUnitDeserialiser();
        const json = jud.deserialise(xml);
        console.log(json.testsuites.testsuite[0]);
    });
});