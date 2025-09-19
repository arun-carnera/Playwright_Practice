import { test, expect } from '@playwright/test';
import Frames from '../pages/frames.page';

test('Nested Frames Test', async ({ page }) => {
    const framesPage = new Frames(page);
    await page.pause();
    await framesPage.navigate();
    await framesPage.NESTED_FRAMES_LINK.click();
    await expect(framesPage.MIDDLE_FRAME).toBeVisible();
    await expect(framesPage.MIDDLE_FRAME).toHaveText('MIDDLE');
    await expect(framesPage.LEFT_FRAME).toBeVisible();
    await expect(framesPage.LEFT_FRAME).toHaveText('LEFT');
    await expect(framesPage.RIGHT_FRAME).toBeVisible();
    await expect(framesPage.RIGHT_FRAME).toHaveText('RIGHT');
    await expect(framesPage.BOTTOM_FRAME).toBeVisible();
    await expect(framesPage.BOTTOM_FRAME).toHaveText('BOTTOM');
});

test('IFrames Test', async ({ page }) => {
    const framesPage = new Frames(page);
    await framesPage.navigate();
    await framesPage.I_FRAMES_LINK.click();
    await expect(framesPage.I_FRAMES_HEADER).toBeVisible();
    await expect(framesPage.INSIDE_IFRAME_TEXT).toBeVisible();
    await expect(framesPage.ADMIN_REQUEST_TEXT).toBeVisible();
    await framesPage.INSIDE_IFRAME_TEXT.click();
    await framesPage.ADMIN_REQUEST_TEXT.click();
    await expect(framesPage.IFRAME_CLOSE_BUTTON).toBeVisible();
    await framesPage.IFRAME_CLOSE_BUTTON.click();
    await expect(framesPage.MENU_BAR).toBeVisible();
    await expect(framesPage.INSIDE_IFRAME_TEXTBOX).toBeVisible();
    await framesPage.INSIDE_IFRAME_TEXTBOX.click();
    await expect(framesPage.TEXT_IN_TEXTBOX).toBeVisible();
    await expect(framesPage.TEXT_FORMAT_BOLD).toBeVisible();
    await expect(framesPage.TEXT_FORMAT_ITALIC).toBeVisible();
    await expect(framesPage.CENTER_ALIGN_BUTTON).toBeVisible();
    await expect(framesPage.RIGHT_ALIGN_BUTTON).toBeVisible();
    await expect(framesPage.LEFT_ALIGN_BUTTON).toBeVisible();
    await expect(framesPage.JUSTIFY_ALIGN_BUTTON).toBeVisible();
    await expect(framesPage.DECREASE_INDENT_BUTTON).toBeVisible();
    await expect(framesPage.INCREASE_INDENT_BUTTON).toBeVisible();
    await expect(framesPage.UNDO_BUTTON).toBeVisible();
    await expect(framesPage.REDO_BUTTON).toBeVisible();
});