const { defineConfig } = require("cypress");
const { allureCypress } = require ("allure-cypress/reporter");
const setupNodeEvents = require("./cypress/plugins/index"); // Your custom setupNodeEvents

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    numTestsKeptInMemory: 1,

    // Modify setupNodeEvents to combine your custom logic and Allure
    setupNodeEvents(on, config) {
      // First, run your custom event handling logic
      setupNodeEvents(on, config); // From ./cypress/plugins/index
      // Then, add the Allure writer configuration
      allureCypress(on, config);

      // Return config
      return config;
    },
  },
});
