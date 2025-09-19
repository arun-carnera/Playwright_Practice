import {test, expect} from '@playwright/test';
import ScrollUP from '../pages/scroll.page';

test("Infinite Scroll", async({page}) =>{
    const scroll = new ScrollUP(page);
    await scroll.navigate();
    await expect(scroll.HEADER).toBeVisible();
    await page.evaluate(() => {
      window.scrollTo(0, 500);
    });
});