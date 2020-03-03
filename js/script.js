(function () {

  /* Initialize WOW */
  $(document).ready( () => {
    new WOW().init();
  })

  /* Update Footer */
  const year = new Date().getFullYear();
  $('.footer-copyright span').prepend(`© ${year} Copyright `);

})()
