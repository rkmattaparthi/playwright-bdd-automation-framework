import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  readonly signupLoginButton;
  readonly emailInput;
  readonly passwordInput;
  readonly loginButton;

  constructor(page: Page) {

    super(page);

    this.signupLoginButton = page.locator('a[href=\"/login\"]');

    this.emailInput = page.locator('input[data-qa=\"login-email\"]');

    this.passwordInput = page.locator('input[data-qa=\"login-password\"]');

    this.loginButton = page.locator('button[data-qa=\"login-button\"]');
  }

  async openLoginPage() {
    await this.click(this.signupLoginButton);
  }

  async login(email: string, password: string) {

    await this.fill(this.emailInput, email);

    await this.fill(this.passwordInput, password);

    await this.click(this.loginButton);
  }
}