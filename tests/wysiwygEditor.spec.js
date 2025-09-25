import { test, expect } from '@playwright/test';
import WysiwygEditor from '../pages/wysiwygEditor.page';
import { navigate } from '../utils/navigate.utils';

test('TinyMCE WYSIWYG Editor', async({page}) => {
    const wysiwygEditor = new WysiwygEditor(page);
    await navigate(page, process.env.HOMEPAGE_URL, wysiwygEditor.PAGE_LINK, wysiwygEditor.HEADER);
    await expect(wysiwygEditor.NOtIFICATION).toBeVisible();
    await expect(wysiwygEditor.NOtIFICATION).toContainText(
            "TinyMCE is in read-only mode because you have no more editor loads available this month.");
    await wysiwygEditor.DISMISS_BUTTON.click(); 
    await expect(wysiwygEditor.BODY).toBeVisible();
});
