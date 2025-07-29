window.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".num[data-count]");

  counters.forEach((counter) => {
    counter.textContent = "0";
    const target = +counter.getAttribute("data-count");
    const duration = 2000; // total animation time in ms
    const stepTime = 10;   // update every 10ms
    const increment = target / (duration / stepTime);

    const update = () => {
      const current = +counter.textContent;
      if (current < target) {
        counter.textContent = Math.ceil(current + increment);
        setTimeout(update, stepTime);
      } else {
        counter.textContent = target;
      }
    };

    update();
  });
});
