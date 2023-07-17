const ConsoleReporter = require("../src/lib/consoleReporter");
const JUnitDeserialiser = require("../src/lib/junitDeserialiser");
const JUnitReport = require("../src/lib/junitReport");
const path = require("path");
const fs = require("fs");
const fixturesPath = path.join(__dirname, "fixtures");

describe('Name of the group', () => {
    let xml = "";
    let json = "";
    let reporter = {};
    beforeAll(() => {
        const junitFixture = path.join(fixturesPath, "junit.xml");
        xml = fs.readFileSync(junitFixture, 'utf-8');
        const jud = new JUnitDeserialiser();
        json = jud.deserialise(xml);
        reporter = new JUnitReport(json);
    });
    it('should ', () => {
        const cr = new ConsoleReporter(reporter);
        cr.print();
    });
});