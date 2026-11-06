/* Desirable Management rental questions: embed script.
   Add this one line to any website (Wix: Settings > Custom Code, Body - end, All pages):
   <script src="https://ldgreen25.github.io/rental-qa-assistant/embed.js" defer></script>

   It places the "Rental questions" button in the bottom-right corner. The box runs
   inside its own frame, so it can't change or be broken by the host site's styles. */
(function () {
  if (window.__dmRentalQA) return;
  window.__dmRentalQA = true;

  var DEFAULT = "https://ldgreen25.github.io/rental-qa-assistant/embed.js";
  var me = document.currentScript || document.querySelector('script[src*="embed.js"]');
  var src = (me && me.src) || DEFAULT;
  var base = src.replace(/embed\.js(\?.*)?$/, "");
  var origin;
  try { origin = new URL(base).origin; } catch (e) { base = DEFAULT.replace("embed.js", ""); origin = new URL(base).origin; }

  var PHONE = 560;               // below this width the box opens full screen
  var closedW = 260, closedH = 100, isOpen = false;

  function start() {
    var f = document.createElement("iframe");
    f.src = base + "widget.html";
    f.title = "Desirable Management rental questions";
    f.setAttribute("aria-label", "Desirable Management rental questions");
    f.setAttribute("allowtransparency", "true");
    var s = f.style;
    s.position = "fixed"; s.right = "0"; s.bottom = "0"; s.border = "0";
    s.margin = "0"; s.padding = "0"; s.zIndex = "2147483000";
    s.background = "transparent"; s.colorScheme = "normal"; s.maxWidth = "100vw"; s.maxHeight = "100vh";
    size(f);
    document.body.appendChild(f);

    function mobile() { return window.innerWidth < PHONE; }
    function size(frame) {
      var st = frame.style;
      if (isOpen && mobile()) { st.width = "100vw"; st.height = "100%"; st.top = "0"; }
      else if (isOpen) { st.width = "430px"; st.height = Math.min(730, window.innerHeight) + "px"; st.top = "auto"; }
      else { st.width = closedW + "px"; st.height = closedH + "px"; st.top = "auto"; }
      // On phones, Wix puts its own buttons in the bottom-right, so sit bottom-left when closed.
      if (!isOpen && mobile()) { st.left = "0"; st.right = "auto"; }
      else { st.left = isOpen && mobile() ? "0" : "auto"; st.right = "0"; }
    }
    function tellFrame() {
      if (f.contentWindow) f.contentWindow.postMessage({ type: "dm-qa-host", mobile: mobile() }, origin);
    }

    window.addEventListener("message", function (e) {
      if (e.origin !== origin || e.source !== f.contentWindow) return;
      var d = e.data;
      if (!d || d.type !== "dm-qa") return;
      if (d.state === "open") isOpen = true;
      if (d.state === "closed") {
        isOpen = false;
        if (d.w > 0 && d.h > 0) { closedW = Math.min(d.w, 400); closedH = Math.min(d.h, 160); }
      }
      size(f);
      tellFrame();
    });
    f.addEventListener("load", tellFrame);
    window.addEventListener("resize", function () { size(f); tellFrame(); });
  }

  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);
})();
