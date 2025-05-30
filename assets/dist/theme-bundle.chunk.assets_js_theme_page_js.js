"use strict";
(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_page_js"],{

/***/ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js":
/*!*******************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAddOptionForProductCard.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context, wrapper) {
  if (context.themeSettings.haloAddOptionForProduct == true) {
    var callProductOption = function callProductOption() {
      product_class.each(function (index, element) {
        var productId = $(element).data("product-id");
        list.push(productId.toString());
      });
      if (list.length > 0) {
        getProductOption(list).then(function (data) {
          renderOption(data);
          $.each(list, function (idx, item) {
            var arr = {},
              productId = list[idx];
            product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
              var txt = $(element).data('product-swatch-value');
              if (arr[txt]) {
                $(element).remove();
              } else {
                arr[txt] = true;
              }
            });
            if (product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length > 4) {
              var countMoreOption = product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length - 4,
                productLink = product_wrapper.find('[data-product-id="' + productId + '"]').find('.card-link').attr('href');
              product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
                if (index >= 4) {
                  $(element).remove();
                }
              });
              if (product_wrapper.find('.card-option-' + productId + ' .form-field .showmore').length < 1) {
                product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)').append('<a href="' + productLink + '" class="showmore">+' + countMoreOption + '</a>');
              }
            }
          });
        });
      }
    };
    var getProductOption = function getProductOption(list) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                    query SeveralProductsByID {\n                      site {\n                        products(entityIds: [" + list + "], first: 50) {\n                          edges {\n                            node {\n                              entityId\n                              name\n                               productOptions(first: 50) {\n                                edges {\n                                  node {\n                                    entityId\n                                    displayName\n                                    isRequired\n                                    ... on MultipleChoiceOption {\n                                      displayStyle\n                                      values {\n                                        edges {\n                                          node {\n                                            entityId\n                                            label\n                                            isDefault\n                                            ... on SwatchOptionValue {\n                                              hexColors\n                                              imageUrl(width: 50)\n                                            }\n                                          }\n                                        }\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };
    var renderOption = function renderOption(data) {
      var aFilter = data.site.products.edges;
      $.each(aFilter, function (index, element) {
        var productId = aFilter[index].node.entityId,
          productFieldColor = product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)'),
          productFieldSize = product_wrapper.find('.card-option-' + productId + ' .form-field--size'),
          aFilter2 = aFilter[index].node.productOptions.edges;
        var aFilter3 = aFilter2.filter(function (item) {
          return item.node.displayStyle === 'Swatch';
        });
        var aFilter5 = aFilter2.filter(function (item) {
          return item.node.displayName === context.themeSettings.haloAddOptionForProduct2;
        });
        if (aFilter3.length > 0) {
          var aFilter4 = aFilter3[0].node.values.edges;
          $.each(aFilter4, function (idx, element) {
            var titleVar = aFilter4[idx].node.label,
              idVar = aFilter4[idx].node.entityId,
              lengthColorVar = aFilter4[idx].node.hexColors.length,
              color1 = aFilter4[idx].node.hexColors[0],
              color2 = aFilter4[idx].node.hexColors[1],
              color3 = aFilter4[idx].node.hexColors[2],
              img = aFilter4[idx].node.imageUrl;
            if (lengthColorVar == 2) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span></span></label>');
            } else if (lengthColorVar === 3) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span><span style="background-color:' + color3 + '"></span></span></label>');
            } else if (Boolean(color1)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color" title="' + titleVar + '" style="background-color: ' + color1 + '"></span></label>');
            } else if (Boolean(img)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--pattern" title="' + titleVar + '" style="background-image: url(' + img + ')"></span></label>');
            }
          });
        } else {
          productFieldColor.remove();
        }
        if (aFilter5.length > 0) {
          if (productFieldSize.length < 1) {
            product_wrapper.find('.card-option-' + productId + '').append('<div class="form-field form-field--size"><label class="form-option">' + context.themeSettings.haloAddOptionForProductText.toString() + '</label></div>');
          }
        }
        if (aFilter5.length == 0 && aFilter3.length == 0) {
          product_wrapper.find('.card-option-' + productId + '').remove();
        }
      });
    };
    var token = context.token,
      product_wrapper = $('#' + wrapper),
      product_class = product_wrapper.find('.card');
    var list = [];
    callProductOption();
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloProductLookbook.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductLookbook.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wYWdlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUMvQyxJQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsd0RBQVksQ0FBQztBQUVuQyw2QkFBZSxvQ0FBU0MsT0FBTyxFQUFFQyxPQUFPLEVBQUU7RUFDdEMsSUFBSUQsT0FBTyxDQUFDRSxhQUFhLENBQUNDLHVCQUF1QixJQUFJLElBQUksRUFBRTtJQUFBLElBTTlDQyxpQkFBaUIsR0FBMUIsU0FBU0EsaUJBQWlCQSxDQUFBLEVBQUc7TUFDekJDLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO1FBQ25DLElBQUlDLFNBQVMsR0FBR0MsQ0FBQyxDQUFDRixPQUFPLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVksQ0FBQztRQUU3Q0MsSUFBSSxDQUFDQyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQztNQUNuQyxDQUFDLENBQUM7TUFFRixJQUFHRixJQUFJLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDZkMsZ0JBQWdCLENBQUNKLElBQUksQ0FBQyxDQUFDSyxJQUFJLENBQUMsVUFBQU4sSUFBSSxFQUFJO1VBQ2hDTyxZQUFZLENBQUNQLElBQUksQ0FBQztVQUVsQkQsQ0FBQyxDQUFDSixJQUFJLENBQUNNLElBQUksRUFBRSxVQUFDTyxHQUFHLEVBQUVDLElBQUksRUFBSztZQUN4QixJQUFJQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2NBQ1JaLFNBQVMsR0FBR0csSUFBSSxDQUFDTyxHQUFHLENBQUM7WUFFekJHLGVBQWUsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBQ2QsU0FBUyxHQUFDLHNCQUFzQixDQUFDLENBQUNILElBQUksQ0FBQyxVQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBSztjQUM1RixJQUFJZ0IsR0FBRyxHQUFHZCxDQUFDLENBQUNGLE9B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O0VBQ0osQ0FBQztFQUFBLE9BQUF0QixJQUFBO0FBQUEsRUE3SDZCSCxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvUHJvZHVjdExvb2tib29rLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgd3JhcHBlcikge1xuICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGNvbnRleHQudG9rZW4sXG4gICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIgPSAkKCcjJyt3cmFwcGVyKSxcbiAgICAgICAgICAgIHByb2R1Y3RfY2xhc3MgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQnKTtcbiAgICAgICAgdmFyICBsaXN0ID0gW107XG5cbiAgICAgICAgZnVuY3Rpb24gY2FsbFByb2R1Y3RPcHRpb24oKSB7XG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoZWxlbWVudCkuZGF0YShcInByb2R1Y3QtaWRcIik7XG5cbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gocHJvZHVjdElkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKGxpc3QubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZ2V0UHJvZHVjdE9wdGlvbihsaXN0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb24oZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGxpc3QsIChpZHgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQgPSBsaXN0W2lkeF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHh0ID0gJChlbGVtZW50KS5kYXRhKCdwcm9kdWN0LXN3YXRjaC12YWx1ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyclt0eHRdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbdHh0XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykubGVuZ3RoID4gNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50TW9yZU9wdGlvbiAgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCAtIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaW5rID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJ1tkYXRhLXByb2R1Y3QtaWQ9XCInK3Byb2R1Y3RJZCsnXCJdJykuZmluZCgnLmNhcmQtbGluaycpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPj0gNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQgLnNob3dtb3JlJykubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZDpub3QoLmZvcm0tZmllbGQtLXNpemUpJykuYXBwZW5kKCc8YSBocmVmPVwiJytwcm9kdWN0TGluaysnXCIgY2xhc3M9XCJzaG93bW9yZVwiPisnK2NvdW50TW9yZU9wdGlvbisnPC9hPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFByb2R1Y3RPcHRpb24obGlzdCl7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSBTZXZlcmFsUHJvZHVjdHNCeUlEIHtcbiAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzKGVudGl0eUlkczogW2ArbGlzdCtgXSwgZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMoZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhleENvbG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsKHdpZHRoOiA1MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH0pLFxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyT3B0aW9uKGRhdGEpe1xuICAgICAgICAgICAgdmFyIGFGaWx0ZXIgPSBkYXRhLnNpdGUucHJvZHVjdHMuZWRnZXM7XG5cbiAgICAgICAgICAgICQuZWFjaChhRmlsdGVyLCAoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gYUZpbHRlcltpbmRleF0ubm9kZS5lbnRpdHlJZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRTaXplID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkLS1zaXplJyksXG4gICAgICAgICAgICAgICAgICAgIGFGaWx0ZXIyID0gYUZpbHRlcltpbmRleF0ubm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcztcblxuICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyMyA9IGFGaWx0ZXIyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ub2RlLmRpc3BsYXlTdHlsZSA9PT0gJ1N3YXRjaCc7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjUgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5TmFtZSA9PT0gY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmKGFGaWx0ZXIzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjQgPSBhRmlsdGVyM1swXS5ub2RlLnZhbHVlcy5lZGdlcztcblxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goYUZpbHRlcjQsIChpZHgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aXRsZVZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5lbnRpdHlJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhDb2xvclZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMSA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjMgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5pbWFnZVVybDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGVuZ3RoQ29sb3JWYXIgPT0gMil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGxlbmd0aENvbG9yVmFyID09PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yIGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCI+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IxKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IyKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IzKydcIj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihjb2xvcjEpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcrY29sb3IxKydcIj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihCb29sZWFuKGltZykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVyblwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJytpbWcrJylcIj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyNS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdEZpZWxkU2l6ZS5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJycpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2l6ZVwiPjxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uXCI+Jytjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RUZXh0LnRvU3RyaW5nKCkrJzwvbGFiZWw+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZigoYUZpbHRlcjUubGVuZ3RoID09IDApICYmIChhRmlsdGVyMy5sZW5ndGggPT0gMCkpe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxQcm9kdWN0T3B0aW9uKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgZWwpIHtcbiAgICB2YXIgJHBvcHVwID0gJCgnLmxvb2tib29rLXBvcHVwJyk7XG4gICAgdmFyICRlbCA9IGVsO1xuXG4gICAgY29uc3QgJG9wdGlvbnMgPSB7XG4gICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9wcm9kdWN0cy9oYWxvLWxvb2tib29rLXRtcCdcbiAgICB9O1xuXG4gICAgJGVsLmZpbmQoJy5pdGVtIC5pdGVtLXBvaW50Jykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5lbXB0eSgpO1xuXG4gICAgICAgIHZhciAkcHJvZElkID0gJChldmVudC50YXJnZXQpLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJChldmVudC50YXJnZXQpLm9mZnNldCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gJGVsLm9mZnNldCgpO1xuXG4gICAgICAgIGlmKCRwcm9kSWQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQoJHByb2RJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRwb3B1cC5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNTUxKSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lci50b3AgLSAxMDAsICdsZWZ0JzogcG9zaXRpb24ubGVmdCAtIGNvbnRhaW5lci5sZWZ0ICsgMzB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lci50b3AgKyAxNSwgJ2xlZnQnOiAxNX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcG9wdXAuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLXByb2R1Y3QnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCRwb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoJHBvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgaWYoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCRwb3B1cCkubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5pdGVtIC5pdGVtLXBvaW50JykubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCBmYW5jeWJveCBmcm9tICcuL2hhbG90aGVtZXMvanF1ZXJ5LmZhbmN5Ym94Lm1pbic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBoYWxvUHJvZHVjdExvb2tib29rIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvUHJvZHVjdExvb2tib29rJztcbmltcG9ydCBoYWxvQWRkT3B0aW9uIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5mYXFzUGFnZSgpO1xuICAgICAgICB0aGlzLmZhcXNUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5wb3J0Zm9saW9QYWdlKCk7XG4gICAgICAgIFxuICAgICAgICBoYWxvQWRkT3B0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgIGhhbG9Qcm9kdWN0TG9va2Jvb2sodGhpcy5jb250ZXh0LCAkKCcuaGFsby1sb29rYm9vay1zbGlkZXInKSk7XG4gICAgICAgIHRoaXMubG9va2Jvb2tDYXJvdXNlbCgpO1xuICAgICAgICB0aGlzLnBvcnRmb2xpb0N1c3RvbUNhcm91c2VsKCk7XG4gICAgfVxuXG4gICAgZmFxc1BhZ2UoKXtcbiAgICAgICAgJCgnLmZhcS1kZXNjJykuYXBwZW5kVG8oJy5wYWdlLW5vcm1hbCAucGFnZS1kZXNjcmlwdGlvbicpO1xuICAgIH1cblxuICAgIHBvcnRmb2xpb1BhZ2UoKXtcbiAgICAgICAgJCgnLmhhbG8taW1hZ2UtcG9ydGZvbGlvIC5pdGVtOmhpZGRlbicpLnNsaWNlKDAsNikuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuXG4gICAgICAgIGlmKCQoJy5oYWxvLWltYWdlLXBvcnRmb2xpbyAuaXRlbScpLmxlbmd0aCA+IDYpe1xuICAgICAgICAgICAgJCgnLmhhbG8taW1hZ2UtcG9ydGZvbGlvJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaGFsby1pbmZpbml0ZS1wb3J0Zm9saW9cIj48ZGl2IGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tdHJhbnNwYXJlbnRcIj5Mb2FkIE1vcmU8L2Rpdj48L2Rpdj4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy5oYWxvLWluZmluaXRlLXBvcnRmb2xpbyAuYnV0dG9uJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKCcuaGFsby1pbWFnZS1wb3J0Zm9saW8gLml0ZW06aGlkZGVuJykuc2xpY2UoMCw2KS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgXG4gICAgICAgICAgICBpZigkKFwiLmhhbG8taW1hZ2UtcG9ydGZvbGlvIC5pdGVtOmhpZGRlblwiKS5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICAgICAgJCgnLmhhbG8taW5maW5pdGUtcG9ydGZvbGlvIC5idXR0b24nKS5hZGRDbGFzcygnZGlzYWJsZScpLnRleHQoJ05vIG1vcmUgaXRlbXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoJCgnLnBhZ2UtcG9ydGZvbGlvIC5wYWdlLXNpZGViYXItbW9iaWxlJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAkKCcucGFnZS1wb3J0Zm9saW8gLnBhZ2Utc2lkZWJhci1tb2JpbGUnKS5hcHBlbmQoJzxzdmcgY2xhc3M9XCJpY29uXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tc2lkZWJhclwiPjwvdXNlPjwvc3ZnPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLmhhbG8taW1hZ2UtcG9ydGZvbGlvIC5pdGVtJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmKCQoJy5leHRlcm5hbC1saW5rJywgZWxlbWVudCkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgJCgnLmV4dGVybmFsLWxpbmsnLCBlbGVtZW50KS5hcHBlbmQoJzxzdmcgY2xhc3M9XCJpY29uXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZXh0ZXJuYWwtbGlua1wiPjwvdXNlPjwvc3ZnPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmYXFzVG9nZ2xlKCl7XG4gICAgICAgICQoJy5wYWdlLW5vcm1hbCAuY2FyZCAudGl0bGUnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJCgnLnBhZ2Utbm9ybWFsIC5jYXJkIC50aXRsZScpLm5vdCgkdGFyZ2V0KS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG5cbiAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLnBhZ2Utbm9ybWFsIC5jYXJkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZigkKCcudGl0bGUnLCBlbGVtZW50KS5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlRG93bihcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlVXAoXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL0xvb2tib29rIHBhZ2VcbiAgICBsb29rYm9va0Nhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnLmhhbG8tbG9va2Jvb2stc2xpZGVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoISQoJy5oYWxvLWxvb2tib29rLXNsaWRlcicpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xuICAgICAgICAgICAgICAgICQoJy5oYWxvLWxvb2tib29rLXNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ2FudGljaXBhdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUG9ydGZvbGlvIHBhZ2VcbiAgICBwb3J0Zm9saW9DdXN0b21DYXJvdXNlbCgpIHtcbiAgICAgICAgaWYgKCQoJy5oYWxvLXBvcnRmb2xpby1jdXN0b20gLmhhbG8tcm93JykubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoISQoJy5oYWxvLXBvcnRmb2xpby1jdXN0b20gLmhhbG8tcm93JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tcG9ydGZvbGlvLWN1c3RvbSAuaGFsby1yb3cnKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ2FudGljaXBhdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInV0aWxzIiwiZmV0Y2giLCJyZXF1aXJlIiwiY29udGV4dCIsIndyYXBwZXIiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJjYWxsUHJvZHVjdE9wdGlvbiIsInByb2R1Y3RfY2xhc3MiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwicHJvZHVjdElkIiwiJCIsImRhdGEiLCJsaXN0IiwicHVzaCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJpdGVtIiwiYXJyIiwicHJvZHVjdF93cmFwcGVyIiwiZmluZCIsInR4dCIsInJlbW92ZSIsImNvdW50TW9yZU9wdGlvbiIsInByb2R1Y3RMaW5rIiwiYXR0ciIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiYUZpbHRlciIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdEZpZWxkQ29sb3IiLCJwcm9kdWN0RmllbGRTaXplIiwiYUZpbHRlcjIiLCJwcm9kdWN0T3B0aW9ucyIsImFGaWx0ZXIzIiwiZmlsdGVyIiwiZGlzcGxheVN0eWxlIiwiYUZpbHRlcjUiLCJkaXNwbGF5TmFtZSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MiIsImFGaWx0ZXI0IiwidmFsdWVzIiwidGl0bGVWYXIiLCJsYWJlbCIsImlkVmFyIiwibGVuZ3RoQ29sb3JWYXIiLCJoZXhDb2xvcnMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJpbWciLCJpbWFnZVVybCIsIkJvb2xlYW4iLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQiLCJlbCIsIiRwb3B1cCIsIiRlbCIsIiRvcHRpb25zIiwidGVtcGxhdGUiLCJvbiIsImV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJlbXB0eSIsIiRwcm9kSWQiLCJ0YXJnZXQiLCJwb3NpdGlvbiIsIm9mZnNldCIsImNvbnRhaW5lciIsInVuZGVmaW5lZCIsImFwaSIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJodG1sIiwid2luZG93Iiwid2lkdGgiLCJjc3MiLCJ0b3AiLCJsZWZ0IiwiYWRkQ2xhc3MiLCJkb2N1bWVudCIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJjbG9zZXN0IiwiZmFuY3lib3giLCJQYWdlTWFuYWdlciIsImhhbG9Qcm9kdWN0TG9va2Jvb2siLCJoYWxvQWRkT3B0aW9uIiwiUGFnZSIsIl9QYWdlTWFuYWdlciIsImNhbGwiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJmYXFzUGFnZSIsImZhcXNUb2dnbGUiLCJwb3J0Zm9saW9QYWdlIiwibG9va2Jvb2tDYXJvdXNlbCIsInBvcnRmb2xpb0N1c3RvbUNhcm91c2VsIiwiYXBwZW5kVG8iLCJzbGljZSIsInRleHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm5vdCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJtb2JpbGVGaXJzdCIsImFkYXB0aXZlSGVpZ2h0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJsYXp5TG9hZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9
