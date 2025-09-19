import {test, expect} from '@playwright/test';
import MultipleWindows from '../pages/multipleWindows.page'

test('Validate the Multiple Window page', async({page})=>{
    const multipleWindows = new MultipleWindows(page);
        await multipleWindows.navigate();
        await expect(multipleWindows.HEADER).toBeVisible();
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            multipleWindows.CLICKHERE.click(),
        ]);
        await newPage.waitForLoadState();
        await expect(newPage.url()).toContain('/windows/new');
        await expect(newPage.locator('h3')).toHaveText('New Window');
        // await multipleWindows.multiplewindow();
})