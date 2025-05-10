 <!-- ================== JavaScript ================== -->
  <script>
    // Responsive ad switching for top, middle, and bottom ads
    function updateAds() {
      const width = window.innerWidth;
      const mobileAdCode = `
        <iframe
          data-aa="2393854"
          src="//ad.a-ads.com/2393854?size=320x100"
          style="border:0; padding:0; overflow:hidden; background-color: transparent;"
          scrolling="no"
          title="Mobile Advertisement 320 by 100"
          loading="lazy"
          width="320"
          height="100"
        ></iframe>
        <a
          href="https://aads.com/campaigns/new/?source_id=2393854&source_type=ad_unit&partner=2393854"
          style="display: block; text-align: right; font-size: 12px; color: #60a5fa;"
          target="_blank"
          rel="noopener noreferrer"
          >Advertise here</a>
      `;
      const desktopAdCode = `
        <iframe
          data-aa="2393860"
          src="//ad.a-ads.com/2393860?size=728x90"
          style="border:0; padding:0; overflow:hidden; background-color: transparent;"
          scrolling="no"
          title="Desktop Advertisement 728 by 90"
          loading="lazy"
          width="728"
          height="90"
        ></iframe>
        <a
          href="https://aads.com/campaigns/new/?source_id=2393860&source_type=ad_unit&partner=2393860"
          style="display: block; text-align: right; font-size: 12px; color: #60a5fa;"
          target="_blank"
          rel="noopener noreferrer"
          >Advertise here</a>
      `;

      const adTop = document.getElementById('ad-top');
      const adBottom = document.getElementById('ad-bottom');
      const adMiddleIframe = document.getElementById('ad-middle-iframe');

      if (width < 640) {
        adTop.innerHTML = mobileAdCode;
        adBottom.innerHTML = mobileAdCode;
        if(adMiddleIframe) {
          adMiddleIframe.src = "//ad.a-ads.com/2393854?size=320x100";
          adMiddleIframe.width = "320";
          adMiddleIframe.height = "100";
          adMiddleIframe.setAttribute("data-aa", "2393854");
          adMiddleIframe.title = "Mobile Advertisement 320 by 100";
          adMiddleIframe.style.width = "320px";
          adMiddleIframe.style.height = "100px";
          const adMiddleParent = adMiddleIframe.parentElement;
          if(adMiddleParent) {
            const adLink = adMiddleParent.querySelector("a");
            if(adLink) {
              adLink.href = "https://aads.com/campaigns/new/?source_id=2393854&source_type=ad_unit&partner=2393854";
            }
          }
        }
      } else {
        adTop.innerHTML = desktopAdCode;
        adBottom.innerHTML = desktopAdCode;
        if(adMiddleIframe) {
          adMiddleIframe.src = "//ad.a-ads.com/2393860?size=728x90";
          adMiddleIframe.width = "728";
          adMiddleIframe.height = "90";
          adMiddleIframe.setAttribute("data-aa", "2393860");
          adMiddleIframe.title = "Desktop Advertisement 728 by 90";
          adMiddleIframe.style.width = "728px";
          adMiddleIframe.style.height = "90px";
          const adMiddleParent = adMiddleIframe.parentElement;
          if(adMiddleParent) {
            const adLink = adMiddleParent.querySelector("a");
            if(adLink) {
              adLink.href = "https://aads.com/campaigns/new/?source_id=2393860&source_type=ad_unit&partner=2393860";
            }
          }
        }
      }
    }

    window.addEventListener('resize', updateAds);
    window.addEventListener('load', updateAds);
  </script>
</body>
</html>
