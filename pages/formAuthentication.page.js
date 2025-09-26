export default class FormAuthentication {
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'Form Authentication' });
        this.HEADER = page.locator('h2');
        this.USER_NAME = page.getByRole('textbox', { name: 'Username' });
        this.PASSWORD = page.getByRole('textbox', { name: 'Password' });
        this.LOGIN_BUTTON  = page.getByRole('button', { name: ' Login' });
        this.LOGIN_HEADER  = page.locator('h4');
        this.LOGOUT_BUTTON  = page.getByRole('link', { name: 'Logout' });
        this.FLASH_MESSAGE = page.locator('#flash');
        this.LOGOUT_HEADER_MESSAGE = page.getByRole('heading', { name: 'Secure Area', exact: true })
        this.LOGOUT_SUB_HEADER_MESSAGE = page.getByText('Welcome to the Secure Area. When you are done click logout below.');
    }

    async navigate(){
        await this.page.goto('http://the-internet.herokuapp.com/');
        await this.page.waitForLoadState('load');
    }
}