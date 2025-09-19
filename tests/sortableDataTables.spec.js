import {test, expect} from '@playwright/test';

test.describe('Sortable Data Tables Test Suite', () =>{
    test.beforeEach('login', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com');
        await page.getByRole('link', {name: 'Sortable Data Tables'}).click();
        await expect(page.locator('h3')).toHaveText('Data Tables');
    })

    test('should validate table 1 data', async ({page})=>{
        const table1 = page.locator('#table1');
        await expect(table1.locator('th').nth(0)).toHaveText('Last Name');
        await expect(table1.locator('th').nth(1)).toHaveText('First Name');
        await expect(table1.locator('th').nth(2)).toHaveText('Email');
        await expect(table1.locator('th').nth(3)).toHaveText('Due');
        await expect(table1.locator('th').nth(4)).toHaveText('Web Site');
        await expect(table1.locator('th').nth(5)).toHaveText('Action');

        await expect(table1.locator('td').nth(0)).toHaveText('Smith');
        await expect(table1.locator('td').nth(1)).toHaveText('John');
        await expect(table1.locator('td').nth(2)).toHaveText('jsmith@gmail.com');
        await expect(table1.locator('td').nth(3)).toHaveText('$50.00');
        await expect(table1.locator('td').nth(4)).toHaveText('http://www.jsmith.com');
        await expect(table1.locator('td').nth(5)).toHaveText('edit delete');
    })  

    test('should validate table2 data', async ({page})=>{
        const table2 = page.locator('#table2');
        await expect (table2.locator('th').nth(0)).toHaveText('Last Name');
        await expect(table2.locator('th').nth(1)).toHaveText('First Name');
        await expect(table2.locator('th').nth(2)).toHaveText('Email');
        await expect(table2.locator('th').nth(3)).toHaveText('Due');
        await expect(table2.locator('th').nth(4)).toHaveText('Web Site');
        await expect(table2.locator('th').nth(5)).toHaveText('Action');

        await expect(table2.locator('td').nth(0)).toHaveText('Smith');
        await expect(table2.locator('td').nth(1)).toHaveText('John');
        await expect(table2.locator('td').nth(2)).toHaveText('jsmith@gmail.com');
        await expect(table2.locator('td').nth(3)).toHaveText('$50.00');
        await expect(table2.locator('td').nth(4)).toHaveText('http://www.jsmith.com');
        await expect(table2.locator('td').nth(5)).toHaveText('edit delete');
    })

});