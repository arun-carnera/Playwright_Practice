import {test, expect} from '@playwright/test';
import SecureFileDownload from '../pages/secureFileDownload.page';
import path from 'path';
import fs from 'fs';
import { navigatewithcredential } from '../utils/navigate.utils';

test('Validate the Secure File Download', async({ page }) => {
    const secureFileDownload = new SecureFileDownload(page);
    await navigatewithcredential(page, process.env.SECUREFILE_URL, secureFileDownload.HEADER);
    const downloadPromise = page.waitForEvent('download');
    await secureFileDownload.FILE_TO_DOWNLOAD.click();
    const download = await downloadPromise;
    const suggestedFileName = download.suggestedFilename();
    console.log("suggestedFileName", suggestedFileName);
    const downloadPath = path.join(__dirname, '../downloads', suggestedFileName);
    console.log("downloadPath", downloadPath);
    await download.saveAs(downloadPath);
    await expect(fs.existsSync(downloadPath)).toBeTruthy();
    const fileStats = fs.statSync(downloadPath);
    await expect(fileStats.size).toBeGreaterThan(0);
});