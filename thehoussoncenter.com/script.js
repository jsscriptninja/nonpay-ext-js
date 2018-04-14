/* Total By THC: Theme JS Functions Rev 1.0.2 */
var css = '.wpb_column{display: -webkit-inline-box !important;float: none !important;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
