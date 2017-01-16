__webpack_public_path__ = window.STATIC_ROOT || '';

import test from './test';

test();

function onClick(path) {
  import('./module/' + path).then(module => {
    module.test();
  }).catch(err => {
    console.log('Chunk loading failed');
  });
}

let elems = document.querySelectorAll('.test');
for (let i = 0; i < elems.length; i++) {
  elems[i].addEventListener('click', function(e) {
    onClick(this.textContent);
  }, false);
}
