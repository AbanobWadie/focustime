import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import FocusView from "./src/Features/Focus";
import TimerView from './src/Features/Timer';
import { Colors } from './src/utils/Colors';

export default function App() {
  const [subject, setSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!subject ? (
        <FocusView setListener={setSubject} />
      ) : (
        <TimerView focusSubject={subject} onTimerEnd={() => {}} clearSubject={() => {}}/>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.darkBlue,
  },
});
