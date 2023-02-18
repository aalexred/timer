// Set the date and time to count down to
const countdownDate = new Date('October 27, 2023 00:00:00').getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countdownDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the console
  console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

  // If the countdown is finished, display a message and clear the timer
  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    console.log('Countdown finished!');
  }
}, 1000);
