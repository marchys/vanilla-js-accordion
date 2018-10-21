import compose from 'lodash/fp/compose';
import zipWith from 'lodash/fp/zipWith';

import createAccordion, { addSection } from './accordion';

jest.mock('./accordion.scss');

function setup() {
  const element = createAccordion(document.body);
  return {
    element,
    get title() {
      return element.querySelector('dt');
    },
    get contentContainer() {
      return element.querySelector('dd');
    },
  };
}

beforeEach(() => {
  document.body.innerHTML = '<div></div>';
});

test('should render global element', () => {
  setup();

  expect(document.body.innerHTML).toMatchSnapshot();
});

test('should add as much sections as addSection called', () => {
  const accordion = setup();

  const sectionTitles = ['Section 1', 'Section 2', 'Section 3'];
  const sectionContents = ['Section 1 Content...', 'Section 2 Content...', 'Section 3 Content...'];

  compose(
    ...zipWith(
      (title, content) => addSection(title, content),
      sectionTitles,
      sectionContents,
    ).reverse(),
  )(accordion.element);

  const expectedTitles = zipWith(
    (element, title) => [title, element],
    document.querySelectorAll('dt'),
    sectionTitles,
  );
  const expectedContents = zipWith(
    (element, section) => [section, element],
    document.querySelectorAll('p'),
    sectionContents,
  );

  expectedTitles.forEach(([title, output]) => expect(output.innerHTML).toBe(title));
  expectedContents.forEach(([content, output]) => expect(output.innerHTML).toBe(content));
});

test('should add a Accordion-section-unfolded class on title click', () => {
  const accordion = setup();

  compose(addSection('Section 1', 'Section 1 Content...'))(accordion.element);
  accordion.title.click();

  expect(accordion.contentContainer.classList).toContain('Accordion-section-unfolded');
});
