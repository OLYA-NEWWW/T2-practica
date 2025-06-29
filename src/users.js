const clientData = [
  {
    name: "Максим",
    nickname: "@max_t2"
  },
  {
    name: "Александр",
    nickname: "@alex_t2"
  },
  {
    name: "Николай",
    nickname: "@kolya_t2"
  },
  {
    name: "Дмитрий",
    nickname: "@dima_t2"
  },
  {
    name: "Роман",
    nickname: "@roma_t2"
  }
];

const cardsContainer = document.querySelector('.client-cards');
const clientModal = document.querySelector('.client-modal');

clientData.forEach(client => {
  const card = document.createElement('div');
  card.className = 'client-card';
  card.innerHTML = `
    <img src="public/images/user.png" alt="${client.name}">
    <p>${client.name}</p>
  `;

  card.addEventListener('click', () => {
    document.querySelector('.client-photo').src = "public/images/user.png";
    document.querySelector('.client-name').textContent = client.name;
    document.querySelector('.client-nickname').textContent = client.nickname;
    clientModal.style.display = 'flex';
  });

  cardsContainer.appendChild(card);
});

document.querySelector('.client-prev').addEventListener('click', () => {
  cardsContainer.scrollBy({ left: -200, behavior: 'smooth' });
});

document.querySelector('.client-next').addEventListener('click', () => {
  cardsContainer.scrollBy({ left: 200, behavior: 'smooth' });
});

document.querySelector('.modal-close').addEventListener('click', () => {
  clientModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === clientModal) {
    clientModal.style.display = 'none';
  }
});
