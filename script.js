// toggle nav bar
let menuIcon = document.querySelector("#menu-icn");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scrolling
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  // sticky navbar
  let header = document.querySelector("header");
  header?.classList.toggle("sticky", window.scrollY > 100);

  //   active nav links
  sections.forEach((sec) => {
    // if (sec) {
    let top = window.scrollY;
    let offset = sec?.offsetTop - 100;
    let height = sec?.offsetHeight;
    let id = sec?.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active link
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          ?.classList.add("active");
      });
      //   active sec
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
    // }
  });

  //   remove toggle when nav active
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
