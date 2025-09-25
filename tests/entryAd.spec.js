import { test } from '@playwright/test';
import EntryAd from '../pages/entryAd.page';

test("Entry Ad Test", async ({ page }) => {
    const entryAdPage = new EntryAd(page);
    await entryAdPage.navigate();
    await entryAdPage.handleDialog();
    await entryAdPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
});
