const createElementWithAttributes = (tag, className, content) => {
  const element = document.createElement(tag);
  element.setAttribute('class', className);
  element.textContent = content;
  return element;
};

const setAttributesForElements = (tag, className) => {
  tag.setAttribute('class', className);
  return tag;
};

const setAttributesForInput = (tag, type, placeholder, id, content) => {
  tag.setAttribute('type', type);
  tag.setAttribute('placeholder', placeholder);
  tag.setAttribute('id', id);
  if (content !== '') {
    tag.textContent = content;
  }
  return tag;
};

const apendChildren = (mainDiv, p1, p2, p3, p4, p5, h5, h3, btnDiv, btn1, btn2) => {
  mainDiv.appendChild(h5);
  mainDiv.appendChild(h3);
  mainDiv.appendChild(p1);
  mainDiv.appendChild(p2);
  mainDiv.appendChild(p3);
  mainDiv.appendChild(p4);
  mainDiv.appendChild(p5);
  btnDiv.appendChild(btn1);
  btnDiv.appendChild(btn2);
  mainDiv.appendChild(btnDiv);
};

const setBodyBackground = (data, bdy) => {
  if (data === 'Clouds') {
    bdy.setAttribute('class', 'clouds');
  } else if (data === 'Clear') {
    bdy.setAttribute('class', 'clear');
  }
};

export {
  createElementWithAttributes, setAttributesForElements, apendChildren,
  setAttributesForInput, setBodyBackground,
};
