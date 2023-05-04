import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result show here</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, marginLeft: 10, marginBottom: 20 }}>
          <TextInput placeholder="Entrez votre question" />
        </View>
        <View
          style={{
            backgroundColor: "red",
            padding: 5,
            marginRight: 10,
            marginBottom: 20,
          }}
        >
          <Text>Envoyer</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
