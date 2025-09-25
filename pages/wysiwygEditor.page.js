export default class WysiwygEditor{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'WYSIWYG Editor', exact:true});
        this.HEADER = page.getByRole('heading', {name: 'An iFrame containing the TinyMCE WYSIWYG Editor'});
        this.NOtIFICATION = page.locator('div.tox-notification.tox-notification--warning');
        this.DISMISS_BUTTON = page.locator('button.tox-notification__dismiss');
        this.FRAME = page.frameLocator('iframe[title="Rich Text Area"]');
        this.BODY = this.FRAME.locator('body');
    }
}