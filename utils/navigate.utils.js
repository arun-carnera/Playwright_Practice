 import {test, expect} from '@playwright/test';
 
 export async function navigate(page, url, pagelink, header) {
        //await page.goto(process.env.HOMEPAGE_URL);
        await page.goto(url);
        await pagelink.click();
        await expect(header).toBeVisible();
    }

export async function navigatewithcredential(page, url, header){
    await page.goto(url);
    await expect(header).toBeVisible();
}