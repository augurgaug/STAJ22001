import axios from 'axios';
import { API_URL } from './constant/Link';


export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      throw new Error("Kullanıcı zaten kayıtlı");
    }
    console.error('kayıt olurken hata oluştu:', error);
    throw error;
  }
};

export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, user);
    return response.data;
  } catch (error) {
    console.error('giriş yaparken hata oluştu:', error);
    throw error;
  }
};

