const lidarLink = document.querySelector('a[href="./structure/3D/géométri des sol/index.html"]');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closeButton = document.createElement('button');
closeButton.textContent = 'Fermer';
popup.appendChild(closeButton);

lidarLink.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('./structure/3D/géométri des sol/index.html')
    .then(response => response.text())
    .then(data => {
      popup.innerHTML = data; // Remplace le contenu du popup
      overlay.classList.remove('hidden');
      popup.classList.remove('hidden');
    });
});

closeButton.addEventListener('click', () => {
  overlay.classList.add('hidden');
  popup.classList.add('hidden');
});