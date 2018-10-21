import Axios from 'axios';

import { addErrorCatching } from './interceptors';

const steamClient = Axios.create({
  baseURL: 'http://api.adviceslip.com/advice',
});

export default addErrorCatching(steamClient);
