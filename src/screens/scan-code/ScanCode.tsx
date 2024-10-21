import React, {useState} from 'react';
import {StyleSheet, Vibration} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

import PermissionPage from './PermissionsPage';
import NoCameraError from './NoCameraError';

const ScanCode = () => {
  const [isActive, setIsActive] = useState(true);
  const device = useCameraDevice('back');
  const {goBack} = useNavigation();
  const {hasPermission} = useCameraPermission();

  const onCodeScanned = (codes: Code[]) => {
    if (isActive) {
      alert(decodedQR(codes[0].value));
      setIsActive(false);
      Vibration.vibrate();
      goBack();
    }
  };

  const parseQueryString = (query: string) => {
    return query.split('&').reduce((acc, param) => {
      const [key, value] = param.split('=');
      if (key && value) {
        acc[decodeURIComponent(key)] = decodeURIComponent(
          value.replace(/\+/g, ' '),
        );
      }
      return acc;
    }, {} as {pa: string; pn: string; am: string});
  };

  const decodedQR = (code: string) => {
    const queryString = code.split('://')[1];
    const params = parseQueryString(queryString);

    const result = {
      pa: params.pa,
      pn: params.pn,
      am: params.am,
    };
    return `Name: ${result.pn}, address: ${result.pa}, amount: ${result.am}`;
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => onCodeScanned(codes),
  });

  if (!hasPermission) return <PermissionPage />;
  if (device == null) return <NoCameraError />;

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      codeScanner={codeScanner}
      device={device}
      isActive={isActive}
    />
  );
};

export default ScanCode;
