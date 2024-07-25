import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.locator('.new-todo').click();
  await page.getByPlaceholder('What needs to be done?').fill('new to do');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByLabel('Toggle Todo').check();
});