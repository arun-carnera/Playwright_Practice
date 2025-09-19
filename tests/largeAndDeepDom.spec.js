import {test, expect} from '@playwright/test';
import LargeAndDeepDOM from '../pages/largeAndDeepDom.page';

 test('should validate the page', async({page}) =>{
    const largeAndDeepDom = new LargeAndDeepDOM(page);
    await largeAndDeepDom.naviagte();
    await expect(largeAndDeepDom.HEADER).toBeVisible();
    await expect(largeAndDeepDom.NOSIBLING).toHaveText('No Siblings');
    await expect(largeAndDeepDom.SIBLING).toHaveText('Siblings');
})

   
