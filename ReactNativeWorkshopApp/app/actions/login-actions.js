/* @flow weak */

'use strict';
import Baobab from 'baobab';

export function changeUsername(tree, username) {
  tree.set('username', username);
}