import { AndroidAppMetaData, AppleAppMetaData } from "../types";

export function generateAndroidLink({ appId = "" }: AndroidAppMetaData) {
  return `https://play.google.com/store/apps/details?id=${appId}`;
}

export function generateAppleLink({
  developerId = "",
  appId = ""
}: AppleAppMetaData) {
  return `https://apps.apple.com/app/${developerId}/${appId}`;
}
