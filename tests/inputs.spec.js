import {test, expect} from '@playwright/test';
import Input from '../pages/inputs.page';
import {navigate} from '../utils/navigate.utils';
import {getExcelSheetData} from '../utils/excel.utils';
import path from 'path';

test("Input", async({page}) =>{
    const input = new Input(page);
    //const excelDataArr = getExcelSheetData((path.resolve(__dirname, '../testdata/playwright_excel.xlsx')), 'dev');
    const excelDataArr = getExcelSheetData((path.join(__dirname, '../testdata/playwright_excel.xlsx')), 'dev');
    console.log(excelDataArr);
    await page.goto(excelDataArr[0].URL);
    await input.PAGE_LINK.click();
    await expect(input.HEADER).toBeVisible();
    await input.INPUT.click();
    await page.keyboard.press('ArrowUp');
    await expect(input.INPUT).toHaveValue("1");
});