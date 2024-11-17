import { Actions } from "../helpers/actions";
import { locators } from "../screens/locators";

class HomePage extends Actions {
  private locators;

  constructor() {
    super();
    this.locators = locators;
  }

  async shouldBeOnHomePage() {
    await this.waitForElement(this.locators.productHeader);
  }

  async addToCart() {
    await this.click(this.locators.addToCart);
    await this.pause(1000);
  }

  async goToCart() {
    await this.click(this.locators.cartIcon);
  }

  async shouldSeeCheckoutButton() {
    await this.waitForElement(this.locators.checkoutButton);
  }
}

export default HomePage;
