import {test, expect} from '@playwright/test';
import JsError from "../pages/jsError.page";
import path from 'path';
import fs from 'fs';

test ("JavaScript onload event error", async({page}) =>{
    const jsErrorPage = new JsError(page); 
    await jsErrorPage.navigate();
    await expect(jsErrorPage.ERROR).toHaveText(jsErrorPage.ERROR_MESSAGE);
})

