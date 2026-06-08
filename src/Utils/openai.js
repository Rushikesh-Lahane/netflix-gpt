import OpenAI from 'openai';
import { OPENAPI_KEY } from './constant';

const client = new OpenAI({
//   apiKey: 'export const API_KEY = process.env.REACT_APP_OPENAI_KEY;
     apiKey: OPENAPI_KEY,
     dangerouslyAllowBrowser: true ,
});

export default client;