export const lazyLoad = {
  bind: el => {
    el.classList.add("before-enter");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("enter");

          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(el);
  },

  inserted: el => {
    function loadImage() {
      const imageElement = el.nodeName === "IMG" ? el : null;

      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"));
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
