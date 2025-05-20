// src/api/userApi.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

export const fetchUsers = () => axios.get(API_URL);
export const createUser = user => axios.post(API_URL, user);
export const updateUserApi = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUserApi = id => axios.delete(`${API_URL}/${id}`);
