export default class DisappearingImagesPage {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Disappearing Elements');
        this.PAGE_HEADER = page.locator('h3');
        this.LIST_ITEMS = page.locator('.example ul li');
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
    }
}

