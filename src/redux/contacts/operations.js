import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { goitApi } from '../auth/operations';


// axios.defaults.baseURL = 'https://674e29c3635bad45618de061.mockapi.io';
// export const goitApi = axios.create({
//     baseURL: 'https://connections-api.goit.global/',
// });

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await goitApi.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
   
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        
    }
});
export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const response = await goitApi.post('/contacts', body); 
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});