import {test, expect} from '@playwright/test';
import JsError from "../pages/jsError.page";
import {navigate} from '../utils/navigate.utils';

test ("JavaScript onload event error", async({page}) =>{
    const jsErrorPage = new JsError(page); 
    await navigate(page, process.env.HOMEPAGE_URL, jsErrorPage.PAGE_LINK, jsErrorPage.HEADER);
    await expect(jsErrorPage.ERROR).toHaveText(jsErrorPage.ERROR_MESSAGE);
})

