import {test, expect} from '@playwright/test';
import KEYPresses from '../pages/keyPresses.page'
import { navigate } from '../utils/navigate.utils';

test("Validate the Key Presses tab", async({page}) =>{
        const keyPresses = new KEYPresses(page);
        await navigate(page, process.env.HOMEPAGE_URL, keyPresses.PAGE_LINK, keyPresses.HEADER);
        await expect(keyPresses.KEYPRESS).toHaveText("Key presses are often used to interact with a website (e.g., tab order, enter, escape, etc.). Press a key and see what you inputted.");
        await keyPresses.SEARCHBOX.press('B');
        await expect(keyPresses.RESULT).toHaveText('You entered: B');
})