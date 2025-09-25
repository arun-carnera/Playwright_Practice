export default class Frames {
    constructor (page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'Frames', exact: true });
        this.NESTED_FRAMES_LINK = page.getByRole('link', { name: 'Nested Frames' });
        this.I_FRAMES_LINK = page.getByRole('link', { name: 'iFrame' });
        this.I_FRAMES_HEADER = page.locator('h3');
        this.INSIDE_IFRAME_TEXT = page.getByText('TinyMCE is in read-only mode');
        this.INSIDE_IFRAME_TEXTBOX = page.locator('iframe[title="Rich Text Area"]');
        this.TEXT_IN_TEXTBOX = page.locator('iframe[title="Rich Text Area"]').contentFrame().getByText('Your content goes here.');
        this.TEXT_FORMAT_BOLD = page.getByRole('button', { name: 'Bold' });
        this.TEXT_FORMAT_ITALIC = page.getByRole('button', { name: 'Italic' })
        this.CENTER_ALIGN_BUTTON = page.getByRole('button', { name: 'Align center' });
        this.RIGHT_ALIGN_BUTTON = page.getByRole('button', { name: 'Align right' });
        this.LEFT_ALIGN_BUTTON = page.getByRole('button', { name: 'Align left' });
        this.JUSTIFY_ALIGN_BUTTON = page.getByRole('button', { name: 'justify' });
        this.INCREASE_INDENT_BUTTON = page.getByRole('button', { name: 'Increase indent' });
        this.DECREASE_INDENT_BUTTON = page.getByRole('button', { name: 'Decrease indent' });
        this.UNDO_BUTTON = page.getByRole('button', { name: 'Undo' });
        this.REDO_BUTTON = page.getByRole('button', { name: 'Redo' });
        this.ADMIN_REQUEST_TEXT = page.getByText('Please request that the admin');
        this.MENU_BAR = page.getByText('FileEditViewFormat');
        this.IFRAME_CLOSE_BUTTON = page.getByRole('button', { name: 'Close' });
        this.MIDDLE_FRAME = page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-middle"]').contentFrame().locator('body');
        this.LEFT_FRAME = page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-left"]').contentFrame().locator('body');
        this.RIGHT_FRAME = page.locator('frame[name="frame-top"]').contentFrame().locator('frame[name="frame-right"]').contentFrame().locator('body');
        this.BOTTOM_FRAME = page.locator('frame[name="frame-bottom"]').contentFrame().locator('body');
    }

    async navigate(){
        await this.page.goto('http://the-internet.herokuapp.com/');
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
        await this.PAGE_LINK.click();
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
    }
}