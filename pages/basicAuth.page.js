export default class BasicAuth {
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByText('Basic Auth');
        this.PAGE_HEADER = page.locator('h3');
        this.SUCCESS_TEXT = page.getByText('Congratulations! You must have the proper credentials.');
        this.UNSUCCESSFULL_TEXT = page.getByText('Not authorized');
    }

async navigate() {
        await this.page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
    }
}