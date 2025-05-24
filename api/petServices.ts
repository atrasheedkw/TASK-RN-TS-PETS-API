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

const createNewPet = async (
  name: string,
  image: string,
  description: string,
  type: string,
  adopted: boolean
) => {
  const response = await Instance.post(`/pets`, {
    name,
    description,
    type,
    image,
    adopted,
  });
  return response.data;
};

const deletePet = async (id: Number) => {
  const response = await Instance.delete(`/pets/${id}`);
  return response.data;
};

export { fetchAllPets, fetchOnePet, createNewPet, deletePet };
