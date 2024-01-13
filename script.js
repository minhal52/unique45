
/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  
  
  
  /**
   * navbar toggle
   */
  
  const navToggler = document.querySelector("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");
  
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
  }
  
  addEventOnElem(navToggler, "click", toggleNavbar);
  
  
  const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  }
  
  addEventOnElem(navbarLinks, "click", closeNavbar);
  
  
  
  /**
   * active header when window scroll down to 100px
   */
  
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  
  const activeElemOnScroll = function () {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  }
  
  addEventOnElem(window, "scroll", activeElemOnScroll);
  
  addEventOnElem(window, "scroll", activeElemOnScroll);

  // /product script
 
  function sortProducts() {
    var productList = document.getElementById("product-list");
    var products = Array.from(productList.children);
    var sortBy = document.getElementById("sort-dropdown").value;

    if (sortBy === "default") {
      // Reset to default order
      products.sort(function(a, b) {
        return a.dataset.originalOrder - b.dataset.originalOrder;
      });
    } else {
      products.sort(function(a, b) {
        var valueA, valueB;

        if (sortBy === "name") {
          valueA = a.querySelector("h3").innerText.toUpperCase();
          valueB = b.querySelector("h3").innerText.toUpperCase();
        } else if (sortBy === "price") {
          valueA = parseFloat(a.querySelector("p").innerText.replace("$", ""));
          valueB = parseFloat(b.querySelector("p").innerText.replace("$", ""));
        }

        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      });
    }

    // Remove existing products
    productList.innerHTML = "";

    // Append sorted products
    products.forEach(function(product) {
      productList.appendChild(product);
    });
  }

  // Initialize original order data attribute
  var products = document.querySelectorAll(".product-container");
  products.forEach(function(product, index) {
    product.dataset.originalOrder = index;
  });

  
// image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})

