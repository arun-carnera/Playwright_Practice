import {test, expect} from '@playwright/test';
import ShadowDOM from '../pages/shadowDOM.page';
import { navigate } from '../utils/navigate.utils';

test('Validate the shadow DOM', async({page})=>{
    const shadowDOM = new ShadowDOM(page);
    await navigate(page, process.env.HOMEPAGE_URL, shadowDOM.PAGE_LINK, shadowDOM.HEADER);
    await expect(shadowDOM.SHADOWDOM).toHaveText("Let's have some different text!");
});