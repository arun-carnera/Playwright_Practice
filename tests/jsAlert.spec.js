import {test, expect} from '@playwright/test';
import JSAlert from '../pages/jsAlert.page';
import {navigate} from '../utils/navigate.utils';

test('JavaScript Alerts', async ({page})=>{
    const jsAlert = new JSAlert(page);
    await navigate(page, process.env.HOMEPAGE_URL, jsAlert.PAGE_LINK, jsAlert.HEADER);
    const alertMessage = await jsAlert.triggerAlertAndAccept(jsAlert.CLICKFORJSALERT);
    await expect(alertMessage).toBe('I am a JS Alert');
    await expect(jsAlert.RESULT).toHaveText('You successfully clicked an alert');

    const alertMessage2 = await jsAlert.triggerAlertAndAccept(jsAlert.CLICKFORJSCONFIRM);
    await expect(alertMessage2).toBe('I am a JS Confirm');

    const alertMessage3 = await jsAlert.triggerAlertAndAccept(jsAlert.CLICKFORJSPROMPT);
    await expect(alertMessage3).toBe('I am a JS prompt');
})