import {Text, View, StyleSheet} from 'react-native';

import {useCameraPermission} from 'react-native-vision-camera';

import Button from '../../components/Button/Button';

const PermissionPage = () => {
  const {requestPermission} = useCameraPermission();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {'Permissions Required to Open Camera'}
      </Text>
      <Button onPress={requestPermission} text={'Grant Permission'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {color: 'black'},
});

export default PermissionPage;
