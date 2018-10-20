import './index.scss';

function createText(text) {
  const textElement = document.createElement('p');

  textElement.innerHTML = text;

  return textElement;
}

const rootComponent = document.getElementById('root');

rootComponent.appendChild(createText('hello world'));
