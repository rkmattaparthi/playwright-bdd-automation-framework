import { Page, Locator } from '@playwright/test';

export class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async click(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async getText(locator: Locator) {
    return locator.textContent();
  }

  async wait(seconds: number) {
    await this.page.waitForTimeout(seconds * 1000);
  }
}