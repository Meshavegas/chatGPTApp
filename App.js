import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatScreen from "./src/ChatScreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ChatScreen />
    </View>
  );
}
