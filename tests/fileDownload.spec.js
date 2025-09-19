import { test, expect } from '@playwright/test';
import FileDownload from '../pages/fileDownload.page';
import path from 'path';
import fs from 'fs';

test("File Download Test", async({ page }) => {
    const fileDownloadPage = new FileDownload(page);
    await fileDownloadPage.navigate();
    await expect(fileDownloadPage.HEADER).toBeVisible();
    const downloadPromise = page.waitForEvent('download');
    await fileDownloadPage.FILE2.click();
    const download = await downloadPromise;
    const suggestedFileName = download.suggestedFilename();
    console.log("suggestedFileName:", suggestedFileName);
    const downloadPath = path.join(__dirname, 'downloads', suggestedFileName);
    console.log("downloadPath:", downloadPath);
    await download.saveAs(downloadPath);
    await expect(fs.existsSync(downloadPath)).toBeTruthy();
    const fileStats = fs.statSync(downloadPath);
    await expect(fileStats.size).toBeGreaterThan(0); 
})