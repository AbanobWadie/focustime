import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration, Platform } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import { Colors } from "../utils/Colors";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";

export default function TimerView({ focusSubject, onTimerEnd, clearSubject }) {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          onProgress={setProgress}
          onEnd={(reset) => {
            Vibration.vibrate();
            setIsStarted(false);
            setProgress(1);
            reset();
            onTimerEnd(focusSubject);
          }}
          isPaused={!isStarted}
        />
        <View style={styles.textView}>
          <Text style={styles.text}>Focusing on:</Text>
          <Text style={styles.text}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressBarView}>
        <ProgressBar
          style={styles.progressBar}
          progress={progress}
          color={Colors.progressBar}
        />
      </View>
      <View style={styles.buttonsView}>
        <RoundedButton
          style={styles.button}
          title="10"
          size={60}
          onPress={() => setMinutes(10)}
        />
        <RoundedButton
          style={styles.button}
          title="15"
          size={60}
          onPress={() => setMinutes(15)}
        />
        <RoundedButton
          style={styles.button}
          title="20"
          size={60}
          onPress={() => setMinutes(20)}
        />
      </View>
      <View style={styles.startButtonView}>
        {
          <RoundedButton
            title={!isStarted ? "Start" : "Pause"}
            onPress={() => setIsStarted(!isStarted)}
          />
        }
      </View>
      <View style={styles.buttonsView}>
        <RoundedButton
          style={styles.button}
          title="-"
          size={50}
          onPress={() => clearSubject(null)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  startButtonView: {
    flex: 0.4,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    flex: 0.2,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  progressBarView: {
    flex: 0.1,
  },
  progressBar: {
    height: 10,
    marginBottom: 10,
  },
  buttonsView: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 10,
  },
});
