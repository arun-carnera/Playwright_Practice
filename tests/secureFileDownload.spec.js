import {test, expect} from '@playwright/test';

test.describe('Validate the Secure File Download', () =>{
    test.beforeEach('login', async({page})=>{
        await page.goto("https://the-internet.herokuapp.com");
        await page.toBeRole('link', 'Secure File Download').click();
        await expect()
    })

    test('should validate the login page', async({page})=>{

    })
})