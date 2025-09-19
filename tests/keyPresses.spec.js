import {test, expect} from '@playwright/test';
import KEYPresses from '../pages/keyPresses.page'

test("Validate the Key Presses tab", async({page}) =>{
        const keyPresses = new KEYPresses(page);
        await keyPresses.navigate();
        await expect(keyPresses.HEADER).toBeVisible();
        await expect(keyPresses.KEYPRESS).toHaveText("Key presses are often used to interact with a website (e.g., tab order, enter, escape, etc.). Press a key and see what you inputted.");
        await keyPresses.SEARCHBOX.press('B');
        await expect(keyPresses.RESULT).toHaveText('You entered: B');
})