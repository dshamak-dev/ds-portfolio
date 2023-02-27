export enum DEVICE_TYPE {
  DESKTOP = 0,
  TABLET,
  MOBILE,
}

export enum DEVICE_PLATFORM {
  UNKNOWN = 0,
  WINDOWS,
  IOS,
  ANDROID,
}

export const DEVICE_BREAKPOINTS = {
  [DEVICE_TYPE.MOBILE]: [null, 480],
  [DEVICE_TYPE.TABLET]: [481, 1024],
  [DEVICE_TYPE.DESKTOP]: [1025, null],
};
