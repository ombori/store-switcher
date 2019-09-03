# App Store Switcher

App Store Switcher is a framework-agnostic utility that automatically redirects site visitors to the appropriate app store based from the OS of their device.

Supported devices at the moment is iOS and Android. 

## Getting Started

### Using the pre-made dist
1. Clone this repository
2. Contents of the `/dist` can be hosted anywhere and is ready for-use.

### Building on your own:
1. Clone this repository.
2. Install dependencies in the project (run `yarn` or `yarn install`, `npm` or `npm install` if you're using npm)
3. Run `yarn build`
4. In the `/dist` folder, you'll see the compiled files which you can host anywhere, statically.

### Usage
Let's say you've hosted your app in the link example.com, you need to provide 3 link parameters in order for the redirection to work, the required parameters are that links the user to the appropriate store.

Required parameters when visiting example.com

| Parameter           | Description         | Example
| --------------------|---------------------|---------------
| `android_appId`     | Android App ID      | `com.red.by.dufry` of <br /> `play.google.com/store/apps/details?id=com.red.by.dufry`
| `apple_developerId` | Apple Developer ID  | `red-by-dufry` of <br /> `apps.apple.com/us/app/red-by-dufry/id1108485056`
| `apple_appId`       | Apple App ID        | `id1108485056` of <br /> `apps.apple.com/us/app/red-by-dufry/id1108485056`

A final link example would be: <br />
`example.com/?android_appId=com.red.by.dufry&apple_developerId=red-by-dufry&apple_appId=id1108485056`

## Behavior
If the device is part of the supported OS, Android/iOS, the static file redirects the user automatically to the appropriate app store, otherwise, a fallback page will be shown. This fallback page contains two badges: Play Store and App Store badges.

### Testing:
Simply run `yarn:test` on the project directory and you're good to go.
