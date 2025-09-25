export default class SlowResources{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Slow Resources', exact:true});
        this.HEADER = page.getByRole('heading', {name: 'Slow Resources'});
        this.SLOWRESOURCE = page.locator('p');
    }

}