import { test, expect, chromium } from '@playwright/test';
import GeoLocation from '../pages/geoLocation.page';

test('test', async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext({});
    // Emulate geolocation and grant permission
  //   geolocation: { longitude: 12.492507, latitude: 41.889938 }, // Example coordinates
  //   permissions: ['geolocation'],
  // });
  await context.grantPermissions(['geolocation'], { origin: 'https://your-website.com' });
  const page = await context.newPage();
  const geoLocationPage = new GeoLocation(page);
  await geoLocationPage.navigate();
  await expect(geoLocationPage.PAGE_HEADER).toBeVisible();
  await expect(geoLocationPage.PAGE_SUB_HEADER).toBeVisible();
  await geoLocationPage.GET_LOCATION_BUTTON.click();
  await expect(geoLocationPage.LAT_VALUE).toBeVisible();
  await expect(geoLocationPage.LONG_VALUE).toBeVisible();
  await expect(geoLocationPage.LONG_HEADING).toBeVisible();
  await expect(geoLocationPage.LAT_HEADING).toBeVisible();
  await page.waitForTimeout(2000);
  await browser.close();
});