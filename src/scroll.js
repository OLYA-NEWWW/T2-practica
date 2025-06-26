const btn = document.querySelector('.up-btn');

function goUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (btn) {
  btn.addEventListener('click', goUp);

  if (!CSS.supports('animation-timeline: scroll(root)')) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });
  }
}