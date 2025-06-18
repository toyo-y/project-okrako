document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".main-nav li a").forEach(link => {
    const href = link.getAttribute("href");
    if (href && currentPath.endsWith(href.split("#")[0])) {
      const li = link.closest("li");
      if (li) li.classList.add("active");
    }
  });
});
