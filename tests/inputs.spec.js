import {test, expect} from '@playwright/test';
import Input from '../pages/inputs.page';
import {navigate} from '../utils/navigate.utils';

test("Input", async({page}) =>{
    const input = new Input(page);
    await navigate(page, process.env.HOMEPAGE_URL, input.PAGE_LINK, input.HEADER);
    await input.INPUT.click();
    await page.keyboard.press('ArrowUp');
    await expect(input.INPUT).toHaveValue("1");
})