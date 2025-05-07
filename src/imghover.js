document.addEventListener('DOMContentLoaded', function () {
    const preview = document.querySelector('.imgPreview');
    const items = document.querySelectorAll('.list_bstd');
  
    items.forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        const imgFile = item.getAttribute('data-img');
        preview.style.backgroundImage = `url(${imgFile})`;
        preview.classList.remove('hide');
        updatePosition(e);
      });
  
      item.addEventListener('mousemove', (e) => {
        updatePosition(e);
      });
  
      item.addEventListener('mouseleave', () => {
        preview.classList.add('hide');
      });
  
      function updatePosition(e) {
        preview.style.top = (e.pageY - 130) + 'px';
        preview.style.left = (e.pageX + 20) + 'px';
      }
    });
  });
  