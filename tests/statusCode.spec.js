import {test, expect} from '@playwright/test';
import StatusCode from '../pages/statusCode.page';
import { navigate } from '../utils/navigate.utils';


test('Status Code Test Suite', async({page}) => {

    const statusCode = new StatusCode(page);
    await navigate(page, process.env.HOMEPAGE_URL, statusCode.PAGE_LINK, statusCode.HEADER);
  
    await statusCode.S_CODE_200.click();
    await expect(statusCode.PARA).toContainText("This page returned a 200 status code.");
    await page.goBack();

    await statusCode.S_CODE_301.click();
    await expect(statusCode.PARA).toContainText("This page returned a 301 status code.");
    await page.goBack();

    await statusCode.S_CODE_404.click();
    await expect(statusCode.PARA).toContainText("This page returned a 404 status code.");
    await page.goBack();

    await statusCode.S_CODE_500.click();
    await expect(statusCode.PARA).toContainText("This page returned a 500 status code.");
    await page.goBack();

});