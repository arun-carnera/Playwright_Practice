export default class CheckBoxes {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Checkboxes');
        this.CHECK_BOX1 = page.locator('input[type="checkbox"]').nth(0);
        this.CHECK_BOX2 = page.locator('input[type="checkbox"]').nth(1);
    }

    async navigate(){
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
    }
}