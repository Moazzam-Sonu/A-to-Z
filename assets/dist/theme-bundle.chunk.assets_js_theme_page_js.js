(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_page_js"],{

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

/***/ }),

/***/ "./assets/js/theme/page.js":
/*!*********************************!*\
  !*** ./assets/js/theme/page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var Page = /*#__PURE__*/function (_PageManager) {
  function Page(context) {
    return _PageManager.call(this, context) || this;
  }
  _inheritsLoose(Page, _PageManager);
  var _proto = Page.prototype;
  _proto.onReady = function onReady() {
    this.faqsPage();
    this.faqsToggle();
    this.portfolioPage();
    _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4___default()(this.context);
    (0,_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context, $('.halo-lookbook-slider'));
    this.lookbookCarousel();
    this.portfolioCustomCarousel();
  };
  _proto.faqsPage = function faqsPage() {
    $('.faq-desc').appendTo('.page-normal .page-description');
  };
  _proto.portfolioPage = function portfolioPage() {
    $('.halo-image-portfolio .item:hidden').slice(0, 6).css('display', 'inline-block');
    if ($('.halo-image-portfolio .item').length > 6) {
      $('.halo-image-portfolio').append('<div class="halo-infinite-portfolio"><div class="button button--transparent">Load More</div></div>');
    }
    $('.halo-infinite-portfolio .button').on('click', function (event) {
      event.preventDefault();
      $('.halo-image-portfolio .item:hidden').slice(0, 6).css('display', 'inline-block');
      if ($(".halo-image-portfolio .item:hidden").length == 0) {
        $('.halo-infinite-portfolio .button').addClass('disable').text('No more items');
      }
    });
    if ($('.page-portfolio .page-sidebar-mobile').length > 0) {
      $('.page-portfolio .page-sidebar-mobile').append('<svg class="icon"><use xlink:href="#icon-sidebar"></use></svg>');
    }
    $('.halo-image-portfolio .item').each(function (index, element) {
      if ($('.external-link', element).length > 0) {
        $('.external-link', element).append('<svg class="icon"><use xlink:href="#icon-external-link"></use></svg>');
      }
    });
  };
  _proto.faqsToggle = function faqsToggle() {
    $('.page-normal .card .title').on('click', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      $('.page-normal .card .title').not($target).removeClass('collapsed');
      if ($target.hasClass('collapsed')) {
        $target.removeClass('collapsed');
      } else {
        $target.addClass('collapsed');
      }
      $('.page-normal .card').each(function (index, element) {
        if ($('.title', element).hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  }

  //Lookbook page
  ;
  _proto.lookbookCarousel = function lookbookCarousel() {
    if ($('.halo-lookbook-slider').length) {
      if (!$('.halo-lookbook-slider').hasClass('slick-slider')) {
        $('.halo-lookbook-slider').slick({
          dots: true,
          arrows: false,
          mobileFirst: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'anticipated',
          nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              dots: false,
              arrows: true
            }
          }]
        });
      }
    }
  }

  // Portfolio page
  ;
  _proto.portfolioCustomCarousel = function portfolioCustomCarousel() {
    if ($('.halo-portfolio-custom .halo-row').length) {
      if (!$('.halo-portfolio-custom .halo-row').hasClass('slick-slider')) {
        $('.halo-portfolio-custom .halo-row').slick({
          dots: true,
          arrows: false,
          mobileFirst: true,
          infinite: false,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: 'anticipated',
          nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              dots: false,
              arrows: true
            }
          }]
        });
      }
    }
  };
  return Page;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wYWdlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSytDO0FBRS9DLDZCQUFlLG9DQUFTQyxPQUFPLEVBQUVDLEVBQUUsRUFBRTtFQUNqQyxJQUFJQyxNQUFNLEdBQUdD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Q0FBQztNQUNOO0lBQ0o7RUFDSixDQUFDO0VBQUEsT0FBQTFCLElBQUE7QUFBQSxFQTdINkJILHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0TG9va2Jvb2suanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbi8vIGNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCB3cmFwcGVyKSB7XG4vLyAgICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCA9PSB0cnVlKSB7XG4vLyAgICAgICAgIGNvbnN0IHRva2VuID0gY29udGV4dC50b2tlbixcbi8vICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlciA9ICQoJyMnK3dyYXBwZXIpLFxuLy8gICAgICAgICAgICAgcHJvZHVjdF9jbGFzcyA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZCcpO1xuLy8gICAgICAgICB2YXIgIGxpc3QgPSBbXTtcblxuLy8gICAgICAgICBmdW5jdGlvbiBjYWxsUHJvZHVjdE9wdGlvbigpIHtcbi8vICAgICAgICAgICAgIHByb2R1Y3RfY2xhc3MuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbi8vICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJChlbGVtZW50KS5kYXRhKFwicHJvZHVjdC1pZFwiKTtcblxuLy8gICAgICAgICAgICAgICAgIGxpc3QucHVzaChwcm9kdWN0SWQudG9TdHJpbmcoKSk7XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgaWYobGlzdC5sZW5ndGggPiAwKXtcbi8vICAgICAgICAgICAgICAgICBnZXRQcm9kdWN0T3B0aW9uKGxpc3QpLnRoZW4oZGF0YSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbihkYXRhKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAkLmVhY2gobGlzdCwgKGlkeCwgaXRlbSkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IHt9LFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZCA9IGxpc3RbaWR4XTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eHQgPSAkKGVsZW1lbnQpLmRhdGEoJ3Byb2R1Y3Qtc3dhdGNoLXZhbHVlJyk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW3R4dF0pe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclt0eHRdID0gdHJ1ZTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggPiA0KXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRNb3JlT3B0aW9uICA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykubGVuZ3RoIC0gNCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpbmsgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnW2RhdGEtcHJvZHVjdC1pZD1cIicrcHJvZHVjdElkKydcIl0nKS5maW5kKCcuY2FyZC1saW5rJykuYXR0cignaHJlZicpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+PSA0KXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZCAuc2hvd21vcmUnKS5sZW5ndGggPCAxKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKS5hcHBlbmQoJzxhIGhyZWY9XCInK3Byb2R1Y3RMaW5rKydcIiBjbGFzcz1cInNob3dtb3JlXCI+KycrY291bnRNb3JlT3B0aW9uKyc8L2E+Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZnVuY3Rpb24gZ2V0UHJvZHVjdE9wdGlvbihsaXN0KXtcbi8vICAgICAgICAgICAgIHJldHVybiBmZXRjaCgnL2dyYXBocWwnLCB7XG4vLyAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4vLyAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5IFNldmVyYWxQcm9kdWN0c0J5SUQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMoZW50aXR5SWRzOiBbYCtsaXN0K2BdLCBmaXJzdDogNTApIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucyhmaXJzdDogNTApIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gTXVsdGlwbGVDaG9pY2VPcHRpb24ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5U3R5bGVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBTd2F0Y2hPcHRpb25WYWx1ZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4Q29sb3JzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwod2lkdGg6IDUwKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICBgfSksXG4vLyAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiByZW5kZXJPcHRpb24oZGF0YSl7XG4vLyAgICAgICAgICAgICB2YXIgYUZpbHRlciA9IGRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcztcblxuLy8gICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXIsIChpbmRleCwgZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSBhRmlsdGVyW2luZGV4XS5ub2RlLmVudGl0eUlkLFxuLy8gICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvciA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZDpub3QoLmZvcm0tZmllbGQtLXNpemUpJyksXG4vLyAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZFNpemUgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQtLXNpemUnKSxcbi8vICAgICAgICAgICAgICAgICAgICAgYUZpbHRlcjIgPSBhRmlsdGVyW2luZGV4XS5ub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzO1xuXG4vLyAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXIzID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheVN0eWxlID09PSAnU3dhdGNoJztcbi8vICAgICAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyNSA9IGFGaWx0ZXIyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ub2RlLmRpc3BsYXlOYW1lID09PSBjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QyO1xuLy8gICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgaWYoYUZpbHRlcjMubGVuZ3RoID4gMCl7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyNCA9IGFGaWx0ZXIzWzBdLm5vZGUudmFsdWVzLmVkZ2VzO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICQuZWFjaChhRmlsdGVyNCwgKGlkeCwgZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmxhYmVsLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmVudGl0eUlkLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aENvbG9yVmFyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9ycy5sZW5ndGgsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IxID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1swXSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzFdLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMyA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMl0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nID0gYUZpbHRlcjRbaWR4XS5ub2RlLmltYWdlVXJsO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihsZW5ndGhDb2xvclZhciA9PSAyKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yIGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCI+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IxKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IyKydcIj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYobGVuZ3RoQ29sb3JWYXIgPT09IDMpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjMrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihCb29sZWFuKGNvbG9yMSkpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3JcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJytjb2xvcjErJ1wiPjwvc3Bhbj48L2xhYmVsPicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oaW1nKSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnK2ltZysnKVwiPjwvc3Bhbj48L2xhYmVsPicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICB9IGVsc2V7XG4vLyAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLnJlbW92ZSgpO1xuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIGlmKGFGaWx0ZXI1Lmxlbmd0aCA+IDApe1xuLy8gICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0RmllbGRTaXplLmxlbmd0aCA8IDEpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zaXplXCI+PGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb25cIj4nK2NvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQudG9TdHJpbmcoKSsnPC9sYWJlbD48L2Rpdj4nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIGlmKChhRmlsdGVyNS5sZW5ndGggPT0gMCkgJiYgKGFGaWx0ZXIzLmxlbmd0aCA9PSAwKSl7XG4vLyAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJycpLnJlbW92ZSgpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgY2FsbFByb2R1Y3RPcHRpb24oKTtcbi8vICAgICB9XG4vLyB9XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCBlbCkge1xuICAgIHZhciAkcG9wdXAgPSAkKCcubG9va2Jvb2stcG9wdXAnKTtcbiAgICB2YXIgJGVsID0gZWw7XG5cbiAgICBjb25zdCAkb3B0aW9ucyA9IHtcbiAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tbG9va2Jvb2stdG1wJ1xuICAgIH07XG5cbiAgICAkZWwuZmluZCgnLml0ZW0gLml0ZW0tcG9pbnQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnaXMtb3BlbicpLmVtcHR5KCk7XG5cbiAgICAgICAgdmFyICRwcm9kSWQgPSAkKGV2ZW50LnRhcmdldCkuZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSAkKGV2ZW50LnRhcmdldCkub2Zmc2V0KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSAkZWwub2Zmc2V0KCk7XG5cbiAgICAgICAgaWYoJHByb2RJZCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZCgkcHJvZElkLCAkb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHBvcHVwLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA1NTEpIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCAtIDEwMCwgJ2xlZnQnOiBwb3NpdGlvbi5sZWZ0IC0gY29udGFpbmVyLmxlZnQgKyAzMH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCArIDE1LCAnbGVmdCc6IDE1fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtcHJvZHVjdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoJHBvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZigkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgICBpZigoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJHBvcHVwKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLml0ZW0gLml0ZW0tcG9pbnQnKS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IGZhbmN5Ym94IGZyb20gJy4vaGFsb3RoZW1lcy9qcXVlcnkuZmFuY3lib3gubWluJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IGhhbG9Qcm9kdWN0TG9va2Jvb2sgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0TG9va2Jvb2snO1xuaW1wb3J0IGhhbG9BZGRPcHRpb24gZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLmZhcXNQYWdlKCk7XG4gICAgICAgIHRoaXMuZmFxc1RvZ2dsZSgpO1xuICAgICAgICB0aGlzLnBvcnRmb2xpb1BhZ2UoKTtcbiAgICAgICAgXG4gICAgICAgIGhhbG9BZGRPcHRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1Byb2R1Y3RMb29rYm9vayh0aGlzLmNvbnRleHQsICQoJy5oYWxvLWxvb2tib29rLXNsaWRlcicpKTtcbiAgICAgICAgdGhpcy5sb29rYm9va0Nhcm91c2VsKCk7XG4gICAgICAgIHRoaXMucG9ydGZvbGlvQ3VzdG9tQ2Fyb3VzZWwoKTtcbiAgICB9XG5cbiAgICBmYXFzUGFnZSgpe1xuICAgICAgICAkKCcuZmFxLWRlc2MnKS5hcHBlbmRUbygnLnBhZ2Utbm9ybWFsIC5wYWdlLWRlc2NyaXB0aW9uJyk7XG4gICAgfVxuXG4gICAgcG9ydGZvbGlvUGFnZSgpe1xuICAgICAgICAkKCcuaGFsby1pbWFnZS1wb3J0Zm9saW8gLml0ZW06aGlkZGVuJykuc2xpY2UoMCw2KS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG5cbiAgICAgICAgaWYoJCgnLmhhbG8taW1hZ2UtcG9ydGZvbGlvIC5pdGVtJykubGVuZ3RoID4gNil7XG4gICAgICAgICAgICAkKCcuaGFsby1pbWFnZS1wb3J0Zm9saW8nKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJoYWxvLWluZmluaXRlLXBvcnRmb2xpb1wiPjxkaXYgY2xhc3M9XCJidXR0b24gYnV0dG9uLS10cmFuc3BhcmVudFwiPkxvYWQgTW9yZTwvZGl2PjwvZGl2PicpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLmhhbG8taW5maW5pdGUtcG9ydGZvbGlvIC5idXR0b24nKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoJy5oYWxvLWltYWdlLXBvcnRmb2xpbyAuaXRlbTpoaWRkZW4nKS5zbGljZSgwLDYpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICBcbiAgICAgICAgICAgIGlmKCQoXCIuaGFsby1pbWFnZS1wb3J0Zm9saW8gLml0ZW06aGlkZGVuXCIpLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICAkKCcuaGFsby1pbmZpbml0ZS1wb3J0Zm9saW8gLmJ1dHRvbicpLmFkZENsYXNzKCdkaXNhYmxlJykudGV4dCgnTm8gbW9yZSBpdGVtcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZigkKCcucGFnZS1wb3J0Zm9saW8gLnBhZ2Utc2lkZWJhci1tb2JpbGUnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICQoJy5wYWdlLXBvcnRmb2xpbyAucGFnZS1zaWRlYmFyLW1vYmlsZScpLmFwcGVuZCgnPHN2ZyBjbGFzcz1cImljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1zaWRlYmFyXCI+PC91c2U+PC9zdmc+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcuaGFsby1pbWFnZS1wb3J0Zm9saW8gLml0ZW0nKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYoJCgnLmV4dGVybmFsLWxpbmsnLCBlbGVtZW50KS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAkKCcuZXh0ZXJuYWwtbGluaycsIGVsZW1lbnQpLmFwcGVuZCgnPHN2ZyBjbGFzcz1cImljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1leHRlcm5hbC1saW5rXCI+PC91c2U+PC9zdmc+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZhcXNUb2dnbGUoKXtcbiAgICAgICAgJCgnLnBhZ2Utbm9ybWFsIC5jYXJkIC50aXRsZScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAkKCcucGFnZS1ub3JtYWwgLmNhcmQgLnRpdGxlJykubm90KCR0YXJnZXQpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcblxuICAgICAgICAgICAgaWYoJHRhcmdldC5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgICAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcucGFnZS1ub3JtYWwgLmNhcmQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCQoJy50aXRsZScsIGVsZW1lbnQpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVEb3duKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVVcChcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vTG9va2Jvb2sgcGFnZVxuICAgIGxvb2tib29rQ2Fyb3VzZWwoKSB7XG4gICAgICAgIGlmICgkKCcuaGFsby1sb29rYm9vay1zbGlkZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghJCgnLmhhbG8tbG9va2Jvb2stc2xpZGVyJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tbG9va2Jvb2stc2xpZGVyJykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnYW50aWNpcGF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQb3J0Zm9saW8gcGFnZVxuICAgIHBvcnRmb2xpb0N1c3RvbUNhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnLmhhbG8tcG9ydGZvbGlvLWN1c3RvbSAuaGFsby1yb3cnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghJCgnLmhhbG8tcG9ydGZvbGlvLWN1c3RvbSAuaGFsby1yb3cnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuaGFsby1wb3J0Zm9saW8tY3VzdG9tIC5oYWxvLXJvdycpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnYW50aWNpcGF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsidXRpbHMiLCJjb250ZXh0IiwiZWwiLCIkcG9wdXAiLCIkIiwiJGVsIiwiJG9wdGlvbnMiLCJ0ZW1wbGF0ZSIsImZpbmQiLCJvbiIsImV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJlbXB0eSIsIiRwcm9kSWQiLCJ0YXJnZXQiLCJkYXRhIiwicG9zaXRpb24iLCJvZmZzZXQiLCJjb250YWluZXIiLCJ1bmRlZmluZWQiLCJhcGkiLCJwcm9kdWN0IiwiZ2V0QnlJZCIsImVyciIsInJlc3BvbnNlIiwiaHRtbCIsIndpbmRvdyIsIndpZHRoIiwiY3NzIiwidG9wIiwibGVmdCIsImFkZENsYXNzIiwiZG9jdW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwiY2xvc2VzdCIsImxlbmd0aCIsImZhbmN5Ym94IiwiUGFnZU1hbmFnZXIiLCJoYWxvUHJvZHVjdExvb2tib29rIiwiaGFsb0FkZE9wdGlvbiIsIlBhZ2UiLCJfUGFnZU1hbmFnZXIiLCJjYWxsIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiZmFxc1BhZ2UiLCJmYXFzVG9nZ2xlIiwicG9ydGZvbGlvUGFnZSIsImxvb2tib29rQ2Fyb3VzZWwiLCJwb3J0Zm9saW9DdXN0b21DYXJvdXNlbCIsImFwcGVuZFRvIiwic2xpY2UiLCJhcHBlbmQiLCJ0ZXh0IiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0Iiwibm90Iiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWNrIiwiZG90cyIsImFycm93cyIsIm1vYmlsZUZpcnN0IiwiYWRhcHRpdmVIZWlnaHQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImxhenlMb2FkIiwibmV4dEFycm93IiwicHJldkFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImluZmluaXRlIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
