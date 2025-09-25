import { test, expect } from '@playwright/test';
import DynamicLoading from '../pages/dynamicLoading.page';

test("Dynamic Loading Test", async ({ page }) => {
    const dynamicLoadingPage = new DynamicLoading(page);
    await dynamicLoadingPage.navigate();
    await dynamicLoadingPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await expect(dynamicLoadingPage.DYNAMIC_LOADING_HEADER).toContainText('Dynamically Loaded Page Elements');
    await dynamicLoadingPage.EXAMPLE_1_LINK.click();
    await page.waitForLoadState('load');
    await expect(dynamicLoadingPage.HELLO_WORLD).toBeHidden();
    await dynamicLoadingPage.START_BUTTON.click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    await expect(dynamicLoadingPage.HELLO_WORLD).toBeVisible();
    await page.goBack();
    await page.waitForLoadState('load');
    await dynamicLoadingPage.EXAMPLE_2_LINK.click();
    await page.waitForLoadState('load');
    await expect(dynamicLoadingPage.HELLO_WORLD).toBeHidden();
    await dynamicLoadingPage.START_BUTTON.click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000); 
    await expect(dynamicLoadingPage.HELLO_WORLD).toBeVisible();
});