import {test,expect} from '@playwright/test';
import NestedFrames from '../pages/nestedFrames.page';
import { navigate } from '../utils/navigate.utils';

test('validate the Nested Frames page', async({page})=>{
   
    const nestedFrames = new NestedFrames(page);
    await navigate(page, process.env.HOMEPAGE_URL, nestedFrames.PAGE_LINK, nestedFrames.HEADER);
    await expect(nestedFrames.FRAME.contentFrame().getByText('MIDDLE')).toBeVisible();
});
