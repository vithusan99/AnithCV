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
// skillset 
const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "React JS", percentage: 85 },
    { name: "Angular 2", percentage: 85 },
    { name: "Vue.js", percentage: 80 },
    { name: "Java", percentage: 60 },
    { name: "Laravel", percentage: 80 },
    { name: "MySQL", percentage: 75 },
    { name: "Mongo DB", percentage: 75 },
    { name: "ReactNative", percentage: 70 }
  ];

  const container = document.getElementById("skills-container");

  skills.forEach(skill => {
    const skillBox = document.createElement("div");
    skillBox.className = "skill";

    const skillLabel = document.createElement("div");
    skillLabel.className = "skill-name";
    skillLabel.textContent = `${skill.name} (${skill.percentage}%)`;

    const progressBar = document.createElement("div");
    progressBar.className = "skill-bar";

    const progressFill = document.createElement("div");
    progressFill.className = "skill-fill";
    progressFill.style.width = `${skill.percentage}%`;

    progressBar.appendChild(progressFill);
    skillBox.appendChild(skillLabel);
    skillBox.appendChild(progressBar);
    container.appendChild(skillBox);
  });