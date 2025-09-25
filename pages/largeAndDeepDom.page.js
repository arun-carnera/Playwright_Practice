export default class LargeAndDeepDOM{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Large & Deep DOM'});
        this.HEADER = page.getByRole('heading', { name: 'Large & Deep DOM'});
        this.NOSIBLING = page.locator('//*[@id="content"]/div/h4[1]');
        this.SIBLING = page.locator('//*[@id="content"]/div/h4[2]');
    }
}