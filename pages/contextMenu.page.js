export default class ContextMenu {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Context Menu');
        this.CONTEXT_BOX = page.locator('#hot-spot');
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
    }
}