import {test, expect} from '@playwright/test';
import JQueryUIMenus from '../pages/jQueryUIMenus.page';
//import {navigate} from '../utils/navigate.utils';

test('JQuery UI Menus', async ({page})=>{
    const jQueryUIMenus = new JQueryUIMenus(page);
    await jQueryUIMenus.navigate();
    //await navigate(page, process.env.HOMEPAGE_URL, jQueryUIMenus.PAGE_LINK, jQueryUIMenus.HEADER);
    await jQueryUIMenus.downloadFile(jQueryUIMenus.PDF);
    await jQueryUIMenus.downloadFile(jQueryUIMenus.CSV);
    await jQueryUIMenus.downloadFile(jQueryUIMenus.EXCEL);
    await jQueryUIMenus.ENABLE.hover();
    await jQueryUIMenus.BACK_TO_JQUERY_UI.click();
    await expect(jQueryUIMenus.MENU).toBeVisible();
    await jQueryUIMenus.MENU.click();
    await expect(jQueryUIMenus.HEADER).toBeVisible();
});
