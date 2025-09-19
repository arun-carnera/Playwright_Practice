export default class DragAndDropPage {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Drag and Drop');
        this.PAGE_HEADER = page.locator('h3');
        this.SOURCE = page.locator('#column-a');
        this.TARGET = page.locator('#column-b');
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
    }
}