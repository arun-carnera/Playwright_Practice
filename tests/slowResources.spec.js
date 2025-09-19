import {test, expect} from '@playwright/test';

test.describe('Slow Resources Test Suite', () =>{
    test.beforeEach('login', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com');
        await page.getByRole('link', {name: 'Slow Resources'}).click();
        await expect(page.locator('h3')).toHaveText('Slow Resources');
    })

    test('should validate slow resources tab', async ({page})=>{
        const slowResource = page.locator('p');
        await expect(slowResource).toHaveText('At times it can take a while for third-party site resources to load (e.g., tracking code javascript, social networking widgets, etc.). This example has a rogue GET request that takes 30 seconds to complete.');
    })

});