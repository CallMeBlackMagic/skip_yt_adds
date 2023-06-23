// Function to check if the button exists and click it
function clickButton() {
  var skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
  }
}

// Call the clickButton function every 1 second
setInterval(clickButton, 1000);
