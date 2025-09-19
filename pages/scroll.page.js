export default class ScrollUP{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Infinite Scroll', exact:true});
        this.HEADER= page.getByText('Infinite Scroll');
    }
}