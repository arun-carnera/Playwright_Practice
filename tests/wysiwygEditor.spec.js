import { test, expect } from '@playwright/test';

test.describe('TinyMCE WYSIWYG Editor', () => {

    test.beforeEach('login', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com');
    });

    test('should display warning message when editor loads exceed limit', async ({ page }) => {
        await page.getByRole('link', { name: 'WYSIWYG Editor' }).click();
        const notification = page.locator('div.tox-notification.tox-notification--warning');
        await expect(notification).toBeVisible();
        await expect(notification).toContainText(
            "TinyMCE is in read-only mode because you have no more editor loads available this month.");
        await page.locator('button.tox-notification__dismiss').click(); 
        const frame = page.frameLocator('iframe[title="Rich Text Area"]');
        await expect(frame.locator('body')).toBeVisible();
    });

});
