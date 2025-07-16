import { StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import Task from "@/components/Task";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { format } from "date-fns";
import Link from "expo-router/link";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          {format(new Date(), "EEEE, MMMM d")}
        </ThemedText>
        <HelloWave />
      </ThemedView>
      <Task title="Study" icon="school" type="daily" />
      <Link
        style={{
          position: "absolute",
          bottom: 24,
          right: 24,
          backgroundColor: Colors.dark.primary,
          borderRadius: 30,
          padding: 12,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
        href={"/newTodo"}
      >
        <AntDesign
          size={32}
          name="plus"
          color={Colors.dark.text}
          style={{ textAlign: "center" }}
        />
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  firstHalfCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  stepContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.dark.primary,
    padding: 20,
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
    display: "flex",
    paddingTop: 52,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
