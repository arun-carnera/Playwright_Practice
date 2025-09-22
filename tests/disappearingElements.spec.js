import { test, expect } from '@playwright/test';
import DisappearingImagesPage from '../pages/disappearingImages.page';

test("Disappearing Elements Test", async ({ page }) => {
    const disappearingImagesPage = new DisappearingImagesPage(page);
    await disappearingImagesPage.navigate();
    await disappearingImagesPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await expect(disappearingImagesPage.PAGE_HEADER).toContainText('Disappearing Elements');
    const count = await disappearingImagesPage.LIST_ITEMS.count();
    console.log('Original number of menu items:', count);
    let newCount = 0;
    for(let i = 0; 1<5;i++)
    {
        await page.reload();
        newCount = await disappearingImagesPage.LIST_ITEMS.count();
        if(newCount != count)
        {
            console.log('Number of menu items after reload:', newCount);
            break;
        }
    }
    console.log('The number of menu items changing due to disappearing element.');
    expect(newCount).not.toEqual(count);
});