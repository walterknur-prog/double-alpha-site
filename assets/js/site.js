(function () {
  var d = document, root = d.documentElement;
  // Mobile menu
  var btn = d.getElementById("menuBtn"), nav = d.getElementById("mainNav");
  if (btn && nav) btn.addEventListener("click", function () {
    btn.setAttribute("aria-expanded", nav.classList.toggle("open"));
  });
  // Copy email address
  d.addEventListener("click", function (ev) {
    var b = ev.target.closest(".copy"); if (!b) return;
    function sel() { var v = b.parentElement.querySelector(".val"), r = d.createRange(); r.selectNodeContents(v); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    try { navigator.clipboard.writeText(b.getAttribute("data-copy")).then(function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy address"; }, 1600); }, sel); } catch (e) { sel(); }
  });
  // Compact header after scrolling
  var head = d.querySelector("header.site");
  function onScroll() { if (head) head.classList.toggle("scrolled", window.scrollY > 8); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  if (!root.classList.contains("js")) return;
  // Count-up for headline numbers
  function count(el) {
    var end = +el.getAttribute("data-count"), suf = el.getAttribute("data-suffix") || "", t0 = null;
    function step(t) { if (!t0) t0 = t; var p = Math.min((t - t0) / 1100, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  // Reveal on scroll
  var items = d.querySelectorAll("main .sechead, main .card, main .steps li, main .panel, main .stat, main .split > .prose, main .tablewrap, main .post-body, .band .wrap");
  items.forEach(function (el) {
    var sibs = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.tagName === el.tagName; }) : [el];
    var i = Math.max(0, sibs.indexOf(el));
    el.style.setProperty("--d", Math.min(i, 5) * 0.09 + "s");
    el.classList.add("reveal");
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target; io.unobserve(el);
      el.classList.add("in", "seen");
      var n = el.querySelector("[data-count]"); if (n) count(n);
      setTimeout(function () { el.classList.remove("reveal", "in"); }, 1400);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
})();
