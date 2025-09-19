import {test, expect} from '@playwright/test';

test.describe('Validate the Notification Messages', ()=>{
    test.beforeEach('login', async({page})=>{
        await page.goto("https://the-internet.herokuapp.com");
        await page.getByRole('link', {name: 'Notification Messages'}).click();
        await expect(page.locator('h3')).toHaveText('Notification Message');
    })

    test('validate the page', async({page}) =>{
        //await page.toContainText('Action unsuccesful, please try again');
        // await page.locator('//*[@id="flash"]').click();
        const flash = page.locator('#flash');
        await expect(flash).toContainText('Action');
    })
});