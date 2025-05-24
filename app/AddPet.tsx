import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { createNewPet } from "@/api/petServices";
import { router } from "expo-router";

const AddPet = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [adopted, setAdopted] = useState(false);
  // capture the  created new pet
  const newPethandling = async () => {
    const newPet = { name, image, description, type, adopted };
    console.log("created pet: ", newPet);
    try {
      await createNewPet(name, image, description, type, adopted);
      Alert.alert("Success", "Pet added!");
      router.back();
    } catch (error) {
      console.error("Failed to add pet:", error);
      Alert.alert("Error", "Failed to add pet");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Your Pet! </Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        onChangeText={(input) => {
          setName(input);
        }}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        onChangeText={(input) => {
          setDescription(input);
        }}
      />
      <TextInput
        placeholder="Type"
        style={styles.input}
        onChangeText={(input) => {
          setType(input);
        }}
      />
      <TextInput
        placeholder="Image"
        style={styles.input}
        onChangeText={(input) => {
          setImage(input);
        }}
      />
      <TextInput
        placeholder="Adopted"
        style={styles.input}
        onChangeText={() => {
          setAdopted(false);
        }}
      />

      <TouchableOpacity style={styles.button} onPress={newPethandling}>
        <Text style={styles.buttonText}>Add Pet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9e3be",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
