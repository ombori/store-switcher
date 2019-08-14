import MobileDetect from 'mobile-detect';
import queryString from 'query-string';
import { generateAppleLink, generateAndroidLink } from './generate-app-links';
import { StringRecord } from '../types';

export default function redirect(
  window: Window,
  userAgent: string,
  query: queryString.ParsedQuery<string> | StringRecord,
  supportedOS: Set<string>,
) {
  const md = new MobileDetect(userAgent);
  if (supportedOS.has(md.os())) {
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
        break;
    }
  }
}
