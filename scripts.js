 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleMenu(x) {
    x.classList.toggle("change");
    document.getElementById("menu").classList.toggle("show");
  } 
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.closest('.menubtn')) {
        const bar2 = document.querySelector('.bar2');
        if (bar2) {
          const opacity = window.getComputedStyle(bar2).getPropertyValue('opacity');
          if (opacity === '0') {
            document.getElementById("menubtn").classList.toggle("change");
          }
        }
      var dropdowns = document.getElementsByClassName("menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }

    }
  }
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");


document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop(); // e.g., 'rsvp.html'
    const menuLinks = document.querySelectorAll("#menu a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
    if (currentPath === "kontakt.html"){
      document.getElementById("menubtn").classList.add("light");
      window.addEventListener("scroll", () => {
      if (window.scrollY > 30) { 
        document.getElementById("menubtn").classList.remove("light");
        } else {
          document.getElementById("menubtn").classList.add("light");
        }
      });
    }
    if (currentPath === "anfahrt.html"){
      document.getElementById("menubtn").classList.add("light");
      window.addEventListener("scroll", () => {
      if (window.scrollY > 30) { 
        document.getElementById("menubtn").classList.remove("light");
        } else {
          document.getElementById("menubtn").classList.add("light");
        }
      });
    }
});




// open and close modal images
function initModal(imgId, modalId, modalImgId, closeId) {
  var modal = document.getElementById(modalId);
  var img = document.getElementById(imgId);
  var modalImg = document.getElementById(modalImgId);
  var closeBtn = document.getElementById(closeId);

  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }

  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

initModal("taxiJPG", "taxiModal", "taxiImg", "closeTaxi");
initModal("hotelJPG", "hotelModal", "hotelImg", "closeHotel");
