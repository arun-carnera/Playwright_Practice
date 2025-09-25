import { expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import users from '../fixtures/users.json' assert { type : 'json' };

export default class JQueryUIMenus {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'JQuery UI Menus', exact: true });
        this.HEADER = page.getByText('JQueryUI - Menu');
        this.ENABLE = page.locator('//*[@id="ui-id-3"]/a');
        this.DOWNLOAD = page.locator('//*[@id="ui-id-4"]/a');
        this.PDF = page.locator('//*[@id="ui-id-5"]/a');
        this.CSV = page.locator('//*[@id="ui-id-6"]/a');
        this.EXCEL = page.locator('#ui-id-7 > a');
        this.BACK_TO_JQUERY_UI = page.locator('//*[@id="ui-id-8"]/a');
        this.MENU = page.getByText('Menu');
    }

    async navigate() {
        await this.page.goto(users.URL.validURL);
        await this.PAGE_LINK.click();
    }

    async downloadFile(fileButtonLocator) {
        await this.ENABLE.hover();
        await this.page.waitForTimeout(300);
        await this.DOWNLOAD.waitFor({ state: 'visible' });
        await this.DOWNLOAD.hover();
        const downloadPromise = this.page.waitForEvent('download');
        await fileButtonLocator.click();
        const download = await downloadPromise;
        const suggestedFileName = download.suggestedFilename();
        console.log("suggestedFileName", suggestedFileName);
        const downloadPath = path.join(__dirname, '../downloads', suggestedFileName);
        console.log("downloadPath", downloadPath);
        await download.saveAs(downloadPath);
        await expect(fs.existsSync(downloadPath)).toBeTruthy();
        const fileStats = fs.statSync(downloadPath);
        await expect(fileStats.size).toBeGreaterThan(0);
    }
}