import {test, expect} from '@playwright/test';
import Typos from '../pages/typo.page';
import { navigate } from '../utils/navigate.utils';

test('Tepo test', async({page}) =>{
    const typos = new Typos(page);
    await navigate(page, process.env.HOMEPAGE_URL, typos.PAGE_LINK, typos.HEADER);
    await expect(typos.PARA).toContainText("This example demonstrates a typo being introduced. It does it randomly on each page load.");

});