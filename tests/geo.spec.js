import {test, expect} from "@playwright/test";


test('test', async({page})=>{
    page.on("dailog", async dialog => {
        console.log(`dailog message ${dialog.message()}`);
        await dialog.accept();
    })
    await page.goto("https://the-internet.herokuapp.com/geolocation");
    await page.waitForTimeout(2000);
    const GET_LOCATION_BUTTON = page.getByRole('button', { name: 'Where am I?' });
    await GET_LOCATION_BUTTON.click();
    await page.waitForTimeout(2000);
    const let_value = await page.locator('#lat-value');
    await expect(let_value).toBeVisible();
    //const text_value = await let_value.textContent();
    //console.log(let_value);
});