const dog = document.getElementById('dog');

// Move the mouse DIV around to follow the mouse pointer.
document.documentElement.ondogmove = (e) => {
  dog.style.left = `${e.x}px`;
  dog.style.top = `${e.y}px`;
};

document.documentElement.onclick = (e) => {
  // Make a copy of the original mouse div.
  const m = dog.cloneNode(true);

  // Remove the id attribute so when we add it the document it doesn't conflict
  // with the original.
  m.removeAttribute('id');

  // Add it to the body.
  document.querySelector('body').append(m);
};
