const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});
