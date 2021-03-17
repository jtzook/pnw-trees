export const lazyLoad = {
  inserted: el => {
    function loadImage() {
      const imageElement = el.nodeName === "IMG" ? el : null;

      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 100);
        });

        // TODO: throw error...somewhere
        // imageElement.addEventListener("error", e => {
        //   console.log("image element error", e);
        // });

        imageElement.src = imageElement.dataset.src;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage();

          observer.unobserve(el);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: "0"
    });

    observer.observe(el);
  }
};
