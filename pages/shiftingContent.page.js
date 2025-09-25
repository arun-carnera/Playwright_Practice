export default class ShiftingContent{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Shifting Content', exact:true});
        this.HEADER = page.getByRole('heading', {name: 'Shifting Content'});
        this.EX1_MAIN_MANU = page.getByRole('link', {name:'Example 1: Menu Element'});
        this.SHIFT_CONTENT = page.locator('h3');
        this.MENUITEMS = page.locator('ul li');
        this.EX2_IMG = page.getByRole('link', {name:'Example 2: An image'});
        this.IMAGE = page.locator('#content > div > img');
        this.EX3 = page.getByRole('link', {name:'Example 3: List'});
        this.SHIFTINGCONTENT = page.locator('p');
    }
}