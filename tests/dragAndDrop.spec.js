import { test, expect } from '@playwright/test';
import DragAndDropPage from '../pages/dragAndDrop.page.js';

test("Drag and Drop Elements test without using Mouse", async ({ page }) => {
    const dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.navigate();
    await dragAndDropPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await expect(dragAndDropPage.PAGE_HEADER).toContainText('Drag and Drop');
    const source = await dragAndDropPage.SOURCE;
    const target = await dragAndDropPage.TARGET;
    await expect(source).toHaveText('A');
    await expect(target).toHaveText('B');
    await source.dragTo(target);
    await expect(source).toHaveText('B');
    await expect(target).toHaveText('A');
});

test("Drag and Drop Elements Test using mouse", async ({ page }) => {
    const dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.navigate();
    await dragAndDropPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await expect(dragAndDropPage.PAGE_HEADER).toContainText('Drag and Drop');
    const source = await dragAndDropPage.SOURCE;
    const target = await dragAndDropPage.TARGET;
    await expect(source).toHaveText('A');
    await expect(target).toHaveText('B');
    await source.hover();
    await page.mouse.down();
    await target.hover();
    await page.mouse.up();
    await expect(source).toHaveText('B');
    await expect(target).toHaveText('A');
});