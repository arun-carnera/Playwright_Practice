export default class JQueryUIMenus{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'JQuery UI Menus', exact: true});
        this.HEADER = page.getByText('JQueryUI - Menu');
        this.ENABLE = page.locator('//*[@id="ui-id-3"]/a');
        this.DOWNLOAD = page.locator('//*[@id="ui-id-4"]/a');
        this.PDF = page.locator('//*[@id="ui-id-5"]/a');
        this.CSV = page.locator('//*[@id="ui-id-6"]/a');
        this.EXCEL = page.locator('#ui-id-7 > a');
        this.BACK_TO_JQUERY_UI= page.locator('//*[@id="ui-id-8"]/a');

    }

    async navigate(){
        await this.page.goto("https://the-internet.herokuapp.com");
        await this.PAGE_LINK.click();
    }

    async downloadFile(fileButtonLocator, filePath) {
        await this.ENABLE.hover();
        await this.page.waitForTimeout(300);
        await this.DOWNLOAD.waitFor({ state: 'visible' });
        await this.DOWNLOAD.hover();
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            fileButtonLocator.click(),]);
        await download.saveAs(filePath);
}
}