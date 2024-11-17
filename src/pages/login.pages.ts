import { Actions } from "../helpers/actions";
import { locators } from "../screens/locators";

class LoginPage extends Actions {
  private locators;

  constructor() {
    super();
    this.locators = locators;
  }

  async goToLoginPage() {
    await this.waitForElement(this.locators.loginHeader);
  }

  async enterLoginDetails() {
    await this.click(this.locators.standardUser);
    await this.click(this.locators.loginButton);
    await this.pause(1500);
  }
}

export default LoginPage;
