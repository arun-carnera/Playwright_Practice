import { test, expect } from '@playwright/test';
import AbTesting from '../pages/abTesting.page';

test.describe('Smoke Tests', { tag: '@smoke' }, async ()=> {
  test("A/B Testing ", async ({ page }) => {
    const abTesting = new AbTesting(page);
    await abTesting.navigate();
    const title = await page.title();
    await expect(title).toBe("The Internet");
    await abTesting.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await expect(abTesting.PAGE_HEADER).toContainText('A/B Test');
  })
})