import { test, expect } from '@playwright/test';

test("Challenging DOM Test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByText('Challenging DOM').click();
    await page.waitForLoadState('load');
    await expect(page.locator('h3')).toContainText('Challenging DOM');
});