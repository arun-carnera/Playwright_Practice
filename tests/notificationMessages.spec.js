import {test, expect} from '@playwright/test';
import NotificationMessages from '../pages/notificationMessages.page';
import { navigate } from '../utils/navigate.utils';

test('Validate the Notification Messages', async({page})=>{
    const notificationMessages = new NotificationMessages(page);
    await navigate(page, process.env.HOMEPAGE_URL, notificationMessages.PAGE_LINK, notificationMessages.HEADER);
    await expect(notificationMessages.FLASH).toContainText('Action');
});