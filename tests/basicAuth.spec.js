import { test, expect } from '@playwright/test';
import BasicAuth from '../pages/basicAuth.page.js';

test("Basic Auth test", async ({ page }) => {
    const basicAuthPage = new BasicAuth(page);
    await basicAuthPage.navigate();
    await page.on('dialog', async dialog => {
        await expect(dialog.type()).toBe('prompt'); 
        console.log( dialog.message());
        await expect(dialog.message()).toBe('Sign in');
        await page.waitForTimeout(2000);
    });
    await basicAuthPage.PAGE_LINK.click();
});