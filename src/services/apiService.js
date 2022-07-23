import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get("/users");
    return data;
  } catch (error) {
    return error;
  }
};

export const getUserById = async (id) => {
  try {
    const { data } = await axios.get(`/users/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
