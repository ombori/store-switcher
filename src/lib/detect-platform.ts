import MobileDetect from 'mobile-detect';

export default function detectPlatform(userAgent = window.navigator.userAgent) {
  return new MobileDetect(userAgent);
}
