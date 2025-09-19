import {test,expect} from '@playwright/test';
import NestedFrames from '../pages/nestedFrames.page';

test('validate the Nested Frames page', async({page})=>{
   
    const nestedFrames = new NestedFrames(page);
    await nestedFrames.navigate();
    // await page.getByRole('link', {name: 'Nested Frames'}).click();
    // Switch to the top frame, then the middle frame
    //const frameTop = page.locator('frame[name="frame-top"]');
    // const frame = frameTop.contentFrame().locator('frame[name="frame-middle"]');
    await expect(nestedFrames.FRAME.contentFrame().getByText('MIDDLE')).toBeVisible();
});
