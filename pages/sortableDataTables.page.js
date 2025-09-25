export default class SortDataTables{
    constructor(page){
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', {name: 'Sortable Data Tables', exact:true});
        this.HEADER = page.getByRole('heading', {name: 'Data Tables'});
        this.TABLE1 = page.locator('#table1');
        this.TABLE2 = page.locator('#table2');
    }
}