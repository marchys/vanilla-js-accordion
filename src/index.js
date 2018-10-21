import compose from 'lodash/fp/compose';
import createAccordion, { addSection } from './components/accordion';

import chuckNorrisClient from './libs/chuckNorrisClient';

import './index.scss';

const rootComponent = document.getElementById('root');

const component = compose(
  addSection('Section 3', 'Section 3 Content...'),
  addSection('Section 2', 'Section 2 Content...'),
  addSection('Section 1', 'Section 1 Content...'),
  createAccordion,
)(rootComponent);

const startRequest = async () => {
  const {
    data: { value },
  } = await chuckNorrisClient.get('/jokes/random');

  addSection('Section 4', value, component);
};

startRequest();
