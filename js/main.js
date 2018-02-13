/* global $ */

function main () {
// Wrap every letter in a span

var scrollAnimation = anime.timeline({loop: false})
  .add({
    targets: '.titulos .animacion',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
      autoplay: false,
    delay: function(el, i) {
      return 45 * (i+1)
    }
  })
}

$(document).ready(main)



