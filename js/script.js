document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Submenu toggle for desktop (already existing logic)
  const aboutLink = document.getElementById("about-link");
  const aboutSubmenu = document.getElementById("about-submenu");
  const pastEditionsLink = document.getElementById("past-editions-link");
  const pastEditionsSubmenu = document.getElementById("past-editions-submenu");
  const pastEditionsLinkMobile = document.getElementById(
    "past-editions-link-mobile"
  );
  const pastEditionsSubmenuMobile = document.getElementById(
    "past-editions-submenu-mobile"
  );

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSubmenu.classList.toggle("submenu-visible");
  });

  // Close the submenu if clicked outside
  document.addEventListener("click", function (e) {
    if (!aboutLink.contains(e.target) && !aboutSubmenu.contains(e.target)) {
      aboutSubmenu.classList.remove("submenu-visible");
      aboutSubmenu.classList.add("submenu-hidden");
    }
  });

  pastEditionsLink.addEventListener("click", function (event) {
    event.preventDefault();
    pastEditionsSubmenu.classList.toggle("submenu-visible");
  });

  pastEditionsLinkMobile.addEventListener("click", (e) => {
    e.preventDefault();
    pastEditionsSubmenuMobile.classList.toggle("submenu-visible");
  });

  document.addEventListener("click", function (e) {
    if (
      (!pastEditionsLink.contains(e.target) &&
        !pastEditionsSubmenu.contains(e.target)) ||
      (!pastEditionsLinkMobile.contains(e.target) &&
        !pastEditionsSubmenuMobile.contains(e.target))
    ) {
      pastEditionsSubmenu.classList.remove("submenu-visible");
      pastEditionsSubmenu.classList.add("submenu-hidden");
    }
  });

  const effects = ["slide", "cube", "fade", "coverflow"];

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1500,
    navText: [
      "<i class='fas fa-2x fa-chevron-left'></i>",
      "<i class='fas fa-2x fa-chevron-right'></i>",
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
