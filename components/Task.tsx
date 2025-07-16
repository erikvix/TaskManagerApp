import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface TaskProps {
  title: string;
  type: "daily" | "timer";
  icon: string;
}

export default function Task(TaskProps: TaskProps) {
  const { title, type, icon } = TaskProps;

  const handleCompleteTask = () => {
    // Logic to handle task completion
    console.log(`Task "${title}" of type "${type}" completed.`);
  };

  // const handleC

  return (
    <ThemedView style={styles.stepContainer}>
      <View style={styles.firstHalfCard}>
        <ThemedText type="default">{title}</ThemedText>
        <MaterialIcons
          name={icon}
          size={24}
          color={Colors.dark.primary}
          style={{ marginLeft: 8 }}
        />
      </View>
      <View style={styles.secondHalfCard}>
        <Button
          title="Complete"
          onPress={() => console.log("Pushed")}
          color={Colors.dark.primary}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  firstHalfCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  secondHalfCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  stepContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.dark.primary,
    padding: 20,
    gap: 8,
    marginBottom: 8,
  },
});
