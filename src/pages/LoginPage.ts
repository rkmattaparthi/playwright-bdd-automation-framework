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
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }),
      this.signupLoginButton.click()
    ]);
  }

  async login(email: string, password: string) {

    await this.fill(this.emailInput, email);

    await this.fill(this.passwordInput, password);

    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'networkidle' }),
      this.loginButton.click()
    ]);

    // Detect explicit login error shown on the page and throw a clear error
    const loginError = this.page.locator('text=Your email or password is incorrect!');
    const errorCount = await loginError.count();
    if (errorCount > 0) {
      if (await loginError.isVisible()) {
        throw new Error('Login failed: invalid email or password');
      }
    }
  }
}