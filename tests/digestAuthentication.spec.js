import { test, expect } from '@playwright/test';
import DigestAuthentication from '../pages/digestAuthentication.page';

test("Digest Authentication Test", async ({ page }) => {
  const digestAuthenticationPage = new DigestAuthentication(page);
  await digestAuthenticationPage.navigate();
  await expect(digestAuthenticationPage.PAGE_HEADER).toBeVisible();
  await expect(digestAuthenticationPage.SUCCESS_TEXT).toBeVisible();
})