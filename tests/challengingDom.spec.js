import { test, expect } from '@playwright/test';
import ChallengingDom from '../pages/challengingDom.page';

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
        let elementText = [];
        let newElementText = [];
        for (let i = 1; i < 4; i++) {
            await elementText.push(challengingDomPage.ELEMENT(i).textContent());
            console.log(elementText[i-1]);
            await challengingDomPage.ELEMENT(i).click();
            await page.waitForTimeout(1000);
            await newElementText.push(challengingDomPage.ELEMENT(i).textContent());
            console.log(newElementText[i-1]);
            await page.waitForLoadState('load');
            await page.waitForTimeout(1000);
            await expect(newElementText[1-i] === elementText[i-1]).toBeFalsy();
        }
    })

    await test.step("Canvas Text Test", async () => {
        let textArray = [];
        let text = await challengingDomPage.canvasText();
        await textArray.push(text);
        console.log('Extracted text from canvas before any click:', textArray[0]);
        for (let i = 1; i < 4; i++) {
            await challengingDomPage.ELEMENT(i).click();
            await page.waitForTimeout(1000);
            text = await challengingDomPage.canvasText();
            await textArray.push(text);
            console.log('Extracted text from canvas after first click:', textArray[i]);
        }
        for (let i = 0; i < textArray.length; i++) {
            for (let j = i+1; j < textArray.length; j++) {
                await expect(textArray[i] === textArray[j]).toBeFalsy();
            }   
        }
    })

    await test.step("Table Test", async () => {
        const tableColumn = ['Lorem','Ipsum','Dolor','Sit','Amet','Diceret','Action'];
        const tableRow = ['Iuvaret','Apeirian','Adipisci','Definiebas','Consequuntur','Phaedrum']
        for(let i=0; i<11; i++){
            for(let j=0; j<tableColumn.length; j++){
                await expect(challengingDomPage.TABLE_COLUMN(j+1)).toHaveText(tableColumn[j]);
                if(i>0){
                    if(j>=5){
                        continue;
                    }
                    await expect(challengingDomPage.TABLE_CELL(i,j+1)).toHaveText(`${tableRow[j]}${i-1}`);
                }
            }
        }
    })
})