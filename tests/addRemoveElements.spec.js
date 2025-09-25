import { test, expect } from '@playwright/test';
import AddRemoveElements from '../pages/addRemoveElements.page';

test("Add or Remove Elements Test", async ({ page }) => {
  const addRemoveElements = new AddRemoveElements(page);
  await addRemoveElements.navigate();
  const addButton = await addRemoveElements.ADD_ELEMENT_BUTTON;
  for (let i = 0; i<6 ; i++){
    await addButton.click();
  }
  const deleteButton = await addRemoveElements.DELETE_BUTTON;
  let count = 0;
  while(await addRemoveElements.DELETE_BUTTON.isVisible()){
    await deleteButton.click();
    count++;
  }
  await expect(count).toBe(6);
})