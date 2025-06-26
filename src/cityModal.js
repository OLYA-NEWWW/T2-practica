const city = document.querySelector('.city');
const locationDiv = document.querySelector('.location');
const Popup = document.getElementById('popup');
const citySelection = document.getElementById('citySelection');
const Region = document.getElementById('region');
const confirmBtn = document.getElementById('confirmBtn');
const changeBtn = document.getElementById('changeBtn');
const cityButtons = document.querySelectorAll('.grid button');

locationDiv.addEventListener('click', () => {
  Region.textContent = city.textContent;
  Popup.style.display = 'block';
});

confirmBtn.addEventListener('click', () => {
  Popup.style.display = 'none';
});

changeBtn.addEventListener('click', () => {
  Popup.style.display = 'none';
  citySelection.style.display = 'block';
});

cityButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCity = button.textContent;
    city.textContent = selectedCity;
    localStorage.setItem('selectedCity', selectedCity);
    citySelection.style.display = 'none';
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const savedCity = localStorage.getItem('selectedCity');
  if (savedCity) {
    citySpan.textContent = savedCity;
  }
});