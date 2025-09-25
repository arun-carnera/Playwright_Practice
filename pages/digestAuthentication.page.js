export default class DigestAuthentication {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Digest Authentication');
        this.PAGE_HEADER = page.locator('h3');
        this.SUCCESS_TEXT = page.getByText('Congratulations! You must have the proper credentials.');
    }

    async navigate() {
        await this.page.goto("https://admin:admin@the-internet.herokuapp.com/digest_auth");
        await this.page.waitForLoadState('load');
    }
}