import redirect from './lib/redirect';
import { optionalTypesOf } from './lib/utils';
import detectPlatform from './lib/detect-platform';
import getQuery from './lib/get-query';
import { generateAppleLink, generateAndroidLink } from './lib/generate-app-links';

const query = getQuery();
const { apple_developerId, apple_appId, android_appId } = query;
const supportedOS = new Set(['AndroidOS', 'iOS']);

if (optionalTypesOf([apple_developerId, apple_appId, android_appId], 'string')) {
  if (supportedOS.has(detectPlatform().os())) {
    redirect(window, window.navigator.userAgent, query);
  } else {
    const appStoreButton = window.document.querySelector('.app-store');
    const androidStoreButton = window.document.querySelector('.play-store');
    const androidLink = generateAndroidLink({ appId: android_appId });
    const appleLink = generateAppleLink({
      developerId: apple_developerId,
      appId: apple_appId,
    });

    appStoreButton && !appleLink && appStoreButton.remove();
    androidStoreButton && !androidLink && androidStoreButton.remove();

    appStoreButton &&
      appStoreButton.addEventListener('click', () => {
        window.location.href = appleLink;
      });

    androidStoreButton &&
      androidStoreButton.addEventListener('click', () => {
        window.location.href = androidLink;
      });
  }
}
