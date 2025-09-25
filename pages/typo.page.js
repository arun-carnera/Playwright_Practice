export default class Typos{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Typos', exact:true});
        this.HEADER = page.getByRole('heading', {name: 'Typos'});
        this.PARA = page.locator('//*[@id="content"]/div/p[1]');
    }
}