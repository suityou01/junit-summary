#!/usr/bin/env node

const ConsoleReporter = require("../src/lib/consoleReporter");
const JUnitDeserialiser = require("../src/lib/junitDeserialiser");
const JUnitReport = require("../src/lib/junitReport");
const path = require("path");
const fs = require("fs");
const chalk = require('chalk');
const error = chalk.bold.white.bgRed;

const patharg = process.argv[2];
const fullPath = path.join(__dirname, '../', patharg);
if(!fs.existsSync(fullPath)){
    console.log(error(`File ${fullPath} could not be found`));
}
const xml = fs.readFileSync(fullPath, 'utf-8');
const jud = new JUnitDeserialiser();
const json = jud.deserialise(xml);
const report = new JUnitReport(json);
const consoleReporter = new ConsoleReporter(report);
consoleReporter.print();