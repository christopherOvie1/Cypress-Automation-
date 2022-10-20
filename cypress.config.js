const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl:"http://www.webdriveruniversity.com",
    env:{
      first_name: "sarah",
      webdriveruni_homepage : "http://www.webdriveruniversity.com"
    }
  },
});
