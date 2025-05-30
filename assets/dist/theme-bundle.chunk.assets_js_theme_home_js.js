(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_home_js"],{

/***/ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js":
/*!*******************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAddOptionForProductCard.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js":
/*!***************************************************************************!*\
  !*** ./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
$(function () {
  ParallaxScroll.init();
});
var ParallaxScroll = {
  showLogs: !1,
  round: 1e3,
  init: function init() {
    return this._log("init"), this._inited ? (this._log("Already Inited"), void (this._inited = !0)) : (this._requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
        window.setTimeout(a, 1e3 / 60);
      };
    }(), void this._onScroll(!0));
  },
  _inited: !1,
  _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"],
  _requestAnimationFrame: null,
  _log: function _log(a) {
    this.showLogs && console.log("Parallax Scroll / " + a);
  },
  _onScroll: function _onScroll(a) {
    var b = $(document).scrollTop(),
      c = $(window).height();
    this._log("onScroll " + b), $("[data-parallax]").each($.proxy(function (d, e) {
      var f = $(e),
        g = [],
        h = !1,
        i = f.data("style");
      void 0 == i && (i = f.attr("style") || "", f.data("style", i));
      var k,
        j = [f.data("parallax")];
      for (k = 2; f.data("parallax" + k); k++) j.push(f.data("parallax-" + k));
      var l = j.length;
      for (k = 0; k < l; k++) {
        var m = j[k],
          n = m["from-scroll"];
        void 0 == n && (n = Math.max(0, $(e).offset().top - c)), n = 0 | n;
        var o = m.distance,
          p = m["to-scroll"];
        void 0 == o && void 0 == p && (o = c), o = Math.max(0 | o, 1);
        var q = m.easing,
          r = m["easing-return"];
        if (void 0 != q && $.easing && $.easing[q] || (q = null), void 0 != r && $.easing && $.easing[r] || (r = q), q) {
          var s = m.duration;
          void 0 == s && (s = o), s = Math.max(0 | s, 1);
          var t = m["duration-return"];
          void 0 == t && (t = s), o = 1;
          var u = f.data("current-time");
          void 0 == u && (u = 0);
        }
        void 0 == p && (p = n + o), p = 0 | p;
        var v = m.smoothness;
        void 0 == v && (v = 30), v = 0 | v, (a || 0 == v) && (v = 1), v = 0 | v;
        var w = b;
        w = Math.max(w, n), w = Math.min(w, p), q && (void 0 == f.data("sens") && f.data("sens", "back"), w > n && ("back" == f.data("sens") ? (u = 1, f.data("sens", "go")) : u++), w < p && ("go" == f.data("sens") ? (u = 1, f.data("sens", "back")) : u++), a && (u = s), f.data("current-time", u)), this._properties.map($.proxy(function (a) {
          var b = 0,
            c = m[a];
          if (void 0 != c) {
            "scale" == a || "scaleX" == a || "scaleY" == a || "scaleZ" == a ? b = 1 : c = 0 | c;
            var d = f.data("_" + a);
            void 0 == d && (d = b);
            var e = (c - b) * ((w - n) / (p - n)) + b,
              i = d + (e - d) / v;
            if (q && u > 0 && u <= s) {
              var j = b;
              "back" == f.data("sens") && (j = c, c = -c, q = r, s = t), i = $.easing[q](null, u, j, c, s);
            }
            i = Math.ceil(i * this.round) / this.round, i == d && e == c && (i = c), g[a] || (g[a] = 0), g[a] += i, d != g[a] && (f.data("_" + a, g[a]), h = !0);
          }
        }, this));
      }
      if (h) {
        if (void 0 != g.z) {
          var x = m.perspective;
          void 0 == x && (x = 800);
          var y = f.parent();
          y.data("style") || y.data("style", y.attr("style") || ""), y.attr("style", "perspective:" + x + "px; -webkit-perspective:" + x + "px; " + y.data("style"));
        }
        void 0 == g.scaleX && (g.scaleX = 1), void 0 == g.scaleY && (g.scaleY = 1), void 0 == g.scaleZ && (g.scaleZ = 1), void 0 != g.scale && (g.scaleX *= g.scale, g.scaleY *= g.scale, g.scaleZ *= g.scale);
        var z = "translate3d(" + (g.x ? g.x : 0) + "px, " + (g.y ? g.y : 0) + "px, " + (g.z ? g.z : 0) + "px)",
          A = "rotateX(" + (g.rotateX ? g.rotateX : 0) + "deg) rotateY(" + (g.rotateY ? g.rotateY : 0) + "deg) rotateZ(" + (g.rotateZ ? g.rotateZ : 0) + "deg)",
          B = "scaleX(" + g.scaleX + ") scaleY(" + g.scaleY + ") scaleZ(" + g.scaleZ + ")",
          C = z + " " + A + " " + B + ";";
        this._log(C), f.attr("style", "transform:" + C + " -webkit-transform:" + C + " " + i);
      }
    }, this)), window.requestAnimationFrame ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame($.proxy(this._onScroll, this, !1));
  }
};

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/parallax/jquery.parallax-scroll.min */ "./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js");
/* harmony import */ var _halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloVideo */ "./assets/js/theme/halothemes/haloVideo.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }











