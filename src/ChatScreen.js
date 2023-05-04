import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {MaterialIcons} from "@expo/vector-icons"
//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
const ChatScreen = () => {
  const [question, setQuestion] = useState("");
  const handleQuestion = () => {
    console.log("question");
    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":
          "Bearer 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",
      },
      body: JSON.stringify({
        "messages":[{"role" : "user", "content":question}] ,
        "model": "gpt-3.5-turbo",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleTextChange = (text) => {
    setQuestion(text);
    console.log(text);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Result show here</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, marginLeft: 10, marginBottom: 20, backgroundColor: "white", 
      borderRadius: 5, borderColor: "#ADD000", borderWidth:1, height:60, justifyContent:"center", paddingHorizontal:10 }}>
          <TextInput
            placeholder="Entrez votre question"
            value={question}
            onChangeText={handleTextChange}
          />
        </View>
        <TouchableOpacity onPress={handleQuestion}>
          <View
            style={{
              backgroundColor: "#ADF000",
              padding: 5,
              marginRight: 10,
              marginBottom: 20,
              borderRadius:999,
              height:60, width:60, 
              justifyContent:"center",
              alignItems:"center",
              marginLeft:10
            }}

          >
           <MaterialIcons name="send" size={40} color="white"/>
          </View>
        </TouchableOpacity>
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
