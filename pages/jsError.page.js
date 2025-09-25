export default class JsError {
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'JavaScript onload event error', exact: true});
        this.HEADER = page.getByText('This page has a JavaScript error');
        this.ERROR = page.locator('p');
        this.ERROR_MESSAGE = 'This page has a JavaScript error in the onload event. This is often a problem to using normal Javascript injection techniques.';
    }
}