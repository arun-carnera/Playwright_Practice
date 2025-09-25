import {test, expect} from '@playwright/test';
import ScrollUP from '../pages/scroll.page';
import { navigate } from '../utils/navigate.utils';

test("Infinite Scroll", async({page}) =>{
    const scroll = new ScrollUP(page);
    await navigate(page, process.env.HOMEPAGE_URL, scroll.PAGE_LINK, scroll.HEADER);
    await expect(scroll.HEADER).toBeVisible();
    await page.evaluate(() => {
      window.scrollTo(0, 500);
    });
});