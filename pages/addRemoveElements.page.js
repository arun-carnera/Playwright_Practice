import { expect } from '@playwright/test';

export default class AddRemoveElements {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Add/Remove Elements');
        this.ADD_ELEMENT_BUTTON = page.getByText("Add Element");
        this.DELETE_BUTTON = page.getByText("Delete").nth(0);
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(2000);
        const title = await this.page.title();
        await expect(title).toBe("The Internet");
        await this.page.waitForTimeout(2000);
        await this.PAGE_LINK.click();
        await this.page.waitForLoadState('load');
    }
}