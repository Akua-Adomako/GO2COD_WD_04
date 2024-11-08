document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const closeButton = document.querySelector(".lightbox .close");
  const zoomInButton = document.querySelector(".zoom-in");
  const zoomOutButton = document.querySelector(".zoom-out");

  let scale = 1;

  // Open lightbox with clicked image
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImage.src = item.src;
      scale = 1; 
      lightboxImage.style.transform = `scale(${scale})`;
    });
  });

  // Close lightbox
  closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImage.src = "";
  });

  // Close lightbox on outside click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImage.src = "";
    }
  });

  // Zoom in function
  zoomInButton.addEventListener("click", (e) => {
    e.stopPropagation(); 
    scale += 0.2;
    lightboxImage.style.transform = `scale(${scale})`;
  });

  // Zoom out function
  zoomOutButton.addEventListener("click", (e) => {
    e.stopPropagation(); 
    if (scale > 0.4) { 
      scale -= 0.2;
      lightboxImage.style.transform = `scale(${scale})`;
    }
  });

  // Mouse wheel zoom
  lightboxImage.addEventListener("wheel", (e) => {
    e.preventDefault();
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(0.4, scale), 3);
    lightboxImage.style.transform = `scale(${scale})`;
  });
});



