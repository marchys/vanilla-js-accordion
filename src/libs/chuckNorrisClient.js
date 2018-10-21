import Axios from 'axios';

import { addErrorCatching } from './interceptors';

const steamClient = Axios.create({
  baseURL: 'https://api.chucknorris.io',
});

export default addErrorCatching(steamClient);
