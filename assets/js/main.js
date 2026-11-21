// 유튜브 영상: 클릭할 때만 불러와서 첫 화면을 가볍게 유지
document.querySelectorAll('.yt').forEach(function (el) {
  el.addEventListener('click', function () {
    var id = el.getAttribute('data-id');
    el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" title="비즈플러스안산 홍보 영상" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  }, { once: true });
});

// 모바일 햄버거 메뉴
(function () {
  var nav = document.querySelector('.nav'), btn = document.querySelector('.burger');
  if (!nav || !btn) return;
  function set(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  }
  btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
  nav.querySelectorAll('.menu a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) set(false); });
})();
