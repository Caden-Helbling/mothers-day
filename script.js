// Floating kid-doodle stickers (hearts, stars, smileys, flowers)
(function spawnDoodles() {
  const layer = document.querySelector(".doodles");
  if (!layer) return;

  const stickers = ["💖", "💕", "⭐", "🌟", "🌸", "🌼", "😊", "🌈", "✨", "🦋", "💐"];

  function spawn() {
    const el = document.createElement("span");
    el.className = "doodle";
    el.textContent = stickers[Math.floor(Math.random() * stickers.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 1.1 + Math.random() * 1.8 + "rem";
    el.style.animationDuration = 9 + Math.random() * 9 + "s";
    layer.appendChild(el);
    setTimeout(() => el.remove(), 18000);
  }

  setInterval(spawn, 700);
  for (let i = 0; i < 10; i++) setTimeout(spawn, i * 180);
})();

// Reveal timeline entries as they scroll into view
(function revealOnScroll() {
  const entries = document.querySelectorAll(".memory");
  if (!("IntersectionObserver" in window)) {
    entries.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (records) => {
      for (const r of records) {
        if (r.isIntersecting) {
          r.target.classList.add("visible");
          io.unobserve(r.target);
        }
      }
    },
    { threshold: 0.2 }
  );
  entries.forEach((el) => io.observe(el));
})();
