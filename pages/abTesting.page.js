import { expect } from '@playwright/test';

export default class AbTesting {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('A/B Testing');
        this.PAGE_HEADER = page.locator('h3');
        // this.CLICK_HERE_LINK = page.getByText('click here');
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
            await this.page.waitForTimeout(2000);
            await dialog.accept();
        });
    }
}