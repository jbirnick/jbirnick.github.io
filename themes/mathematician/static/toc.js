window.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('#stripe h1, #stripe h2, #stripe h3, #stripe h4');
  const links = document.querySelectorAll('#sidebar a');

  window.addEventListener('scroll', (event) => {
    if (typeof(anchors) != 'undefined' && anchors != null && typeof(links) != 'undefined' && links != null) {
      let scrollTop = window.scrollY;
    
      // highlight the last scrolled-to: set everything inactive first
      links.forEach((link, index) => {
        link.classList.remove("active");
      });
    
      // then iterate backwards, on the first match highlight it and break
      for (var i = anchors.length-1; i >= 0; i--) {
        if (scrollTop > anchors[i].offsetTop - 280) {
          links[i].classList.add('active');
          break;
        }
      }
    }
  });
});
