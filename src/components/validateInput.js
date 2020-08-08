import getElements from './elements';
import { createElementWithAttributes } from '../helpers/helper';

const { mainDiv } = getElements();

const validateInpt = () => {
  mainDiv.textContent = '';
  const h3 = createElementWithAttributes('h3', 'error', 'City Not Found');
  mainDiv.appendChild(h3);
};

export default validateInpt;
