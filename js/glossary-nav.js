/**
 * Glossary Navigation
 * Compact tag-based navigation with shared detail panel
 */

(function () {
  "use strict";

  function initGlossaryNav() {
    const containers = document.querySelectorAll(".glossary-tags");
    if (!containers.length) return;

    containers.forEach((nav) => {
      // Idempotent init
      if (nav.dataset.glossaryInit === "1") return;
      nav.dataset.glossaryInit = "1";

      const tags = Array.from(nav.querySelectorAll(".glossary-tag"));
      const section = nav.closest(".section__body") || nav.parentElement;
      const detail = section.querySelector(".glossary-detail");
      const terms = section.querySelector(".glossary-terms");

      if (!detail || !terms) return;

      const titleEl = detail.querySelector(".glossary-detail__title");
      const bodyEl = detail.querySelector(".glossary-detail__body");
      const closeBtn = detail.querySelector(".glossary-detail__close");

      function closeDetail() {
        detail.hidden = true;
        tags.forEach((t) => t.classList.remove("is-active"));
        // Clear hash
        if (window.location.hash) {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      }

      function showTerm(termId, options = {}) {
        const { updateHash = true, scroll = true } = options;
        const content = terms.querySelector(`[data-term="${termId}"]`);
        if (!content) return;

        // Update active state
        tags.forEach((t) => t.classList.remove("is-active"));
        const activeTag = tags.find((t) => t.dataset.term === termId);
        if (activeTag) {
          activeTag.classList.add("is-active");
        }

        // Get title from h2 or data attribute
        const h2 = content.querySelector("h2");
        const title = h2 ? h2.textContent : content.dataset.title || termId;

        // Get body content (everything except h2)
        let bodyHTML = content.innerHTML;
        if (h2) {
          bodyHTML = bodyHTML.replace(/<h2[^>]*>.*?<\/h2>/i, "");
        }

        // Update detail panel
        titleEl.textContent = title;
        bodyEl.innerHTML = bodyHTML;
        detail.hidden = false;

        // Re-init components inside (hotspots, lightbox, etc.)
        if (typeof window.initHotspots === "function") {
          window.initHotspots();
        }
        if (typeof window.initLightbox === "function") {
          window.initLightbox();
        }

        // Update hash
        if (updateHash && window.location.hash !== `#${termId}`) {
          history.replaceState(null, "", `#${termId}`);
        }

        // Scroll to detail
        if (scroll) {
          detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }

      // Click handlers for tags
      tags.forEach((tag) => {
        tag.addEventListener("click", () => {
          const termId = tag.dataset.term;

          // Toggle if already active
          if (tag.classList.contains("is-active")) {
            closeDetail();
            return;
          }

          showTerm(termId);
        });

        // Keyboard support
        tag.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            tag.click();
          }
        });
      });

      // Close button
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          closeDetail();
          // Focus back to first tag
          if (tags[0]) tags[0].focus();
        });
      }

      // Handle initial hash
      const hashId = (window.location.hash || "").replace("#", "");
      if (hashId) {
        const matchingTag = tags.find((t) => t.dataset.term === hashId);
        if (matchingTag) {
          showTerm(hashId, { updateHash: false, scroll: false });
        }
      }

      // Handle hash changes
      window.addEventListener("hashchange", () => {
        const id = (window.location.hash || "").replace("#", "");
        if (id) {
          const matchingTag = tags.find((t) => t.dataset.term === id);
          if (matchingTag) {
            showTerm(id, { updateHash: false });
          }
        }
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGlossaryNav);
  } else {
    initGlossaryNav();
  }

  // Re-initialize after dynamic page load
  document.addEventListener("pagesLoaded", initGlossaryNav);
})();
