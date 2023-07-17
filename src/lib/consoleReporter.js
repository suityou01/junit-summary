const { Table } = require('console-table-printer');
const chalk = require('chalk');

const heading = chalk.bold.white.bgRed;

class ConsoleReporter {
    _junitReport = {}
    constructor(junitReport){
        this._junitReport = junitReport;
    }
    printSummary = () => {
        console.log(heading("Summary"));
        const p = new Table({
            columns: [
              { name: 'totalTests', alignment: 'right', color: 'green' }, 
              { name: 'totalFailures', alignment: 'right', color: 'red' },
              { name: 'totalErrors', alignment: 'right', color: 'red' }, 
              { name: 'totalTime', alignment: 'right', color: 'yellow' },
            ],
            colorMap: {
              custom_green: '\x1b[32m', // define customized color
            },
          });
        p.addRow({ 
            totalTests: this._junitReport.testsuites.totalTests,
            totalFailures: this._junitReport.testsuites.totalFailures,
            totalErrors: this._junitReport.testsuites.totalErrors,
            totalTime: this._junitReport.testsuites.totalTime,
        });
        p.printTable();
    }
    printFailures = () => {
        console.log(heading("Failures"));
        const p = new Table({
            columns: [
              { name: 'name', alignment: 'right', color: 'green' },
              { name: 'totalTests', alignment: 'right', color: 'blue' },
              { name: 'totalFailures', alignment: 'right', color: 'red' },
              { name: 'totalErrors', alignment: 'right', color: 'red' }, 
              { name: 'totalSkipped', alignment: 'right', color: 'magenta' },
              { name: 'totalTime', alignment: 'right', color: 'yellow' },
            ],
            colorMap: {
              custom_green: '\x1b[32m', // define customized color
            },
          });
        this._junitReport.testsuites.failures.forEach(f => {
            p.addRow({ 
                name: f.name,
                totalTests: f.tests,
                totalFailures: f.failures,
                totalErrors: f.errors,
                totalSkipped: f.skipped,
                totalTime: f.time
            });
        })
        
        p.printTable();
    }
    printSkipped = () => {
        console.log(heading("Skipped"));
        const p = new Table({
            columns: [
              { name: 'name', alignment: 'right', color: 'green' },
              { name: 'totalTests', alignment: 'right', color: 'blue' },
              { name: 'totalFailures', alignment: 'right', color: 'red' },
              { name: 'totalErrors', alignment: 'right', color: 'red' }, 
              { name: 'totalSkipped', alignment: 'right', color: 'magenta' },
              { name: 'totalTime', alignment: 'right', color: 'yellow' },
            ],
            colorMap: {
              custom_green: '\x1b[32m',
            },
          });
        this._junitReport.testsuites.skipped.forEach(f => {
            p.addRow({ 
                name: f.name,
                totalTests: f.tests,
                totalFailures: f.failures,
                totalErrors: f.errors,
                totalSkipped: f.skipped,
                totalTime: f.time
            });
        })
        
        p.printTable();
    }
    printErrors = () => {
        console.log(heading("Errors"));
        const p = new Table({
            columns: [
              { name: 'name', alignment: 'right', color: 'green' },
              { name: 'totalTests', alignment: 'right', color: 'blue' },
              { name: 'totalFailures', alignment: 'right', color: 'red' },
              { name: 'totalErrors', alignment: 'right', color: 'red' }, 
              { name: 'totalSkipped', alignment: 'right', color: 'magenta' },
              { name: 'totalTime', alignment: 'right', color: 'yellow' },
            ],
            colorMap: {
              custom_green: '\x1b[32m', // define customized color
            },
          });
        this._junitReport.testsuites.skipped.forEach(f => {
            p.addRow({ 
                name: f.name,
                totalTests: f.tests,
                totalFailures: f.failures,
                totalErrors: f.errors,
                totalSkipped: f.skipped,
                totalTime: f.time
            });
        })
        
        p.printTable();
    }
    print = () => {
        this.printSummary();
        this.printFailures();
        this.printSkipped();
        this.printErrors();
    }
}

module.exports = ConsoleReporter;