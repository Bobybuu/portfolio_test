import axios from 'axios';
import { ContactFormData, ContactResponse } from '../types/Contact';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactAPI = {
  submitContact: async (formData: ContactFormData): Promise<ContactResponse> => {
    const response = await api.post<ContactResponse>('/contact/', formData);
    return response.data;
  },
};