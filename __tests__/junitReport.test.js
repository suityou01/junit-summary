const JUnitDeserialiser = require("../src/lib/junitDeserialiser");
const JUnitReport = require("../src/lib/junitReport");
const path = require("path");
const fs = require("fs");
const fixturesPath = path.join(__dirname, "fixtures");

describe('src/lib/junitReport.js', () => {
    let xml = "";
    let json = "";
    beforeAll(() => {
        const junitFixture = path.join(fixturesPath, "junit.xml");
        xml = fs.readFileSync(junitFixture, 'utf-8');
        const jud = new JUnitDeserialiser();
        json = jud.deserialise(xml);
    });
    it('should ', () => {
        const jur = new JUnitReport(json);
        console.log(jur.testsuites);
    });
});