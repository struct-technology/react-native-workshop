/* @flow weak */

'use strict';
// i18n
import Polyglot from 'node-polyglot';
import locale from './pt-br';

var polyglot = new Polyglot({locale: "pt-br", phrases: locale});

export {
  t: (args)=>polyglot.t(args)
};
