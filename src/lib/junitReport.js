class JUnitReport {
    _raw  = "";
    _tests = 0;
    _failures = 0;
    _errors = 0;
    _time = 0;
    
    #setSummary() {
        this._tests = this._raw.testsuites['@_tests'];
        this._failures = this._raw.testsuites['@_failures'];
        this._errors = this._raw.testsuites['@_errors'];
        this._time = this._raw.testsuites['@_time'];
    }

    constructor(jsonJunit){
        this._raw = jsonJunit;
        this.#setSummary();
    }

    get testsuites () {
        return {
            totalTests: Number(this._tests),
            totalFailures: Number(this._failures),
            totalErrors: Number(this._errors),
            totalSkipped: this._raw.testsuites.testsuite.reduce((a,b) => {
                return a + Number(b['@_skipped'])
            }, 0),
            totalTime: Number(this._time),
            failures: this._raw.testsuites.testsuite.filter(ts => Number(ts['@_failures']) > 0).map(({testcase, ...rest}) => ({
                name: rest['@_name'],
                errors: rest['@_errors'],
                failures: rest['@_failures'],
                skipped: rest['@_skipped'],
                timestamp: rest['@_timestamp'],
                time: rest['@_time'],
                tests: rest['@_tests'],
            })),
            errors: this._raw.testsuites.testsuite.filter(ts => Number(ts['@_errors']) > 0).map(({testcase, ...rest}) => ({
                name: rest['@_name'],
                errors: rest['@_errors'],
                failures: rest['@_failures'],
                skipped: rest['@_skipped'],
                timestamp: rest['@_timestamp'],
                time: rest['@_time'],
                tests: rest['@_tests'],
            })),
            skipped: this._raw.testsuites.testsuite.filter(ts => Number(ts['@_skipped']) > 0).map(({testcase, ...rest}) => ({
                name: rest['@_name'],
                errors: rest['@_errors'],
                failures: rest['@_failures'],
                skipped: rest['@_skipped'],
                timestamp: rest['@_timestamp'],
                time: rest['@_time'],
                tests: rest['@_tests'],
            })),
        }
    }
}

module.exports = JUnitReport;