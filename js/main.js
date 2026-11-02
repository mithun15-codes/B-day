document.querySelectorAll(".upload").forEach((input) =>
  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    e.target.closest(".polaroid").querySelector("img").src =
      URL.createObjectURL(file);
  }),
);
const btn = document.querySelector("#blowButton");
if (btn) {
  const scene = document.querySelector("#cake");
  const msg = document.querySelector("#cakeMessage");
  const dim = document.createElement("div");
  dim.className = "dim";
  document.body.appendChild(dim);
  msg.classList.add("wish");
  btn.addEventListener("click", () => {
    btn.classList.add("gone");
    btn.disabled = true;
    dim.classList.add("on");
    scene.classList.add("lit");
    // blow out candles one by one
    const candles = scene.querySelectorAll(".candle");
    candles.forEach((c, i) => setTimeout(() => c.classList.add("out"), 900 + i * 450));
    // glow fades once the last flame is gone
    setTimeout(() => scene.classList.remove("lit"), 900 + candles.length * 450 + 500);
    // reveal the wish letter by letter
    setTimeout(() => {
      msg.textContent = "";
      [..."Happy Birthday!"].forEach((ch, i) => {
        const s = document.createElement("span");
        s.textContent = ch === " " ? "\u00A0" : ch;
        s.style.animationDelay = i * 0.08 + "s";
        msg.appendChild(s);
      });
    }, 900 + candles.length * 450 + 700);
    // lights come back softly
    setTimeout(() => dim.classList.remove("on"), 900 + candles.length * 450 + 3800);
  });
}

if (document.querySelector(".grid")) {
  const hearts = ["💗", "💖", "🌸", "✨", "💕"];
  setInterval(() => {
    const h = document.createElement("span");
    h.className = "float-heart";
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 14 + Math.random() * 20 + "px";
    h.style.animationDuration = 6 + Math.random() * 5 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 11000);
  }, 900);
}
