import { test, expect } from '@playwright/test';
import FormAuthentication from '../pages/formAuthentication.page'

test.beforeEach(async ({ page }) => {
    const formAuthenticationPage = new FormAuthentication(page);
    await formAuthenticationPage.navigate();
    await formAuthenticationPage.PAGE_LINK.click();
    await expect(formAuthenticationPage.HEADER).toHaveText("Login Page");
    await expect(formAuthenticationPage.LOGIN_HEADER).toContainText('This is where you can log into the secure area.');
    await expect(formAuthenticationPage.USER_NAME).toBeVisible();
    await expect(formAuthenticationPage.PASSWORD).toBeVisible();
    await expect(formAuthenticationPage.LOGIN_BUTTON).toBeVisible();
    await formAuthenticationPage.USER_NAME.click();
})
test('Successful Login Page Test', async ({ page }) => {
    const formAuthenticationPage = new FormAuthentication(page);
    await formAuthenticationPage.USER_NAME.fill('tomsmith');
    await formAuthenticationPage.PASSWORD.click();
    await formAuthenticationPage.PASSWORD.fill('SuperSecretPassword!');
    await formAuthenticationPage.LOGIN_BUTTON.click();
    await expect(formAuthenticationPage.FLASH_MESSAGE).toContainText('You logged into a secure area!');
    await expect(formAuthenticationPage.LOGOUT_HEADER_MESSAGE).toBeVisible();
    await expect(formAuthenticationPage.LOGOUT_SUB_HEADER_MESSAGE).toBeVisible();
    await expect(formAuthenticationPage.LOGOUT_BUTTON).toBeVisible();
    await formAuthenticationPage.LOGOUT_BUTTON.click();
    await expect(formAuthenticationPage.FLASH_MESSAGE).toContainText('You logged out of the secure area!');
})

test("Unsuccessfull Login Test when Username is wrong or both Username and Password are wrong", async ({page}) => {
    const formAuthenticationPage = new FormAuthentication(page);
    await formAuthenticationPage.USER_NAME.fill('somename');
    await formAuthenticationPage.PASSWORD.click();
    await formAuthenticationPage.PASSWORD.fill('SuperSecretPassword!');
    await formAuthenticationPage.LOGIN_BUTTON.click();
    await expect(formAuthenticationPage.FLASH_MESSAGE).toContainText('Your username is invalid!');
})

test("Unsuccessfull Login Test when Password is wrong", async ({page}) => {
    const formAuthenticationPage = new FormAuthentication(page);
    await formAuthenticationPage.USER_NAME.fill('tomsmith');
    await formAuthenticationPage.PASSWORD.click();
    await formAuthenticationPage.PASSWORD.fill('somepassword');
    await formAuthenticationPage.LOGIN_BUTTON.click();
    await expect(formAuthenticationPage.FLASH_MESSAGE).toContainText('Your password is invalid!');
})