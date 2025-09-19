import { test, expect } from '@playwright/test';
import BrokenImages from '../pages/brokenImages.page';

const brokenimages = []; 

test('Broken Images Test', async ({ page }) => {
  const brokenImagesPage = new BrokenImages(page);
  await brokenImagesPage.navigate();
  await brokenImagesPage.getBrokenImages(brokenimages);
  await brokenImagesPage.PAGE_LINK.click();
  await brokenImagesPage.waitForPageLoad();
  console.log('Broken Images:', brokenimages);
  await expect(brokenimages.length).toBeGreaterThan(0); // Expect at least one broken image
});
