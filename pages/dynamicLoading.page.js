export default class DynamicControls {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByText('Dynamic Loading');
        this.DYNAMIC_LOADING_HEADER = page.locator('h3');
        this.EXAMPLE_1_LINK = page.getByText('Example 1: Element on page that is hidden');
        this.EXAMPLE_2_LINK = page.getByText('Example 2: Element rendered after the fact');
        this.HELLO_WORLD = page.getByText('Hello World!');
        this.START_BUTTON = page.getByRole('button', { name: 'Start' });

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