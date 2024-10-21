import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {QrCodeSvg} from 'react-native-qr-svg';

import {QR_PAY} from '../../shared/consts';

import ScreenWithHeader from '../../components/ScreenWithHeader/ScreenWithHeader';

const reactIcon = require('../../assets/react.png');

const QRCodeStyledScreen = () => {
  return (
    <ScreenWithHeader>
      <View style={styles.qrContainer}>
        <QrCodeSvg
          style={styles.qr}
          gradientColors={['#0800ff', '#ff0000']}
          value={QR_PAY}
          frameSize={300}
          content={<Image source={reactIcon} style={styles.imageStyle} />}
          contentCells={5}
          contentStyle={styles.box}
        />
      </View>
    </ScreenWithHeader>
  );
};

const styles = StyleSheet.create({
  qrContainer: {
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  qr: {
    justifyContent: 'center',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
});

export default QRCodeStyledScreen;
