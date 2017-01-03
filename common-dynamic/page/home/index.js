__webpack_public_path__ = window.STATIC_ROOT || '/';

import libA from '../../lib/a';

import('../../component/b').then(module => {
  module.default();
  libA();
});