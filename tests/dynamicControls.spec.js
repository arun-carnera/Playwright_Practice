import { test, expect } from '@playwright/test';
import DynamicControls from '../pages/dynamicControls.page';

test("Dynamic Controls Test", async ({ page }) => {
    const dynamicControlsPage = new DynamicControls(page);
    await dynamicControlsPage.navigate();
    await dynamicControlsPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    await expect(dynamicControlsPage.DYNAMIC_CONTROLS_HEADER).toBeVisible();
    await expect(dynamicControlsPage.REMOVE_ADD_HEADER).toBeVisible();
    await expect(dynamicControlsPage.ENABLE_DISABLE_HEADER).toBeVisible();

    await expect(dynamicControlsPage.CHECK_BOX).toBeVisible();
    await expect(dynamicControlsPage.ADD_REMOVE_BUTTON).toBeVisible();
    await dynamicControlsPage.ADD_REMOVE_BUTTON.click();
    await page.waitForLoadState('load');
    await expect(page.getByText("It's gone!")).toBeVisible();
    await expect(dynamicControlsPage.CHECK_BOX).not.toBeVisible();

    await expect(page.getByText('Enable/Disable')).toBeVisible();
    await expect(dynamicControlsPage.ENABLE_BUTTON).toBeVisible();
    await expect(dynamicControlsPage.TEXT_BOX).not.toBeEnabled();
    await dynamicControlsPage.ENABLE_BUTTON.click();
    await page.waitForLoadState('load');
    await expect(dynamicControlsPage.ENABLE_BUTTON).not.toBeVisible();
    await expect(dynamicControlsPage.DISABLE_BUTTON).toBeVisible();
    await expect(dynamicControlsPage.TEXT_BOX).toBeEnabled();
    await dynamicControlsPage.TEXT_BOX.fill('Kaushal Bohra');
    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);
    const textBox = await dynamicControlsPage.TEXT_BOX;
    await dynamicControlsPage.DISABLE_BUTTON.click();
    await expect(dynamicControlsPage.ENABLE_BUTTON).toBeVisible();
    await expect(dynamicControlsPage.DISABLE_BUTTON).not.toBeVisible();
    await expect(textBox).toBeDisabled();
});
