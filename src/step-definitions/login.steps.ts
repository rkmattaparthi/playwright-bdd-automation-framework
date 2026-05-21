import { Given, When, Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import dotenv from 'dotenv';

import { LoginPage } from '../pages/LoginPage';
import { getWorldPage } from '../fixtures/world';

dotenv.config();

let loginPage: LoginPage;

Given('the user navigates to the application', async function () {
  const page = getWorldPage();

  loginPage = new LoginPage(page);

  await page.goto(process.env.BASE_URL!);
});

When('the user logs in with valid credentials', async function () {

  await loginPage.openLoginPage();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

if (!email || !password) {
  throw new Error('EMAIL or PASSWORD missing in .env');
}

await loginPage.login(email, password);
});

Then('the user should successfully login', async function () {

  const page = getWorldPage();

  console.log('Post-login URL:', page.url());
  await page.screenshot({ path: 'screenshots/post-login.png', fullPage: true });

  // Prefer a text-based selector as the site may change hrefs; increase timeout
  await expect(
    page.locator('a:has-text("Logout")')
  ).toBeVisible({ timeout: 10000 });
});