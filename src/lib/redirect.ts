import queryString from 'query-string';
import { generateAppleLink, generateAndroidLink } from './generate-app-links';
import { StringRecord } from '../types';
import detectPlatform from './detect-platform';

export default function redirect(
  window: Window,
  userAgent: string,
  query: queryString.ParsedQuery<string> | StringRecord,
) {
  const md = detectPlatform(userAgent);
  switch (md.os()) {
    case 'iOS': {
      const { apple_developerId: developerId, apple_appId: appId } = query;

      if (typeof developerId === 'string' && typeof appId === 'string') {
        window.location.replace(generateAppleLink({ developerId, appId }));
      } else throw new Error('iOS metadata values should be strings.');

      break;
    }
    case 'AndroidOS': {
      const { android_appId: appId } = query;

      if (typeof appId === 'string')
        window.location.replace(generateAndroidLink({ appId }));
      else throw new Error('Android metadata values should be strings.');

      break;
    }
    default:
      // Show badges at the DOM
      const badges = document.querySelector('.badges');
      badges && badges.classList.remove('hidden');

      break;
  }
}
