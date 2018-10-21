import compose from 'lodash/fp/compose';
import createAccordion, { addSection } from './components/accordion';

import './index.scss';

const rootComponent = document.getElementById('root');

compose(
  addSection('Section 3', 'Section 3 Content...'),
  addSection('Section 2', 'Section 2 Content...'),
  addSection('Section 1', 'Section 1 Content...'),
  createAccordion,
)(rootComponent);
