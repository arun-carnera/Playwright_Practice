export default class SecureFileDownload{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Secure File Download', exact:true});
        this.HEADER = page.locator('h3');
        this.AsyncCallBack = page.locator('//*[@id="content"]/div/a[1]');
    }

}