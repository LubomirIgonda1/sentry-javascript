import type { Route } from '@playwright/test';
import { expect } from '@playwright/test';
import type { Event } from '@sentry/types';

import { sentryTest } from '../../../../utils/fixtures';
import { getFirstSentryEnvelopeRequest, shouldSkipTracingTest } from '../../../../utils/helpers';

sentryTest('should not capture long task when flag is disabled.', async ({ browserName, getLocalTestPath, page }) => {
  // Long tasks only work on chrome
  if (shouldSkipTracingTest() || browserName !== 'chromium') {
    sentryTest.skip();
  }

  await page.route('**/path/to/script.js', (route: Route) => route.fulfill({ path: `${__dirname}/assets/script.js` }));

  const url = await getLocalTestPath({ testDir: __dirname });

  const eventData = await getFirstSentryEnvelopeRequest<Event>(page, url);
  // eslint-disable-next-line deprecation/deprecation
  const uiSpans = eventData.spans?.filter(({ op }) => op?.startsWith('ui'));

  expect(uiSpans?.length).toBe(0);
});
