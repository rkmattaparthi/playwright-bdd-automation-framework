import { Browser, Page } from '@playwright/test';

type PlaywrightWorld = {
  browser?: Browser;
  page?: Page;
};

export const world: PlaywrightWorld = {};

export function getWorldPage(): Page {
  if (!world.page) {
    throw new Error('Playwright page is not initialized');
  }

  return world.page;
}

export function getWorldBrowser(): Browser {
  if (!world.browser) {
    throw new Error('Playwright browser is not initialized');
  }

  return world.browser;
}
