window.addEventListener("load", () => {
  document.body.classList += "has-dom-ready";
});

setTimeout(function () {
  var el = document.getElementsByClassName("c-header__icon__wrapper");

  for (i = 0; i < el.length; i++) {
    el[i].classList.add("c-header__icon__wrapper--animation");
  }
}, 3000);

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener(
  "scroll",
  function (event) {
    var elements = document.querySelectorAll(".u-animation--scroll");

    for (i = 0; i < elements.length; i++) {
      if (isInViewport(elements[i])) {
        elements[i].classList.add("is-inview");
      } else {
        if (elements[i].classList.contains("is-inview")) {
          elements[i].classList.remove("is-inview");
        }
      }
    }
  },
  false
);
