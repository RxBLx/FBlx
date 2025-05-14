// script.js
function resizeAds() {
  const ads = document.querySelectorAll('section > div[style], main > div[style], section[style] > div[style]');
  ads.forEach(ad => {
    if (window.innerWidth < 640) {
      ad.style.width = '320px';
      ad.style.height = '100px';
    } else {
      ad.style.width = '728px';
      ad.style.height = '90px';
    }
  });
}

window.addEventListener('resize', resizeAds);
window.addEventListener('load', resizeAds);

const modal = document.getElementById('subscribe-modal');
const closeBtn = document.getElementById('close-subscribe');

function showSubscribeModal() {
  if (!localStorage.getItem('rxblSubscribeDismissed')) {
    modal.classList.add('active');
    modal.style.display = 'flex';
    modal.focus();
  }
}

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  modal.style.display = 'none';
  localStorage.setItem('rxblSubscribeDismissed', 'true');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeBtn.click();
  }
});

window.addEventListener('load', () => {
  showSubscribeModal();
  setInterval(() => {
    if (!localStorage.getItem('rxblSubscribeDismissed')) {
      showSubscribeModal();
    }
  }, 900000); // 15 menit
});
