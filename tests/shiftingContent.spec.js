import {test, expect} from '@playwright/test';

test.describe('Validate the shifting content tab', () =>{
    test.beforeEach('login', async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com");
        await page.getByRole('link', {name: 'Shifting Content'}).click();
        await expect(page.locator('h3')).toHaveText('Shifting Content');
    })

    test('should validate the shifting content with Example1: Main menu', async ({page})=>{
        await page.getByRole('link', {name:'Example 1: Menu Element'}).click();
        await expect(page.locator('h3')).toHaveText('Shifting Content: Menu Element');
        const menuItems = page.locator('ul li');
        await expect(menuItems.nth(0)).toHaveText('Home');
        await expect(menuItems.nth(1)).toHaveText('About');
        await expect(menuItems.nth(2)).toHaveText('Contact Us');
        await expect(menuItems.nth(3)).toHaveText('Portfolio');
        await expect(menuItems.nth(4)).toHaveText('Gallery');
        await page.goBack();
    })

    test('should validate the shifting content with Example2: An image', async ({page})=>{
        await page.getByRole('link', {name:'Example 2: An image'}).click();
        await expect(page.locator('h3')).toHaveText('Shifting Content: Image');
        const image = page.locator('#content > div > img');
        await expect(image).toBeVisible();
        await page.goBack();
    })

    test('should validate the shifting content with Example3: List', async({page})=>{
        await page.getByRole('link', {name:'Example 3: List'}).click();
        await expect(page.locator('h3')).toHaveText('Shifting Content: List');
        const shiftingContent = page.locator('p');
        await expect(shiftingContent).toHaveText("This example demonstrates a list of dynamic content with a static record that constantly moves around.");
        await page.goBack();
    })
});