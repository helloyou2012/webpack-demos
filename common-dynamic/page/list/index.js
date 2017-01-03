__webpack_public_path__ = window.STATIC_ROOT || '/';

import libB from '../../lib/b';

import('../../component/a').then(module => {
  module.default();
  libB();
});