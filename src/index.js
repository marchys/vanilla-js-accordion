import compose from 'lodash/fp/compose';
import createAccordion, { addSection } from './components/accordion';

import adviceClient from './libs/adviceClient';

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
    data: {
      slip: { advice },
    },
  } = await adviceClient.get();

  addSection('Section 4', advice, component);
};

startRequest();
