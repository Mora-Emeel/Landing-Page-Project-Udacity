const mySecs = document.querySelectorAll("section"); //array
const myList = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
mySecs.forEach((section) => {
  // create li
  let listItem = document.createElement("li");
  // get the section details
  let sectionId = section.id;
  let textCont = section.getAttribute("data-nav");
  // create anchor tag
  let anchor = document.createElement("a");
  // add properties to the links
  anchor.classList.add("menu__link");
  anchor.href = `#${sectionId}`;
  anchor.textContent = textCont;
  anchor.addEventListener("click", (scrollItem) => {
    scrollItem.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
  listItem.appendChild(anchor);
  fragment.appendChild(listItem);
});
myList.appendChild(fragment);
///////////////////
// callback function to add the active class to the active section
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionTitle = entry.target.getAttribute("data-nav");
      const links = document.querySelectorAll("a.menu__link");
      entry.target.classList.add("your-active-class");
      links.forEach((link) => {
        if (link.textContent === sectionTitle) {
          link.classList.add("your-active-class");
        } else {
          link.classList.remove("your-active-class");
        }
      });
    } else {
      entry.target.classList.remove("your-active-class");
    }
  });
};

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};
mySecs.forEach((sections) => {
  let observer = new IntersectionObserver(callback, options);
  observer.observe(sections);
});
/////////////burger menu setup/////////////
const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  myList.classList.toggle("show");
});
