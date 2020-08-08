/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */

import getData from './fetchData';
import validateInpt from '../components/validateInput';
import getElements from '../components/elements';
import renderContent from '../components/weatherContent';

const displayData = () => {
  const { submitBtn, inpt } = getElements();
  const toggleBtns = (btns) => {
    btns.forEach(bt => {
      bt.addEventListener('click', () => {
        (bt.textContent === 'Celcius') ? renderCelcius() : renderFaren();
      });
    });
  };
  const renderCelcius = () => {
    const cityname = localStorage.getItem('cname');
    const celcuisResponse = getData(cityname, 'metric');
    celcuisResponse.then((data) => {
      renderContent(data, '°C');
      const { btns } = getElements();
      toggleBtns(btns);
    }).catch(() => {
      validateInpt();
    });
  };
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('cname', inpt.value);
    renderCelcius();
    inpt.value = '';
  });
  const renderFaren = () => {
    const fname = localStorage.getItem('cname');
    const farenResponse = getData(fname, 'imperial');
    farenResponse.then((data) => {
      renderContent(data, '°F');
      const { btns } = getElements();
      toggleBtns(btns);
    });
  };
};

export default displayData;
