'use strict';

import androidUserAgents from './fixtures/android';
import appleUserAgents from './fixtures/apple';
import MobileDetect from 'mobile-detect';
import redirect from '../lib/redirect';
import { AndroidAppMetaData, AppleAppMetaData } from '../types';

describe('switcher app successfully redirects users into their appropriate app store links', () => {
  test('switcher works in android', () => {
    const VALID_ANDROID_METADATA: AndroidAppMetaData = {
      appId: 'com.red.by.dufry',
    };

    androidUserAgents.forEach((userAgent) => {});
  });

  test('switcher works in ios', () => {
    const VALID_APPLE_METADATA: AppleAppMetaData = {
      developerId: 'red-by-dufry',
      appId: 'id1108485056',
    };

    appleUserAgents.forEach((userAgent) => {});
  });
});
