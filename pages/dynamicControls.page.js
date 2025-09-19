export default class DynamicControls {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Dynamic Controls');
        this.DYNAMIC_CONTROLS_HEADER = page.getByRole('heading', { name: 'Dynamic Controls' });
        this.REMOVE_ADD_HEADER = page.getByRole('heading', { name: 'Remove/add' });
        this.ENABLE_DISABLE_HEADER = page.getByRole('heading', { name: 'Enable/disable' });
        this.CHECK_BOX = page.locator('#checkbox');
        this.ADD_REMOVE_BUTTON = page.getByRole('button', { name: 'Remove' });
        this.ENABLE_BUTTON = page.getByRole('button', { name: 'Enable' });
        this.DISABLE_BUTTON = page.getByRole('button', { name: 'Disable' });
        this.TEXT_BOX = page.getByRole('textbox');
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
    }
}