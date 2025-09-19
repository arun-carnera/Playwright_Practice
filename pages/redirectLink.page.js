export default class RederectLink{
    constructor(page){
    this.page =page;
    this.PAGE_LINK = page.getByRole('link', {name: 'Redirect Link', exact: true});
    this.HEADER = page.getByRole('heading', {name: 'Redirection'});
    this.REDIRECTION = page.locator('p');
    this.HERE = page.getByRole('link', {name: 'here'});
    this.STATUS_CODE = page.locator('h3');
   }
}