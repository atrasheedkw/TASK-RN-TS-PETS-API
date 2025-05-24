import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import pets from "@/data/pets";
import { fetchOnePet } from "@/api/petServices";

interface petDetailsProps {
  name: string;
  description: string;
  type: string;
  image: string;
  image2: string;
  adopted: boolean;
}
const PetDetails = () => {
  const { petId } = useLocalSearchParams();
  // useParams
  console.log("Fetched ID: ", petId);

  // // fetch one pet handling
  // const fetchOnePetHandling = async (petID: Number) => {
  //   const onePet = await fetchOnePet(Number(petId));
  //   console.log("Fetched One Pet: ", onePet);
  //   return onePet;
  // };

  //useState
  const [selectedPet, setselectedPet] = useState<petDetailsProps | null>(null);
  // const selectedPet = fetchOnePetHandling(Number(petId));

  useEffect(() => {
    //fetch pet after first render
    const loadPet = async () => {
      if (petId) {
        setselectedPet(await fetchOnePet(Number(petId))); // Store result in state
      }
    };

    loadPet(); // Trigger fetch
  }, [petId]); // run effect only if petId changes

  // Conditional rendering while loading
  if (!selectedPet) {
    return <Text>Loading...</Text>;
  }

  const pet = selectedPet;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{pet.name}</Text>
      <Image source={{ uri: pet.image }} style={styles.image} />
      <Text style={styles.description}> {pet.description}</Text>
      <Text style={styles.type}>Type: {pet.type}</Text>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PetDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9e3be",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  type: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
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
