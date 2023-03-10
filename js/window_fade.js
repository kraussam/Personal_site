// Fade in on page load
document.addEventListener("DOMContentLoaded", function(event) { 
  document.body.style.opacity = 0;
  document.body.classList.add('fade-in');
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = 1;
  }, 1000);
});

// Set the opacity of the body to 1 after the animation is complete
window.onload = function() {
  document.body.classList.add('fade-in');
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 500);
};
