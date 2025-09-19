import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Nested Frames' }).click();
  await page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-middle"]').contentFrame().locator('body').click();
  await page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-middle"]').contentFrame().getByText('MIDDLE').click();
});