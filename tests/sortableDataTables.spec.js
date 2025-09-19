import {test, expect} from '@playwright/test';
import SortDataTables from '../pages/sortableDataTables.page';
import { navigate } from '../utils/navigate.utils';

test('Sortable Data Tables Test Suite', async({page}) =>{

const sortDataTables = new SortDataTables(page);
await navigate(page, process.env.HOMEPAGE_URL, sortDataTables.PAGE_LINK, sortDataTables.HEADER);

await expect(sortDataTables.TABLE1.locator('th').nth(0)).toHaveText('Last Name');
await expect(sortDataTables.TABLE1.locator('th').nth(1)).toHaveText('First Name');
await expect(sortDataTables.TABLE1.locator('th').nth(2)).toHaveText('Email');
await expect(sortDataTables.TABLE1.locator('th').nth(3)).toHaveText('Due');
await expect(sortDataTables.TABLE1.locator('th').nth(4)).toHaveText('Web Site');
await expect(sortDataTables.TABLE1.locator('th').nth(5)).toHaveText('Action');

await expect(sortDataTables.TABLE1.locator('td').nth(0)).toHaveText('Smith');
await expect(sortDataTables.TABLE1.locator('td').nth(1)).toHaveText('John');
await expect(sortDataTables.TABLE1.locator('td').nth(2)).toHaveText('jsmith@gmail.com');
await expect(sortDataTables.TABLE1.locator('td').nth(3)).toHaveText('$50.00');
await expect(sortDataTables.TABLE1.locator('td').nth(4)).toHaveText('http://www.jsmith.com');
await expect(sortDataTables.TABLE1.locator('td').nth(5)).toHaveText('edit delete');

await expect(sortDataTables.TABLE2.locator('th').nth(0)).toHaveText('Last Name');
await expect(sortDataTables.TABLE2.locator('th').nth(1)).toHaveText('First Name');
await expect(sortDataTables.TABLE2.locator('th').nth(2)).toHaveText('Email');
await expect(sortDataTables.TABLE2.locator('th').nth(3)).toHaveText('Due');
await expect(sortDataTables.TABLE2.locator('th').nth(4)).toHaveText('Web Site');
await expect(sortDataTables.TABLE2.locator('th').nth(5)).toHaveText('Action');

await expect(sortDataTables.TABLE2.locator('td').nth(0)).toHaveText('Smith');
await expect(sortDataTables.TABLE2.locator('td').nth(1)).toHaveText('John');
await expect(sortDataTables.TABLE2.locator('td').nth(2)).toHaveText('jsmith@gmail.com');
await expect(sortDataTables.TABLE2.locator('td').nth(3)).toHaveText('$50.00');
await expect(sortDataTables.TABLE2.locator('td').nth(4)).toHaveText('http://www.jsmith.com');
await expect(sortDataTables.TABLE2.locator('td').nth(5)).toHaveText('edit delete');

});