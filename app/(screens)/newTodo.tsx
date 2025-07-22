import { Colors } from "@/constants/Colors";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Link from "expo-router/link";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewTodo() {
  const saveTodo = () => {
    console.log("Todo saved!");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.dark.background,
        padding: 16,
        gap: 16,
      }}
    >
      <View style={styles.optionsHeader}>
        <Link href={"/home"}>
          <FontAwesomeIcon icon={faX} color={Colors.dark.icon} />
        </Link>
      </View>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faDumbbell}
            size={26}
            color={Colors.dark.icon}
          />
        </View>
        <TextInput
          style={{ flex: 1, padding: 8, color: Colors.dark.text }}
          placeholder="New Todo"
          placeholderTextColor={Colors.dark.text}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={saveTodo} style={styles.button}>
          <Text style={styles.text}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  optionsHeader: {
    height: 40,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.dark.primary,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: Colors.dark.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    display: "flex",
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  header: {
    gap: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
