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


document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop(); // e.g., 'rsvp.html'
    const menuLinks = document.querySelectorAll("#menu a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});

// Get the modal
var modalTaxi = document.getElementById("taxiModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("taxiJPG");
var modalImg = document.getElementById("taxiImg");
img.onclick = function(){
  modalTaxi.style.display = "block";
  modalImg.src = this.src;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalTaxi.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTaxi) {
    modalTaxi.style.display = "none";
  }
}

// Get the modal
var modalHotel = document.getElementById("hotelModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("hotelJPG");
var modalImg = document.getElementById("hotelImg");
img.onclick = function(){
  modalHotel.style.display = "block";
  modalImg.src = this.src;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalHotel.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHotel) {
    modalHotel.style.display = "none";
  }
}