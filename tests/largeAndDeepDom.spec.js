import {test, expect} from '@playwright/test';
import LargeAndDeepDOM from '../pages/largeAndDeepDom.page';
import {navigate} from '../utils/navigate.utils';

 test('should validate the page', async({page}) =>{
    const largeAndDeepDom = new LargeAndDeepDOM(page);
    await navigate(page, process.env.HOMEPAGE_URL, largeAndDeepDom.PAGE_LINK, largeAndDeepDom.HEADER);
    await expect(largeAndDeepDom.NOSIBLING).toHaveText('No Siblings');
    await expect(largeAndDeepDom.SIBLING).toHaveText('Siblings');
})

   
