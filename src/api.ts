import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Change if needed

export const shortenUrl = async (longUrl: string) => {
  const response = await axios.post(`${API_BASE_URL}/shorten`, { longUrl });
  return response.data;
};

export const getOriginalUrl = async (shortUrl: string) => {
  const response = await axios.get(`${API_BASE_URL}/${shortUrl}`);
  return response.data;
};
