// Your JS code here.
function addActiveClass() {
        // get all slide-in-image elements
        const images = document.querySelectorAll(".slide-in-image");

        // get current scroll position
        const scrollPosition = window.scrollY;

        // loop through all images
        images.forEach((image) => {
          // get image position
          const imagePosition = image.getBoundingClientRect().top;

          // check if image is in view
          if (imagePosition <= window.innerHeight) {
            // add active class
            image.classList.add("active");
          } else {
            // remove active class
            image.classList.remove("active");
          }
        });
      }
      // debounce function to limit the amount of times addActiveClass is called 
      function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }
      // pass addActiveClass function to debounce function 
      const debouncedAddActiveClass = debounce(addActiveClass);
      // add event listener to call debouncedAddActiveClass on scroll
      window.addEventListener("scroll", debouncedAddActiveClass);