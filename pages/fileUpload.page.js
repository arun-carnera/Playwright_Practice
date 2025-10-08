export default class FileUpload {
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'File Upload', exact: true });
        this.HEADER = page.getByText("File Uploader");
        this.CHOOSE_FILE_BUTTON = page.locator('#file-upload');
        this.UPLOAD_BUTTON = page.locator('#file-submit');
        this.FILE_UPLOAD_SUCCESSFUL = page.locator('h3');
        this.UPLOADED_FILE_NAME = page.locator('#uploaded-files');
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
        await this.PAGE_LINK.click();
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
    }
}