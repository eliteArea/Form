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
    var field;
  // Init lightbox
    this.init = function(element , options) {
  
    // init settings
      settings = $.extend( {} , $.apiSource.defaultOptions , options );
      
    // execute code
      
      this.seter();
      this.focus();
      this.clickFocus();
      
    };
    this.seter = function() {
      field = element.find( settings['fieldWrap'] ).children();
    };
    this.focus = function() {
      
      field.focus(function(){
        $(this).parent().addClass('focus');
      });
      
      field.blur(function() {
        $(this).parent().removeClass('focus');
      });
      
    };
    
    this.clickFocus = function() {
      field.parent().on('click',function() {
        $(this).children().focus();
      });
    };
        
  // init element function
    this.init( element , options );
  };

// default options
  $.apiSource.defaultOptions = {
    fieldWrap: '.input-wrapp'
  }

//setup create object
  $.fn.apiForm = function(options) {
    return this.each(function() {
      (new $.apiSource($(this), options));              
    });        
  };
  

})(jQuery);
