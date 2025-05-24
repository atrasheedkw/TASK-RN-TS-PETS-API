import axios from "axios";
import Instance from ".";

const fetchAllPets = async () => {
  const response = await Instance.get("/pets");
  return response.data;
};

const fetchOnePet = async (id: Number) => {
  const response = await Instance.get(`/pets/${id}`);
  return response.data;
};

export { fetchAllPets, fetchOnePet };
