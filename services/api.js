import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend-dngjezaug9b2gqa2.centralindia-01.azurewebsites.net/api/v1', // Change this if your backend is different
});

export const login = async (username, password) => {
  const { data } = await API.post('/login', { username, password });
  return data;
};

export const fetchEmployees = async () => {
  const { data } = await API.get('/employees');
  return data;
};

export const addEmployee = async (employee) => {
  const { data } = await API.post('/employees', employee);
  return data;
};

export const updateEmployee = async (id, employee) => {
  const { data } = await API.put(`/employees/${id}`, employee);
  return data;
};

export const deleteEmployee = async (id) => {
  await API.delete(`/employees/${id}`);
};
