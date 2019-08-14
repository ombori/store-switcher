'use strict';

import android from './fixtures/android';
import apple from './fixtures/apple';
import redirect from '../lib/redirect';

const SUPPORTED_OS = new Set(['AndroidOS', 'iOS']);

// Known issue in JSDOM: https://github.com/jsdom/jsdom/issues/2112
delete window.location;
// @ts-ignore
window.location = {
  replace: (newUrl) => {
    window.location.href = newUrl;
  },
  href: '',
};

describe('switcher app successfully redirects users into their appropriate app store links', () => {
  test('switcher works in android', () => {
    const VALID_ANDROID_METADATA = {
      android_appId: 'com.red.by.dufry',
    };

    android.userAgents.forEach((userAgent) => {
      const spy = jest.spyOn(window.location, 'replace');
      const expectedUrl = `https://play.google.com/store/apps/details?id=${
        VALID_ANDROID_METADATA.android_appId
      }`;
      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value: userAgent,
      });
      redirect(window, userAgent, VALID_ANDROID_METADATA);
      expect(window.location.href).toBe(expectedUrl);
      expect(spy).toHaveBeenCalledWith(expectedUrl);
    });
  });

  test('switcher works in ios', () => {
    const VALID_APPLE_METADATA = {
      apple_developerId: 'red-by-dufry',
      apple_appId: 'id1108485056',
    };

    apple.userAgents.forEach((userAgent) => {
      const spy = jest.spyOn(window.location, 'replace');
      const expectedUrl = `https://apps.apple.com/app/${
        VALID_APPLE_METADATA.apple_developerId
      }/${VALID_APPLE_METADATA.apple_appId}`;

      Object.defineProperty(window.navigator, 'userAgent', {
        configurable: true,
        value: userAgent,
      });
      redirect(window, userAgent, VALID_APPLE_METADATA);
      expect(window.location.href).toBe(expectedUrl);
      expect(spy).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
