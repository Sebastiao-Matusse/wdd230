// get all imgs with dta-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameter being set for the intersectionObserver
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// imagesToLoad.forEach((img) => {
//   loadImages(img);
// });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  }, imgOptions);
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
