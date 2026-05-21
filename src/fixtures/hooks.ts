import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import dotenv from 'dotenv';

import { world } from './world';

dotenv.config();

setDefaultTimeout(60 * 1000);

Before(async function () {
  // Validate required env vars early to fail fast with a helpful message
  const missing: string[] = [];
  if (!process.env.BASE_URL) missing.push('BASE_URL');
  if (!process.env.EMAIL) missing.push('EMAIL');
  if (!process.env.PASSWORD) missing.push('PASSWORD');
  if (missing.length) {
    throw new Error(`Missing required env vars: ${missing.join(', ')}. Please add them to your .env`);
  }

  world.browser = await chromium.launch();
  world.page = await world.browser.newPage();
});

After(async function () {
  if (world.browser) {
    await world.browser.close();
  }

  world.browser = undefined;
  world.page = undefined;

  console.log('Scenario completed...');
});