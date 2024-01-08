const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
  projectId: "2ja4rd",
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 4000,
  responseTimeout: 30000,
  requestTimeout: 5000,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://tree-nation.com/',
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
         const failures = results.tests.some((test) =>
            test.attempts.some((attempt) => attempt.state === 'failed')
          );
         if (!failures) {
            fs.unlinkSync(results.video)
          }
        }
      });
    },
  },
});