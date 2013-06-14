/*
 * Api Form scripting
 * ========================== */
$(document).ready(function(){
  
  $('form').apiForm();
  
});

(function($) {
  
  $.apiSource = function( element , options ) {
  // global variables
    settings = {};
    element.data('apiForm' , this);
    
  // Init lightbox
    this.init = function(element , options) {
  
    // init settings
      settings = $.extend( {} , $.apiSource.defaultOptions , options );
      
    // execute code
      alert('testiramo');
      
    };
        
  // init element function
    this.init( element , options );
  };

// default options
  $.apiSource.defaultOptions = {
    target: false // default keycode for enter
  }

//setup create object
  $.fn.apiForm = function(options) {
    return this.each(function() {
      (new $.apiSource($(this), options));              
    });        
  };
  

})(jQuery);
