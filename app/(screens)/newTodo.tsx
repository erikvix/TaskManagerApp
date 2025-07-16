import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, TextInput, View } from "react-native";

export default function NewTodo() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <AntDesign
            size={40}
            name="plus"
            color={Colors.dark.primary}
            style={{ textAlign: "center" }}
          />
        </View>
        <TextInput
          style={{ flex: 1, padding: 8, color: Colors.dark.text }}
          placeholder="New Todo"
          placeholderTextColor={Colors.dark.text}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.dark.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    display: "flex",
    paddingTop: 52,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
