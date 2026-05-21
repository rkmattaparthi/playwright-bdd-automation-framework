import { When, Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import { getWorldPage } from '../fixtures/world';
import { ProductsPage } from '../pages/ProductPage';

let productsPage: ProductsPage;

When('the user searches for {string}', async function (product: string) {

  const page = getWorldPage();

  productsPage = new ProductsPage(page);

  await productsPage.searchProduct(product);
});

Then('matching products should be displayed', async function () {

  const page = getWorldPage();

  await expect(
    page.locator('.features_items')
  ).toBeVisible();
});