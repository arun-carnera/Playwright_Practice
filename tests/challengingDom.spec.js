import { test, expect } from '@playwright/test';
import ChallengingDom from '../pages/challengingDOM.page';

test("Challenging DOM Test", async ({page}) => {
    const challengingDomPage = new ChallengingDom(page);
    await challengingDomPage.navigate();
    await challengingDomPage.PAGE_LINK.click();
    
    await test.step('Basic Visibility Test', async() => {   
        await expect(challengingDomPage.PAGE_HEADER).toContainText('Challenging DOM');
        await expect(challengingDomPage.PAGE_DESCRIPTION).toContainText('The hardest part in automated web testing is finding');
        await expect(challengingDomPage.PAGE_CANVAS).toBeVisible();
        await expect(challengingDomPage.ELEMENT(1)).toBeVisible();
        await expect(challengingDomPage.ELEMENT(2)).toBeVisible();
        await expect(challengingDomPage.ELEMENT(3)).toBeVisible();
    })
    
    await test.step("Buttons colour test", async() => {
        const backgroundColor1 = await challengingDomPage.ELEMENT(1).evaluate((el) => window.getComputedStyle(el).getPropertyValue('background-color'));
        expect(backgroundColor1).toBe('rgb(43, 166, 203)');
        await page.waitForTimeout(1000);
        const backgroundColor2 = await challengingDomPage.ELEMENT(2).evaluate((el) => window.getComputedStyle(el).getPropertyValue('background-color'));
        const redColor1 = 'rgb(151, 11, 14)';
        const redColor2 = 'rgb(198, 15, 19)';
        expect(backgroundColor2 === redColor1 || backgroundColor2 === redColor2).toBeTruthy();
        await page.waitForTimeout(1000);
        const backgroundColor3 = await challengingDomPage.ELEMENT(3).evaluate((el) => window.getComputedStyle(el).getPropertyValue('background-color'));
        expect(backgroundColor3).toBe('rgb(93, 164, 35)');
    })

    await test.step('Buttons Text Test', async()=>{
        const elementText1 = await challengingDomPage.ELEMENT(1).textContent();
        console.log(elementText1);
        await challengingDomPage.ELEMENT(1).click();
        await page.waitForTimeout(1000);
        const newElementText1 = await challengingDomPage.ELEMENT(1).textContent();
        console.log(newElementText1);
        await page.waitForTimeout(1000);
        await expect(newElementText1 === elementText1).toBeFalsy();

        const elementText2 = await challengingDomPage.ELEMENT(2).textContent();
        console.log(elementText2);
        await challengingDomPage.ELEMENT(2).click();
        await page.waitForTimeout(500);
        const newElementText2 = await challengingDomPage.ELEMENT(2).textContent();
        console.log(newElementText2);
        await page.waitForTimeout(500);
        await expect(newElementText2 === elementText2).toBeFalsy();

        const elementText3 = await challengingDomPage.ELEMENT(3).textContent();
        console.log(elementText3);
        await challengingDomPage.ELEMENT(3).click();
        await page.waitForTimeout(500);
        const newElementText3 = await challengingDomPage.ELEMENT(3).textContent();
        console.log(newElementText3);
        await page.waitForTimeout(1000);
        await expect(newElementText3 === elementText3).toBeFalsy();
    })

    await test.step("Canvas Text Test", async () => {
        let textArray = [];
        for (let i = 0; i<textArray.length;i++){
            
        }
        let text = await challengingDomPage.canvasText();
        await textArray.push(text);
        console.log('Extracted text from canvas before any click:', textArray[0]);
        await challengingDomPage.ELEMENT(1).click();
        await page.waitForTimeout(1000);
        text = await challengingDomPage.canvasText();
        await textArray.push(text);
        console.log('Extracted text from canvas after first click:', textArray[1]);
        await challengingDomPage.ELEMENT(2).click();
        await page.waitForTimeout(1000);
        text = await challengingDomPage.canvasText();
        await textArray.push(text);
        console.log('Extracted text from canvas after second click :', textArray[2]);
        await challengingDomPage.ELEMENT(3).click();
        await page.waitForTimeout(1000);
        text = await challengingDomPage.canvasText();
        await textArray.push(text);
        console.log('Extracted text from canvas after third click :', textArray[3]);
        expect(textArray[0] === textArray[1]).toBeFalsy();
        expect(textArray[0] === textArray[2]).toBeFalsy();
        expect(textArray[0] === textArray[3]).toBeFalsy();
        expect(textArray[1] === textArray[2]).toBeFalsy();
        expect(textArray[1] === textArray[3]).toBeFalsy();
        expect(textArray[2] === textArray[3]).toBeFalsy();
    })

    await test.step("Table Test", async () => {
        const tableColumn = ['Lorem','Ipsum','Dolor','Sit','Amet','Diceret','Action'];
        for(let i = 0; i<tableColumn.length; i++){
            await expect(challengingDomPage.TABLE_COLUMN(i+1)).toHaveText(tableColumn[i]);    
        }
    })
})