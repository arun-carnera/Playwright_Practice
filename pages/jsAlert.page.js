export default class JSAlert {
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'JavaScript Alerts', exact: true});
        this.HEADER = page.getByRole('heading', { name: 'JavaScript Alerts' })
        this.CLICKFORJSALERT = page.getByText("Click for JS Alert");
        this.RESULT = page.locator('#result');

        this.CLICKFORJSCONFIRM = page.getByText("Click for JS Confirm");
        this.CLICKFORJSPROMPT = page.getByText("Click for JS Prompt");
    }

    async navigate(){
        await this.page.goto("https://the-internet.herokuapp.com");
        await this.PAGE_LINK.click();
    }

    async triggerAlertAndAccept(buttonLocator){
        let alertMessage = '';
        this.page.once('dialog', async dialog =>{
            alertMessage = dialog.message();
            await dialog.accept();
        });
        await buttonLocator.click();
        return alertMessage;
    }
}