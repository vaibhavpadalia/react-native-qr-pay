import {StyleSheet, Pressable, Text} from 'react-native';

const Button = ({text, onPress}: {text: string; onPress: () => void}) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
  },
});

export default Button;
