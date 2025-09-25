import {test, expect} from '@playwright/test';
import MultipleWindows from '../pages/multipleWindows.page'
import { navigate } from '../utils/navigate.utils';

test('Validate the Multiple Window page', async({page})=>{
    const multipleWindows = new MultipleWindows(page);
        await navigate(page, process.env.HOMEPAGE_URL, multipleWindows.PAGE_LINK, multipleWindows.HEADER);
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            multipleWindows.CLICKHERE.click(),
        ]);
        await newPage.waitForLoadState();
        await expect(newPage.url()).toContain('/windows/new');
        await expect(newPage.locator('h3')).toHaveText('New Window');
        // await multipleWindows.multiplewindow();
});