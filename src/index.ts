import redirect from './lib/redirect';
import { typesOf } from './lib/utils';
import detectPlatform from './lib/detect-platform';
import getQuery from './lib/get-query';

const query = getQuery();
const { apple_developerId, apple_appId, android_appId } = query;
const supportedOS = new Set(['AndroidOS', 'iOS']);

if (typesOf([apple_developerId, apple_appId, android_appId], 'string')) {
  if (supportedOS.has(detectPlatform().os())) {
    redirect(window, window.navigator.userAgent, query);
  }
}
