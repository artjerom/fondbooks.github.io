/*==========================================
=            Javascript project            =
==========================================*/

;(function(){

/*============================================
=            Angular code && JSON            =
============================================*/

  "use strict";

  var fondBooks = angular.module("fondBooks", []);

  fondBooks.controller("bookList", function ($scope, $http) { 

    $http.get("books/_data.json").success(function(data, status, headers, config) {
      $scope.books = data;

    });
  });


/*========================================
=            Example DataBase            =
========================================*/

// $http.put('https://api.mongolab.com/api/1/databases/artjerom-example/collections/books/'; + 
//            $scope.id + '?apiKey=v3ezhiVsIAhzp5Scu_SyI0oYfnL_4neo',
//     { 'Address': $scope.party.Address,
//     'Date': $scope.party.Date,
//     'Link': $scope.party.Link,
//     'Photo': $scope.party.Photo
//     }).success(function (data, status, headers, config) {
//            $scope.refreshGrid();
//            $scope.id = '';
//            $scope.party = {}
//            $scope.SaveButton = "Add";
//     }).error(function (data, status, headers, config) { alert(status) });


/*=====  End of Example DataBase  ======*/



/*=====  End of Angular code && JSON  ======*/

/*=========================================
=            Button Top scroll            =
=========================================*/

  jQuery( document ).ready(function() {
    jQuery('#scrollTop i').mouseover( function(){
      jQuery( this ).animate({opacity: 0.65},100);
    }).mouseout( function(){
      jQuery( this ).animate({opacity: 1},100);
    }).click( function(){
      window.scroll(0 ,0); 
      return false;
    });

    jQuery(window).scroll(function(){
      if ( jQuery(document).scrollTop() > 0 ) {
        jQuery('#scrollTop').fadeIn('fast');
      } else {
        jQuery('#scrollTop').fadeOut('fast');
      }
    });
  });

/*=====  End of Button Top scroll  ======*/

/*=======================================
=  button about Author and donate       =
=======================================*/

$(document).ready(function(){

  $('.content-menu').hide();

  function showMenu(){
    $('.content-menu').show(600);
  };

  function hideMenu(){
    $('.content-menu').hide(600);
  };

 $('#show').bind('click', showMenu);
 $('#hide').bind('click', hideMenu);

});

/*=====  End of button about Author and donate  ======*/

/*==========================================
=            nodejs file system            =
==========================================*/
  // var fs = require('fs');

  // fs.readdir('books/', function(err, files){
  //   console.log(files);
  // });

/*=====  End of nodejs file system  ======*/

}());