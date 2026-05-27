import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('I log in with username {string} and password {string}', async ({ page }, username: string, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

Then('I should be redirected to the dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.expectLoggedIn();
});

Then('I should see an invalid credentials error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.expectLoginFailed();
});
