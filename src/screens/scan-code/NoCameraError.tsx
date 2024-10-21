import {Text, View, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button/Button';

const NoCameraError = () => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{'Required hardware not found!'}</Text>
      <Button onPress={goBack} text={'Go Back'} />
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

export default NoCameraError;
