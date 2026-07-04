/**
 * Development style picker — switch between site themes.
 * Preference is stored in localStorage and applied across pages.
 */

(function () {
  "use strict";

  var STORAGE_KEY = "hl-theme";
  var DEFAULT_THEME = "paper";

  var THEMES = [
    {
      id: "paper",
      name: "Paper",
      desc: "Kitchen table — warm kraft, notebook feel. The current default.",
    },
    {
      id: "field",
      name: "Field Notes",
      desc: "Batch logbook — documentary, mono labels, no fluff.",
    },
    {
      id: "coastal",
      name: "Coastal",
      desc: "Morning light — airy San Diego calm, soft and open.",
    },
    {
      id: "hearth",
      name: "Hearth",
      desc: "Evening table — dark, intimate, jars in low light.",
    },
    {
      id: "market",
      name: "Market",
      desc: "Stand at the market — friendly, buy-now, product-first.",
    },
  ];

  function getTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    } catch (e) {
      return DEFAULT_THEME;
    }
  }

  function setTheme(id) {
    var valid = THEMES.some(function (t) {
      return t.id === id;
    });
    if (!valid) id = DEFAULT_THEME;
    document.documentElement.setAttribute("data-theme", id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch (e) {
      /* ignore */
    }
    updateActive(id);
  }

  function updateActive(id) {
    document.querySelectorAll(".style-picker__btn").forEach(function (btn) {
      var active = btn.getAttribute("data-theme-id") === id;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function buildPicker() {
    var root = document.createElement("aside");
    root.className = "style-picker";
    root.setAttribute("aria-label", "Style picker for development");

    var panel = document.createElement("div");
    panel.className = "style-picker__panel";
    panel.id = "style-picker-panel";
    panel.hidden = true;

    var intro = document.createElement("p");
    intro.className = "style-picker__intro";
    intro.textContent =
      "Dev only — try each style. Choice sticks across pages.";
    panel.appendChild(intro);

    var list = document.createElement("ul");
    list.className = "style-picker__list";

    THEMES.forEach(function (theme) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "style-picker__btn";
      btn.setAttribute("data-theme-id", theme.id);
      btn.setAttribute("aria-pressed", "false");
      btn.innerHTML =
        '<span class="style-picker__name"></span>' +
        '<span class="style-picker__desc"></span>';
      btn.querySelector(".style-picker__name").textContent = theme.name;
      btn.querySelector(".style-picker__desc").textContent = theme.desc;
      btn.addEventListener("click", function () {
        setTheme(theme.id);
      });
      li.appendChild(btn);
      list.appendChild(li);
    });

    panel.appendChild(list);

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "style-picker__toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "style-picker-panel");
    toggle.innerHTML = "<span>Styles (dev)</span><span aria-hidden=\"true\">▴</span>";

    toggle.addEventListener("click", function () {
      var open = !root.classList.contains("is-open");
      root.classList.toggle("is-open", open);
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.querySelector("[aria-hidden]").textContent = open ? "▾" : "▴";
    });

    root.appendChild(panel);
    root.appendChild(toggle);
    document.body.appendChild(root);

    updateActive(getTheme());
  }

  setTheme(getTheme());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildPicker);
  } else {
    buildPicker();
  }
})();
