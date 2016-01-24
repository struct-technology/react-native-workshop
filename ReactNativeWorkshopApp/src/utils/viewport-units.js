/* @flow weak */

'use strict';
import Dimensions from 'Dimensions';

var {width, height} = Dimensions.get('window');

var units = {
  vw: width/100,
  vh: height/100,
  ratio: width/320,
  vmin: 0,
  vmax: 0
};

units.vmin = Math.min(units.vw, units.vh);
units.vmax = Math.max(units.vw, units.vh);

export default units;
