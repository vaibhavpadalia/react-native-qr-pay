import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';

import {QR_PAY} from '../../shared/consts';

import ScreenWithHeader from '../../components/ScreenWithHeader/ScreenWithHeader';
import Button from '../../components/Button/Button';

const reactIcon = require('../../assets/react.png');

const QRCodeScreen = () => {
  const {navigate} = useNavigation<any>();

  const navigateToStyles = () => navigate('QRCodeStyled');

  const navigateToScan = () => navigate('ScanCode');

  return (
    <ScreenWithHeader>
      <View style={styles.qrContainer}>
        <QRCode size={300} logo={reactIcon} value={QR_PAY} />
        <Button onPress={navigateToStyles} text="QR with Styles" />
        <Button onPress={navigateToScan} text="Scan QR" />
      </View>
    </ScreenWithHeader>
  );
};

const styles = StyleSheet.create({
  qrContainer: {
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
});

export default QRCodeScreen;
