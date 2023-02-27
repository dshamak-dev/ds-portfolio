import {
  DEVICE_BREAKPOINTS,
  DEVICE_PLATFORM,
  DEVICE_TYPE,
} from "../constants/device.const";

export const getDeviceInfo = () => {
  const width = window.outerWidth;
  const height = window.outerHeight;
  const isLandscape = window.orientation > 0;
  const targetSize = isLandscape ? height : width;

  const breakpointEntry = Object.entries(DEVICE_BREAKPOINTS).find(
    ([_, [from, to]]) => {
      const isFrom = from == null || targetSize >= from;
      const isTo = to == null || targetSize <= to;

      return isFrom && isTo;
    }
  ) || [DEVICE_TYPE.DESKTOP, DEVICE_BREAKPOINTS[DEVICE_TYPE.DESKTOP]];

  const deviceType: DEVICE_TYPE = Number(breakpointEntry[0]) as DEVICE_TYPE;
  let devicePlatform: DEVICE_PLATFORM = null;

  const desktop = deviceType === DEVICE_TYPE.DESKTOP;
  const tablet = deviceType === DEVICE_TYPE.TABLET;
  const mobile = deviceType === DEVICE_TYPE.MOBILE;
  const ios = devicePlatform === DEVICE_PLATFORM.IOS;
  const android = devicePlatform === DEVICE_PLATFORM.ANDROID;
  const windows = devicePlatform === DEVICE_PLATFORM.WINDOWS;

  return { desktop, tablet, mobile, ios, android, windows };
};
