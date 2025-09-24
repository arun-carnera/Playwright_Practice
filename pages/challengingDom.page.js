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
        
        // this.ELEMENT1 = page.locator("xpath=//*[@id='content']/div/div/div/div/a[1]")
        // this.ELEMENT2 = page.locator("xpath=//*[@id='content']/div/div/div/div/a[2]")
        // this.ELEMENT3 = page.locator("xpath=//*[@id='content']/div/div/div/div/a[3]")
        this.TABLE_COLUMN = (option) => page.locator(`xpath=//*[@id='content']/div/div/div/div[2]/table/thead/tr/th[${option}]`);
        // this.TABLE_COLUMN2 = page.locator("xpath=//*[@id='content']/div/div/div/div[2]/table/thead/tr/th[2]");
        // this.TABLE_COLUMN3 = page.locator("xpath=//*[@id='content']/div/div/div/div[2]/table/thead/tr/th[3]");
        // this.TABLE_COLUMN4 = page.locator("xpath=//*[@id='content']/div/div/div/div[2]/table/thead/tr/th[4]");
        // this.TABLE_COLUMN5 = page.locator("xpath=//*[@id='content']/div/div/div/div[2]/table/thead/tr/th[5]");
        // this.TABLE_COLUMN6 = page.locator("xpath=//*[@id='content']/div/div/div/div[2]/table/thead/tr/th[6]");
        // this.TABLE_COLUMN7 = page.locator("xpath=//*[@id='content']/div/div/div/div[2]/table/thead/tr/th[7]");

        this.TABLE_CELL_11 = this.page.locator('xpath=//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td[1]');
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