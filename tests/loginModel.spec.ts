import { expect, type Locator, type Page } from '@playwright/test';

export class LoginModel {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await this.page.goto('/web/index.php/auth/login');
  }

  async loginWithValidCredentials() {
    await this.page.getByRole('textbox', {name: "Username"}).fill('Admin')
    await this.page.getByRole('textbox', {name: "Password  "}).fill('admin123')
    await this.page.getByRole('button', {name: "Login"}).click({timeout: 20000})

    await this.page.waitForSelector('.oxd-topbar-header-breadcrumb-module')
    await expect(this.page.getByText('Dashboard').first()).toBeVisible();
  }
}