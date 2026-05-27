import { test, expect } from '@playwright/test';
import { LoginModel } from './loginModel.spec';


test('Login with valid credentials', async ({ page }) => {
const loginModel = new LoginModel(page)
loginModel.goto()
loginModel.loginWithValidCredentials()

});
