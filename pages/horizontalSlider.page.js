export default class HorizontalSlider {
    constructor (page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'Horizontal Slider', exact: true });
        this.PAGE_HEADER = page.getByRole('heading', { name: 'Horizontal Slider' });
        this.PAGE_SUB_HEADER = page.getByRole('heading', { name: 'Set the focus on the slider (' });
        this.SLIDER_VALUE = page.locator("xpath=//span[@id='range']");
        this.SLIDER = page.locator('input[type="range"]');
        this.MOVE_SLIDER_RIGHT = page.keyboard.press('ArrowRight');
        this.MOVE_SLIDER_LEFT = page.keyboard.press('ArrowLeft');
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