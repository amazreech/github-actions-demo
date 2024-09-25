var intervalId = setInterval(() => {
  console.log("Hello there");
}, 2000); // 2 seconds

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Program finished after 3 minutes");
}, 120000); // 2 minutes
