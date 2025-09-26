import Tesseract from "tesseract.js";

export default class ChallengingDom {
    constructor(page)
    {
        this.page = page;
        this.PAGE_LINK = page.getByText('Challenging DOM');
        this.PAGE_HEADER = page.locator('h3');
        this.PAGE_DESCRIPTION = page.locator("xpath=//*[@id='content']/div/p");
        this.PAGE_CANVAS = page.locator('#canvas');
        this.ELEMENT = (option) => 
            page.locator(`xpath=//*[@id="content"]/div/div/div/div/a[${option}]`);

        this.TABLE_COLUMN = (option) => page.locator(`xpath=//*[@id='content']/div/div/div/div[2]/table/thead/tr/th[${option}]`);
        this.TABLE_CELL = (row,column) => page.locator(`xpath=//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[${row}]/td[${column}]`);
    }

    async navigate(){
        await this.page.goto('https://the-internet.herokuapp.com/');
        await this.page.waitForLoadState('load');
    }

    async canvasText(){
        const screenshotBuffer = await this.PAGE_CANVAS.screenshot();
        const { data: { text } } = await Tesseract.recognize(
            screenshotBuffer,'eng'
        );
        return text;
    }
}