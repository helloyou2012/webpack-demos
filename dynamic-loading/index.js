__webpack_public_path__ = window.STATIC_ROOT || '';

function onClick(path) {
  System.import('./module/' + path).then(module => {
    module.test();
  }).catch(err => {
    console.log('Chunk loading failed');
  });
}

var elems = document.querySelectorAll('.test');
for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener('click', function(e) {
    onClick(this.textContent);
  }, false);
}
