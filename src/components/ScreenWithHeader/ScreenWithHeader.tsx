import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const ScreenWithHeader = ({children}: {children: React.ReactNode}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollContainer}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

export default ScreenWithHeader;
