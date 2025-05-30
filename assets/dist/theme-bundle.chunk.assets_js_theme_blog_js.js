"use strict";
(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_blog_js"],{

/***/ "./assets/js/theme/blog.js":
/*!*********************************!*\
  !*** ./assets/js/theme/blog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
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
    (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ibG9nX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ047QUFDNEI7QUFDRjtBQUFBLElBRTlDSSxJQUFJLDBCQUFBQyxZQUFBO0VBQ3JCLFNBQUFELEtBQVlFLE9BQU8sRUFBRTtJQUFBLE9BQ2pCRCxZQUFBLENBQUFFLElBQUEsT0FBTUQsT0FBTyxDQUFDO0VBQ2xCO0VBQUNFLGNBQUEsQ0FBQUosSUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxJQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUVKRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ0gsSUFBSSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDTixPQUFPLENBQUM7SUFDN0JKLG1GQUFhLENBQUMsSUFBSSxDQUFDSSxPQUFPLENBQUM7SUFDM0JILDJFQUFtQixDQUFDLElBQUksQ0FBQ0csT0FBTyxFQUFFTyxDQUFDLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUM1RSxJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7RUFDM0IsQ0FBQztFQUFBTCxNQUFBLENBRURHLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFDTixPQUFPLEVBQUM7SUFDZixJQUFJQSxPQUFPLENBQUNTLGFBQWEsQ0FBQ0MseUJBQXlCLElBQUksSUFBSSxFQUFFO01BQ3pELElBQU1DLGNBQWMsR0FBRztRQUNuQkMsTUFBTSxFQUFFO1VBQ0pDLElBQUksRUFBRTtZQUNGQyxLQUFLLEVBQUU7Y0FDSEMsS0FBSyxFQUFFO1lBQ1g7VUFDSjtRQUNKLENBQUM7UUFDREMsUUFBUSxFQUFFO01BQ2QsQ0FBQztNQUVEdEIsc0VBQVMsQ0FBQ3dCLE9BQU8sQ0FBQyxPQUFPLEVBQUVQLGNBQWMsRUFBRSxVQUFDUSxLQUFLLEVBQUVDLFFBQVEsRUFBSztRQUM3RCxJQUFJRCxLQUFLLEVBQUU7VUFDTixPQUFP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LFFBQVEsQ0FBQ1UsR0FBRyxHQUFHUixTQUFTLENBQUNRLEdBQUcsR0FBRyxFQUFFO1VBQUUsTUFBTSxFQUFFO1FBQUUsQ0FBQyxDQUFDO01BQ3RFO01BRUFuQixNQUFNLENBQUNxQixRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzlCO0VBQ0osQ0FBQyxDQUFDO0VBRUZySCxDQUFDLENBQUNzSCxRQUFRLENBQUMsQ0FBQ25CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBQUMsS0FBSyxFQUFJO0lBQy9DQSxLQUFLLENBQUNtQixjQUFjLENBQUMsQ0FBQztJQUV0QixJQUFJdkIsTUFBTSxDQUFDM0UsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO01BQzVCMkUsTUFBTSxDQUFDSyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ2pDO0VBQ0osQ0FBQyxDQUFDO0VBRUZyRyxDQUFDLENBQUNzSCxRQUFRLENBQUMsQ0FBQ25CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO0lBQzdCLElBQUdKLE1BQU0sQ0FBQzNFLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUMzQixJQUFJckIsQ0FBQyxDQUFDb0csS0FBSyxDQUFDSSxNQUFNLENBQUMsQ0FBQ2dCLE9BQU8sQ0FBQ3hCLE1BQU0sQ0FBQyxDQUFDNUUsTUFBTSxLQUFLLENBQUMsSUFBTXBCLENBQUMsQ0FBQ29HLEtBQUssQ0FBQ0ksTUFBTSxDQUFDLENBQUNnQixPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3BHLE1BQU0sS0FBSyxDQUFFLEVBQUU7UUFDOUc0RSxNQUFNLENBQUNLLFdBQVcsQ0FBQyxTQUFTLENBQUM7TUFDakM7SUFDSjtFQUNKLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0TG9va2Jvb2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IGhhbG9BZGRPcHRpb24gZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5pbXBvcnQgaGFsb1Byb2R1Y3RMb29rYm9vayBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICB9XG5cblx0b25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5nZXRBbGxUYWdzKHRoaXMuY29udGV4dCk7XG4gICAgICAgIGhhbG9BZGRPcHRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1Byb2R1Y3RMb29rYm9vayh0aGlzLmNvbnRleHQsICQoJy5oYWxvLWJsb2ctbG9va2Jvb2sgLmxvb2tib29rLXNsaWRlcicpKTtcbiAgICAgICAgdGhpcy5sb29rYm9va0Nhcm91c2VsKCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsVGFncyhjb250ZXh0KXtcbiAgICAgICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3NpZGViYXJfcG9wdWxhcl90YWdzID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBibG9nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL2hhbG8tYWxsLXRhZ3MnLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoJy9ibG9nJywgcmVxdWVzdE9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCgnLnRhZ3MtbGlzdCcpLmh0bWwocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IHt9O1xuXG4gICAgICAgICAgICAgICAgJCgnLnRhZ3MtbGlzdCBbZGF0YS10YWddJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQodGhpcykuZGF0YSgndGFnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyclt0eHRdKVxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9va2Jvb2tDYXJvdXNlbCgpIHtcbiAgICAgICAgaWYgKCQoJy5ibG9nLWxvb2tib29rLWdhbGxlcnkgLmxvb2tib29rLXNsaWRlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCEkKCcuYmxvZy1sb29rYm9vay1nYWxsZXJ5IC5sb29rYm9vay1zbGlkZXInKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAkKCcuYmxvZy1sb29rYm9vay1nYWxsZXJ5IC5sb29rYm9vay1zbGlkZXInKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIHdyYXBwZXIpIHtcbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0ID09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuLFxuICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyID0gJCgnIycrd3JhcHBlciksXG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkJyk7XG4gICAgICAgIHZhciAgbGlzdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxQcm9kdWN0T3B0aW9uKCkge1xuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHByb2R1Y3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGdldFByb2R1Y3RPcHRpb24obGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChsaXN0LCAoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gbGlzdFtpZHhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQoZWxlbWVudCkuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbdHh0XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCA+IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudE1vcmVPcHRpb24gID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggLSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGluayA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCdbZGF0YS1wcm9kdWN0LWlkPVwiJytwcm9kdWN0SWQrJ1wiXScpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkIC5zaG93bW9yZScpLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLmFwcGVuZCgnPGEgaHJlZj1cIicrcHJvZHVjdExpbmsrJ1wiIGNsYXNzPVwic2hvd21vcmVcIj4rJytjb3VudE1vcmVPcHRpb24rJzwvYT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0T3B0aW9uKGxpc3Qpe1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XG4gICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFtgK2xpc3QrYF0sIGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFN3YXRjaE9wdGlvblZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9KSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck9wdGlvbihkYXRhKXtcbiAgICAgICAgICAgIHZhciBhRmlsdGVyID0gZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuXG4gICAgICAgICAgICAkLmVhY2goYUZpbHRlciwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkU2l6ZSA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZC0tc2l6ZScpLFxuICAgICAgICAgICAgICAgICAgICBhRmlsdGVyMiA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjMgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI1ID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheU5hbWUgPT09IGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDI7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyMy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI0ID0gYUZpbHRlcjNbMF0ubm9kZS52YWx1ZXMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXI0LCAoaWR4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29sb3JWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjEgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMiA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IzID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaW1hZ2VVcmw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbmd0aENvbG9yVmFyID09IDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsZW5ndGhDb2xvclZhciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMysnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oY29sb3IxKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvclwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2NvbG9yMSsnXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihpbWcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcraW1nKycpXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RGaWVsZFNpemUubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNpemVcIj48bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvblwiPicrY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dC50b1N0cmluZygpKyc8L2xhYmVsPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoKGFGaWx0ZXI1Lmxlbmd0aCA9PSAwKSAmJiAoYUZpbHRlcjMubGVuZ3RoID09IDApKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsUHJvZHVjdE9wdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIGVsKSB7XG4gICAgdmFyICRwb3B1cCA9ICQoJy5sb29rYm9vay1wb3B1cCcpO1xuICAgIHZhciAkZWwgPSBlbDtcblxuICAgIGNvbnN0ICRvcHRpb25zID0ge1xuICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvcHJvZHVjdHMvaGFsby1sb29rYm9vay10bXAnXG4gICAgfTtcblxuICAgICRlbC5maW5kKCcuaXRlbSAuaXRlbS1wb2ludCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuZW1wdHkoKTtcblxuICAgICAgICB2YXIgJHByb2RJZCA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9ICQoZXZlbnQudGFyZ2V0KS5vZmZzZXQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9ICRlbC5vZmZzZXQoKTtcblxuICAgICAgICBpZigkcHJvZElkICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKCRwcm9kSWQsICRvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkcG9wdXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDU1MSkge1xuICAgICAgICAgICAgICAgICRwb3B1cC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgLSBjb250YWluZXIudG9wIC0gMTAwLCAnbGVmdCc6IHBvc2l0aW9uLmxlZnQgLSBjb250YWluZXIubGVmdCArIDMwfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwb3B1cC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgLSBjb250YWluZXIudG9wICsgMTUsICdsZWZ0JzogMTV9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jbG9zZS1wcm9kdWN0JywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICgkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmKCRwb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgIGlmKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgkcG9wdXApLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaXRlbSAuaXRlbS1wb2ludCcpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsidXRpbHMiLCJQYWdlTWFuYWdlciIsImhhbG9BZGRPcHRpb24iLCJoYWxvUHJvZHVjdExvb2tib29rIiwiQmxvZyIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJjYWxsIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiZ2V0QWxsVGFncyIsIiQiLCJsb29rYm9va0Nhcm91c2VsIiwidGhlbWVTZXR0aW5ncyIsImhhbG9fc2lkZWJhcl9wb3B1bGFyX3RhZ3MiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImJsb2ciLCJwb3N0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJhcGkiLCJnZXRQYWdlIiwiZXJyb3IiLCJyZXNwb25zZSIsImh0bWwiLCJhcnIiLCJlYWNoIiwidHh0IiwiZGF0YSIsInJlbW92ZSIsImxlbmd0aCIsImhhc0NsYXNzIiwic2xpY2siLCJyb3dzIiwicnRsIiwiZG90cyIsImFycm93cyIsIm1vYmlsZUZpcnN0IiwiaW5maW5pdGUiLCJhZGFwdGl2ZUhlaWdodCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZGVmYXVsdCIsImZldGNoIiwicmVxdWlyZSIsIndyYXBwZXIiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCIsImNhbGxQcm9kdWN0T3B0aW9uIiwicHJvZHVjdF9jbGFzcyIsImluZGV4IiwiZWxlbWVudCIsInByb2R1Y3RJZCIsImxpc3QiLCJwdXNoIiwidG9TdHJpbmciLCJnZXRQcm9kdWN0T3B0aW9uIiwidGhlbiIsInJlbmRlck9wdGlvbiIsImlkeCIsIml0ZW0iLCJwcm9kdWN0X3dyYXBwZXIiLCJmaW5kIiwiY291bnRNb3JlT3B0aW9uIiwicHJvZHVjdExpbmsiLCJhdHRyIiwiYXBwZW5kIiwibWV0aG9kIiwiaGVhZGVycyIsInRva2VuIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInJlcyIsImpzb24iLCJhRmlsdGVyIiwic2l0ZSIsInByb2R1Y3RzIiwiZWRnZXMiLCJub2RlIiwiZW50aXR5SWQiLCJwcm9kdWN0RmllbGRDb2xvciIsInByb2R1Y3RGaWVsZFNpemUiLCJhRmlsdGVyMiIsInByb2R1Y3RPcHRpb25zIiwiYUZpbHRlcjMiLCJmaWx0ZXIiLCJkaXNwbGF5U3R5bGUiLCJhRmlsdGVyNSIsImRpc3BsYXlOYW1lIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QyIiwiYUZpbHRlcjQiLCJ2YWx1ZXMiLCJ0aXRsZVZhciIsImxhYmVsIiwiaWRWYXIiLCJsZW5ndGhDb2xvclZhciIsImhleENvbG9ycyIsImNvbG9yMSIsImNvbG9yMiIsImNvbG9yMyIsImltZyIsImltYWdlVXJsIiwiQm9vbGVhbiIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dCIsImVsIiwiJHBvcHVwIiwiJGVsIiwiJG9wdGlvbnMiLCJvbiIsImV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJlbXB0eSIsIiRwcm9kSWQiLCJ0YXJnZXQiLCJwb3NpdGlvbiIsIm9mZnNldCIsImNvbnRhaW5lciIsInVuZGVmaW5lZCIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZXJyIiwid2luZG93Iiwid2lkdGgiLCJjc3MiLCJ0b3AiLCJsZWZ0IiwiYWRkQ2xhc3MiLCJkb2N1bWVudCIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VzdCJdLCJzb3VyY2VSb290IjoiIn0=
