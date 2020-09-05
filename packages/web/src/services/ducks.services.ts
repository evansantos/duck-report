import axios from 'axios';
import Report from '../interfaces/report.interface';

const { REACT_APP_DUCK_DB: url } = process.env;

export const addDuckReport = (data: Report) => axios.post(`${url}/ducks`, data);
export const getDuckReports = () => axios.get(`${url}/ducks`);
