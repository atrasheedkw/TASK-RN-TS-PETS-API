import PetList from "@/components/PetList";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <PetList />x
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9e3be",
  },
});
