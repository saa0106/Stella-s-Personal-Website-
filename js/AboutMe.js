document.addEventListener("DOMContentLoaded", function () {
  
  // For the progress bar functionality
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-progress');
    bar.style.width = value + '%';
  });

  // Popup for grid items
  const popup = document.getElementById('grid-popup');
  const popupContent = document.getElementById('grid-popup-content');
  const gridItems = document.querySelectorAll('.container > div');
  gridItems.forEach(item => {
    item.addEventListener('click', () => {
      const clone = item.cloneNode(true);
      popupContent.innerHTML = '';
      popupContent.appendChild(clone);
      popup.style.display = 'flex';
    });
  });

  popup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Hobby list popup logic
  const hobbyList = document.getElementById('hobby-list');
  const popupOverlay = document.getElementById('popup-overlay');
  const popupText = document.getElementById('popup-text');
  const popupClose = document.getElementById('popup-close');

  const hobbyInfo = {
    "Photography": "I started photography around May of 2024, I've been learning and am still learning now but I've gotten a lot better than when I started. I did a photoshoot for my cousin Priscille.",
    "Art (Drawing/Painting)": "I really love to paint, draw, color, anything art related. I like showcasing creativity any way I can.",
    "Dance": "I've been dancing since I was a kid, I've done Praise Dance at church and loved playing the game Just Dance.",
    "Piano": "I've played piano since middle school and watching my uncle and cousin Calvin made me want to do it too. I'm not a full professional but I can read sheet music.",
    "Content Creation": "I create flyers, videos, editing photos, mock videos, etc. it's really fun to do.",
    "Cooking": "I like trying new recipes even though they don't always work out. I don't want to stick only to my culture's food, so I definitely like trying other cultural foods.",
    "DIYs": "I really like creating things on my own, it's funny seeing how well or better I can recreate something."
  };

  hobbyList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      const hobby = e.target.textContent.trim();
      const info = hobbyInfo[hobby];
      if (info) {
        popupText.textContent = info;
        popupOverlay.classList.remove('hidden');
      }
    }
  });

  popupClose.addEventListener('click', () => {
    popupOverlay.classList.add('hidden');
  });

  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.add('hidden');
    }
  });

});
