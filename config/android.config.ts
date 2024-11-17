import { baseConfig } from "./base.config";

export const config: WebdriverIO.Config = {
  ...baseConfig,
  capabilities: [
    {
      "appium:platformName": "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "midhun_Pixel_9_API_35",
      "appium:platformVersion": "15",
      "appium:app": "./apps/sauce.apk",
      "appium:noReset": false,
      "appium:fullReset": false,
      "appium:appPackage": "com.swaglabsmobileapp",
      "appium:appActivity": "com.swaglabsmobileapp.MainActivity",
    },
  ],
};
