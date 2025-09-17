function showArticle(id) {
  document.querySelectorAll('.news-grid, .article').forEach(el => el.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function closeArticle() {
  document.querySelectorAll('.article').forEach(el => el.style.display = 'none');
  document.querySelector('.news-grid').style.display = 'grid';
}
