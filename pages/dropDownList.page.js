export default class DropDownListPage {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Dropdown');
        this.PAGE_HEADER = page.locator('h3');
        this.DROP_DOWN = page.locator('#dropdown');
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
    }
}