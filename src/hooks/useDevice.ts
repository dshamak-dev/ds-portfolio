import { useState, useEffect, useMemo } from "react";
import { getDeviceInfo } from "../utils/device.utils";

export const useDevice = () => {
  const [deviceInfo, setDeviceInfo] = useState(getDeviceInfo());

  useEffect(() => {
    window.addEventListener("resize", () => setDeviceInfo(getDeviceInfo()));
  }, []);

  return { ...deviceInfo };
};
