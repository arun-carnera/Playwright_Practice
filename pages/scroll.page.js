export default class ScrollUP{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Infinite Scroll', exact:true});
        //this.HEADER = page.getByRole('header', {name: 'Infinite Scroll'});
        this.HEADER= page.getByText('Infinite Scroll');
    }

    async navigate(){
        await this.page.goto("https://the-internet.herokuapp.com");
        await this.PAGE_LINK.click();
    }
}