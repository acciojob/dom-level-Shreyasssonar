//your JS code here. If required.
// Find the element with the ID 'level'
const targetElement = document.getElementById('level');

// Calculate the DOM level by counting preceding siblings
function calculateDOMLevel(element) {
  let level = 0;
  while (element.previousElementSibling) {
    level++;
    element = element.previousElementSibling;
  }
  return level;
}

// Calculate the DOM level of the target element
const domLevel = calculateDOMLevel(targetElement);

// Display the DOM level using an alert
alert(`The level of the element is: ${domLevel}`);
