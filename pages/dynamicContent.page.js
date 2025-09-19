export default class DynamicContent {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Dynamic Content');
        this.PAGE_HEADER = page.locator('h3');
        this.SECOND_PARAGRAPH = page.locator('div.large-10').nth(1);
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
    }
}