/* global $ */
/* global anime */
"use strict";

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop()%137===0) {
      anime.timeline({loop: false})
        .add({
          targets: ".animacion",
          scale: [0, 1],
          duration: 1000,
          elasticity: 10,
          autoplay: false,
        });
    }

  });
});