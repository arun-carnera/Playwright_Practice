import {test, expect} from '@playwright/test';
import RederectLink from '../pages/redirectLink.page'
import { navigate } from '../utils/navigate.utils';

test('should validate the redirection', async({page})=>{
    const redirectLink = new RederectLink(page);
    await navigate(page, process.env.HOMEPAGE_URL, redirectLink.PAGE_LINK, redirectLink.HEADER);
    await expect(redirectLink.REDIRECTION).toContainText("This is separate from directly returning a redirection status code, in that some browsers cannot handle a raw redirect status code without a destination page as part of the HTTP response.");
    await redirectLink.HERE.click();
    await expect(redirectLink.STATUS_CODE).toHaveText('Status Codes');
    //await page.goBack();
})