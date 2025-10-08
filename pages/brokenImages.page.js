export default class BrokenImages {
  constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Broken Images');
    }

  async navigate(){
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
    }

  async getBrokenImages(brokenimages) {
        await this.page.on('requestfinished', async (request) => {
            if (request.resourceType() === 'image') {
                const response = await request.response();
                console.log('Image URL:', await request.url(), 'Status:', response ? response.status() : 'No Response');
                if (response && response.status() !== 200) {
                    await brokenimages.push(await request.url());
                }
            }
        });
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(2000);
    }
}