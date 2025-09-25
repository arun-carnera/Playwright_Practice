export default class MultipleWindows{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Multiple Windows', exact: true});
        this.HEADER = page.getByRole('heading', { name: 'Opening a new window' });
        this.CLICKHERE= page.getByRole('link', {name: 'Click Here'});
    }
}