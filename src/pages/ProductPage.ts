import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {

  readonly productsButton;

  readonly searchInput;

  readonly searchButton;

  constructor(page: Page) {

    super(page);

    this.productsButton = page.locator('a[href=\"/products\"]');

    this.searchInput = page.locator('#search_product');

    this.searchButton = page.locator('#submit_search');
  }

  async searchProduct(product: string) {

    await this.click(this.productsButton);

    await this.fill(this.searchInput, product);

    await this.click(this.searchButton);
  }
}