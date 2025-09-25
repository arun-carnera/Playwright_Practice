import {test, expect} from '@playwright/test';
import ShiftingContent from '../pages/shiftingContent.page';
import { navigate } from '../utils/navigate.utils';

test('Validate the shifting content tab', async({page})=>{
 
    const shiftingContent = new ShiftingContent(page);
    // await shiftingContent.navigate();
    // await expect(shiftingContent.HEADER).toBeVisible();
    await navigate(page, process.env.HOMEPAGE_URL, shiftingContent.PAGE_LINK, shiftingContent.HEADER);
    
    await test.step('Example 1 - Validate shifting content menu', async () => {
    await shiftingContent.EX1_MAIN_MANU.click();
    await expect(shiftingContent.SHIFT_CONTENT).toHaveText('Shifting Content: Menu Element');
    await expect(shiftingContent.MENUITEMS.nth(0)).toHaveText('Home');
    await expect(shiftingContent.MENUITEMS.nth(1)).toHaveText('About');
    await expect(shiftingContent.MENUITEMS.nth(2)).toHaveText('Contact Us');
    await expect(shiftingContent.MENUITEMS.nth(3)).toHaveText('Portfolio');
    await expect(shiftingContent.MENUITEMS.nth(4)).toHaveText('Gallery');
    await page.goBack();
    });

    await test.step('Example 2 - Validate shifting content image', async () => {
    await shiftingContent.EX2_IMG.click();
    await expect(shiftingContent.SHIFT_CONTENT).toHaveText('Shifting Content: Image');
    await expect(shiftingContent.IMAGE).toBeVisible();
    await page.goBack();
    });

    await test.step('Example 3 - Validate shifting content list', async () => {
    await shiftingContent.EX3.click();
    await expect(shiftingContent.SHIFT_CONTENT).toHaveText('Shifting Content: List');
    await expect(shiftingContent.SHIFTINGCONTENT).toHaveText("This example demonstrates a list of dynamic content with a static record that constantly moves around.");
    await page.goBack();
    });
});