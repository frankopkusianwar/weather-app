const createElementWithAttributes = (tag, className, content) => {
  const element = document.createElement(tag);
  element.setAttribute('class', className);
  // element.setAttribute('style', style);
  element.textContent = content
  return element;
}

const setAttributesForElements = (tag, className) => {
  tag.setAttribute('class', className);
  return tag;
}

const apendChildren = (mainDiv, p1, p2, p3, p4, p5, h5, h3) => {
  mainDiv.appendChild(h5)
  mainDiv.appendChild(h3)
  mainDiv.appendChild(p1)
  mainDiv.appendChild(p2)
  mainDiv.appendChild(p3)
  mainDiv.appendChild(p4)
  mainDiv.appendChild(p5)
}

export { createElementWithAttributes, setAttributesForElements, apendChildren }
