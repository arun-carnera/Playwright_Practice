import { test, expect } from '@playwright/test';
import BasicAuth from '../pages/basicAuth.page.js';

test("Basic Auth Successful Test", async ({ page }) => {
    const basicAuthPage = new BasicAuth(page);
    await basicAuthPage.navigate();
    await expect(basicAuthPage.PAGE_HEADER).toBeVisible();
    await expect(basicAuthPage.SUCCESS_TEXT).toBeVisible();
});