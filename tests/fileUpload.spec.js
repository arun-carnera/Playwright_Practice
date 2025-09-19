import { test, expect } from "@playwright/test";
import FileUpload from "../pages/fileUpload.page";
import path from 'path';

test("File Upload Test using Playwright inline utility", async ({ page }) => {
    const fileUploadPage = new FileUpload(page);
    await fileUploadPage.navigate();
    await expect(fileUploadPage.HEADER).toBeVisible();
    const fileChooserPromise = page.waitForEvent('filechooser');
    await fileUploadPage.CHOOSE_FILE_BUTTON.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname,'tmp9cwnga1s.txt'));
    await fileUploadPage.UPLOAD_BUTTON.click();
    await expect(fileUploadPage.FILE_UPLOAD_SUCCESSFUL).toHaveText('File Uploaded!');
    await expect(fileUploadPage.UPLOADED_FILE_NAME).toHaveText('tmp9cwnga1s.txt');
})

test("File Upload Test without using Playwright inline utility", async ({ page }) => {
    const fileUploadPage = new FileUpload(page);
    await fileUploadPage.navigate();
    await expect(fileUploadPage.HEADER).toBeVisible();
    await page.getByRole('link', { name: 'File Upload' }).click();
    await page.getByRole('button', { name: 'Choose File' }).click();
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles(path.join(__dirname,'tmp9cwnga1s.txt'));
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.getByRole('heading', { name: 'File Uploaded!' }).click();
    await page.getByText('tmp9cwnga1s.txt').click();
})