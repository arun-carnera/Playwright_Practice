export default class ShadowDOM{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Shadow DOM', exact: true});
        this.HEADER = page.getByRole('heading', 'Simple template');
        this.SHADOWDOM = page.locator('//*[@id="content"]/my-paragraph[1]/span')
    }
}