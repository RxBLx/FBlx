// Responsive ads resizing for mobile
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

// Subscribe modal logic
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

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeBtn.click();
  }
});

// Show modal every 15 minutes if not dismissed
window.addEventListener('load', () => {
  showSubscribeModal();
  setInterval(() => {
    if (!localStorage.getItem('rxblSubscribeDismissed')) {
      showSubscribeModal();
    }
  }, 900000); // 900,000 ms = 15 minutes
});

// Inject 728x90 ads into placeholders
window.addEventListener('load', () => {
  const adTop = document.getElementById('ad728x90-top');
  const adMiddle = document.getElementById('ad728x90-middle');
  const adBottom = document.getElementById('ad728x90-bottom');
  const adMiddle2 = document.getElementById('ad728x90-middle2');
  const adBottom2 = document.getElementById('ad728x90-bottom2');
  if (adTop)
    adTop.innerHTML = '<iframe src="//www.highperformanceformat.com/7e148f8ba72aa3ad7780fc5c68089875/invoke.js" style="width:728px; height:90px; border:none; overflow:hidden;" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true"></iframe>';
  if (adMiddle)
    adMiddle.innerHTML = '<iframe src="//www.highperformanceformat.com/7e148f8ba72aa3ad7780fc5c68089875/invoke.js" style="width:728px; height:90px; border:none; overflow:hidden;" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true"></iframe>';
  if (adBottom)
    adBottom.innerHTML = '<iframe src="//www.highperformanceformat.com/7e148f8ba72aa3ad7780fc5c68089875/invoke.js" style="width:728px; height:90px; border:none; overflow:hidden;" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true"></iframe>';
  if (adMiddle2)
    adMiddle2.innerHTML = '<iframe src="//www.highperformanceformat.com/7e148f8ba72aa3ad7780fc5c68089875/invoke.js" style="width:728px; height:90px; border:none; overflow:hidden;" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true"></iframe>';
  if (adBottom2)
    adBottom2.innerHTML = '<iframe src="//www.highperformanceformat.com/7e148f8ba72aa3ad7780fc5c68089875/invoke.js" style="width:728px; height:90px; border:none; overflow:hidden;" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true"></iframe>';
});

// Inject 320x100 mobile ad
window.addEventListener('load', () => {
  const ad320 = document.getElementById('ad320x100');
  if (ad320) {
    ad320.innerHTML = `<div id="frame" style="width: 320px;">
      <iframe data-aa='2394475' src='//ad.a-ads.com/2394475?size=320x100' style='width:320px; height:100px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
      <a style="display: block; text-align: right; font-size: 12px" id="frame-link" href="https://aads.com/campaigns/new/?source_id=2394475&source_type=ad_unit&partner=2394475 ">Advertise here</a>
    </div>`;
  }
});
