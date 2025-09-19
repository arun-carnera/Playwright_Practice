export default class NestedFrames{
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'Nested Frames', exact: true });
        this.FRAME_TOP = page.locator('frame[name="frame-top"]');
        this.FRAME = this.FRAME_TOP.contentFrame().locator('frame[name="frame-middle"]');
    }

    async navigate() {
        await this.page.goto('https://the-internet.herokuapp.com');
        await this.PAGE_LINK.click();
    }
}