// 유튜브 영상: 클릭할 때만 불러와서 첫 화면을 가볍게 유지
document.querySelectorAll('.yt').forEach(function (el) {
  el.addEventListener('click', function () {
    var id = el.getAttribute('data-id');
    el.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" title="비즈플러스 안산 홍보 영상" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  }, { once: true });
});
