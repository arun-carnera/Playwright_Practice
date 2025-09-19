import {test, expect} from '@playwright/test';

test.describe('Status Code Test Suite', () => {
    test.beforeEach('navigate to the-internet homepage', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com');
        await page.getByRole('link', {name: 'Status Codes'}).click();
        await expect(page.locator('h3')).toHaveText('Status Codes');
    });

    test('should validate 200 status code page', async ({page})=>{
        await page.getByRole('link', {name: '200'}).click();
        const para200 = page.locator('p');
        await expect(para200).toContainText("This page returned a 200 status code.");
        await page.goBack();
    })

    test('should validate 301 status code page', async ({page})=>{
            await page.getByRole('link', {name: '301'}).click();
            const para301 = page.locator('p');
            await expect(para301).toContainText("This page returned a 301 status code.");
            await page.goBack();
    })

    test('should validate 404 statu code page', async ({page})=>{
        await page.getByRole('link', { name: 404 }).click();
        const para404 = page.locator('p');
        await expect(para404).toContainText("This page returned a 404 status code.");
        await page.goBack();
    })

    test('should validate 500 status code page', async ({page})=>{
        await page.getByRole('link', {name: 500}).click();
        const para500 = page.locator('p');
        await expect(para500).toContainText("This page returned a 500 status code.");
        await page.goBack();
    })
});