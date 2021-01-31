// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma'),
			require('karma-spec-reporter')
		],
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, '../../coverage/nice-ng-pipes'),
			reports: ['text-summary'],
			fixWebpackSourcePaths: true
		},
		reporters: ["spec"],
		specReporter: {
			maxLogLines: 5, // limit number of lines logged per test
			suppressErrorSummary: false, // do not print error summary
			suppressFailed: false, // do not print information about failed tests
			suppressPassed: false, // do not print information about passed tests
			suppressSkipped: true, // do not print information about skipped tests
			showSpecTiming: true, // print the time elapsed for each spec
			failFast: true, // test would finish with error when a first fail occurs.
			failOnEmptyTestSuite: false
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['ChromeHeadless'],
		singleRun: true,
		restartOnFileChange: true
	});
};
