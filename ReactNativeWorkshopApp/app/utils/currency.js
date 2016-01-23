/* @flow weak */

'use strict';
export default function (num) {
    return "R$ " + num
          .toFixed(2) // always two decimal digits
          .replace(".", ",") // replace decimal point character with ,
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // use . as a separator
}