export default class NotificationMessages{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'Notification Messages', exact: true });
        this.HEADER = page.getByRole('heading', { name: 'Notification Message'});
        this.FLASH = page.locator('#flash');
    }
}