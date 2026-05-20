import { Before, After } from '@cucumber/cucumber';

Before(async function () {
  console.log('Starting scenario...');
});

After(async function () {
  console.log('Scenario completed...');
});