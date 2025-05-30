(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_blog_js"],{

/***/ "./assets/js/theme/blog.js":
/*!*********************************!*\
  !*** ./assets/js/theme/blog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var Blog = /*#__PURE__*/function (_PageManager) {
  function Blog(context) {
    return _PageManager.call(this, context) || this;
  }
  _inheritsLoose(Blog, _PageManager);
  var _proto = Blog.prototype;
  _proto.onReady = function onReady() {
    this.getAllTags(this.context);
    _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_2___default()(this.context);
    (0,_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, $('.halo-blog-lookbook .lookbook-slider'));
    this.lookbookCarousel();
  };
  _proto.getAllTags = function getAllTags(context) {
    if (context.themeSettings.halo_sidebar_popular_tags == true) {
      var requestOptions = {
        config: {
          blog: {
            posts: {
              limit: 100
            }
          }
        },
        template: 'halothemes/halo-all-tags'
      };
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage('/blog', requestOptions, function (error, response) {
        if (error) {
          return '';
        }
        $('.tags-list').html(response);
        var arr = {};
        $('.tags-list [data-tag]').each(function () {
          var txt = $(this).data('tag');
          if (arr[txt]) $(this).remove();else arr[txt] = true;
        });
      });
    }
  };
  _proto.lookbookCarousel = function lookbookCarousel() {
    if ($('.blog-lookbook-gallery .lookbook-slider').length) {
      if (!$('.blog-lookbook-gallery .lookbook-slider').hasClass('slick-slider')) {
        $('.blog-lookbook-gallery .lookbook-slider').slick({
          rows: 0,
          rtl: false,
          dots: true,
          arrows: false,
          mobileFirst: true,
          infinite: false,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }
    }
  };
  return Blog;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js":
/*!*******************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAddOptionForProductCard.js ***!
  \*******************************************************************/
/***/ (() => {

// import utils from '@bigcommerce/stencil-utils';
// const fetch = require('node-fetch');

// export default function(context, wrapper) {
//     if (context.themeSettings.haloAddOptionForProduct == true) {
//         const token = context.token,
//             product_wrapper = $('#'+wrapper),
//             product_class = product_wrapper.find('.card');
//         var  list = [];

//         function callProductOption() {
//             product_class.each((index, element) => {
//                 var productId = $(element).data("product-id");

//                 list.push(productId.toString());
//             });

//             if(list.length > 0){
//                 getProductOption(list).then(data => {
//                     renderOption(data);

//                     $.each(list, (idx, item) => {
//                         var arr = {},
//                             productId = list[idx];

//                         product_wrapper.find('.card-option-'+productId+' .form-option-swatch').each((index, element) => {
//                             var txt = $(element).data('product-swatch-value');

//                             if (arr[txt]){
//                                 $(element).remove();
//                             } else {
//                                 arr[txt] = true;
//                             }
//                         });

//                         if(product_wrapper.find('.card-option-'+productId+' .form-option-swatch').length > 4){
//                             var countMoreOption  = product_wrapper.find('.card-option-'+productId+' .form-option-swatch').length - 4,
//                                 productLink = product_wrapper.find('[data-product-id="'+productId+'"]').find('.card-link').attr('href');

//                             product_wrapper.find('.card-option-'+productId+' .form-option-swatch').each((index, element) => {
//                                 if(index >= 4){
//                                     $(element).remove();
//                                 }
//                             });

//                             if(product_wrapper.find('.card-option-'+productId+' .form-field .showmore').length < 1){
//                                 product_wrapper.find('.card-option-'+productId+' .form-field:not(.form-field--size)').append('<a href="'+productLink+'" class="showmore">+'+countMoreOption+'</a>');
//                             }
//                         }
//                     });

//                 });
//             }
//         }

//         function getProductOption(list){
//             return fetch('/graphql', {
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application/json',
//                   'Authorization': 'Bearer ' + token
//                 },
//                 body: JSON.stringify({
//                   query: `
//                     query SeveralProductsByID {
//                       site {
//                         products(entityIds: [`+list+`], first: 50) {
//                           edges {
//                             node {
//                               entityId
//                               name
//                                productOptions(first: 50) {
//                                 edges {
//                                   node {
//                                     entityId
//                                     displayName
//                                     isRequired
//                                     ... on MultipleChoiceOption {
//                                       displayStyle
//                                       values {
//                                         edges {
//                                           node {
//                                             entityId
//                                             label
//                                             isDefault
//                                             ... on SwatchOptionValue {
//                                               hexColors
//                                               imageUrl(width: 50)
//                                             }
//                                           }
//                                         }
//                                       }
//                                     }
//                                   }
//                                 }
//                               }
//                             }
//                           }
//                         }
//                       }
//                     }
//                   `}),
//             }).then(res => res.json()).then(res => res.data);
//         }

//         function renderOption(data){
//             var aFilter = data.site.products.edges;

//             $.each(aFilter, (index, element) => {
//                 var productId = aFilter[index].node.entityId,
//                     productFieldColor = product_wrapper.find('.card-option-'+productId+' .form-field:not(.form-field--size)'),
//                     productFieldSize = product_wrapper.find('.card-option-'+productId+' .form-field--size'),
//                     aFilter2 = aFilter[index].node.productOptions.edges;

//                 var aFilter3 = aFilter2.filter(function (item) {
//                     return item.node.displayStyle === 'Swatch';
//                 });

//                 var aFilter5 = aFilter2.filter(function (item) {
//                     return item.node.displayName === context.themeSettings.haloAddOptionForProduct2;
//                 });

//                 if(aFilter3.length > 0){
//                     var aFilter4 = aFilter3[0].node.values.edges;

//                     $.each(aFilter4, (idx, element) => {
//                         var titleVar = aFilter4[idx].node.label,
//                             idVar = aFilter4[idx].node.entityId,
//                             lengthColorVar = aFilter4[idx].node.hexColors.length,
//                             color1 = aFilter4[idx].node.hexColors[0],
//                             color2 = aFilter4[idx].node.hexColors[1],
//                             color3 = aFilter4[idx].node.hexColors[2],
//                             img = aFilter4[idx].node.imageUrl;

//                         if(lengthColorVar == 2){
//                             productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="'+idVar+'"><span class="form-option-tooltip">'+titleVar+'</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="'+titleVar+'"><span style="background-color:'+color1+'"></span><span style="background-color:'+color2+'"></span></span></label>');
//                         } else if(lengthColorVar === 3){
//                             productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="'+idVar+'"><span class="form-option-tooltip">'+titleVar+'</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="'+titleVar+'"><span style="background-color:'+color1+'"></span><span style="background-color:'+color2+'"></span><span style="background-color:'+color3+'"></span></span></label>');
//                         } else if(Boolean(color1)){
//                             productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="'+idVar+'"><span class="form-option-tooltip">'+titleVar+'</span><span class="form-option-variant form-option-variant--color" title="'+titleVar+'" style="background-color: '+color1+'"></span></label>');
//                         } else if(Boolean(img)){
//                             productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="'+idVar+'"><span class="form-option-tooltip">'+titleVar+'</span><span class="form-option-variant form-option-variant--pattern" title="'+titleVar+'" style="background-image: url('+img+')"></span></label>');
//                         }
//                     });
//                 } else{
//                     productFieldColor.remove();
//                 }

//                 if(aFilter5.length > 0){
//                     if(productFieldSize.length < 1){
//                         product_wrapper.find('.card-option-'+productId+'').append('<div class="form-field form-field--size"><label class="form-option">'+context.themeSettings.haloAddOptionForProductText.toString()+'</label></div>');
//                     }
//                 }

//                 if((aFilter5.length == 0) && (aFilter3.length == 0)){
//                     product_wrapper.find('.card-option-'+productId+'').remove();
//                 }
//             });
//         }

//         callProductOption();
//     }
// }

/***/ }),

/***/ "./assets/js/theme/halothemes/haloProductLookbook.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductLookbook.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context, el) {
  var $popup = $('.lookbook-popup');
  var $el = el;
  var $options = {
    template: 'halothemes/products/halo-lookbook-tmp'
  };
  $el.find('.item .item-point').on('click', function (event) {
    $popup.removeClass('is-open').empty();
    var $prodId = $(event.target).data('product-id'),
      position = $(event.target).offset(),
      container = $el.offset();
    if ($prodId != undefined) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }
        $popup.html(response);
      });
      if ($(window).width() >= 551) {
        $popup.css({
          'top': position.top - container.top - 100,
          'left': position.left - container.left + 30
        });
      } else {
        $popup.css({
          'top': position.top - container.top + 15,
          'left': 15
        });
      }
      $popup.addClass("is-open");
    }
  });
  $(document).on('click', '.close-product', function (event) {
    event.preventDefault();
    if ($popup.hasClass("is-open")) {
      $popup.removeClass("is-open");
    }
  });
  $(document).on('click', function (event) {
    if ($popup.hasClass("is-open")) {
      if ($(event.target).closest($popup).length === 0 && $(event.target).closest('.item .item-point').length === 0) {
        $popup.removeClass("is-open");
      }
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ibG9nX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNOO0FBQzRCO0FBQ0Y7QUFBQSxJQUU5Q0ksSUFBSSwwQkFBQUMsWUFBQTtFQUNyQixTQUFBRCxLQUFZRSxPQUFPLEVBQUU7SUFBQSxPQUNqQkQsWUFBQSxDQUFBRSxJQUFBLE9BQU1ELE9BQU8sQ0FBQztFQUNsQjtFQUFDRSxjQUFBLENBQUFKLElBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FFSkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQ04sT0FBTyxDQUFDO0lBQzdCSiw4RUFBYSxDQUFDLElBQUksQ0FBQ0ksT0FBTyxDQUFDO0lBQzNCSCwyRUFBbUIsQ0FBQyxJQUFJLENBQUNHLE9BQU8sRUFBRU8sQ0FBQyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDNUUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQzNCLENBQUM7RUFBQUwsTUFBQSxDQUVERyxVQUFVLEdBQVYsU0FBQUEsVUFBVUEsQ0FBQ04sT0FBTyxFQUFDO0lBQ2YsSUFBSUEsT0FBTyxDQUFDUyxhQUFhLENBQUNDLHlCQUF5QixJQUFJLElBQUksRUFBRTtNQUN6RCxJQUFNQyxjQUFjLEdBQUc7UUFDbkJDLE1BQU0sRUFBRTtVQUNKQyxJQUFJLEVBQUU7WUFDRkMsS0FBSyxFQUFFO2NBQ0hDLEtBQUssRUFBRTtZQUNYO1VBQ0o7UUFDSixDQUFDO1FBQ0RDLFFBQVEsRUFBRTtNQUNkLENBQUM7TUFFRHRCLHNFQUFTLENBQUN3QixPQUFPLENBQUMsT0FBTyxFQUFFUCxjQUFjLEVBQUUsVUFBQ1EsS0FBSyxFQUFFQyxRQUFRLEVBQUs7UUFDN0QsSUFBSUQsS0FBSyxFQUFFO1VBQ04sT0FB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LEdBQUcsRUFBRTtVQUFFLE1BQU0sRUFBRTtRQUFFLENBQUMsQ0FBQztNQUN0RTtNQUVBcEIsTUFBTSxDQUFDc0IsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUM5QjtFQUNKLENBQUMsQ0FBQztFQUVGeEQsQ0FBQyxDQUFDeUQsUUFBUSxDQUFDLENBQUNuQixFQUFFLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQUFDLEtBQUssRUFBSTtJQUMvQ0EsS0FBSyxDQUFDbUIsY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBSXhCLE1BQU0sQ0FBQ2IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO01BQzVCYSxNQUFNLENBQUNNLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDakM7RUFDSixDQUFDLENBQUM7RUFFRnhDLENBQUMsQ0FBQ3lELFFBQVEsQ0FBQyxDQUFDbkIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7SUFDN0IsSUFBR0wsTUFBTSxDQUFDYixRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7TUFDM0IsSUFBSXJCLENBQUMsQ0FBQ3VDLEtBQUssQ0FBQ0ksTUFBTSxDQUFDLENBQUNnQixPQUFPLENBQUN6QixNQUFNLENBQUMsQ0FBQ2QsTUFBTSxLQUFLLENBQUMsSUFBTXBCLENBQUMsQ0FBQ3VDLEtBQUssQ0FBQ0ksTUFBTSxDQUFDLENBQUNnQixPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3ZDLE1BQU0sS0FBSyxDQUFFLEVBQUU7UUFDOUdjLE1BQU0sQ0FBQ00sV0FBVyxDQUFDLFNBQVMsQ0FBQztNQUNqQztJQUNKO0VBQ0osQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvYmxvZy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbiBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkJztcbmltcG9ydCBoYWxvUHJvZHVjdExvb2tib29rIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvUHJvZHVjdExvb2tib29rJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgIH1cblxuXHRvblJlYWR5KCkge1xuICAgICAgICB0aGlzLmdldEFsbFRhZ3ModGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb0FkZE9wdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvUHJvZHVjdExvb2tib29rKHRoaXMuY29udGV4dCwgJCgnLmhhbG8tYmxvZy1sb29rYm9vayAubG9va2Jvb2stc2xpZGVyJykpO1xuICAgICAgICB0aGlzLmxvb2tib29rQ2Fyb3VzZWwoKTtcbiAgICB9XG5cbiAgICBnZXRBbGxUYWdzKGNvbnRleHQpe1xuICAgICAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fc2lkZWJhcl9wb3B1bGFyX3RhZ3MgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvaGFsby1hbGwtdGFncycsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSgnL2Jsb2cnLCByZXF1ZXN0T3B0aW9ucywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKCcudGFncy1saXN0JykuaHRtbChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYXJyID0ge307XG5cbiAgICAgICAgICAgICAgICAkKCcudGFncy1saXN0IFtkYXRhLXRhZ10nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHh0ID0gJCh0aGlzKS5kYXRhKCd0YWcnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW3R4dF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbdHh0XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb29rYm9va0Nhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnLmJsb2ctbG9va2Jvb2stZ2FsbGVyeSAubG9va2Jvb2stc2xpZGVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoISQoJy5ibG9nLWxvb2tib29rLWdhbGxlcnkgLmxvb2tib29rLXNsaWRlcicpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xuICAgICAgICAgICAgICAgICQoJy5ibG9nLWxvb2tib29rLWdhbGxlcnkgLmxvb2tib29rLXNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgcm93czogMCxcbiAgICAgICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIGltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG4vLyBjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgd3JhcHBlcikge1xuLy8gICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgPT0gdHJ1ZSkge1xuLy8gICAgICAgICBjb25zdCB0b2tlbiA9IGNvbnRleHQudG9rZW4sXG4vLyAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIgPSAkKCcjJyt3cmFwcGVyKSxcbi8vICAgICAgICAgICAgIHByb2R1Y3RfY2xhc3MgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQnKTtcbi8vICAgICAgICAgdmFyICBsaXN0ID0gW107XG5cbi8vICAgICAgICAgZnVuY3Rpb24gY2FsbFByb2R1Y3RPcHRpb24oKSB7XG4vLyAgICAgICAgICAgICBwcm9kdWN0X2NsYXNzLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoZWxlbWVudCkuZGF0YShcInByb2R1Y3QtaWRcIik7XG5cbi8vICAgICAgICAgICAgICAgICBsaXN0LnB1c2gocHJvZHVjdElkLnRvU3RyaW5nKCkpO1xuLy8gICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgIGlmKGxpc3QubGVuZ3RoID4gMCl7XG4vLyAgICAgICAgICAgICAgICAgZ2V0UHJvZHVjdE9wdGlvbihsaXN0KS50aGVuKGRhdGEgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb24oZGF0YSk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGxpc3QsIChpZHgsIGl0ZW0pID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSB7fSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQgPSBsaXN0W2lkeF07XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHh0ID0gJChlbGVtZW50KS5kYXRhKCdwcm9kdWN0LXN3YXRjaC12YWx1ZScpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyclt0eHRdKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbdHh0XSA9IHRydWU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykubGVuZ3RoID4gNCl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50TW9yZU9wdGlvbiAgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCAtIDQsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaW5rID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJ1tkYXRhLXByb2R1Y3QtaWQ9XCInK3Byb2R1Y3RJZCsnXCJdJykuZmluZCgnLmNhcmQtbGluaycpLmF0dHIoJ2hyZWYnKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPj0gNCl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQgLnNob3dtb3JlJykubGVuZ3RoIDwgMSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZDpub3QoLmZvcm0tZmllbGQtLXNpemUpJykuYXBwZW5kKCc8YSBocmVmPVwiJytwcm9kdWN0TGluaysnXCIgY2xhc3M9XCJzaG93bW9yZVwiPisnK2NvdW50TW9yZU9wdGlvbisnPC9hPicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGdldFByb2R1Y3RPcHRpb24obGlzdCl7XG4vLyAgICAgICAgICAgICByZXR1cm4gZmV0Y2goJy9ncmFwaHFsJywge1xuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxuLy8gICAgICAgICAgICAgICAgICAgICBxdWVyeSBTZXZlcmFsUHJvZHVjdHNCeUlEIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzKGVudGl0eUlkczogW2ArbGlzdCtgXSwgZmlyc3Q6IDUwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMoZmlyc3Q6IDUwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhleENvbG9yc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsKHdpZHRoOiA1MClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgYH0pLFxuLy8gICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZnVuY3Rpb24gcmVuZGVyT3B0aW9uKGRhdGEpe1xuLy8gICAgICAgICAgICAgdmFyIGFGaWx0ZXIgPSBkYXRhLnNpdGUucHJvZHVjdHMuZWRnZXM7XG5cbi8vICAgICAgICAgICAgICQuZWFjaChhRmlsdGVyLCAoaW5kZXgsIGVsZW1lbnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gYUZpbHRlcltpbmRleF0ubm9kZS5lbnRpdHlJZCxcbi8vICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLFxuLy8gICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRTaXplID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkLS1zaXplJyksXG4vLyAgICAgICAgICAgICAgICAgICAgIGFGaWx0ZXIyID0gYUZpbHRlcltpbmRleF0ubm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcztcblxuLy8gICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyMyA9IGFGaWx0ZXIyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ub2RlLmRpc3BsYXlTdHlsZSA9PT0gJ1N3YXRjaCc7XG4vLyAgICAgICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjUgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5TmFtZSA9PT0gY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Mjtcbi8vICAgICAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgICAgIGlmKGFGaWx0ZXIzLmxlbmd0aCA+IDApe1xuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjQgPSBhRmlsdGVyM1swXS5ub2RlLnZhbHVlcy5lZGdlcztcblxuLy8gICAgICAgICAgICAgICAgICAgICAkLmVhY2goYUZpbHRlcjQsIChpZHgsIGVsZW1lbnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aXRsZVZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5sYWJlbCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5lbnRpdHlJZCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhDb2xvclZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnMubGVuZ3RoLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMSA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMF0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1sxXSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjMgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzJdLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5pbWFnZVVybDtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYobGVuZ3RoQ29sb3JWYXIgPT0gMil7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGxlbmd0aENvbG9yVmFyID09PSAzKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yIGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCI+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IxKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IyKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IzKydcIj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihjb2xvcjEpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcrY29sb3IxKydcIj48L3NwYW4+PC9sYWJlbD4nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihCb29sZWFuKGltZykpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVyblwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJytpbWcrJylcIj48L3NwYW4+PC9sYWJlbD4nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAgICAgfSBlbHNle1xuLy8gICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5yZW1vdmUoKTtcbi8vICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICBpZihhRmlsdGVyNS5sZW5ndGggPiAwKXtcbi8vICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdEZpZWxkU2l6ZS5sZW5ndGggPCAxKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJycpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2l6ZVwiPjxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uXCI+Jytjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RUZXh0LnRvU3RyaW5nKCkrJzwvbGFiZWw+PC9kaXY+Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICBpZigoYUZpbHRlcjUubGVuZ3RoID09IDApICYmIChhRmlsdGVyMy5sZW5ndGggPT0gMCkpe1xuLy8gICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5yZW1vdmUoKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGNhbGxQcm9kdWN0T3B0aW9uKCk7XG4vLyAgICAgfVxuLy8gfVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgZWwpIHtcbiAgICB2YXIgJHBvcHVwID0gJCgnLmxvb2tib29rLXBvcHVwJyk7XG4gICAgdmFyICRlbCA9IGVsO1xuXG4gICAgY29uc3QgJG9wdGlvbnMgPSB7XG4gICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9wcm9kdWN0cy9oYWxvLWxvb2tib29rLXRtcCdcbiAgICB9O1xuXG4gICAgJGVsLmZpbmQoJy5pdGVtIC5pdGVtLXBvaW50Jykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5lbXB0eSgpO1xuXG4gICAgICAgIHZhciAkcHJvZElkID0gJChldmVudC50YXJnZXQpLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJChldmVudC50YXJnZXQpLm9mZnNldCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gJGVsLm9mZnNldCgpO1xuXG4gICAgICAgIGlmKCRwcm9kSWQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQoJHByb2RJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRwb3B1cC5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNTUxKSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lci50b3AgLSAxMDAsICdsZWZ0JzogcG9zaXRpb24ubGVmdCAtIGNvbnRhaW5lci5sZWZ0ICsgMzB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lci50b3AgKyAxNSwgJ2xlZnQnOiAxNX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcG9wdXAuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLXByb2R1Y3QnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCRwb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoJHBvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgaWYoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCRwb3B1cCkubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5pdGVtIC5pdGVtLXBvaW50JykubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJ1dGlscyIsIlBhZ2VNYW5hZ2VyIiwiaGFsb0FkZE9wdGlvbiIsImhhbG9Qcm9kdWN0TG9va2Jvb2siLCJCbG9nIiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsImNhbGwiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJnZXRBbGxUYWdzIiwiJCIsImxvb2tib29rQ2Fyb3VzZWwiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb19zaWRlYmFyX3BvcHVsYXJfdGFncyIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiYmxvZyIsInBvc3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsImFwaSIsImdldFBhZ2UiLCJlcnJvciIsInJlc3BvbnNlIiwiaHRtbCIsImFyciIsImVhY2giLCJ0eHQiLCJkYXRhIiwicmVtb3ZlIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJzbGljayIsInJvd3MiLCJydGwiLCJkb3RzIiwiYXJyb3dzIiwibW9iaWxlRmlyc3QiLCJpbmZpbml0ZSIsImFkYXB0aXZlSGVpZ2h0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJkZWZhdWx0IiwiZWwiLCIkcG9wdXAiLCIkZWwiLCIkb3B0aW9ucyIsImZpbmQiLCJvbiIsImV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJlbXB0eSIsIiRwcm9kSWQiLCJ0YXJnZXQiLCJwb3NpdGlvbiIsIm9mZnNldCIsImNvbnRhaW5lciIsInVuZGVmaW5lZCIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZXJyIiwid2luZG93Iiwid2lkdGgiLCJjc3MiLCJ0b3AiLCJsZWZ0IiwiYWRkQ2xhc3MiLCJkb2N1bWVudCIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VzdCJdLCJzb3VyY2VSb290IjoiIn0=
