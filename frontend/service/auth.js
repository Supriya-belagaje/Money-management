import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/users"; // Adjust the URL as needed

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    // Re-throw the error so the calling function can handle it
    throw error;
  }
};

// auth.js in the frontend
// This file contains the API calls for authentication



export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    // Re-throw the error so the calling function can handle it
    throw error;
  }
};