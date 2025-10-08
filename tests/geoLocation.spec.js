import { test, expect } from '@playwright/test';
import GeoLocation from '../pages/geoLocation.page';

test.use({
  permission : ['geolocation'],
  geolocation: { longitude: 41.890221, latitude: 12.492348 },
})

test('Geolocation Test', async ({page}) => {
  const geoLocationPage = new GeoLocation(page);
  await geoLocationPage.navigate();
  await expect(geoLocationPage.PAGE_HEADER).toBeVisible();
  await expect(geoLocationPage.PAGE_SUB_HEADER).toBeVisible();
  await geoLocationPage.GET_LOCATION_BUTTON.click();
  await expect(geoLocationPage.LAT_VALUE).toBeVisible();
  const latValue = await geoLocationPage.LAT_VALUE.textContent();
  console.log("Latitude Value:", latValue);
  await expect(geoLocationPage.LAT_VALUE).toHaveText("12.492348");
  await expect(geoLocationPage.LONG_VALUE).toBeVisible();
  const longValue = await geoLocationPage.LONG_VALUE.textContent();
  console.log("Longitude Value:", longValue);
  await expect(geoLocationPage.LONG_VALUE).toHaveText("41.890221");
  await expect(geoLocationPage.LONG_HEADING).toBeVisible();
  await expect(geoLocationPage.LAT_HEADING).toBeVisible();
  await page.waitForTimeout(2000);
});