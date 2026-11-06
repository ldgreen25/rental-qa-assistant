/* Desirable Management rental questions: embed script.
   Add this one line to any website (Wix: Settings > Custom Code, Body - end, All pages):
   <script src="https://ldgreen25.github.io/rental-qa-assistant/embed.js" defer></script>

   It places the "How may I help you?" button in a free bottom corner, out of the way of
   the site's own floating buttons (add data-position="top" for top-right, below the menu).
   The box runs inside its own frame, so it can't change or be broken by the host site. */
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
  var closedW = 260, closedH = 100, isOpen = false, side = "right";
  var POS = (me && me.getAttribute("data-position")) === "top" ? "top" : "bottom";
  var topGap = 0;

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
    document.body.appendChild(f);
    size(f);

    function mobile() { return window.innerWidth < PHONE; }
    function size(frame) {
      var st = frame.style;
      if (POS === "top") {
        if (!isOpen) topGap = headerClearance();
        side = "right";
        if (isOpen && mobile()) { st.width = "100vw"; st.height = "100%"; st.top = "0"; st.bottom = "auto"; st.left = "0"; st.right = "auto"; }
        else if (isOpen) { st.width = "430px"; st.height = Math.min(730, window.innerHeight - topGap) + "px"; st.top = topGap + "px"; st.bottom = "auto"; st.left = "auto"; st.right = "0"; }
        else { st.width = closedW + "px"; st.height = closedH + "px"; st.top = topGap + "px"; st.bottom = "auto"; st.left = "auto"; st.right = "0"; }
        return;
      }
      if (isOpen && mobile()) { st.width = "100vw"; st.height = "100%"; st.top = "0"; }
      else if (isOpen) { st.width = "430px"; st.height = Math.min(730, window.innerHeight) + "px"; st.top = "auto"; }
      else { st.width = closedW + "px"; st.height = closedH + "px"; st.top = "auto"; }
      // When closed, sit in a corner that the site's own floating buttons
      // (Wix chat, quick actions, back-to-top) aren't using.
      if (isOpen) {
        st.bottom = "0";
        if (mobile()) { st.left = "0"; st.right = "auto"; } else { st.left = "auto"; st.right = "0"; }
      } else {
        var spot = pickSpot();
        side = spot.side;
        st.bottom = spot.lift + "px";
        if (spot.side === "left") { st.left = "0"; st.right = "auto"; } else { st.left = "auto"; st.right = "0"; }
      }
    }
    // Top-right placement: stay below the site's menu, links and buttons in that corner.
    function headerClearance() {
      var w = window.innerWidth, low = 0;
      var els = document.body.querySelectorAll('a,button,input,select,[role="button"],[role="link"],[role="navigation"],nav,[aria-haspopup],[aria-label*="menu" i]');
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (el === f || f.contains && el.contains(f)) continue;
        var r = el.getBoundingClientRect();
        if (r.width < 8 || r.height < 8 || r.width > w * 0.95) continue;
        if (r.top > 200 || r.bottom <= 0 || r.right < w * 0.55) continue;
        var cs = window.getComputedStyle(el);
        if (cs.visibility === "hidden" || cs.display === "none" || cs.opacity === "0") continue;
        low = Math.max(low, r.bottom);
      }
      return Math.min(220, Math.max(0, Math.ceil(low) + 2));
    }
    // Find other fixed buttons near the bottom corners of the page.
    function cornerUsage() {
      var used = { left: 0, right: 0 }, w = window.innerWidth, h = window.innerHeight;
      var all = document.body ? document.body.getElementsByTagName("*") : [];
      for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (el === f || el.contains(f)) continue;
        var r = el.getBoundingClientRect();
        if (r.width < 24 || r.height < 24 || r.width > w * 0.6 || r.height > 220) continue;
        if (r.bottom < h - 200 || r.top > h) continue;
        var cs = window.getComputedStyle(el);
        if (cs.position !== "fixed" || cs.visibility === "hidden" || cs.display === "none" || cs.opacity === "0") continue;
        var lift = Math.ceil(h - r.top) + 4;
        if (r.left + r.width / 2 < w / 2) used.left = Math.max(used.left, lift);
        else used.right = Math.max(used.right, lift);
      }
      return used;
    }
    function pickSpot() {
      var used = cornerUsage();
      var prefer = mobile() ? ["left", "right"] : ["right", "left"];
      for (var i = 0; i < prefer.length; i++) if (!used[prefer[i]]) return { side: prefer[i], lift: 0 };
      // Both corners taken: stack above the shorter pile.
      var side = used.left <= used.right ? "left" : "right";
      return { side: side, lift: Math.max(0, used[side] - 8) };
    }
    function tellFrame() {
      if (f.contentWindow) f.contentWindow.postMessage({ type: "dm-qa-host", mobile: mobile(), side: side, pos: POS, page: location.pathname }, origin);
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
    [1500, 4000, 9000].forEach(function (ms) { setTimeout(function () { if (!isOpen) { size(f); tellFrame(); } }, ms); });
  }

  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);
})();
