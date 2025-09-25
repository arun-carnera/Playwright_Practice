import { test, expect } from '@playwright/test';
import ContextMenu from '../pages/contextMenu.page';

test("Context Menu Test", async ({ page }) => {
    const contextMenuPage = new ContextMenu(page);
    await contextMenuPage.navigate();
    await contextMenuPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await page.on('dialog', async dialog => {
        await expect(dialog.message()).toBe('You selected a context menu');
        console.log(dialog.message());
        await dialog.accept();
    });   
    await contextMenuPage.CONTEXT_BOX.click({ button: 'right' });
    await page.waitForTimeout(2000);
})