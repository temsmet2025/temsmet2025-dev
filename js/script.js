document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
  

  document.addEventListener("click", function (event) {
    // Check if the click target is not the button, the menu, or a child of the button or the menu
    const isClickInsideButton = menuButton.contains(event.target);
    const isClickInsideMenu = mobileMenu.contains(event.target);

    if (!isClickInsideButton && !isClickInsideMenu) {
      mobileMenu.classList.add("hidden"); // Close the menu
    }
  });

  // Submenu toggle for desktop (already existing logic)
  const aboutLink = document.getElementById("about-link");
  const aboutSubmenu = document.getElementById("about-submenu");
  const aboutLinkMobile = document.getElementById("about-link-mobile");
  const aboutSubmenuMobile = document.getElementById("about-submenu-mobile");
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

  aboutLinkMobile.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSubmenuMobile.classList.toggle("submenu-visible");
  });

  // Close the submenu if clicked outside
  document.addEventListener("click", function (e) {
    if (!aboutLink.contains(e.target) && !aboutSubmenu.contains(e.target)) {
      aboutSubmenu.classList.remove("submenu-visible");
      aboutSubmenu.classList.add("submenu-hidden");
    }
    if (!aboutLinkMobile.contains(e.target) && !aboutSubmenuMobile.contains(e.target)) {
      aboutSubmenuMobile.classList.remove("submenu-visible");
      aboutSubmenuMobile.classList.add("submenu-hidden");
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
      !pastEditionsLink.contains(e.target) &&
      !pastEditionsSubmenu.contains(e.target)
    ) {
      pastEditionsSubmenu.classList.remove("submenu-visible");
      pastEditionsSubmenu.classList.add("submenu-hidden");
    }

    if (
      !pastEditionsLinkMobile.contains(e.target) &&
      !pastEditionsSubmenuMobile.contains(e.target)
    ) {
      pastEditionsSubmenuMobile.classList.remove("submenu-visible");
      pastEditionsSubmenuMobile.classList.add("submenu-hidden");
    }
  })

  const callForPaper = document.getElementById("call-for-papers");
  const callForPaperSubmenu = document.getElementById("call-for-papers-submenu");
  const callForPaperMobile = document.getElementById("call-for-papers-mobile");
  const callForPaperSubmenuMobile = document.getElementById("call-for-papers-submenu-mobile");

  callForPaper.addEventListener("click", function (event){
    event.preventDefault();
    console.log("clicked Call for paper");
    callForPaperSubmenu.classList.toggle("submenu-visible");

  });

  callForPaperMobile.addEventListener("click", function (event){
    event.preventDefault();
    callForPaperSubmenuMobile.classList.toggle("submenu-visible");
  });

  // document.addEventListener("click", function (e) {
  //   if (!callForPaper.contains(e.target) && !callForPaperSubmenu.contains(e.target)) {
  //     callForPaperSubmenu.classList.remove("submenu-visible");
  //     callForPaperSubmenu.classList.add("submenu-hidden");
  //   }
  //   if (!callForPaperMobile.contains(e.target) && !callForPaperSubmenuMobile.contains(e.target)) {
  //     callForPaperSubmenuMobile.classList.remove("submenu-visible");
  //     callForPaperSubmenuMobile.classList.add("submenu-hidden");
  //   }

  // });

  // document.addEventListener("click", function (e) {
  //   if (
  //     (!pastEditionsLink.contains(e.target) &&
  //       !pastEditionsSubmenu.contains(e.target)) ||
  //     (!pastEditionsLinkMobile.contains(e.target) &&
  //       !pastEditionsSubmenuMobile.contains(e.target))
  //   ) {
  //     pastEditionsSubmenu.classList.remove("submenu-visible");
  //     pastEditionsSubmenu.classList.add("submenu-hidden");
  //   }
  // });

  const effects = ["slide", "cube", "fade", "coverflow"];

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
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
      400: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  })
