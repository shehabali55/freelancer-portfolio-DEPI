/*====== typing animations=====*/ 

const text = "Hello, I'm Shehab Ali Abdel Latif. Welcome to my portfolio!";
const typingElement = document.getElementById("typing");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust typing speed
  } else {
    setTimeout(() => {
      typingElement.innerHTML = ""; // Clear text after finishing
      index = 0; // Reset index
      typeText(); // Restart typing
    }, 2000); // Adjust delay before restarting the typing
  }
}

document.addEventListener("DOMContentLoaded", typeText);
/*======  END of typing animations=====*/


