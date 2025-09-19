import {test, expect} from '@playwright/test';

test.describe('Validate the Redirect Link Page', ()=>{
    test.beforeEach('login', async({page})=>{
        await page.goto("https://the-internet.herokuapp.com");
        await page.getByRole('link', {name: 'Redirect Link'}).click();
        await expect(page.locator('h3')).toHaveText ('Redirection');
    })

    test('should validate the redirection', async({page})=>{
        const rediction = page.locator('p');
        await expect(rediction).toContainText("This is separate from directly returning a redirection status code, in that some browsers cannot handle a raw redirect status code without a destination page as part of the HTTP response.");
        await page.getByRole('link', {name: 'here'}).click();
        await expect(page.locator('h3')).toHaveText('Status Codes');
        await page.goBack();
    })
})