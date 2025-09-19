import { test, expect } from '@playwright/test';
import DisappearingImagesPage from '../pages/disappearingImages.page';

test("Disappearing Elements Test", async ({ page }) => {
    const disappearingImagesPage = new DisappearingImagesPage(page);
    await disappearingImagesPage.navigate();
    await disappearingImagesPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await expect(disappearingImagesPage.PAGE_HEADER).toContainText('Disappearing Elements');
    const count = await disappearingImagesPage.LIST_ITEMS.count();
    console.log('Number of menu items:', count);
    await page.reload();
    const newCount = await disappearingImagesPage.LIST_ITEMS.count();
    console.log('Number of menu items after reload:', newCount);
    await expect(newCount).not.toEqual(count); 
});