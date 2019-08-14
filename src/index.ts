import MobileDetect from "mobile-detect";
import queryString from "query-string";
import {
  generateAppleLink,
  generateAndroidLink
} from "./lib/generate-app-links";

const md = new MobileDetect(window.navigator.userAgent);
const query = queryString.parse(location.search);
const supportedOS = new Set(["AndroidOS", "iOS"]);

if (supportedOS.has(md.os())) {
  switch (md.os()) {
    case "iOS": {
      const { apple_developerId: developerId, apple_appId: appId } = query;

      if (typeof developerId === "string" && typeof appId === "string")
        window.location.replace(generateAppleLink({ developerId, appId }));
      else throw new Error("iOS Metadata values should be strings.");

      break;
    }
    case "AndroidOS": {
      const { android_appId: appId } = query;

      if (typeof appId === "string")
        window.location.replace(generateAndroidLink({ appId }));
      else throw new Error("iOS Metadata values should be strings.");

      break;
    }
    default:
      break;
  }
}
