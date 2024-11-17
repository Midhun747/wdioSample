/* eslint-disable class-methods-use-this */
import { browser, $ } from "@wdio/globals";

class Actions {
  async switchToNativeContext() {
    await browser.switchContext("NATIVE_APP");
  }

  async pause(ms: number) {
    await browser.pause(ms);
  }

  async isVisible(locator: string) {
    return !!(await $(locator).isDisplayed());
  }

  async isExisting(locator: string) {
    return !!(await $(locator).isExisting());
  }

  async click(locator: string) {
    await this.waitForElement(locator);
    await $(locator).click();
    await this.pause(1000);
  }

  async waitForElement(locator: string, ms = 4000) {
    await $(locator).waitForDisplayed(ms);
    await this.pause(1000);
  }

  async clearText(locator: string) {
    await $(locator).clearValue();
  }

  async sendText(locator: string, inputText: string) {
    await $(locator).addValue(inputText);
  }

  async getText(locator: string) {
    return $(locator).getText();
  }

  async getAttribute(locator: string, attr: string) {
    return $(locator).getAttribute(attr);
  }
}

export { Actions };