var Home = /*#__PURE__*/function (_PageManager) {
  function Home(context) {
    return _PageManager.call(this, context) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    this.countDownHeroCarousel();
    this.customPaging();
    this.loadProductByCategory();
    this.loadProductTabByCategory();
    this.loadProductByCategoryWithBanner();
    this.fancyboxVideoBanner();
    this.faqsToggle();
    this.recentBlogSlider();
    this.homeSpecialProduct();
    this.homeParallaxBanner();
    this.loadOptionForProductCard();
    this.customerReviewCarousel();
    this.topReviewCarousel();
    this.collectionsListCarousel();
    this.popularCollectionsCarousel();
    this.homeProductRecommended();
    this.countDownBanner();
    this.scrollToNewsletter();
    this.imageComparison();
  };
  _proto.countDownHeroCarousel = function countDownHeroCarousel() {
    $('.heroCarousel-countdown').each(function (index, element) {
      $(element).parents('.slick-slide').addClass('has-count-down');
      var countDown = $(element).data('carousel-countdown'),
        countDownDate = new Date(countDown).getTime(),
        seft = $(element);
      var countdownfunction = setInterval(function () {
        var now = new Date().getTime(),
          distance = countDownDate - now;
        if (distance < 0) {
          clearInterval(countdownfunction);
          seft.html('');
        } else {
          var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
            seconds = Math.floor(distance % (1000 * 60) / 1000);
          var strCountDown = "<span class='num'>" + days + "<span>DAYS</span></span><span class='num'>" + hours + "<span>HOURS</span></span><span class='num'>" + minutes + "<span>MINS</span></span><span class='num'>" + seconds + "<span>SECS</span></span>";
          seft.html(strCountDown);
        }
      }, 1000);
    });
  };
  _proto.customPaging = function customPaging() {
    var heroCustom = $('.heroCarousel-custom');
    var heroCustomSlide = $('.heroCarousel-custom .slick-dots li');
    heroCustom.slick({
      dots: true,
      arrows: false,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: heroCustom.data('autoplay'),
      infinite: true,
      asNavFor: ".heroCarousel"
    });
    //ADA
    $('.heroCarousel-custom .slick-dots li').each(function (i) {
      var slide = $(this).find('button').text();
      $(this).find('button').text('0' + slide).addClass('slick-dots-item');
    });
    heroCustom.on('afterChange', function (event, slider, i) {
      var pos = $(slider.$slides[i]).find('div[data-position]').data('position');
      if (pos === 'right') {
        heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
      } else {
        heroCustom.removeClass('heroCarousel-customRight').addClass('heroCarousel-customLeft');
      }
    });
    if ($('.heroCarousel-slide--first .heroCarousel-content-wrapper .heroCarousel-content--right').length) {
      heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
    }
  };
  _proto.loadProductByCategory = function loadProductByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-2'
    };
    if ($('.halo-block[data-category-id]').length > 0) {
      var header_height = $('.header').height();
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
          setFlag = false;
        if (scroll > header_height) {
          setFlag = true;
        }
        if (setFlag) {
          $('.halo-block[data-category-id]').each(function (index, element) {
            var wrap = $(element).find('.productCarousel'),
              catId = $(element).data('data-category'),
              catUrl = $(element).data('category-url'),
              blockId = $(element).attr('id');
            if (!$('#product-by-cate-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
    }
    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.halo-block[data-category-id]').find('.loadingOverlay').remove();
          (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
        }
      });
    }
    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 2
          }
        }]
      });
    }
  };
  _proto.loadProductTabByCategory = function loadProductTabByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-3'
    };
    if ($('.productCarousel-tabs').length > 0) {
      var header_height = $('.header').height();
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
          setFlag = false;
        if (scroll > header_height) {
          setFlag = true;
        }
        if (setFlag) {
          if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
            var block = $('.productCarousel-tabs .tab-content.is-active'),
              wrap = block.find('.productCarousel'),
              catId = block.data('tab-category-id'),
              catUrl = block.data('tab-category-url'),
              blockId = block.attr('id');
            if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
              block.find('.loadingOverlay').show();
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          }
          setFlag = false;
        }
      });
      $('.productCarousel-tabs [data-tab]').on('toggled', function (event, tab) {
        if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
          var block = $('.productCarousel-tabs .tab-content.is-active'),
            wrap = block.find('.productCarousel'),
            catId = block.data('tab-category-id'),
            catUrl = block.data('tab-category-url'),
            blockId = block.attr('id');
          if (!$(event.currentTarget).find('.productCarousel').hasClass('slick-initialized')) {
            block.find('.loadingOverlay').show();
            loadCategory(catId, catUrl, options, wrap, blockId);
          }
        }
      });
    }
    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.tab-content').find('.loadingOverlay').remove();
          (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
        }
      });
    }
    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 2
          }
        }]
      });
    }
  };
  _proto.loadProductByCategoryWithBanner = function loadProductByCategoryWithBanner() {
    var context = this.context;
    var options = {
      template: 'products/carousel-4'
    };
    if ($('.halo-block[data-category-with-banner-id]').length > 0) {
      var header_height = $('.header').height();
      var $tabSorting = $('.tab-sorting .tab-title');
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
          setFlag = false;
        if (scroll > header_height) {
          setFlag = true;
        }
        if (setFlag) {
          $('.halo-block[data-category-with-banner-id]').each(function (index, element) {
            if ($('.home-layout-2').length && !$(element).hasClass('home2-flash-deals')) {
              var wrap = $(element).find('.tabContent-new .productCarousel');
            } else {
              var wrap = $(element).find('.productCarousel');
            }
            var catId = $(element).data('category-with-banner-id'),
              catUrl = $(element).data('category-with-banner-url'),
              blockId = $(element).attr('id');
            if (!$('#product-with-banner-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
      $tabSorting.on('click', function (e) {
        e.preventDefault();
        var $target = $(e.currentTarget);
        var dataTab = $target.data('tab');
        var $thisBlock = $target.closest('.halo-block-product');
        var wrap = $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel'),
          catId = $target.data('cate-id'),
          catUrl = $target.data('cate-url'),
          blockId = $thisBlock.find('.tabContent-' + dataTab).attr('id');
        if (dataTab == 'viewall') {
          window.location.href = $target.attr('href');
          return;
        }
        $thisBlock.find('.tab-sorting').removeClass('is-active');
        $target.parent().addClass('is-active');
        $thisBlock.find('.tab-content').removeClass('is-active');
        $thisBlock.find('.tabContent-' + dataTab).addClass('is-active');
        console.log('aff');
        if (!$target.hasClass('is-loaded')) {
          $target.addClass('is-loaded');
          loadCategory(catId, catUrl, options, wrap, blockId);
        } else {
          $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel').slick('refresh');
        }
      });
      if ($('.countDowntimer').length) {
        var countDownDate = new Date($('.countDowntimer').attr('data-count-down')).getTime();
        var countdownfunction = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;
          if (distance < 0) {
            clearInterval(countdownfunction);
            $(".countDowntimer").html('');
          } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            var strCountDown = "<div class='clock-item'><span class='num'>" + days + "</span><span class='text'>d</span></div><div class='clock-item'><span class='num'>" + hours + ":</span></div><div class='clock-item'><span class='num'>" + minutes + ":</span></div><div class='clock-item'><span class='num'>" + seconds + "</span></div>";
            $(".countDowntimer").html(strCountDown);
          }
        }, 1000);
      }
    }
    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners')) {
            if ($('.home-layout-2').length) {
              if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('home2-flash-deals')) {
                labelFlashDeals(wrap);
                slickCarousel4(wrap);
              } else {
                slickCarousel3(wrap);
              }
            } else {
              slickCarousel(wrap);
            }
          } else if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners2')) {
            slickCarousel2(wrap);
          }
          wrap.parents('.halo-block[data-category-with-banner-id]').find('.loadingOverlay').remove();
          (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
        }
      });
    }
    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }
    function slickCarousel2(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 2
          }
        }]
      });
    }
    function slickCarousel3(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }
    function slickCarousel4(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 992,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
    }
    function labelFlashDeals(wrap) {
      var $itemSide = wrap.find('.productCarousel-slide');
      $itemSide.each(function (index, element) {
        var $thisLabel = $(element).find('.sale-badge');
        if ($thisLabel.length) {
          var label = $thisLabel.find('.text').data('sale');
          $(element).find('.card-price').addClass('has-labelSale').append('<div class="card-label-sale"><span>-' + label + '</span></div>');
          $thisLabel.remove();
        }
      });
    }
  };
  _proto.fancyboxVideoBanner = function fancyboxVideoBanner() {
    if ($(".video-block-image[data-fancybox]").length > 0) {
      $(".video-block-image[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }
    if ($(".button-popup-video[data-fancybox]").length > 0) {
      $(".button-popup-video[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }
  };
  _proto.faqsToggle = function faqsToggle() {
    $('.halo-short-faqs .card .title').on('click', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      $('.halo-short-faqs .card .title').not($target).removeClass('collapsed');
      if ($target.hasClass('collapsed')) {
        $target.removeClass('collapsed');
      } else {
        $target.addClass('collapsed');
      }
      $('.halo-short-faqs .card').each(function (index, element) {
        if ($(element).find('.title').hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  };
  _proto.recentBlogSlider = function recentBlogSlider() {
    if ($(window).width() <= 1024) {
      if ($('.halo-recent-post').length) {
        if ($('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick('unslick');
        }
      }
    } else {
      if ($('.halo-recent-post').length) {
        if (!$('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick();
        }
      }
    }
    $(window).resize(function () {
      if ($(window).width() <= 1024) {
        if ($('.halo-recent-post').length) {
          if ($('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick('unslick');
          }
        }
      } else {
        if ($('.halo-recent-post').length) {
          if (!$('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick();
          }
        }
      }
    });
  };
  _proto.homeSpecialProduct = function homeSpecialProduct() {
    var context = this.context;
    if (context.themeSettings.home_product_block_special == true) {
      var productId = $('[data-special-product-id]').data('special-product-id'),
        setFlag = false;
      var options = {
        template: 'halothemes/products/halo-special-product-tmp'
      };
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
          header_height = $('.header').height();
        if (scroll > header_height) {
          setFlag = true;
        }
        if (setFlag) {
          if (!$('.halo-spacial-product .productView').length) {
            var viewingProduct = function viewingProduct(wrapper) {
              if (wrapper.length > 0) {
                var viewerText = context.themeSettings.product_viewingProduct_text,
                  numbersViewer_text = context.themeSettings.product_viewingProduct_viewer,
                  numbersViewerList = JSON.parse("[" + numbersViewer_text + "]");
                setInterval(function () {
                  var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
                  wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
                  wrapper.removeClass('u-hiddenVisually');
                }, 10000);
              }
            };
            var countDownProduct = function countDownProduct(wrapper) {
              if (wrapper.length > 0) {
                var countDown = wrapper.data('countdown'),
                  countDownDate = new Date(countDown).getTime(),
                  seft = wrapper;
                var countdownfunction = setInterval(function () {
                  var now = new Date().getTime(),
                    distance = countDownDate - now;
                  if (distance < 0) {
                    clearInterval(countdownfunction);
                    seft.remove();
                  } else {
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                      hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                      minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
                      seconds = Math.floor(distance % (1000 * 60) / 1000),
                      strCountDown = '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-bell"/></svg><span class="text"><span>Limited time offer, end in:</span></span> <span class="num">' + days + 'd :</span> <span class="num">' + hours + 'h :</span> <span class="num">' + minutes + 'm :</span> <span class="num">' + seconds + 's</span>';
                    seft.html(strCountDown);
                  }
                }, 1000);
              }
            };
            var soldProduct = function soldProduct(wrapper) {
              if (wrapper.length > 0) {
                var numbersProduct_text = context.themeSettings.product_soldProduct_products,
                  numbersHours_text = context.themeSettings.product_soldProduct_hours,
                  soldProductText = context.themeSettings.product_soldProduct_text,
                  soldProductText2 = context.themeSettings.product_soldProduct_hours_text;
                var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
                  numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
                  numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
                  numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
                wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fire"/></svg><span>' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + '</span>');
                wrapper.removeClass('u-hiddenVisually').show();
              }
            };
            var initThumbnailsHeight = function initThumbnailsHeight($scope) {
              var el = $($scope);
              var $carousel_nav = el.find('.productView-nav'),
                $carousel_for = el.find('.productView-for');
              if ($carousel_for.find('.slick-arrow').length > 0) {
                $carousel_for.parent().addClass('arrows-visible');
              } else {
                $carousel_for.parent().addClass('arrows-disable');
              }
            };
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.product.getById(productId, options, function (err, response) {
              setFlag = false;
              var scope = '.halo-spacial-product';
              if (!$(scope).find('.productView').length) {
                $(scope).html(response);
                soldProduct($(scope).find('.productView-soldProduct'));
                viewingProduct($(scope).find('.productView-ViewingProduct'));
                countDownProduct($(scope).find('.productView-countDown'));
                $(scope).find('[data-slick]').slick();
                $(scope).find('.productView-for').get(0).slick.setPosition();
                initThumbnailsHeight(scope);
                (0,_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_10__["default"])($(scope), context);
                (0,_halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_9__["default"])($(scope).find('[data-slick]'));
                $(scope).on('click', '.dropdown-menu-button', function (event) {
                  var $target = $(event.currentTarget);
                  if ($target.hasClass('is-open')) {
                    $target.removeClass('is-open').attr('aria-expanded', false);
                    $target.siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                  } else {
                    $target.addClass('is-open').attr('aria-expanded', true);
                    $target.siblings('.dropdown-menu').addClass('is-open').attr('aria-hidden', false);
                  }
                  event.stopPropagation();
                });
                $(document).on('click', function (event) {
                  if ($(scope).find('.dropdown-menu-button').hasClass('is-open')) {
                    if ($(event.target).closest('.dropdown-menu-button').length === 0 && $(event.target).closest('.dropdown-menu').length === 0) {
                      $(scope).find('.dropdown-menu-button').removeClass('is-open').attr('aria-expanded', false);
                      $(scope).find('.dropdown-menu-button').siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                    }
                  }
                });
                var productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_7__["default"]($(scope), context);
                productDetails.setProductVariant();
                return productDetails;
              }
            });
          }
          setFlag = false;
        }
      });
    }
  };
  _proto.homeParallaxBanner = function homeParallaxBanner() {
    if ($('#halo_parralax_banners').length > 0) {
      var wrap = $('#halo_parralax_banners'),
        image = wrap.find('[data-image]').data('image');
      wrap.find('[data-image]').css('background-image', 'url(' + image + ')');
    }
  };
  _proto.loadOptionForProductCard = function loadOptionForProductCard() {
    var context = this.context;
    if ($('.productCarousel').length > 0) {
      $('.productCarousel').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, $prodWrapId);
      });
    }
    if ($('.halo-block .productGrid').length > 0) {
      $('.halo-block .productGrid').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, $prodWrapId);
      });
    }
  }

  // Banner parallax 2
  ;
  _proto.customerReviewCarousel = function customerReviewCarousel() {
    if ($('#halo_parralax_banners .halo-row').length) {
      if (!$('#halo_parralax_banners .halo-row').hasClass('slick-slider')) {
        $('#halo_parralax_banners .halo-row').slick({
          dots: true,
          arrows: false,
          infinite: false,
          mobileFirst: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              arrows: true
            }
          }]
        });
      }
    }
  };
  _proto.topReviewCarousel = function topReviewCarousel() {
    if ($('#halo_top_reviews .halo-row').length) {
      if (!$('#halo_top_reviews .halo-row').hasClass('slick-slider')) {
        $('#halo_top_reviews .halo-row').slick({
          dots: true,
          arrows: false,
          infinite: true,
          mobileFirst: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '25%'
            }
          }]
        });
      }
    }
  };
  _proto.collectionsListCarousel = function collectionsListCarousel() {
    if ($('.collections-list__carousel').length) {
      if (!$('.collections-list__carousel').hasClass('slick-slider')) {
        $('.collections-list__carousel').slick({
          dots: true,
          arrows: false,
          infinite: true,
          mobileFirst: true,
          adaptiveHeight: true,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 1500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              centerMode: false,
              autoplay: false,
              arrows: true,
              slidesToShow: 4,
              slidesToScroll: 4
            }
          }, {
            breakpoint: 768,
            settings: {
              centerMode: false,
              autoplay: false,
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }, {
            breakpoint: 550,
            settings: {
              centerMode: false,
              autoplay: false,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }]
        });
      }
    }
  };
  _proto.popularCollectionsCarousel = function popularCollectionsCarousel() {
    if ($('.popular-collection__carousel').length) {
      if (!$('.popular-collection__carousel').hasClass('slick-slider')) {
        $('.popular-collection__carousel').slick({
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1500,
          mobileFirst: true,
          adaptiveHeight: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 550,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }]
        });
      }
      $('.popular-collection__carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = nextSlide / (slick.slideCount - 1) * 100;
        // $('.popular-collection__progress').attr('aria-valuenow', calc);
        $('.popular-collection__progress .progress').css('background-size', calc + '% 100%');
      });
    }
  };
  _proto.homeProductRecommended = function homeProductRecommended() {
    var $homePGF = $('.home2-block-recommended');
    var $homePGF_grid = $homePGF.find('.productGrid');
    var homePGF_itemLength = $homePGF_grid.find('.product').length;
    var $homePGF_btnBlock = $('.homePGF_btn');
    var $homePGF_btn = $('.homePGF_btn a');
    var dataColumn = $homePGF_grid.data('columns');
    var tt_productShow;
    if ($homePGF.length && homePGF_itemLength > 0) {
      var fWidth = window.innerWidth;
      if (fWidth > 1279 && homePGF_itemLength > 10) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 1279 && fWidth > 991 && homePGF_itemLength > 8) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 991 && fWidth > 767 && homePGF_itemLength > 6) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 767 && homePGF_itemLength > 4) {
        $homePGF_btnBlock.addClass('is-show');
      }
      $homePGF_btn.on('click', function (e) {
        e.preventDefault();
        var wWidth = window.innerWidth;
        if (wWidth > 1279) {
          tt_productShow = 10;
        } else if (wWidth <= 1279 && wWidth > 991) {
          tt_productShow = 8;
        } else if (wWidth <= 991 && wWidth > 767) {
          tt_productShow = 6;
        } else {
          tt_productShow = 4;
        }
        if ($homePGF_grid.find('.product:hidden').length > 0) {
          $homePGF_grid.find('.product:hidden:lt(' + tt_productShow + ')').css('display', 'inline-block');
          if ($homePGF_grid.find('.product:hidden').length == 0) {
            $homePGF_btn.text('No More Products').attr('disabled', '').addClass('disable');
          }
        }
      });
    }
  };
  _proto.countDownBanner = function countDownBanner() {
    var $thisCountDown = $('.countdown-banner__countdown');
    if ($thisCountDown.length) {
      var countDownDate = new Date($thisCountDown.attr('data-count-down')).getTime();
      var countdownfunction = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        if (distance < 0) {
          clearInterval(countdownfunction);
          $thisCountDown.html('');
        } else {
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
          var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
          var seconds = Math.floor(distance % (1000 * 60) / 1000);
          var strCountDown = "<div class='clock-item'><span class='num'>" + days + "</span><span class='text'>Days</span></div><div class='clock-item'><span class='num'>" + hours + "</span><span class='text'>Hours</span></div><div class='clock-item'><span class='num'>" + minutes + "</span><span class='text'>Minutes</span></div><div class='clock-item'><span class='num'>" + seconds + "</span><span class='text'>Seconds</span></div>";
          $thisCountDown.html(strCountDown);
        }
      }, 1000);
    }
  };
  _proto.scrollToNewsletter = function scrollToNewsletter() {
    $('.btn-gt-newsletter').on('click', function (event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $('.footer-subscription').offset().top
      }, 700);
    });
  };
  _proto.imageComparison = function imageComparison() {
    var _this = this;
    var handler = function handler(entries, observer) {
      if (entries[0].isIntersecting) {
        var imagesContainer = entries[0].target.querySelector('[data-images-container]');
        imagesContainer.style.setProperty('--left-pos', '50%');
        imagesContainer.querySelector('.slider-thumb-arrows').style.transform = 'rotate(0deg)';
        setTimeout(function () {
          return imagesContainer.classList.add('loaded');
        }, 1000);
        observer.unobserve(_this);
      }
    };
    var options = {
      threshold: .7
    };
    var imageComparisonBlock = document.querySelector('[data-image-comparision]');
    if (!imageComparisonBlock) return;
    this.observer = new IntersectionObserver(handler, options);
    this.observer.observe(imageComparisonBlock);
    this.clicked = false;
    this.container = imageComparisonBlock.querySelector('[data-images-container]');
    this.slider = imageComparisonBlock.querySelector('[data-image-slider]');
    this.imageOverlay = imageComparisonBlock.querySelector('.image-comparison__image--first');
    this.width = this.imageOverlay.offsetWidth;
    this.height = this.imageOverlay.offsetHeight;
    this.slider.addEventListener('mousedown', this.slideReady.bind(this));
    this.slider.addEventListener('touchstart', this.slideReady.bind(this));
    window.addEventListener('mouseup', this.slideFinish.bind(this));
    window.addEventListener('touchend', this.slideFinish.bind(this));
  };
  _proto.slideReady = function slideReady(e) {
    e.preventDefault();
    this.clicked = true;
    window.addEventListener('mousemove', this.slideMove.bind(this));
    window.addEventListener('touchmove', this.slideMove.bind(this));
  };
  _proto.slideMove = function slideMove(e) {
    if (!this.clicked) return false;
    var currentLeftPercent = this.getCursorLeft(e);
    this.container.style.setProperty('--left-pos', currentLeftPercent + "%");
  };
  _proto.slideFinish = function slideFinish(e) {
    this.clicked = false;
  };
  _proto.getCursorLeft = function getCursorLeft(e) {
    var event = e.changedTouches ? e.changedTouches[0] : e;
    var _this$container$getBo = this.container.getBoundingClientRect(),
      left = _this$container$getBo.left,
      width = _this$container$getBo.width;
    var sliderButtonWidthPercent = (this.slider.getBoundingClientRect().width + 4) * 100 / width;
    var min = sliderButtonWidthPercent / 2;
    var max = 100 - min;
    var delta = event.pageX - left;
    var percent = delta / width * 100;
    if (percent < min) percent = min;
    if (percent > max) percent = max;
    return percent;
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUMvQyxJQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsd0RBQVksQ0FBQztBQUVuQyw2QkFBZSxvQ0FBU0MsT0FBTyxFQUFFQyxPQUFPLEVBQUU7RUFDdEMsSUFBSUQsT0FBTyxDQUFDRSxhQUFhLENBQUNDLHVCQUF1QixJQUFJLElBQUksRUFBRTtJQUFBLElBTTlDQyxpQkFBaUIsR0FBMUIsU0FBU0EsaUJBQWlCQSxDQUFBLEVBQUc7TUFDekJDLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO1FBQ25DLElBQUlDLFNBQVMsR0FBR0MsQ0FBQyxDQUFDRixPQUFPLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVksQ0FBQztRQUU3Q0MsSUFBSSxDQUFDQyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQztNQUNuQyxDQUFDLENBQUM7TUFFRixJQUFHRixJQUFJLENBQUNHLE1BQU0sR0FBRyxDQUFDLEVBQUM7UUFDZkMsZ0JBQWdCLENBQUNKLElBQUksQ0FBQyxDQUFDSyxJQUFJLENBQUMsVUFBQU4sSUFBSSxFQUFJO1VBQ2hDTyxZQUFZLENBQUNQLElBQUksQ0FBQztVQUVsQkQsQ0FBQyxDQUFDSixJQUFJLENBQUNNLElBQUksRUFBRSxVQUFDTyxHQUFHLEVBQUVDLElBQUksRUFBSztZQUN4QixJQUFJQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2NBQ1JaLFNBQVMsR0FBR0csSUFBSSxDQUFDTyxHQUFHLENBQUM7WUFFekJHLGVBQWUsQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBQ2QsU0FBUyxHQUFDLHNCQUFzQixDQUFDLENBQUNILElBQUksQ0FBQyxVQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBSztjQUM1RixJQUFJZ0IsR0FBRyxHQUFHZCxDQUFDLENBQUNGLE9B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SUFBSSxDQUFDWixTQUFTLENBQUNhLHFCQUFxQixDQUFDLENBQUM7TUFBdERDLElBQUksR0FBQUYscUJBQUEsQ0FBSkUsSUFBSTtNQUFFL0YsS0FBSyxHQUFBNkYscUJBQUEsQ0FBTDdGLEtBQUs7SUFDbkIsSUFBTWdHLHdCQUF3QixHQUFHLENBQUMsSUFBSSxDQUFDckosTUFBTSxDQUFDbUoscUJBQXFCLENBQUMsQ0FBQyxDQUFDOUYsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUdBLEtBQUs7SUFDOUYsSUFBTTVJLEdBQUcsR0FBRzRPLHdCQUF3QixHQUFHLENBQUM7SUFDeEMsSUFBTTVQLEdBQUcsR0FBRyxHQUFHLEdBQUdnQixHQUFHO0lBRXJCLElBQU02TyxLQUFLLEdBQUd2SixLQUFLLENBQUN3SixLQUFLLEdBQUdILElBQUk7SUFDaEMsSUFBSUksT0FBTyxHQUFJRixLQUFLLEdBQUdqRyxLQUFLLEdBQUksR0FBRztJQUVuQyxJQUFJbUcsT0FBTyxHQUFHL08sR0FBRyxFQUFFK08sT0FBTyxHQUFHL08sR0FBRztJQUNoQyxJQUFJK08sT0FBTyxHQUFHL1AsR0FBRyxFQUFFK1AsT0FBTyxHQUFHL1AsR0FBRztJQUVoQyxPQUFPK1AsT0FBTztFQUNsQixDQUFDO0VBQUEsT0FBQXBOLElBQUE7QUFBQSxFQTVtQzZCUixxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9wYXJhbGxheC9qcXVlcnkucGFyYWxsYXgtc2Nyb2xsLm1pbi5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIHdyYXBwZXIpIHtcbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0ID09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuLFxuICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyID0gJCgnIycrd3JhcHBlciksXG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkJyk7XG4gICAgICAgIHZhciAgbGlzdCA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxQcm9kdWN0T3B0aW9uKCkge1xuICAgICAgICAgICAgcHJvZHVjdF9jbGFzcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHByb2R1Y3RJZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGdldFByb2R1Y3RPcHRpb24obGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChsaXN0LCAoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0ge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gbGlzdFtpZHhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQoZWxlbWVudCkuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbdHh0XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCA+IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudE1vcmVPcHRpb24gID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggLSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGluayA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCdbZGF0YS1wcm9kdWN0LWlkPVwiJytwcm9kdWN0SWQrJ1wiXScpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkIC5zaG93bW9yZScpLmxlbmd0aCA8IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLmFwcGVuZCgnPGEgaHJlZj1cIicrcHJvZHVjdExpbmsrJ1wiIGNsYXNzPVwic2hvd21vcmVcIj4rJytjb3VudE1vcmVPcHRpb24rJzwvYT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0T3B0aW9uKGxpc3Qpe1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XG4gICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFtgK2xpc3QrYF0sIGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFN3YXRjaE9wdGlvblZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGB9KSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlck9wdGlvbihkYXRhKXtcbiAgICAgICAgICAgIHZhciBhRmlsdGVyID0gZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuXG4gICAgICAgICAgICAkLmVhY2goYUZpbHRlciwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkU2l6ZSA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZC0tc2l6ZScpLFxuICAgICAgICAgICAgICAgICAgICBhRmlsdGVyMiA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjMgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI1ID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheU5hbWUgPT09IGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDI7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyMy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI0ID0gYUZpbHRlcjNbMF0ubm9kZS52YWx1ZXMuZWRnZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXI0LCAoaWR4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuZW50aXR5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29sb3JWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjEgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMiA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IzID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaW1hZ2VVcmw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbmd0aENvbG9yVmFyID09IDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsZW5ndGhDb2xvclZhciA9PT0gMyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMysnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oY29sb3IxKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvclwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2NvbG9yMSsnXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihpbWcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcraW1nKycpXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoYUZpbHRlcjUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RGaWVsZFNpemUubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNpemVcIj48bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvblwiPicrY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dC50b1N0cmluZygpKyc8L2xhYmVsPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoKGFGaWx0ZXI1Lmxlbmd0aCA9PSAwKSAmJiAoYUZpbHRlcjMubGVuZ3RoID09IDApKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsUHJvZHVjdE9wdGlvbigpO1xuICAgIH1cbn1cbiIsIiQoZnVuY3Rpb24oKXtQYXJhbGxheFNjcm9sbC5pbml0KCl9KTt2YXIgUGFyYWxsYXhTY3JvbGw9e3Nob3dMb2dzOiExLHJvdW5kOjFlMyxpbml0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2xvZyhcImluaXRcIiksdGhpcy5faW5pdGVkPyh0aGlzLl9sb2coXCJBbHJlYWR5IEluaXRlZFwiKSx2b2lkKHRoaXMuX2luaXRlZD0hMCkpOih0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oYSxiKXt3aW5kb3cuc2V0VGltZW91dChhLDFlMy82MCl9fSgpLHZvaWQgdGhpcy5fb25TY3JvbGwoITApKX0sX2luaXRlZDohMSxfcHJvcGVydGllczpbXCJ4XCIsXCJ5XCIsXCJ6XCIsXCJyb3RhdGVYXCIsXCJyb3RhdGVZXCIsXCJyb3RhdGVaXCIsXCJzY2FsZVhcIixcInNjYWxlWVwiLFwic2NhbGVaXCIsXCJzY2FsZVwiXSxfcmVxdWVzdEFuaW1hdGlvbkZyYW1lOm51bGwsX2xvZzpmdW5jdGlvbihhKXt0aGlzLnNob3dMb2dzJiZjb25zb2xlLmxvZyhcIlBhcmFsbGF4IFNjcm9sbCAvIFwiK2EpfSxfb25TY3JvbGw6ZnVuY3Rpb24oYSl7dmFyIGI9JChkb2N1bWVudCkuc2Nyb2xsVG9wKCksYz0kKHdpbmRvdykuaGVpZ2h0KCk7dGhpcy5fbG9nKFwib25TY3JvbGwgXCIrYiksJChcIltkYXRhLXBhcmFsbGF4XVwiKS5lYWNoKCQucHJveHkoZnVuY3Rpb24oZCxlKXt2YXIgZj0kKGUpLGc9W10saD0hMSxpPWYuZGF0YShcInN0eWxlXCIpO3ZvaWQgMD09aSYmKGk9Zi5hdHRyKFwic3R5bGVcIil8fFwiXCIsZi5kYXRhKFwic3R5bGVcIixpKSk7dmFyIGssaj1bZi5kYXRhKFwicGFyYWxsYXhcIildO2ZvcihrPTI7Zi5kYXRhKFwicGFyYWxsYXhcIitrKTtrKyspai5wdXNoKGYuZGF0YShcInBhcmFsbGF4LVwiK2spKTt2YXIgbD1qLmxlbmd0aDtmb3Ioaz0wO2s8bDtrKyspe3ZhciBtPWpba10sbj1tW1wiZnJvbS1zY3JvbGxcIl07dm9pZCAwPT1uJiYobj1NYXRoLm1heCgwLCQoZSkub2Zmc2V0KCkudG9wLWMpKSxuPTB8bjt2YXIgbz1tLmRpc3RhbmNlLHA9bVtcInRvLXNjcm9sbFwiXTt2b2lkIDA9PW8mJnZvaWQgMD09cCYmKG89Yyksbz1NYXRoLm1heCgwfG8sMSk7dmFyIHE9bS5lYXNpbmcscj1tW1wiZWFzaW5nLXJldHVyblwiXTtpZih2b2lkIDAhPXEmJiQuZWFzaW5nJiYkLmVhc2luZ1txXXx8KHE9bnVsbCksdm9pZCAwIT1yJiYkLmVhc2luZyYmJC5lYXNpbmdbcl18fChyPXEpLHEpe3ZhciBzPW0uZHVyYXRpb247dm9pZCAwPT1zJiYocz1vKSxzPU1hdGgubWF4KDB8cywxKTt2YXIgdD1tW1wiZHVyYXRpb24tcmV0dXJuXCJdO3ZvaWQgMD09dCYmKHQ9cyksbz0xO3ZhciB1PWYuZGF0YShcImN1cnJlbnQtdGltZVwiKTt2b2lkIDA9PXUmJih1PTApfXZvaWQgMD09cCYmKHA9bitvKSxwPTB8cDt2YXIgdj1tLnNtb290aG5lc3M7dm9pZCAwPT12JiYodj0zMCksdj0wfHYsKGF8fDA9PXYpJiYodj0xKSx2PTB8djt2YXIgdz1iO3c9TWF0aC5tYXgodyxuKSx3PU1hdGgubWluKHcscCkscSYmKHZvaWQgMD09Zi5kYXRhKFwic2Vuc1wiKSYmZi5kYXRhKFwic2Vuc1wiLFwiYmFja1wiKSx3Pm4mJihcImJhY2tcIj09Zi5kYXRhKFwic2Vuc1wiKT8odT0xLGYuZGF0YShcInNlbnNcIixcImdvXCIpKTp1KyspLHc8cCYmKFwiZ29cIj09Zi5kYXRhKFwic2Vuc1wiKT8odT0xLGYuZGF0YShcInNlbnNcIixcImJhY2tcIikpOnUrKyksYSYmKHU9cyksZi5kYXRhKFwiY3VycmVudC10aW1lXCIsdSkpLHRoaXMuX3Byb3BlcnRpZXMubWFwKCQucHJveHkoZnVuY3Rpb24oYSl7dmFyIGI9MCxjPW1bYV07aWYodm9pZCAwIT1jKXtcInNjYWxlXCI9PWF8fFwic2NhbGVYXCI9PWF8fFwic2NhbGVZXCI9PWF8fFwic2NhbGVaXCI9PWE/Yj0xOmM9MHxjO3ZhciBkPWYuZGF0YShcIl9cIithKTt2b2lkIDA9PWQmJihkPWIpO3ZhciBlPShjLWIpKigody1uKS8ocC1uKSkrYixpPWQrKGUtZCkvdjtpZihxJiZ1PjAmJnU8PXMpe3ZhciBqPWI7XCJiYWNrXCI9PWYuZGF0YShcInNlbnNcIikmJihqPWMsYz0tYyxxPXIscz10KSxpPSQuZWFzaW5nW3FdKG51bGwsdSxqLGMscyl9aT1NYXRoLmNlaWwoaSp0aGlzLnJvdW5kKS90aGlzLnJvdW5kLGk9PWQmJmU9PWMmJihpPWMpLGdbYV18fChnW2FdPTApLGdbYV0rPWksZCE9Z1thXSYmKGYuZGF0YShcIl9cIithLGdbYV0pLGg9ITApfX0sdGhpcykpfWlmKGgpe2lmKHZvaWQgMCE9Zy56KXt2YXIgeD1tLnBlcnNwZWN0aXZlO3ZvaWQgMD09eCYmKHg9ODAwKTt2YXIgeT1mLnBhcmVudCgpO3kuZGF0YShcInN0eWxlXCIpfHx5LmRhdGEoXCJzdHlsZVwiLHkuYXR0cihcInN0eWxlXCIpfHxcIlwiKSx5LmF0dHIoXCJzdHlsZVwiLFwicGVyc3BlY3RpdmU6XCIreCtcInB4OyAtd2Via2l0LXBlcnNwZWN0aXZlOlwiK3grXCJweDsgXCIreS5kYXRhKFwic3R5bGVcIikpfXZvaWQgMD09Zy5zY2FsZVgmJihnLnNjYWxlWD0xKSx2b2lkIDA9PWcuc2NhbGVZJiYoZy5zY2FsZVk9MSksdm9pZCAwPT1nLnNjYWxlWiYmKGcuc2NhbGVaPTEpLHZvaWQgMCE9Zy5zY2FsZSYmKGcuc2NhbGVYKj1nLnNjYWxlLGcuc2NhbGVZKj1nLnNjYWxlLGcuc2NhbGVaKj1nLnNjYWxlKTt2YXIgej1cInRyYW5zbGF0ZTNkKFwiKyhnLng/Zy54OjApK1wicHgsIFwiKyhnLnk/Zy55OjApK1wicHgsIFwiKyhnLno/Zy56OjApK1wicHgpXCIsQT1cInJvdGF0ZVgoXCIrKGcucm90YXRlWD9nLnJvdGF0ZVg6MCkrXCJkZWcpIHJvdGF0ZVkoXCIrKGcucm90YXRlWT9nLnJvdGF0ZVk6MCkrXCJkZWcpIHJvdGF0ZVooXCIrKGcucm90YXRlWj9nLnJvdGF0ZVo6MCkrXCJkZWcpXCIsQj1cInNjYWxlWChcIitnLnNjYWxlWCtcIikgc2NhbGVZKFwiK2cuc2NhbGVZK1wiKSBzY2FsZVooXCIrZy5zY2FsZVorXCIpXCIsQz16K1wiIFwiK0ErXCIgXCIrQitcIjtcIjt0aGlzLl9sb2coQyksZi5hdHRyKFwic3R5bGVcIixcInRyYW5zZm9ybTpcIitDK1wiIC13ZWJraXQtdHJhbnNmb3JtOlwiK0MrXCIgXCIraSl9fSx0aGlzKSksd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcywhMSkpOnRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgkLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMsITEpKX19O1xuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLmRyb3Bkb3duJztcbmltcG9ydCBmYW5jeWJveCBmcm9tICcuL2hhbG90aGVtZXMvanF1ZXJ5LmZhbmN5Ym94Lm1pbic7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBoYWxvQWRkT3B0aW9uIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuaW1wb3J0IHBhcmFsbGF4IGZyb20gJy4vaGFsb3RoZW1lcy9wYXJhbGxheC9qcXVlcnkucGFyYWxsYXgtc2Nyb2xsLm1pbic7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCwgbW9kYWxUeXBlcyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBoYWxvWW91dHViZUNhcm91c2VsIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvVmlkZW8nO1xuaW1wb3J0IGhhbG9Ob3RpZnlNZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb05vdGlmeU1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY291bnREb3duSGVyb0Nhcm91c2VsKCk7XG4gICAgICAgIHRoaXMuY3VzdG9tUGFnaW5nKCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5KCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RUYWJCeUNhdGVnb3J5KCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5V2l0aEJhbm5lcigpO1xuICAgICAgICB0aGlzLmZhbmN5Ym94VmlkZW9CYW5uZXIoKTtcbiAgICAgICAgdGhpcy5mYXFzVG9nZ2xlKCk7XG4gICAgICAgIHRoaXMucmVjZW50QmxvZ1NsaWRlcigpO1xuICAgICAgICB0aGlzLmhvbWVTcGVjaWFsUHJvZHVjdCgpO1xuICAgICAgICB0aGlzLmhvbWVQYXJhbGxheEJhbm5lcigpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpO1xuICAgICAgICB0aGlzLmN1c3RvbWVyUmV2aWV3Q2Fyb3VzZWwoKTtcbiAgICAgICAgdGhpcy50b3BSZXZpZXdDYXJvdXNlbCgpO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25zTGlzdENhcm91c2VsKCk7XG4gICAgICAgIHRoaXMucG9wdWxhckNvbGxlY3Rpb25zQ2Fyb3VzZWwoKTtcbiAgICAgICAgdGhpcy5ob21lUHJvZHVjdFJlY29tbWVuZGVkKCk7XG4gICAgICAgIHRoaXMuY291bnREb3duQmFubmVyKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9OZXdzbGV0dGVyKCk7XG4gICAgICAgIHRoaXMuaW1hZ2VDb21wYXJpc29uKCk7XG4gICAgfVxuXG4gICAgY291bnREb3duSGVyb0Nhcm91c2VsKCkge1xuICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLWNvdW50ZG93bicpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpLmFkZENsYXNzKCdoYXMtY291bnQtZG93bicpO1xuXG4gICAgICAgICAgICB2YXIgY291bnREb3duID0gJChlbGVtZW50KS5kYXRhKCdjYXJvdXNlbC1jb3VudGRvd24nKSxcbiAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbmV3IERhdGUoY291bnREb3duKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgc2VmdCA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoJycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyQ291bnREb3duID0gXCI8c3BhbiBjbGFzcz0nbnVtJz5cIitkYXlzK1wiPHNwYW4+REFZUzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIraG91cnMrXCI8c3Bhbj5IT1VSUzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIrbWludXRlcytcIjxzcGFuPk1JTlM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK3NlY29uZHMrXCI8c3Bhbj5TRUNTPC9zcGFuPjwvc3Bhbj5cIjtcblxuICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoc3RyQ291bnREb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3VzdG9tUGFnaW5nKCl7XG4gICAgICAgIGNvbnN0IGhlcm9DdXN0b20gPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbScpO1xuICAgICAgICBjb25zdCBoZXJvQ3VzdG9tU2xpZGUgPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbSAuc2xpY2stZG90cyBsaScpO1xuICAgICAgICBoZXJvQ3VzdG9tLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IGhlcm9DdXN0b20uZGF0YSgnYXV0b3BsYXknKSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgYXNOYXZGb3I6IFwiLmhlcm9DYXJvdXNlbFwiXG4gICAgICAgIH0pO1xuICAgICAgICAvL0FEQVxuICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbSAuc2xpY2stZG90cyBsaScpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLnRleHQoKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykudGV4dCgnMCcgKyBzbGlkZSkuYWRkQ2xhc3MoJ3NsaWNrLWRvdHMtaXRlbScpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGhlcm9DdXN0b20ub24oJ2FmdGVyQ2hhbmdlJywgKGV2ZW50LCBzbGlkZXIsIGkpID0+IHtcbiAgICAgICAgICAgIHZhciBwb3MgPSAkKHNsaWRlci4kc2xpZGVzW2ldKS5maW5kKCdkaXZbZGF0YS1wb3NpdGlvbl0nKS5kYXRhKCdwb3NpdGlvbicpO1xuXG4gICAgICAgICAgICBpZihwb3MgPT09ICdyaWdodCcpe1xuICAgICAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21MZWZ0JykuYWRkQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGlmICgkKCcuaGVyb0Nhcm91c2VsLXNsaWRlLS1maXJzdCAuaGVyb0Nhcm91c2VsLWNvbnRlbnQtd3JhcHBlciAuaGVyb0Nhcm91c2VsLWNvbnRlbnQtLXJpZ2h0JykubGVuZ3RoKSB7XG4gICAgICAgICAgICBoZXJvQ3VzdG9tLnJlbW92ZUNsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tUmlnaHQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeSgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTInXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiBoZWFkZXJfaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdElkID0gJChlbGVtZW50KS5kYXRhKCdkYXRhLWNhdGVnb3J5JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gJChlbGVtZW50KS5kYXRhKCdjYXRlZ29yeS11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighJCgnI3Byb2R1Y3QtYnktY2F0ZS0nK2NhdElkKycgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yeShpZCwgdXJsLCBvcHRpb24sIHdyYXAsIGJsb2NrSWQpe1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIXdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHdyYXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX2NvbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfY29sKSAtIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfY29sKSAtIDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0VGFiQnlDYXRlZ29yeSgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTMnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZXRGbGFnKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXAgPSBibG9jay5maW5kKCcucHJvZHVjdENhcm91c2VsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9IGJsb2NrLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyBbZGF0YS10YWJdJykub24oJ3RvZ2dsZWQnLCAoZXZlbnQsIHRhYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcCA9IGJsb2NrLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdElkID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LWlkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gYmxvY2suYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZighJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCcucHJvZHVjdENhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCF3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xuICAgICAgICAgICAgICAgICAgICB3cmFwLnBhcmVudHMoJy50YWItY29udGVudCcpLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbCh3cmFwKXtcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCkgLSAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wpIC0gMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RCeUNhdGVnb3J5V2l0aEJhbm5lcigpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTQnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJTb3J0aW5nID0gJCgnLnRhYi1zb3J0aW5nIC50YWItdGl0bGUnKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiBoZWFkZXJfaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhvbWUtbGF5b3V0LTInKS5sZW5ndGggJiYgISQoZWxlbWVudCkuaGFzQ2xhc3MoJ2hvbWUyLWZsYXNoLWRlYWxzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnRhYkNvbnRlbnQtbmV3IC5wcm9kdWN0Q2Fyb3VzZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3cmFwID0gJChlbGVtZW50KS5maW5kKCcucHJvZHVjdENhcm91c2VsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRJZCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktd2l0aC1iYW5uZXItaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXdpdGgtYmFubmVyLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC13aXRoLWJhbm5lci0nK2NhdElkKycgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHRhYlNvcnRpbmcub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVGFiID0gJHRhcmdldC5kYXRhKCd0YWInKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpc0Jsb2NrID0gJHRhcmdldC5jbG9zZXN0KCcuaGFsby1ibG9jay1wcm9kdWN0Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkdGhpc0Jsb2NrLmZpbmQoJy50YWJDb250ZW50LScrZGF0YVRhYisnIC5wcm9kdWN0Q2Fyb3VzZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSAkdGFyZ2V0LmRhdGEoJ2NhdGUtaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gJHRhcmdldC5kYXRhKCdjYXRlLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YVRhYiA9PSAndmlld2FsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1zb3J0aW5nJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmZicpXG4gICAgICAgICAgICAgICAgaWYoISR0YXJnZXQuaGFzQ2xhc3MoJ2lzLWxvYWRlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKycgLnByb2R1Y3RDYXJvdXNlbCcpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKCcuY291bnREb3dudGltZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCAkKCcuY291bnREb3dudGltZXInKS5hdHRyKCdkYXRhLWNvdW50LWRvd24nKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25mdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmNvdW50RG93bnRpbWVyXCIpLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ckNvdW50RG93biA9IFwiPGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrZGF5cytcIjwvc3Bhbj48c3BhbiBjbGFzcz0ndGV4dCc+ZDwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPSdjbG9jay1pdGVtJz48c3BhbiBjbGFzcz0nbnVtJz5cIitob3VycytcIjo8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrbWludXRlcytcIjo8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrc2Vjb25kcytcIjwvc3Bhbj48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuY291bnREb3dudGltZXJcIikuaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCF3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5oYXNDbGFzcygnaGFsby1ibG9jay1wcm9kdWN0LWJhbm5lcnMnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhvbWUtbGF5b3V0LTInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdob21lMi1mbGFzaC1kZWFscycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRmxhc2hEZWFscyh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbDQod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMyh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdoYWxvLWJsb2NrLXByb2R1Y3QtYmFubmVyczInKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMih3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsMih3cmFwKXtcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbDMod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWw0KHdyYXApe1xuICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbGFiZWxGbGFzaERlYWxzKHdyYXApIHtcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtU2lkZSA9IHdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpO1xuXG4gICAgICAgICAgICAkaXRlbVNpZGUuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpc0xhYmVsID0gJChlbGVtZW50KS5maW5kKCcuc2FsZS1iYWRnZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzTGFiZWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gJHRoaXNMYWJlbC5maW5kKCcudGV4dCcpLmRhdGEoJ3NhbGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jYXJkLXByaWNlJykuYWRkQ2xhc3MoJ2hhcy1sYWJlbFNhbGUnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjYXJkLWxhYmVsLXNhbGVcIj48c3Bhbj4tJytsYWJlbCsnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpc0xhYmVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFuY3lib3hWaWRlb0Jhbm5lcigpe1xuICAgICAgICBpZiAoJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFxc1RvZ2dsZSgpe1xuICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkIC50aXRsZScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkIC50aXRsZScpLm5vdCgkdGFyZ2V0KS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG5cbiAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoJChlbGVtZW50KS5maW5kKCcudGl0bGUnKS5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlRG93bihcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlVXAoXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWNlbnRCbG9nU2xpZGVyKCl7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygndW5zbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhvbWVTcGVjaWFsUHJvZHVjdCgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGlmKGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfc3BlY2lhbCA9PSB0cnVlKXtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbZGF0YS1zcGVjaWFsLXByb2R1Y3QtaWRdJykuZGF0YSgnc3BlY2lhbC1wcm9kdWN0LWlkJyksXG4gICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID17XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tc3BlY2lhbC1wcm9kdWN0LXRtcCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZXRGbGFnKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoISQoJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCAucHJvZHVjdFZpZXcnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlID0gJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuaHRtbChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LXNvbGRQcm9kdWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3aW5nUHJvZHVjdCgkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctVmlld2luZ1Byb2R1Y3QnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93blByb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LWNvdW50RG93bicpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5maW5kKCdbZGF0YS1zbGlja10nKS5zbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctZm9yJykuZ2V0KDApLnNsaWNrLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFRodW1ibmFpbHNIZWlnaHQoc2NvcGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvTm90aWZ5TWUoJChzY29wZSksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvWW91dHViZUNhcm91c2VsKCQoc2NvcGUpLmZpbmQoJ1tkYXRhLXNsaWNrXScpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5vbignY2xpY2snLCAnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1vcGVuJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChzY29wZSkuZmluZCgnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudScpLmxlbmd0aCA9PT0gMCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJChzY29wZSksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0RGV0YWlscztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmlld2luZ1Byb2R1Y3Qod3JhcHBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdyYXBwZXIubGVuZ3RoID4gMCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlld2VyVGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyX3RleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF92aWV3ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyTGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1ZpZXdlcl90ZXh0ICsgXCJdXCIpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNWaWV3ZXJJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzVmlld2VyTGlzdC5sZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWV5ZVwiLz48L3N2Zz4nICsgbnVtYmVyc1ZpZXdlckxpc3RbbnVtYmVyc1ZpZXdlckl0ZW1dICsgXCIgXCIgKyB2aWV3ZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb3VudERvd25Qcm9kdWN0KHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnREb3duID0gd3JhcHBlci5kYXRhKCdjb3VudGRvd24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQgPSB3cmFwcGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyQ291bnREb3duID0gJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tYmVsbFwiLz48L3N2Zz48c3BhbiBjbGFzcz1cInRleHRcIj48c3Bhbj5MaW1pdGVkIHRpbWUgb2ZmZXIsIGVuZCBpbjo8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrZGF5cysnZCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicraG91cnMrJ2ggOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK21pbnV0ZXMrJ20gOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK3NlY29uZHMrJ3M8L3NwYW4+JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNvbGRQcm9kdWN0KHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0X3RleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc190ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0MiA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzX3RleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0TGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1Byb2R1Y3RfdGV4dCArIFwiXVwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzUHJvZHVjdEl0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNQcm9kdWN0TGlzdC5sZW5ndGgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0xpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNIb3Vyc190ZXh0ICsgXCJdXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzSXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc0hvdXJzTGlzdC5sZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZmlyZVwiLz48L3N2Zz48c3Bhbj4nICsgbnVtYmVyc1Byb2R1Y3RMaXN0W251bWJlcnNQcm9kdWN0SXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dCArIFwiIFwiICsgbnVtYmVyc0hvdXJzTGlzdFtudW1iZXJzSG91cnNJdGVtXSArIFwiIFwiICsgc29sZFByb2R1Y3RUZXh0MiArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0VGh1bWJuYWlsc0hlaWdodCgkc2NvcGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2Fyb3VzZWxfbmF2ID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LW5hdicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRjYXJvdXNlbF9mb3IuZmluZCgnLnNsaWNrLWFycm93JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yLnBhcmVudCgpLmFkZENsYXNzKCdhcnJvd3MtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYXJvdXNlbF9mb3IucGFyZW50KCkuYWRkQ2xhc3MoJ2Fycm93cy1kaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9tZVBhcmFsbGF4QmFubmVyKCl7XG4gICAgICAgIGlmKCQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciB3cmFwID0gJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycycpLFxuICAgICAgICAgICAgICAgIGltYWdlID0gd3JhcC5maW5kKCdbZGF0YS1pbWFnZV0nKS5kYXRhKCdpbWFnZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3cmFwLmZpbmQoJ1tkYXRhLWltYWdlXScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJytpbWFnZSsnKScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKCl7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgaWYoJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCAkcHJvZFdyYXBJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJy5oYWxvLWJsb2NrIC5wcm9kdWN0R3JpZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLmhhbG8tYmxvY2sgLnByb2R1Y3RHcmlkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgJHByb2RXcmFwSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsICRwcm9kV3JhcElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmFubmVyIHBhcmFsbGF4IDJcbiAgICBjdXN0b21lclJldmlld0Nhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycyAuaGFsby1yb3cnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycyAuaGFsby1yb3cnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzIC5oYWxvLXJvdycpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvcFJldmlld0Nhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnI2hhbG9fdG9wX3Jldmlld3MgLmhhbG8tcm93JykubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoISQoJyNoYWxvX3RvcF9yZXZpZXdzIC5oYWxvLXJvdycpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xuICAgICAgICAgICAgICAgICQoJyNoYWxvX3RvcF9yZXZpZXdzIC5oYWxvLXJvdycpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcyNSUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdGlvbnNMaXN0Q2Fyb3VzZWwoKSB7XG4gICAgICAgIGlmICgkKCcuY29sbGVjdGlvbnMtbGlzdF9fY2Fyb3VzZWwnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghJCgnLmNvbGxlY3Rpb25zLWxpc3RfX2Nhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XG4gICAgICAgICAgICAgICAgJCgnLmNvbGxlY3Rpb25zLWxpc3RfX2Nhcm91c2VsJykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXJDb2xsZWN0aW9uc0Nhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnLnBvcHVsYXItY29sbGVjdGlvbl9fY2Fyb3VzZWwnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghJCgnLnBvcHVsYXItY29sbGVjdGlvbl9fY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAkKCcucG9wdWxhci1jb2xsZWN0aW9uX19jYXJvdXNlbCcpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy5wb3B1bGFyLWNvbGxlY3Rpb25fX2Nhcm91c2VsJykub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FsYyA9ICggKG5leHRTbGlkZSkgLyAoc2xpY2suc2xpZGVDb3VudC0xKSApICogMTAwO1xuICAgICAgICAgICAgICAgIC8vICQoJy5wb3B1bGFyLWNvbGxlY3Rpb25fX3Byb2dyZXNzJykuYXR0cignYXJpYS12YWx1ZW5vdycsIGNhbGMpO1xuICAgICAgICAgICAgICAgICQoJy5wb3B1bGFyLWNvbGxlY3Rpb25fX3Byb2dyZXNzIC5wcm9ncmVzcycpLmNzcygnYmFja2dyb3VuZC1zaXplJywgY2FsYyArICclIDEwMCUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCgpIHtcbiAgICAgICAgY29uc3QgJGhvbWVQR0YgPSAkKCcuaG9tZTItYmxvY2stcmVjb21tZW5kZWQnKTtcbiAgICAgICAgY29uc3QgJGhvbWVQR0ZfZ3JpZCA9ICRob21lUEdGLmZpbmQoJy5wcm9kdWN0R3JpZCcpO1xuICAgICAgICBjb25zdCBob21lUEdGX2l0ZW1MZW5ndGggPSAkaG9tZVBHRl9ncmlkLmZpbmQoJy5wcm9kdWN0JykubGVuZ3RoO1xuICAgICAgICBjb25zdCAkaG9tZVBHRl9idG5CbG9jayA9ICQoJy5ob21lUEdGX2J0bicpO1xuICAgICAgICBjb25zdCAkaG9tZVBHRl9idG4gPSAkKCcuaG9tZVBHRl9idG4gYScpO1xuICAgICAgICBjb25zdCBkYXRhQ29sdW1uID0gJGhvbWVQR0ZfZ3JpZC5kYXRhKCdjb2x1bW5zJyk7XG4gICAgICAgIGxldCB0dF9wcm9kdWN0U2hvdztcblxuICAgICAgICBpZiAoJGhvbWVQR0YubGVuZ3RoICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgICAgICBpZiAoZldpZHRoID4gMTI3OSAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gMTI3OSAmJiBmV2lkdGggPiA5OTEgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gOTkxICYmIGZXaWR0aCA+IDc2NyAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiA2KSB7XG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZXaWR0aCA8PSA3NjcgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRob21lUEdGX2J0bi5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgICAgIGlmICh3V2lkdGggPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdXaWR0aCA8PSAxMjc5ICYmIHdXaWR0aCA+IDk5MSkge1xuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdXaWR0aCA8PSA5OTEgJiYgd1dpZHRoID4gNzY3KSB7XG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdDpoaWRkZW4nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuOmx0KCcrdHRfcHJvZHVjdFNob3crJyknKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRob21lUEdGX2J0bi50ZXh0KCdObyBNb3JlIFByb2R1Y3RzJykuYXR0cignZGlzYWJsZWQnLCAnJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY291bnREb3duQmFubmVyKCkge1xuICAgICAgICBjb25zdCAkdGhpc0NvdW50RG93biA9ICQoJy5jb3VudGRvd24tYmFubmVyX19jb3VudGRvd24nKTtcbiAgICAgICAgaWYgKCR0aGlzQ291bnREb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgkdGhpc0NvdW50RG93bi5hdHRyKCdkYXRhLWNvdW50LWRvd24nKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICB2YXIgY291bnRkb3duZnVuY3Rpb24gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAkdGhpc0NvdW50RG93bi5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJDb3VudERvd24gPSBcIjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK2RheXMrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3RleHQnPkRheXM8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIraG91cnMrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3RleHQnPkhvdXJzPC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK21pbnV0ZXMrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3RleHQnPk1pbnV0ZXM8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrc2Vjb25kcytcIjwvc3Bhbj48c3BhbiBjbGFzcz0ndGV4dCc+U2Vjb25kczwvc3Bhbj48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNDb3VudERvd24uaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9OZXdzbGV0dGVyKCkge1xuICAgICAgICAkKCcuYnRuLWd0LW5ld3NsZXR0ZXInKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJy5mb290ZXItc3Vic2NyaXB0aW9uJykub2Zmc2V0KCkudG9wfSwgNzAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbWFnZUNvbXBhcmlzb24oKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VzQ29udGFpbmVyID0gZW50cmllc1swXS50YXJnZXQucXVlcnlTZWxlY3RvcignW2RhdGEtaW1hZ2VzLWNvbnRhaW5lcl0nKTtcbiAgICAgICAgICAgICAgICBpbWFnZXNDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGVmdC1wb3MnLCAnNTAlJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2VzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItdGh1bWItYXJyb3dzJykuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGltYWdlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKSwgMTAwMClcblxuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aHJlc2hvbGQ6IC43XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWFnZUNvbXBhcmlzb25CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWltYWdlLWNvbXBhcmlzaW9uXScpO1xuICAgICAgICBpZiAoIWltYWdlQ29tcGFyaXNvbkJsb2NrKSByZXR1cm47XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZUNvbXBhcmlzb25CbG9jayk7XG5cbiAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gaW1hZ2VDb21wYXJpc29uQmxvY2sucXVlcnlTZWxlY3RvcignW2RhdGEtaW1hZ2VzLWNvbnRhaW5lcl0nKVxuICAgICAgICB0aGlzLnNsaWRlciA9IGltYWdlQ29tcGFyaXNvbkJsb2NrLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWltYWdlLXNsaWRlcl0nKTtcbiAgICAgICAgdGhpcy5pbWFnZU92ZXJsYXkgPSBpbWFnZUNvbXBhcmlzb25CbG9jay5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtY29tcGFyaXNvbl9faW1hZ2UtLWZpcnN0Jyk7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaW1hZ2VPdmVybGF5Lm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1hZ2VPdmVybGF5Lm9mZnNldEhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2xpZGVSZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuc2xpZGVSZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnNsaWRlRmluaXNoLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnNsaWRlRmluaXNoLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHNsaWRlUmVhZHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5zbGlkZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLnNsaWRlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBzbGlkZU1vdmUoZSkge1xuICAgICAgICBpZiAoIXRoaXMuY2xpY2tlZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMZWZ0UGVyY2VudCA9IHRoaXMuZ2V0Q3Vyc29yTGVmdChlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGVmdC1wb3MnLCBgJHtjdXJyZW50TGVmdFBlcmNlbnR9JWApO1xuICAgIH1cblxuICAgIHNsaWRlRmluaXNoKGUpIHtcbiAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0Q3Vyc29yTGVmdChlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZS5jaGFuZ2VkVG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgeyBsZWZ0LCB3aWR0aCB9ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNsaWRlckJ1dHRvbldpZHRoUGVyY2VudCA9ICh0aGlzLnNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIDQpICogMTAwIC8gd2lkdGg7XG4gICAgICAgIGNvbnN0IG1pbiA9IHNsaWRlckJ1dHRvbldpZHRoUGVyY2VudCAvIDI7XG4gICAgICAgIGNvbnN0IG1heCA9IDEwMCAtIG1pbjtcblxuICAgICAgICBjb25zdCBkZWx0YSA9IGV2ZW50LnBhZ2VYIC0gbGVmdDtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSAoZGVsdGEgLyB3aWR0aCkgKiAxMDA7ICAgIFxuXG4gICAgICAgIGlmIChwZXJjZW50IDwgbWluKSBwZXJjZW50ID0gbWluO1xuICAgICAgICBpZiAocGVyY2VudCA+IG1heCkgcGVyY2VudCA9IG1heDtcblxuICAgICAgICByZXR1cm4gcGVyY2VudDsgICAgXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInV0aWxzIiwiZmV0Y2giLCJyZXF1aXJlIiwiY29udGV4dCIsIndyYXBwZXIiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJjYWxsUHJvZHVjdE9wdGlvbiIsInByb2R1Y3RfY2xhc3MiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwicHJvZHVjdElkIiwiJCIsImRhdGEiLCJsaXN0IiwicHVzaCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJpdGVtIiwiYXJyIiwicHJvZHVjdF93cmFwcGVyIiwiZmluZCIsInR4dCIsInJlbW92ZSIsImNvdW50TW9yZU9wdGlvbiIsInByb2R1Y3RMaW5rIiwiYXR0ciIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiYUZpbHRlciIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdEZpZWxkQ29sb3IiLCJwcm9kdWN0RmllbGRTaXplIiwiYUZpbHRlcjIiLCJwcm9kdWN0T3B0aW9ucyIsImFGaWx0ZXIzIiwiZmlsdGVyIiwiZGlzcGxheVN0eWxlIiwiYUZpbHRlcjUiLCJkaXNwbGF5TmFtZSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MiIsImFGaWx0ZXI0IiwidmFsdWVzIiwidGl0bGVWYXIiLCJsYWJlbCIsImlkVmFyIiwibGVuZ3RoQ29sb3JWYXIiLCJoZXhDb2xvcnMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJpbWciLCJpbWFnZVVybCIsIkJvb2xlYW4iLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQiLCJQYXJhbGxheFNjcm9sbCIsImluaXQiLCJzaG93TG9ncyIsInJvdW5kIiwiX2xvZyIsIl9pbml0ZWQiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYSIsImIiLCJzZXRUaW1lb3V0IiwiX29uU2Nyb2xsIiwiX3Byb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJjIiwiaGVpZ2h0IiwicHJveHkiLCJkIiwiZSIsImYiLCJnIiwiaCIsImkiLCJrIiwiaiIsImwiLCJtIiwibiIsIk1hdGgiLCJtYXgiLCJvZmZzZXQiLCJ0b3AiLCJvIiwiZGlzdGFuY2UiLCJwIiwicSIsImVhc2luZyIsInIiLCJzIiwiZHVyYXRpb24iLCJ0IiwidSIsInYiLCJzbW9vdGhuZXNzIiwidyIsIm1pbiIsIm1hcCIsImNlaWwiLCJ6IiwieCIsInBlcnNwZWN0aXZlIiwieSIsInBhcmVudCIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNjYWxlIiwiQSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsIkIiLCJDIiwiZmFuY3lib3giLCJQYWdlTWFuYWdlciIsImhhbG9BZGRPcHRpb24iLCJwYXJhbGxheCIsIlByb2R1Y3REZXRhaWxzIiwiZGVmYXVsdE1vZGFsIiwibW9kYWxUeXBlcyIsImhhbG9Zb3V0dWJlQ2Fyb3VzZWwiLCJoYWxvTm90aWZ5TWUiLCJIb21lIiwiX1BhZ2VNYW5hZ2VyIiwiY2FsbCIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvdW50RG93bkhlcm9DYXJvdXNlbCIsImN1c3RvbVBhZ2luZyIsImxvYWRQcm9kdWN0QnlDYXRlZ29yeSIsImxvYWRQcm9kdWN0VGFiQnlDYXRlZ29yeSIsImxvYWRQcm9kdWN0QnlDYXRlZ29yeVdpdGhCYW5uZXIiLCJmYW5jeWJveFZpZGVvQmFubmVyIiwiZmFxc1RvZ2dsZSIsInJlY2VudEJsb2dTbGlkZXIiLCJob21lU3BlY2lhbFByb2R1Y3QiLCJob21lUGFyYWxsYXhCYW5uZXIiLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCJjdXN0b21lclJldmlld0Nhcm91c2VsIiwidG9wUmV2aWV3Q2Fyb3VzZWwiLCJjb2xsZWN0aW9uc0xpc3RDYXJvdXNlbCIsInBvcHVsYXJDb2xsZWN0aW9uc0Nhcm91c2VsIiwiaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCIsImNvdW50RG93bkJhbm5lciIsInNjcm9sbFRvTmV3c2xldHRlciIsImltYWdlQ29tcGFyaXNvbiIsInBhcmVudHMiLCJhZGRDbGFzcyIsImNvdW50RG93biIsImNvdW50RG93bkRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsInNlZnQiLCJjb3VudGRvd25mdW5jdGlvbiIsInNldEludGVydmFsIiwibm93IiwiY2xlYXJJbnRlcnZhbCIsImh0bWwiLCJkYXlzIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic3RyQ291bnREb3duIiwiaGVyb0N1c3RvbSIsImhlcm9DdXN0b21TbGlkZSIsInNsaWNrIiwiZG90cyIsImFycm93cyIsIm1vYmlsZUZpcnN0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJpbmZpbml0ZSIsImFzTmF2Rm9yIiwic2xpZGUiLCJ0ZXh0Iiwib24iLCJldmVudCIsInNsaWRlciIsInBvcyIsIiRzbGlkZXMiLCJyZW1vdmVDbGFzcyIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsImhlYWRlcl9oZWlnaHQiLCJzY3JvbGwiLCJzZXRGbGFnIiwid3JhcCIsImNhdElkIiwiY2F0VXJsIiwiYmxvY2tJZCIsImxvYWRDYXRlZ29yeSIsImlkIiwidXJsIiwib3B0aW9uIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsInJlc3BvbnNlIiwic2xpY2tDYXJvdXNlbCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJwYXJzZUludCIsImhvbWVfcHJvZHVjdF9ibG9ja19jb2wiLCJibG9jayIsInNob3ciLCJ0YWIiLCJjdXJyZW50VGFyZ2V0IiwiaGFzQ2xhc3MiLCJob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCIsIiR0YWJTb3J0aW5nIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiZGF0YVRhYiIsIiR0aGlzQmxvY2siLCJjbG9zZXN0IiwibG9jYXRpb24iLCJocmVmIiwibGFiZWxGbGFzaERlYWxzIiwic2xpY2tDYXJvdXNlbDQiLCJzbGlja0Nhcm91c2VsMyIsInNsaWNrQ2Fyb3VzZWwyIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3dpdGhfYmFubmVyX2NvbCIsIiRpdGVtU2lkZSIsIiR0aGlzTGFiZWwiLCJub3QiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwid2lkdGgiLCJyZXNpemUiLCJob21lX3Byb2R1Y3RfYmxvY2tfc3BlY2lhbCIsInZpZXdpbmdQcm9kdWN0Iiwidmlld2VyVGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfdGV4dCIsIm51bWJlcnNWaWV3ZXJfdGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyIiwibnVtYmVyc1ZpZXdlckxpc3QiLCJwYXJzZSIsIm51bWJlcnNWaWV3ZXJJdGVtIiwicmFuZG9tIiwiY291bnREb3duUHJvZHVjdCIsInNvbGRQcm9kdWN0IiwibnVtYmVyc1Byb2R1Y3RfdGV4dCIsInByb2R1Y3Rfc29sZFByb2R1Y3RfcHJvZHVjdHMiLCJudW1iZXJzSG91cnNfdGV4dCIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnMiLCJzb2xkUHJvZHVjdFRleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3RleHQiLCJzb2xkUHJvZHVjdFRleHQyIiwicHJvZHVjdF9zb2xkUHJvZHVjdF9ob3Vyc190ZXh0IiwibnVtYmVyc1Byb2R1Y3RMaXN0IiwibnVtYmVyc1Byb2R1Y3RJdGVtIiwibnVtYmVyc0hvdXJzTGlzdCIsIm51bWJlcnNIb3Vyc0l0ZW0iLCJpbml0VGh1bWJuYWlsc0hlaWdodCIsIiRzY29wZSIsImVsIiwiJGNhcm91c2VsX25hdiIsIiRjYXJvdXNlbF9mb3IiLCJwcm9kdWN0IiwiZ2V0QnlJZCIsInNjb3BlIiwiZ2V0Iiwic2V0UG9zaXRpb24iLCJzaWJsaW5ncyIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsInByb2R1Y3REZXRhaWxzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJpbWFnZSIsImNzcyIsIiRwcm9kV3JhcElkIiwiYWRhcHRpdmVIZWlnaHQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsImNhbGMiLCJzbGlkZUNvdW50IiwiJGhvbWVQR0YiLCIkaG9tZVBHRl9ncmlkIiwiaG9tZVBHRl9pdGVtTGVuZ3RoIiwiJGhvbWVQR0ZfYnRuQmxvY2siLCIkaG9tZVBHRl9idG4iLCJkYXRhQ29sdW1uIiwidHRfcHJvZHVjdFNob3ciLCJmV2lkdGgiLCJpbm5lcldpZHRoIiwid1dpZHRoIiwiJHRoaXNDb3VudERvd24iLCJhbmltYXRlIiwiX3RoaXMiLCJoYW5kbGVyIiwiZW50cmllcyIsIm9ic2VydmVyIiwiaXNJbnRlcnNlY3RpbmciLCJpbWFnZXNDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInRyYW5zZm9ybSIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsImltYWdlQ29tcGFyaXNvbkJsb2NrIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2xpY2tlZCIsImNvbnRhaW5lciIsImltYWdlT3ZlcmxheSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNsaWRlUmVhZHkiLCJiaW5kIiwic2xpZGVGaW5pc2giLCJzbGlkZU1vdmUiLCJjdXJyZW50TGVmdFBlcmNlbnQiLCJnZXRDdXJzb3JMZWZ0IiwiY2hhbmdlZFRvdWNoZXMiLCJfdGhpcyRjb250YWluZXIkZ2V0Qm8iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwic2xpZGVyQnV0dG9uV2lkdGhQZXJjZW50IiwiZGVsdGEiLCJwYWdlWCIsInBlcmNlbnQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
