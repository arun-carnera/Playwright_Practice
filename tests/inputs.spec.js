import {test, expect} from '@playwright/test';
import Input from '../pages/input.page';

test("Input", async({page}) =>{
    const input = new Input(page);
    await input.navigate();
    await expect(input.HEADER).toBeVisible;
    await input.INPUT.click();
})