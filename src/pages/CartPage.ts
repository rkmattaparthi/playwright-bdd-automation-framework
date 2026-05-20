import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  readonly cartButton;

  constructor(page: Page) {

    super(page);

    this.cartButton = page.locator('a[href=\"/view_cart\"]');
  }

  async openCart() {
    await this.click(this.cartButton);
  }
}