import type { Options } from "@wdio/types";
import { generate } from 'multiple-cucumber-html-reporter';

export const baseConfig: Options.Testrunner = {
  runner: "local",
  services: [
    [
      "appium",
      {
        args: {
          address: "127.0.0.1",
          port: 4724,
        },
      },
    ],
  ],
  port: 4724,
  tsConfigPath: "./tsconfig.json",
  specs: ["../src/features/**/*.feature"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "cucumber",
  cucumberOpts: {
    require: ["./src/stepDefinitions/**/*.ts"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tags: "",
    timeout: 25000,
    ignoreUndefinedDefinitions: false,
    format: [`json:results/${process.env.BUILD_ID || ""}/cucumber_report.json`],
  },
  onComplete: async () => {
    // Generate the multiple cucumber HTML report
    await generate({
      jsonDir: './reports/cucumber-json', // Directory containing JSON files
      reportPath: './reports/multiple-cucumber-html', // Output directory for HTML report
      metadata: {
        browser: {
          name: 'chrome',
          version: 'latest',
        },
        device: 'Local Machine',
        platform: {
          name: 'macOS',
          version: '12.3.1',
        },
      },
    });
  },
};