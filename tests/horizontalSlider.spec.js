import { test, expect } from '@playwright/test';
import HorizontalSlider from '../pages/horizontalSlider.page';

test('Horizontal Slider Test', async ({ page }) => {
    const horizontalSliderPage = new HorizontalSlider(page);
    await horizontalSliderPage.navigate();
    await expect(horizontalSliderPage.PAGE_HEADER).toBeVisible();
    await expect(horizontalSliderPage.PAGE_SUB_HEADER).toBeVisible();
    await expect(horizontalSliderPage.SLIDER).toBeVisible();
    const sliderValue = await horizontalSliderPage.SLIDER_VALUE.innerText();
    console.log("Slider Value : ", sliderValue);
    await horizontalSliderPage.SLIDER.click();
    await horizontalSliderPage.MOVE_SLIDER_RIGHT;
    await horizontalSliderPage.MOVE_SLIDER_LEFT;
    await horizontalSliderPage.MOVE_SLIDER_LEFT;
    await horizontalSliderPage.MOVE_SLIDER_LEFT;
    await horizontalSliderPage.MOVE_SLIDER_LEFT;
    await horizontalSliderPage.MOVE_SLIDER_LEFT;
    await horizontalSliderPage.MOVE_SLIDER_LEFT;
    await horizontalSliderPage.MOVE_SLIDER_RIGHT;
    await horizontalSliderPage.MOVE_SLIDER_RIGHT;
    const sliderValue1 = await horizontalSliderPage.SLIDER_VALUE.innerText();
    console.log("Slider Value 1 : ", sliderValue1);
});