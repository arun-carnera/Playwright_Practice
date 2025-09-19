export default class MultipleWindows{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Multiple Windows', exact: true});
        this.HEADER = page.getByRole('heading', { name: 'Opening a new window' });
        this.CLICKHERE= page.getByRole('link', {name: 'Click Here'});
        // this.SEARCHBOX = page.locator('#target');
        // this.RESULT = page.locator('#result');
    }

    async navigate(){
        await this.page.goto("https://the-internet.herokuapp.com");
        await this.PAGE_LINK.click();
    }

    // async multiplewindow(){
    //     const [newPage] = await Promise.all([
    //         page.context().waitForEvent('page'),
    //         CLICKHERE.click(),]);
    //     await newPage.waitForLoadState();
    //     await expect(newPage.url()).toContain('/windows/new');
    //     await expect(newPage.locator('h3')).toHaveText('New Window');
    // }
}