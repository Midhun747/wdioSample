import { byContentDesc, byText } from "../helpers/androidLocatorHelpers";
import { AndroidElementType } from "../helpers/androidElementType";

const locators = {
  loginHeader: `//android.widget.ScrollView[@content-desc="test-Login"]/android.view.ViewGroup/android.widget.ImageView[1]`,
  username: byContentDesc(AndroidElementType.EDIT_TEXT, "test-Username"),
  password: byContentDesc(AndroidElementType.EDIT_TEXT, "test-Password"),
  loginButton: byContentDesc(AndroidElementType.VIEW_GROUP, "test-LOGIN"),
  standardUser: byText(AndroidElementType.TEXT_VIEW, "standard_user"),
  productHeader: byText(AndroidElementType.TEXT_VIEW, "PRODUCTS"),
  addToCart: `(//android.widget.TextView[@text="ADD TO CART"])[1]`,
  cartIcon: `//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.view.ViewGroup`,
  checkoutButton: byText(AndroidElementType.TEXT_VIEW, "CHECKOUT"),
  };

export { locators };
