export default class Hovers {
    constructor (page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'Hovers', exact: true });
        this.PAGE_HEADER = page.getByRole('heading', { name: 'Hovers' });
        this.PAGE_SUB_HEADER = page.getByText('Hover over the image for additional information');
        this.IMAGE_1 = page.locator("xpath=//div[@class='example']//div[1]//img[1]");
        this.USER_1 = page.locator("xpath=//h5[normalize-space()='name: user1']");
        this.USER_2 = page.locator("xpath=//h5[normalize-space()='name: user2']");
        this.USER_3 = page.locator("xpath=//h5[normalize-space()='name: user3']");
        this.IMAGE_2 = page.locator("xpath=//div[@class='row']//div[2]//img[1]");
        this.IMAGE_3 = page.locator("xpath=//div[3]//img[1]");
    }

    async navigate(){
        await this.page.goto('http://the-internet.herokuapp.com/');
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
        await this.PAGE_LINK.click();
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
    }
}