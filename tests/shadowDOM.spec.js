import {test, expect} from '@playwright/test';

test.describe('Validate the shadow DOM', ()=>{
    test.beforeEach('login', async({page})=>{
        await page.goto("https://the-internet.herokuapp.com");
        await page.getByRole('link', {name: 'Shadow DOM'}).click();
        await expect(page.locator('h1')).toHaveText('Simple template');
    })

    test('should validate the DOM page', async({page})=>{
        const shadowDOM = page.locator('//*[@id="content"]/my-paragraph[1]/span');
        await expect(shadowDOM).toHaveText("Let's have some different text!");
    })
});