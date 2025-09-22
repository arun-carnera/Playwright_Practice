import { test, expect } from '@playwright/test';
import GeoLocation from '../pages/geoLocation.page';

test('Geolocation Test', async ({page}) => {
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
});