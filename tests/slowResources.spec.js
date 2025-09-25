import {test, expect} from '@playwright/test';
import SlowResources from '../pages/slowResources.page';
import { navigate } from '../utils/navigate.utils';

test('Slow Resources Test Suite', async ({page}) =>{
    const slowResource = new SlowResources(page);
    await navigate(page, process.env.HOMEPAGE_URL, slowResource.PAGE_LINK, slowResource.HEADER);
    await expect(slowResource.SLOWRESOURCE).toHaveText('At times it can take a while for third-party site resources to load (e.g., tracking code javascript, social networking widgets, etc.). This example has a rogue GET request that takes 30 seconds to complete.');

});