import curry from 'lodash/fp/curry';

import './accordion.scss';

export const addSection = curry((title, content, accordion) => {
  const titleDom = document.createElement('dt');
  titleDom.classList.add('Accordion-title');
  titleDom.innerHTML = title;

  accordion.appendChild(titleDom);

  const contentDomContainer = document.createElement('dd');
  contentDomContainer.classList.add('Accordion-section');
  titleDom.onclick = () => contentDomContainer.classList.toggle('Accordion-section-unfolded');
  const contentDom = document.createElement('p');
  contentDom.innerHTML = content;
  contentDomContainer.appendChild(contentDom);

  accordion.appendChild(contentDomContainer);

  return accordion;
});

export default function createAccordion(parent) {
  const container = document.createElement('dl');
  container.classList.add('Accordion');
  parent.appendChild(container);
  return container;
}
