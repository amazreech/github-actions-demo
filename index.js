var intervalId = setInterval(() => {
  console.log("Hello there");
}, 2000); // 2 seconds

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Program finished after 3 minutes");
}, 30000); // 30 seconds
