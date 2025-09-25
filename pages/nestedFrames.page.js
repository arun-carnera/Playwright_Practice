export default class NestedFrames{
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'Nested Frames', exact: true });
        this.HEADER = page.locator('frame[name="frame-bottom"]');
        this.FRAME_TOP = page.locator('frame[name="frame-top"]');
        this.FRAME = this.FRAME_TOP.contentFrame().locator('frame[name="frame-middle"]');
    }
}