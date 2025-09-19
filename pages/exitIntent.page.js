import { expect } from '@playwright/test';

export default class ExitIntent {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Exit Intent');
        this.PAGE_HEADER = page.getByRole('heading', { name: 'Exit Intent' });
        this.CLICK_HERE_LINK = page.getByText('click here');
        this.CLOSE_BUTTON = page.getByText('Close');
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
    }

    async handleDialog() {
        await this.page.on('dialog', async dialog => {
            await expect(dialog.type()).toBe('prompt');
            console.log(await dialog.message());
            await expect(dialog.message()).toBe('This is a modal window');
            await this.page.waitForTimeout(3000);
            await expect(this.CLOSE_BUTTON).not.toBeVisible();
            await this.CLOSE_BUTTON.click();
        });
    }
}