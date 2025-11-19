import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.View}>
      <Text>Welcome to Customer Manager Plus</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("continueButton");
        }}
      >
        <Text> Continue......</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("ClearCache");
        }}
      >
        <Text>Clear Cache </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    margin: 2,
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderRadius: 9,
    borderColor: "#000000",
  },
});
