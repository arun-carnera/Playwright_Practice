import { test, expect } from '@playwright/test';
import Hovers from '../pages/hover.page';

test('Hovers Test', async ({ page }) => {
    const hoverPage = new Hovers(page);
    await hoverPage.navigate();
    await expect(hoverPage.PAGE_HEADER).toBeVisible();
    await expect(hoverPage.PAGE_SUB_HEADER).toBeVisible();
    await expect(hoverPage.IMAGE_1).toBeVisible();
    await expect(hoverPage.IMAGE_2).toBeVisible();
    await expect(hoverPage.IMAGE_3).toBeVisible();
    await hoverPage.IMAGE_1.hover();
    await expect(hoverPage.USER_1).toBeVisible();
    await hoverPage.IMAGE_2.hover();
    await expect(hoverPage.USER_2).toBeVisible();
    await hoverPage.IMAGE_3.hover();
    await expect(hoverPage.USER_3).toBeVisible();
})