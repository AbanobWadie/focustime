import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Colors } from '../utils/Colors';
import {} from '../components/Countdown';

export default function TimerView({ focusSubject, onTimerEnd, clearSubject }) {
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Text>{focusSubject}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {},
});
