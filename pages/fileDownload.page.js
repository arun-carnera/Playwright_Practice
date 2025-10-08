export default class FileDownload {
    constructor (page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'File Download', exact: true });
        this.HEADER = page.locator('h3');
        this.FILE1 = page.getByRole('link', { name: 'some-file.txt', exact: true });
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
        await this.PAGE_LINK.click();
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
    }
}