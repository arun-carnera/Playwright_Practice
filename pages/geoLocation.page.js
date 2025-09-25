export default class GeoLocation {
    constructor(page) {
        this.page = page;
        this.PAGE_LINK = page.getByRole('link', { name: 'Geolocation' });
        this.PAGE_HEADER = page.getByRole('heading', { name: 'Geolocation' });
        this.PAGE_SUB_HEADER = page.getByText('Click the button to get your');
        this.GET_LOCATION_BUTTON = page.getByRole('button', { name: 'Where am I?' });
        this.LAT_HEADING = page.getByText('Latitude:');
        this.LAT_VALUE = page.locator('#lat-value');
        this.LONG_HEADING = page.getByText('Longitude:');
        this.LONG_VALUE = page.locator('#long-value');
    }

    async navigate() {
        await this.page.goto("https://the-internet.herokuapp.com/");
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
        await this.PAGE_LINK.click();
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(1000);
    }
}