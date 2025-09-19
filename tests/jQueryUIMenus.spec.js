import {test, expect} from '@playwright/test';
import JQueryUIMenus from '../pages/jQueryUIMenus.page';
import path from 'path';

test('JQuery UI Menus', async ({page})=>{
    const jQueryUIMenus = new JQueryUIMenus(page);
    await jQueryUIMenus.navigate();
    await expect(jQueryUIMenus.HEADER).toBeVisible();
    const filePath = path.join(__dirname, 'downloads/downloads');
    await jQueryUIMenus.downloadFile(jQueryUIMenus.PDF, filePath);
    await jQueryUIMenus.downloadFile(jQueryUIMenus.CSV, filePath);
    await jQueryUIMenus.downloadFile(jQueryUIMenus.EXCEL, filePath);

    //await this.page.waitForTimeout(300);
    await jQueryUIMenus.ENABLE.hover();
    await jQueryUIMenus.BACK_TO_JQUERY_UI.click();
})
