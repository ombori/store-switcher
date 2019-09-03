import { AndroidAppMetaData, AppleAppMetaData } from '../types';

export function generateAndroidLink({ appId = '' }: AndroidAppMetaData) {
  return `https://play.google.com/store/apps/details?id=${appId}`;
}

export function generateAppleLink({ developerId = '', appId = '' }: AppleAppMetaData) {
  return `itms-apps://appstore.com/app/${developerId}/${appId}`;
}
