import { test, expect } from '@playwright/test';
import DynamicContent from '../pages/dynamicContent.page';
test("Dynamic Content test", async ({ page }) => {
    const dynamicContentPage = new DynamicContent(page);
    await dynamicContentPage.navigate();
    await dynamicContentPage.PAGE_LINK.click();
    await page.waitForLoadState('load');
    await expect(dynamicContentPage.PAGE_HEADER).toContainText('Dynamic Content');
    await page.getByText('click here').click();
    await page.waitForLoadState('load');
    await expect(dynamicContentPage.SECOND_PARAGRAPH).toHaveText('Accusantium eius ut architecto neque vel voluptatem vel nam eos minus ullam dolores voluptates enim sed voluptatem rerum qui sapiente nesciunt aspernatur et accusamus laboriosam culpa tenetur hic aut placeat error autem qui sunt.');
});

