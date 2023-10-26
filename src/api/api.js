import axios from 'axios';
const url = 'https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete'

const instonce = axios.create({baseURL : url})

export const getDropMenuApi = () => instonce.get();