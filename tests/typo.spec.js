import {test, expect} from '@playwright/test';

test.describe('Tepo test', () =>{
    test.beforeEach('login', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com');
    })

    test('should validate typo tab', async({page})=>{
        await page.getByRole('link', {name: 'typo'}).click();
        await expect(page.locator('h3')).toHaveText('Typos');
        const para = page.locator('p').nth(1);
        await expect(para).toContainText("Sometimes you'll see a typo,");
    })
})