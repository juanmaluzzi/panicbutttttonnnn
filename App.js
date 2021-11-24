import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Linking } from "react-native";
import Button from "./components/Button.js";

const App = () => {
  const handleWhatsappPress = async () => {
    await Linking.openURL("tel: +5491157219408");
    return console.log("Need Help");
  };

  const addPhoneNumber = async () => {
    await Linking.openURL("sms:+5491157219408?body=Mensaje de prueba");
    return console.log("Add Phone Nomber");
  };

  const editPhoneNumber = async () => {
    await Linking.openURL(
      "whatsapp://send?text=holajuancarlos&phone=5491157219408"
    );

    return console.log("Edit Phone Number");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.heading}>Panic Button APP</Text>
      <View style={styles.helpSection}>
        <Text style={styles.helpText}>
          You can use this app with a bluetooth device, when u need help for any
          reason, u can press the device button and the app will send a message
          to your added numbers
        </Text>
        <Button style={styles.helpButton} onPress={handleWhatsappPress}>
          Call
        </Button>
      </View>
      <View style={styles.bottomButtons}>
        <Button style={{ marginBottom: 8 }} onPress={addPhoneNumber}>
          Text message
        </Button>
        <Button onPress={editPhoneNumber}>Whatsapp message</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#cccc",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 80,
  },
  helpText: {
    fontFamily: "sans-serif-medium",
    marginBottom: 16,
  },
  helpSection: {
    padding: 16,
    alignItems: "center",
  },
  helpButton: {
    backgroundColor: "black",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  bottomButtons: {
    alignItems: "center",
    marginBottom: 16,
  },
});

export default App;
