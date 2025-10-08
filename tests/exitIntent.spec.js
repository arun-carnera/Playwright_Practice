import { test, expect } from '@playwright/test';
import ExitIntent from '../pages/exitIntent.page';

test("Exit Intent test", async ({ page }) => {
    const exitIntentPage = new ExitIntent(page);
    await exitIntentPage.navigate();
    await exitIntentPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await expect(exitIntentPage.PAGE_HEADER).toBeVisible();
    const viewPortSize = page.viewportSize();
    console.log("viewPortSize: ", viewPortSize);
    const height = viewPortSize ? viewPortSize.height : 0;
    console.log("height: ", height);
    const width = viewPortSize ? viewPortSize.width : 0;
    console.log("width: ", width);
    await exitIntentPage.handleDialog();
    await page.waitForTimeout(1000);
    await page.mouse.move(width + 1000, height + 1000);
    await page.mouse.click(width + 1000, height + 1000,'left');
    await page.waitForTimeout(3000);
});