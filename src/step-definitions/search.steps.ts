import { When, Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import { ProductsPage } from '../pages/ProductsPage';

let productsPage: ProductsPage;

When('the user searches for {string}', async function (product: string) {

  productsPage = new ProductsPage(page);

  await productsPage.searchProduct(product);
});

Then('matching products should be displayed', async function () {

  await expect(
    page.locator('.features_items')
  ).toBeVisible();
});