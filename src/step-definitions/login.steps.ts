import { Given, When, Then } from '@cucumber/cucumber';

import { chromium, Browser, Page, expect } from '@playwright/test';

import dotenv from 'dotenv';

import { LoginPage } from '../pages/LoginPage';

dotenv.config();

let browser: Browser;

let page: Page;

let loginPage: LoginPage;

Given('the user navigates to the application', async function () {

  browser = await chromium.launch();

  page = await browser.newPage();

  loginPage = new LoginPage(page);

  await page.goto(process.env.BASE_URL!);
});

When('the user logs in with valid credentials', async function () {

  await loginPage.openLoginPage();

  await loginPage.login(
    process.env.EMAIL!,
    process.env.PASSWORD!
  );
});

Then('the user should successfully login', async function () {

  await expect(
    page.locator('a[href=\"/logout\"]')
  ).toBeVisible();

  await browser.close();
});