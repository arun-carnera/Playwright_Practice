export default class KEYPresses{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Key Presses', exact: true});
        this.HEADER = page.getByRole('heading', { name: 'Key Presses' });
        this.KEYPRESS= page.locator('//*[@id="content"]/div/p[1]');
        this.SEARCHBOX = page.locator('#target');
        this.RESULT = page.locator('#result');
    }

    async navigate(){
        await this.page.goto("https://the-internet.herokuapp.com");
        await this.PAGE_LINK.click();
    }
}