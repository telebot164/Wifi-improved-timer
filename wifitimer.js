let timer = 60;
let count = setInterval(() => {
  timer -= 1;
  document.querySelector('.timer').innerHTML = `remaining time: ${timer}s`;
}, 1000);
setTimeout(() => {
  clearInterval(count)
  document.querySelector('.timer').innerHTML = `congradulation successfully your Wi-Fi speed is improved to 100Mb per second! 👏👏👏`;
}, 60001);
