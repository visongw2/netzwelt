// Search functionality for netzpul.com
// Depends on: search-data.js (must be loaded before this file)

(function () {
  // Category display names
  const catNames = {
    telekom: "Telekom & Netz",
    mobilfunk: "Mobilfunk & SIM",
    anbieter: "Anbieter & Tarife",
  };

  const subcatNames = {
    news: "Neuigkeiten",
    technology: "Netztechnologie",
    tarife: "Tarife & Preise",
    "sim-types": "SIM-Karten",
    prepaid: "Prepaid",
    tips: "Nutzungstipps",
    o2: "O2",
    blau: "blau",
    vodafone: "Vodafone",
    weitere: "Weitere",
  };

  // Normalize string: lowercase, remove accents, remove extra spaces
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // Highlight matching text in a string
  function highlightText(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp("(" + escaped + ")", "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  // Perform search
  function search(query) {
    const q = normalize(query);
    if (!q || q.length < 2) return [];

    const terms = q.split(" ").filter(Boolean);
    const results = [];

    for (let i = 0; i < searchData.length; i++) {
      const item = searchData[i];
      const titleNorm = normalize(item.title);
      const excerptNorm = normalize(item.excerpt || "");

      // Check all terms match in title or excerpt
      const matches = terms.every(
        (term) => titleNorm.includes(term) || excerptNorm.includes(term)
      );

      if (matches) {
        // Calculate a simple relevance score
        let score = 0;
        terms.forEach((term) => {
          if (titleNorm.includes(term)) {
            score += titleNorm.startsWith(term) ? 10 : 5;
          }
          if (excerptNorm.includes(term)) score += 2;
        });
        results.push({ ...item, score });
      }
    }

    // Sort by score descending, then by date descending
    results.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (b.date || "").localeCompare(a.date || "");
    });

    return results.slice(0, 8);
  }

  // Build dropdown HTML
  function buildDropdown(results, query) {
    if (!results.length) {
      return (
        '<div class="search-dropdown-empty">' +
        '<i class="fas fa-search"></i>' +
        "<span>Keine Ergebnisse gefunden</span>" +
        "</div>"
      );
    }

    let html = "";
    for (let i = 0; i < results.length; i++) {
      const item = results[i];
      const catName = catNames[item.category] || item.category;
      const subName = subcatNames[item.subcategory] || item.subcategory;
      const highlightedTitle = highlightText(item.title, query);

      html +=
        '<a class="search-dropdown-item" href="article.html?id=' +
        item.id +
        '" data-index="' +
        i +
        '">' +
        '<div class="search-dropdown-item-content">' +
        '<div class="search-dropdown-item-title">' +
        highlightedTitle +
        "</div>" +
        '<div class="search-dropdown-item-meta">' +
        '<span class="search-dropdown-category">' +
        catName +
        " / " +
        subName +
        "</span>" +
        '<span class="search-dropdown-date">' +
        (item.date || "") +
        "</span>" +
        "</div>" +
        "</div>" +
        "</a>";
    }

    html +=
      '<div class="search-dropdown-footer">' +
      '<a href="search.html?q=' +
      encodeURIComponent(query) +
      '">Alle Ergebnisse anzeigen →</a>' +
      "</div>";

    return html;
  }

  // Initialize search on a page
  function initSearch() {
    const input = document.getElementById("searchInput");
    const dropdown = document.getElementById("searchDropdown");
    const form = document.getElementById("searchForm");

    if (!input || !dropdown) {
      // Search elements not on this page
      return;
    }

    let activeIndex = -1;
    let currentResults = [];

    // Show/hide dropdown
    function showDropdown() {
      dropdown.classList.add("active");
    }

    function hideDropdown() {
      dropdown.classList.remove("active");
      activeIndex = -1;
    }

    // Update dropdown content
    function updateDropdown() {
      const query = input.value.trim();

      if (query.length < 2) {
        hideDropdown();
        return;
      }

      currentResults = search(query);
      dropdown.innerHTML = buildDropdown(currentResults, query);
      showDropdown();
    }

    // Navigate with keyboard
    function navigate(delta) {
      const items = dropdown.querySelectorAll(".search-dropdown-item");
      if (!items.length) return;

      if (activeIndex >= 0 && activeIndex < items.length) {
        items[activeIndex].classList.remove("active");
      }

      activeIndex += delta;

      if (activeIndex < 0) activeIndex = items.length - 1;
      if (activeIndex >= items.length) activeIndex = 0;

      items[activeIndex].classList.add("active");
      items[activeIndex].scrollIntoView({ block: "nearest" });
    }

    // Event: input
    input.addEventListener("input", function () {
      updateDropdown();
    });

    // Event: focus
    input.addEventListener("focus", function () {
      if (input.value.trim().length >= 2) {
        updateDropdown();
      }
    });

    // Event: blur (delay to allow click)
    input.addEventListener("blur", function () {
      setTimeout(function () {
        hideDropdown();
      }, 200);
    });

    // Event: keyboard
    input.addEventListener("keydown", function (e) {
      if (!dropdown.classList.contains("active")) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        navigate(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        navigate(-1);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const items = dropdown.querySelectorAll(".search-dropdown-item");
        if (activeIndex >= 0 && activeIndex < items.length) {
          window.location.href = items[activeIndex].href;
        } else if (input.value.trim().length >= 2) {
          window.location.href =
            "search.html?q=" + encodeURIComponent(input.value.trim());
        }
      } else if (e.key === "Escape") {
        hideDropdown();
        input.blur();
      }
    });

    // Event: form submit
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = input.value.trim();
        if (query.length >= 2) {
          window.location.href =
            "search.html?q=" + encodeURIComponent(query);
        }
      });
    }

    // Close on outside click
    document.addEventListener("click", function (e) {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        hideDropdown();
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearch);
  } else {
    initSearch();
  }
})();
