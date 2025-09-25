import { test, expect } from '@playwright/test';
import CheckBoxes from '../pages/checkBoxes.page';

test('Check Boxes Test', async ({ page }) => {
    const checkBoxesPage = new CheckBoxes(page);
    await checkBoxesPage.navigate();
    await checkBoxesPage.PAGE_LINK.click();
    await checkBoxesPage.waitForPageLoad();
    await expect(checkBoxesPage.CHECK_BOX1).not.toBeChecked();
    await checkBoxesPage.CHECK_BOX1.check();
    await expect(checkBoxesPage.CHECK_BOX1).toBeChecked();
    await expect(checkBoxesPage.CHECK_BOX2).toBeChecked();
    await checkBoxesPage.CHECK_BOX2.uncheck();
    await expect(checkBoxesPage.CHECK_BOX2).not.toBeChecked();
});