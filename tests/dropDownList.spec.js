import { test, expect } from '@playwright/test';
import DropDownListPage from '../pages/dropDownList.page.js';

test("Dropdown List test", async ({ page }) => {
    const dropDownListPage = new DropDownListPage(page);
    await dropDownListPage.navigate();
    await dropDownListPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await expect(dropDownListPage.PAGE_HEADER).toContainText('Dropdown List');
    await dropDownListPage.DROP_DOWN.selectOption('1');
    await page.waitForTimeout(2000);
    await expect(dropDownListPage.DROP_DOWN).toHaveValue('1');
    await dropDownListPage.DROP_DOWN.selectOption('2');
    await page.waitForTimeout(2000);
    await expect(dropDownListPage.DROP_DOWN).toHaveValue('2');
    await page.waitForTimeout(2000);
});