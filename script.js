
function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = h >= 12 ? 'PM' : 'AM';

  h = h % 12 || 12;


  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;
  document.getElementById('ampm').innerText = ampm;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  document.getElementById('date').innerText = now.toLocaleDateString(
    undefined,
    options,
  );
}

setInterval(updateClock, 1000);
updateClock();


const themeBtn = document.getElementById('theme-btn');
const bodyTheme = document.getElementById('body-theme');

themeBtn.addEventListener('click', () => {
  if (bodyTheme.classList.contains('dark-theme')) {
    bodyTheme.classList.replace('dark-theme', 'light-theme');
    themeBtn.innerText = '🌙 Dark Mode';
  } else {
    bodyTheme.classList.replace('light-theme', 'dark-theme');
    themeBtn.innerText = '☀️ Light Mode';
  }
});
