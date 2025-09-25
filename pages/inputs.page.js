export default class Input{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Inputs', exact: true});
        this.HEADER = page.getByRole('heading', { name: 'Inputs' });
        this.INPUT = page.locator('//*[@id="content"]/div/div/div/input');
    }
}