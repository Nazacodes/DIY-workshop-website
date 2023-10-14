// Create a link element
const link = document.createElement('a');
link.href = '/javascripts/example.js'; // Replace with the path to your JavaScript file
link.innerHTML = 'Example'; // Replace with the text you want to display in the header

// Append the link element to the header
const header = document.querySelector('header');
header.appendChild(link);

