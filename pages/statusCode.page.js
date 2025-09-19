export default class StatusCode{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Status Codes', exact:true});
        this.HEADER = page.getByRole('heading', {name: 'Status Codes'});
        this.PARA = page.locator('p');
        this.S_CODE_200 = page.getByRole('link', {name: '200'});
        this.S_CODE_301 = page.getByRole('link', {name: '301'});
        this.S_CODE_404 = page.getByRole('link', {name: '404'});
        this.S_CODE_500 = page.getByRole('link', {name: '500'});
    }
}