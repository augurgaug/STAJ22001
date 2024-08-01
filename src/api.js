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




export const createCari = async (cari) => {
  try {
    const response = await axios.post(`${API_URL}/caris`, cari);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      throw new Error("Cari zaten kayıtlı");
    }
    console.error('kayıt olurken hata oluştu:', error);
    throw error;
  }
};

export const fetchCaris = async () => {
  try {
    const response = await axios.get(`${API_URL}/caris`);
  
    return response.data;
  } catch (error) {
    console.error('Cariler alınırken hata oluştu:', error);
    throw error;
  } };


export const fetchCariId= async (id) =>{
try{
  const response= await axios.get(`${API_URL}/caris/${id}`);
  return response.data;
}
catch(error){
  return(
  console.error('Cariler alınırken hata oluştu:', error));
}

};



export const updateCari = async (id, cari) => {
  try {
    const response = await axios.put(`${API_URL}/caris/${id}`, cari);
    return response.data;
  } catch (error) {
    console.error('Cari güncellenirken hata oluştu:', error);
    throw error;
  }
};


export const updateCariFinance = async (id, cari) => {
  try {
    const response = await axios.put(`${API_URL}/caris/carii/${id}`, cari);
    return response.data;
  } catch (error) {
    console.error('Cari güncellenirken hata oluştu:', error);
    throw error;
  }
};


export const deleteCari = async (id) => {
  try {
    await axios.delete(`${API_URL}/caris/${id}`);
  } catch (error) {
    console.error('Cari silinirken hata oluştu:', error);
    throw error;
  }
};



export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
  
    return response.data;
  } catch (error) {
    console.error('kullanıcılar alınırken hata oluştu:', error);
    throw error;
  } };

  export const fetchUserId= async (id) =>{
    try{
      const response= await axios.get(`${API_URL}/users/${id}`);
      return response.data;
    }
    catch(error){
      return(
      console.error('kullanıcı alınırken hata oluştu:', error));
    }
    
    };
