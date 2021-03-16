import Vue from "vue";

Vue.directive("animate-on-scroll", {
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
  }
});
