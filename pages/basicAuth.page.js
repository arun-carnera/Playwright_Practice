export default class BasicAuth {
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByText('Basic Auth');
    }

async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
    }
}