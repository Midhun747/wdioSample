import { Given,When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pages/login.pages";
import HomePage from "../pages/home.pages";

const loginPage = new LoginPage();
const homePage = new HomePage();

Given("I launch the app", async () => {
  await loginPage.goToLoginPage();
});

When("I login as a standard username", async () => {
  await loginPage.enterLoginDetails();
});

Then("I should be on the home page", async () => {
  await homePage.shouldBeOnHomePage();
});

When("I try to add an item to the cart", async () => {
  await homePage.addToCart();
});

Then("I should be able to see the added item in the cart", async () => {
  await homePage.goToCart();
});

Then("I should be able to checkout the item", async () => {
  await homePage.shouldSeeCheckoutButton();
});
