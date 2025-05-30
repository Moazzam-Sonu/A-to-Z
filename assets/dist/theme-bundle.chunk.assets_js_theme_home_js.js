(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_home_js"],{

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
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__);
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
          _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5___default()(context, blockId);
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
          _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5___default()(context, blockId);
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
          _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5___default()(context, blockId);
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
        _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5___default()(context, $prodWrapId);
      });
    }
    if ($('.halo-block .productGrid').length > 0) {
      $('.halo-block .productGrid').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5___default()(context, $prodWrapId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsS0FBLENBQUMsQ0FBQyxZQUFVO0VBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7QUFBQSxDQUFDLENBQUM7QUFBQyxJ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YyxDQUFDLENBQUMsQ0FBQyxHQUFHblIsQ0FBQztJQUV4RCxJQUFBb1IscUJBQUEsR0FBd0IsSUFBSSxDQUFDWixTQUFTLENBQUNhLHFCQUFxQixDQUFDLENBQUM7TUFBdERDLElBQUksR0FBQUYscUJBQUEsQ0FBSkUsSUFBSTtNQUFFbEcsS0FBSyxHQUFBZ0cscUJBQUEsQ0FBTGhHLEtBQUs7SUFDbkIsSUFBTW1HLHdCQUF3QixHQUFHLENBQUMsSUFBSSxDQUFDNUosTUFBTSxDQUFDMEoscUJBQXFCLENBQUMsQ0FBQyxDQUFDakcsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUdBLEtBQUs7SUFDOUYsSUFBTXJKLEdBQUcsR0FBR3dQLHdCQUF3QixHQUFHLENBQUM7SUFDeEMsSUFBTXhRLEdBQUcsR0FBRyxHQUFHLEdBQUdnQixHQUFHO0lBRXJCLElBQU15UCxLQUFLLEdBQUc5SixLQUFLLENBQUMrSixLQUFLLEdBQUdILElBQUk7SUFDaEMsSUFBSUksT0FBTyxHQUFJRixLQUFLLEdBQUdwRyxLQUFLLEdBQUksR0FBRztJQUVuQyxJQUFJc0csT0FBTyxHQUFHM1AsR0FBRyxFQUFFMlAsT0FBTyxHQUFHM1AsR0FBRztJQUNoQyxJQUFJMlAsT0FBTyxHQUFHM1EsR0FBRyxFQUFFMlEsT0FBTyxHQUFHM1EsR0FBRztJQUVoQyxPQUFPMlEsT0FBTztFQUNsQixDQUFDO0VBQUEsT0FBQS9OLElBQUE7QUFBQSxFQTVtQzZCVCxxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9wYXJhbGxheC9qcXVlcnkucGFyYWxsYXgtc2Nyb2xsLm1pbi5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuLy8gY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIHdyYXBwZXIpIHtcbi8vICAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0ID09IHRydWUpIHtcbi8vICAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuLFxuLy8gICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyID0gJCgnIycrd3JhcHBlciksXG4vLyAgICAgICAgICAgICBwcm9kdWN0X2NsYXNzID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkJyk7XG4vLyAgICAgICAgIHZhciAgbGlzdCA9IFtdO1xuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGNhbGxQcm9kdWN0T3B0aW9uKCkge1xuLy8gICAgICAgICAgICAgcHJvZHVjdF9jbGFzcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoXCJwcm9kdWN0LWlkXCIpO1xuXG4vLyAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHByb2R1Y3RJZC50b1N0cmluZygpKTtcbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA+IDApe1xuLy8gICAgICAgICAgICAgICAgIGdldFByb2R1Y3RPcHRpb24obGlzdCkudGhlbihkYXRhID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uKGRhdGEpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICQuZWFjaChsaXN0LCAoaWR4LCBpdGVtKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0ge30sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gbGlzdFtpZHhdO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQoZWxlbWVudCkuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbdHh0XSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCA+IDQpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudE1vcmVPcHRpb24gID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggLSA0LFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGluayA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCdbZGF0YS1wcm9kdWN0LWlkPVwiJytwcm9kdWN0SWQrJ1wiXScpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDQpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkIC5zaG93bW9yZScpLmxlbmd0aCA8IDEpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLmFwcGVuZCgnPGEgaHJlZj1cIicrcHJvZHVjdExpbmsrJ1wiIGNsYXNzPVwic2hvd21vcmVcIj4rJytjb3VudE1vcmVPcHRpb24rJzwvYT4nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0T3B0aW9uKGxpc3Qpe1xuLy8gICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbi8vICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbi8vICAgICAgICAgICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFtgK2xpc3QrYF0sIGZpcnN0OiA1MCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiA1MCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFN3YXRjaE9wdGlvblZhbHVlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogNTApXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgIGB9KSxcbi8vICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIHJlbmRlck9wdGlvbihkYXRhKXtcbi8vICAgICAgICAgICAgIHZhciBhRmlsdGVyID0gZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuXG4vLyAgICAgICAgICAgICAkLmVhY2goYUZpbHRlciwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUuZW50aXR5SWQsXG4vLyAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKSxcbi8vICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkU2l6ZSA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZC0tc2l6ZScpLFxuLy8gICAgICAgICAgICAgICAgICAgICBhRmlsdGVyMiA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbi8vICAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjMgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnO1xuLy8gICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI1ID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheU5hbWUgPT09IGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDI7XG4vLyAgICAgICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICAgICBpZihhRmlsdGVyMy5sZW5ndGggPiAwKXtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI0ID0gYUZpbHRlcjNbMF0ubm9kZS52YWx1ZXMuZWRnZXM7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXI0LCAoaWR4LCBlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUubGFiZWwsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuZW50aXR5SWQsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29sb3JWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzLmxlbmd0aCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjEgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzBdLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMiA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMV0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IzID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1syXSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaW1hZ2VVcmw7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbmd0aENvbG9yVmFyID09IDIpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsZW5ndGhDb2xvclZhciA9PT0gMyl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMysnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oY29sb3IxKSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvclwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2NvbG9yMSsnXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihpbWcpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcraW1nKycpXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZXtcbi8vICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IucmVtb3ZlKCk7XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgaWYoYUZpbHRlcjUubGVuZ3RoID4gMCl7XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RGaWVsZFNpemUubGVuZ3RoIDwgMSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNpemVcIj48bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvblwiPicrY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dC50b1N0cmluZygpKyc8L2xhYmVsPjwvZGl2PicpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgaWYoKGFGaWx0ZXI1Lmxlbmd0aCA9PSAwKSAmJiAoYUZpbHRlcjMubGVuZ3RoID09IDApKXtcbi8vICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykucmVtb3ZlKCk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBjYWxsUHJvZHVjdE9wdGlvbigpO1xuLy8gICAgIH1cbi8vIH1cbiIsIiQoZnVuY3Rpb24oKXtQYXJhbGxheFNjcm9sbC5pbml0KCl9KTt2YXIgUGFyYWxsYXhTY3JvbGw9e3Nob3dMb2dzOiExLHJvdW5kOjFlMyxpbml0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2xvZyhcImluaXRcIiksdGhpcy5faW5pdGVkPyh0aGlzLl9sb2coXCJBbHJlYWR5IEluaXRlZFwiKSx2b2lkKHRoaXMuX2luaXRlZD0hMCkpOih0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oYSxiKXt3aW5kb3cuc2V0VGltZW91dChhLDFlMy82MCl9fSgpLHZvaWQgdGhpcy5fb25TY3JvbGwoITApKX0sX2luaXRlZDohMSxfcHJvcGVydGllczpbXCJ4XCIsXCJ5XCIsXCJ6XCIsXCJyb3RhdGVYXCIsXCJyb3RhdGVZXCIsXCJyb3RhdGVaXCIsXCJzY2FsZVhcIixcInNjYWxlWVwiLFwic2NhbGVaXCIsXCJzY2FsZVwiXSxfcmVxdWVzdEFuaW1hdGlvbkZyYW1lOm51bGwsX2xvZzpmdW5jdGlvbihhKXt0aGlzLnNob3dMb2dzJiZjb25zb2xlLmxvZyhcIlBhcmFsbGF4IFNjcm9sbCAvIFwiK2EpfSxfb25TY3JvbGw6ZnVuY3Rpb24oYSl7dmFyIGI9JChkb2N1bWVudCkuc2Nyb2xsVG9wKCksYz0kKHdpbmRvdykuaGVpZ2h0KCk7dGhpcy5fbG9nKFwib25TY3JvbGwgXCIrYiksJChcIltkYXRhLXBhcmFsbGF4XVwiKS5lYWNoKCQucHJveHkoZnVuY3Rpb24oZCxlKXt2YXIgZj0kKGUpLGc9W10saD0hMSxpPWYuZGF0YShcInN0eWxlXCIpO3ZvaWQgMD09aSYmKGk9Zi5hdHRyKFwic3R5bGVcIil8fFwiXCIsZi5kYXRhKFwic3R5bGVcIixpKSk7dmFyIGssaj1bZi5kYXRhKFwicGFyYWxsYXhcIildO2ZvcihrPTI7Zi5kYXRhKFwicGFyYWxsYXhcIitrKTtrKyspai5wdXNoKGYuZGF0YShcInBhcmFsbGF4LVwiK2spKTt2YXIgbD1qLmxlbmd0aDtmb3Ioaz0wO2s8bDtrKyspe3ZhciBtPWpba10sbj1tW1wiZnJvbS1zY3JvbGxcIl07dm9pZCAwPT1uJiYobj1NYXRoLm1heCgwLCQoZSkub2Zmc2V0KCkudG9wLWMpKSxuPTB8bjt2YXIgbz1tLmRpc3RhbmNlLHA9bVtcInRvLXNjcm9sbFwiXTt2b2lkIDA9PW8mJnZvaWQgMD09cCYmKG89Yyksbz1NYXRoLm1heCgwfG8sMSk7dmFyIHE9bS5lYXNpbmcscj1tW1wiZWFzaW5nLXJldHVyblwiXTtpZih2b2lkIDAhPXEmJiQuZWFzaW5nJiYkLmVhc2luZ1txXXx8KHE9bnVsbCksdm9pZCAwIT1yJiYkLmVhc2luZyYmJC5lYXNpbmdbcl18fChyPXEpLHEpe3ZhciBzPW0uZHVyYXRpb247dm9pZCAwPT1zJiYocz1vKSxzPU1hdGgubWF4KDB8cywxKTt2YXIgdD1tW1wiZHVyYXRpb24tcmV0dXJuXCJdO3ZvaWQgMD09dCYmKHQ9cyksbz0xO3ZhciB1PWYuZGF0YShcImN1cnJlbnQtdGltZVwiKTt2b2lkIDA9PXUmJih1PTApfXZvaWQgMD09cCYmKHA9bitvKSxwPTB8cDt2YXIgdj1tLnNtb290aG5lc3M7dm9pZCAwPT12JiYodj0zMCksdj0wfHYsKGF8fDA9PXYpJiYodj0xKSx2PTB8djt2YXIgdz1iO3c9TWF0aC5tYXgodyxuKSx3PU1hdGgubWluKHcscCkscSYmKHZvaWQgMD09Zi5kYXRhKFwic2Vuc1wiKSYmZi5kYXRhKFwic2Vuc1wiLFwiYmFja1wiKSx3Pm4mJihcImJhY2tcIj09Zi5kYXRhKFwic2Vuc1wiKT8odT0xLGYuZGF0YShcInNlbnNcIixcImdvXCIpKTp1KyspLHc8cCYmKFwiZ29cIj09Zi5kYXRhKFwic2Vuc1wiKT8odT0xLGYuZGF0YShcInNlbnNcIixcImJhY2tcIikpOnUrKyksYSYmKHU9cyksZi5kYXRhKFwiY3VycmVudC10aW1lXCIsdSkpLHRoaXMuX3Byb3BlcnRpZXMubWFwKCQucHJveHkoZnVuY3Rpb24oYSl7dmFyIGI9MCxjPW1bYV07aWYodm9pZCAwIT1jKXtcInNjYWxlXCI9PWF8fFwic2NhbGVYXCI9PWF8fFwic2NhbGVZXCI9PWF8fFwic2NhbGVaXCI9PWE/Yj0xOmM9MHxjO3ZhciBkPWYuZGF0YShcIl9cIithKTt2b2lkIDA9PWQmJihkPWIpO3ZhciBlPShjLWIpKigody1uKS8ocC1uKSkrYixpPWQrKGUtZCkvdjtpZihxJiZ1PjAmJnU8PXMpe3ZhciBqPWI7XCJiYWNrXCI9PWYuZGF0YShcInNlbnNcIikmJihqPWMsYz0tYyxxPXIscz10KSxpPSQuZWFzaW5nW3FdKG51bGwsdSxqLGMscyl9aT1NYXRoLmNlaWwoaSp0aGlzLnJvdW5kKS90aGlzLnJvdW5kLGk9PWQmJmU9PWMmJihpPWMpLGdbYV18fChnW2FdPTApLGdbYV0rPWksZCE9Z1thXSYmKGYuZGF0YShcIl9cIithLGdbYV0pLGg9ITApfX0sdGhpcykpfWlmKGgpe2lmKHZvaWQgMCE9Zy56KXt2YXIgeD1tLnBlcnNwZWN0aXZlO3ZvaWQgMD09eCYmKHg9ODAwKTt2YXIgeT1mLnBhcmVudCgpO3kuZGF0YShcInN0eWxlXCIpfHx5LmRhdGEoXCJzdHlsZVwiLHkuYXR0cihcInN0eWxlXCIpfHxcIlwiKSx5LmF0dHIoXCJzdHlsZVwiLFwicGVyc3BlY3RpdmU6XCIreCtcInB4OyAtd2Via2l0LXBlcnNwZWN0aXZlOlwiK3grXCJweDsgXCIreS5kYXRhKFwic3R5bGVcIikpfXZvaWQgMD09Zy5zY2FsZVgmJihnLnNjYWxlWD0xKSx2b2lkIDA9PWcuc2NhbGVZJiYoZy5zY2FsZVk9MSksdm9pZCAwPT1nLnNjYWxlWiYmKGcuc2NhbGVaPTEpLHZvaWQgMCE9Zy5zY2FsZSYmKGcuc2NhbGVYKj1nLnNjYWxlLGcuc2NhbGVZKj1nLnNjYWxlLGcuc2NhbGVaKj1nLnNjYWxlKTt2YXIgej1cInRyYW5zbGF0ZTNkKFwiKyhnLng/Zy54OjApK1wicHgsIFwiKyhnLnk/Zy55OjApK1wicHgsIFwiKyhnLno/Zy56OjApK1wicHgpXCIsQT1cInJvdGF0ZVgoXCIrKGcucm90YXRlWD9nLnJvdGF0ZVg6MCkrXCJkZWcpIHJvdGF0ZVkoXCIrKGcucm90YXRlWT9nLnJvdGF0ZVk6MCkrXCJkZWcpIHJvdGF0ZVooXCIrKGcucm90YXRlWj9nLnJvdGF0ZVo6MCkrXCJkZWcpXCIsQj1cInNjYWxlWChcIitnLnNjYWxlWCtcIikgc2NhbGVZKFwiK2cuc2NhbGVZK1wiKSBzY2FsZVooXCIrZy5zY2FsZVorXCIpXCIsQz16K1wiIFwiK0ErXCIgXCIrQitcIjtcIjt0aGlzLl9sb2coQyksZi5hdHRyKFwic3R5bGVcIixcInRyYW5zZm9ybTpcIitDK1wiIC13ZWJraXQtdHJhbnNmb3JtOlwiK0MrXCIgXCIraSl9fSx0aGlzKSksd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT93aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcywhMSkpOnRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgkLnByb3h5KHRoaXMuX29uU2Nyb2xsLHRoaXMsITEpKX19O1xuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLmRyb3Bkb3duJztcbmltcG9ydCBmYW5jeWJveCBmcm9tICcuL2hhbG90aGVtZXMvanF1ZXJ5LmZhbmN5Ym94Lm1pbic7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBoYWxvQWRkT3B0aW9uIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuaW1wb3J0IHBhcmFsbGF4IGZyb20gJy4vaGFsb3RoZW1lcy9wYXJhbGxheC9qcXVlcnkucGFyYWxsYXgtc2Nyb2xsLm1pbic7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCwgbW9kYWxUeXBlcyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBoYWxvWW91dHViZUNhcm91c2VsIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvVmlkZW8nO1xuaW1wb3J0IGhhbG9Ob3RpZnlNZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb05vdGlmeU1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY291bnREb3duSGVyb0Nhcm91c2VsKCk7XG4gICAgICAgIHRoaXMuY3VzdG9tUGFnaW5nKCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5KCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RUYWJCeUNhdGVnb3J5KCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5V2l0aEJhbm5lcigpO1xuICAgICAgICB0aGlzLmZhbmN5Ym94VmlkZW9CYW5uZXIoKTtcbiAgICAgICAgdGhpcy5mYXFzVG9nZ2xlKCk7XG4gICAgICAgIHRoaXMucmVjZW50QmxvZ1NsaWRlcigpO1xuICAgICAgICB0aGlzLmhvbWVTcGVjaWFsUHJvZHVjdCgpO1xuICAgICAgICB0aGlzLmhvbWVQYXJhbGxheEJhbm5lcigpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpO1xuICAgICAgICB0aGlzLmN1c3RvbWVyUmV2aWV3Q2Fyb3VzZWwoKTtcbiAgICAgICAgdGhpcy50b3BSZXZpZXdDYXJvdXNlbCgpO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25zTGlzdENhcm91c2VsKCk7XG4gICAgICAgIHRoaXMucG9wdWxhckNvbGxlY3Rpb25zQ2Fyb3VzZWwoKTtcbiAgICAgICAgdGhpcy5ob21lUHJvZHVjdFJlY29tbWVuZGVkKCk7XG4gICAgICAgIHRoaXMuY291bnREb3duQmFubmVyKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9OZXdzbGV0dGVyKCk7XG4gICAgICAgIHRoaXMuaW1hZ2VDb21wYXJpc29uKCk7XG4gICAgfVxuXG4gICAgY291bnREb3duSGVyb0Nhcm91c2VsKCkge1xuICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLWNvdW50ZG93bicpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpLmFkZENsYXNzKCdoYXMtY291bnQtZG93bicpO1xuXG4gICAgICAgICAgICB2YXIgY291bnREb3duID0gJChlbGVtZW50KS5kYXRhKCdjYXJvdXNlbC1jb3VudGRvd24nKSxcbiAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbmV3IERhdGUoY291bnREb3duKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgc2VmdCA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoJycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyQ291bnREb3duID0gXCI8c3BhbiBjbGFzcz0nbnVtJz5cIitkYXlzK1wiPHNwYW4+REFZUzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIraG91cnMrXCI8c3Bhbj5IT1VSUzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9J251bSc+XCIrbWludXRlcytcIjxzcGFuPk1JTlM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK3NlY29uZHMrXCI8c3Bhbj5TRUNTPC9zcGFuPjwvc3Bhbj5cIjtcblxuICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoc3RyQ291bnREb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3VzdG9tUGFnaW5nKCl7XG4gICAgICAgIGNvbnN0IGhlcm9DdXN0b20gPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbScpO1xuICAgICAgICBjb25zdCBoZXJvQ3VzdG9tU2xpZGUgPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbSAuc2xpY2stZG90cyBsaScpO1xuICAgICAgICBoZXJvQ3VzdG9tLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IGhlcm9DdXN0b20uZGF0YSgnYXV0b3BsYXknKSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgYXNOYXZGb3I6IFwiLmhlcm9DYXJvdXNlbFwiXG4gICAgICAgIH0pO1xuICAgICAgICAvL0FEQVxuICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbSAuc2xpY2stZG90cyBsaScpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLnRleHQoKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykudGV4dCgnMCcgKyBzbGlkZSkuYWRkQ2xhc3MoJ3NsaWNrLWRvdHMtaXRlbScpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGhlcm9DdXN0b20ub24oJ2FmdGVyQ2hhbmdlJywgKGV2ZW50LCBzbGlkZXIsIGkpID0+IHtcbiAgICAgICAgICAgIHZhciBwb3MgPSAkKHNsaWRlci4kc2xpZGVzW2ldKS5maW5kKCdkaXZbZGF0YS1wb3NpdGlvbl0nKS5kYXRhKCdwb3NpdGlvbicpO1xuXG4gICAgICAgICAgICBpZihwb3MgPT09ICdyaWdodCcpe1xuICAgICAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21MZWZ0JykuYWRkQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGlmICgkKCcuaGVyb0Nhcm91c2VsLXNsaWRlLS1maXJzdCAuaGVyb0Nhcm91c2VsLWNvbnRlbnQtd3JhcHBlciAuaGVyb0Nhcm91c2VsLWNvbnRlbnQtLXJpZ2h0JykubGVuZ3RoKSB7XG4gICAgICAgICAgICBoZXJvQ3VzdG9tLnJlbW92ZUNsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tUmlnaHQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeSgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTInXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiBoZWFkZXJfaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdElkID0gJChlbGVtZW50KS5kYXRhKCdkYXRhLWNhdGVnb3J5JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gJChlbGVtZW50KS5kYXRhKCdjYXRlZ29yeS11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighJCgnI3Byb2R1Y3QtYnktY2F0ZS0nK2NhdElkKycgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yeShpZCwgdXJsLCBvcHRpb24sIHdyYXAsIGJsb2NrSWQpe1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIXdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHdyYXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX2NvbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfY29sKSAtIDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfY29sKSAtIDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0VGFiQnlDYXRlZ29yeSgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTMnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB2YXIgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZXRGbGFnKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXAgPSBibG9jay5maW5kKCcucHJvZHVjdENhcm91c2VsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9IGJsb2NrLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyBbZGF0YS10YWJdJykub24oJ3RvZ2dsZWQnLCAoZXZlbnQsIHRhYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcCA9IGJsb2NrLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdElkID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LWlkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gYmxvY2suYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZighJChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCcucHJvZHVjdENhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCF3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xuICAgICAgICAgICAgICAgICAgICB3cmFwLnBhcmVudHMoJy50YWItY29udGVudCcpLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbCh3cmFwKXtcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCkgLSAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wpIC0gMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RCeUNhdGVnb3J5V2l0aEJhbm5lcigpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTQnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoJCgnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJTb3J0aW5nID0gJCgnLnRhYi1zb3J0aW5nIC50YWItdGl0bGUnKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiBoZWFkZXJfaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhvbWUtbGF5b3V0LTInKS5sZW5ndGggJiYgISQoZWxlbWVudCkuaGFzQ2xhc3MoJ2hvbWUyLWZsYXNoLWRlYWxzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnRhYkNvbnRlbnQtbmV3IC5wcm9kdWN0Q2Fyb3VzZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3cmFwID0gJChlbGVtZW50KS5maW5kKCcucHJvZHVjdENhcm91c2VsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXRJZCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktd2l0aC1iYW5uZXItaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXdpdGgtYmFubmVyLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC13aXRoLWJhbm5lci0nK2NhdElkKycgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoY2F0SWQsIGNhdFVybCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHRhYlNvcnRpbmcub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVGFiID0gJHRhcmdldC5kYXRhKCd0YWInKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpc0Jsb2NrID0gJHRhcmdldC5jbG9zZXN0KCcuaGFsby1ibG9jay1wcm9kdWN0Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkdGhpc0Jsb2NrLmZpbmQoJy50YWJDb250ZW50LScrZGF0YVRhYisnIC5wcm9kdWN0Q2Fyb3VzZWwnKSxcbiAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSAkdGFyZ2V0LmRhdGEoJ2NhdGUtaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gJHRhcmdldC5kYXRhKCdjYXRlLXVybCcpLFxuICAgICAgICAgICAgICAgICAgICBibG9ja0lkID0gJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YVRhYiA9PSAndmlld2FsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAkdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1zb3J0aW5nJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmZicpXG4gICAgICAgICAgICAgICAgaWYoISR0YXJnZXQuaGFzQ2xhc3MoJ2lzLWxvYWRlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKycgLnByb2R1Y3RDYXJvdXNlbCcpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKCcuY291bnREb3dudGltZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCAkKCcuY291bnREb3dudGltZXInKS5hdHRyKCdkYXRhLWNvdW50LWRvd24nKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25mdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmNvdW50RG93bnRpbWVyXCIpLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ckNvdW50RG93biA9IFwiPGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrZGF5cytcIjwvc3Bhbj48c3BhbiBjbGFzcz0ndGV4dCc+ZDwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPSdjbG9jay1pdGVtJz48c3BhbiBjbGFzcz0nbnVtJz5cIitob3VycytcIjo8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrbWludXRlcytcIjo8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrc2Vjb25kcytcIjwvc3Bhbj48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuY291bnREb3dudGltZXJcIikuaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCF3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5oYXNDbGFzcygnaGFsby1ibG9jay1wcm9kdWN0LWJhbm5lcnMnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhvbWUtbGF5b3V0LTInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdob21lMi1mbGFzaC1kZWFscycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRmxhc2hEZWFscyh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbDQod3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMyh3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdoYWxvLWJsb2NrLXByb2R1Y3QtYmFubmVyczInKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMih3cmFwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWwod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsMih3cmFwKXtcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbDMod3JhcCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWw0KHdyYXApe1xuICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbGFiZWxGbGFzaERlYWxzKHdyYXApIHtcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtU2lkZSA9IHdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpO1xuXG4gICAgICAgICAgICAkaXRlbVNpZGUuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpc0xhYmVsID0gJChlbGVtZW50KS5maW5kKCcuc2FsZS1iYWRnZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzTGFiZWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gJHRoaXNMYWJlbC5maW5kKCcudGV4dCcpLmRhdGEoJ3NhbGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jYXJkLXByaWNlJykuYWRkQ2xhc3MoJ2hhcy1sYWJlbFNhbGUnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjYXJkLWxhYmVsLXNhbGVcIj48c3Bhbj4tJytsYWJlbCsnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpc0xhYmVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFuY3lib3hWaWRlb0Jhbm5lcigpe1xuICAgICAgICBpZiAoJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFxc1RvZ2dsZSgpe1xuICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkIC50aXRsZScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAkKCcuaGFsby1zaG9ydC1mYXFzIC5jYXJkIC50aXRsZScpLm5vdCgkdGFyZ2V0KS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG5cbiAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoJChlbGVtZW50KS5maW5kKCcudGl0bGUnKS5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlRG93bihcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJy5jb2xsYXBzZScpLnNsaWRlVXAoXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWNlbnRCbG9nU2xpZGVyKCl7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0KSB7XG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygndW5zbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1yZWNlbnQtcG9zdCcpLnNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhvbWVTcGVjaWFsUHJvZHVjdCgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGlmKGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfc3BlY2lhbCA9PSB0cnVlKXtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbZGF0YS1zcGVjaWFsLXByb2R1Y3QtaWRdJykuZGF0YSgnc3BlY2lhbC1wcm9kdWN0LWlkJyksXG4gICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID17XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tc3BlY2lhbC1wcm9kdWN0LXRtcCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZXRGbGFnKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoISQoJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCAucHJvZHVjdFZpZXcnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlID0gJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuaHRtbChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LXNvbGRQcm9kdWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3aW5nUHJvZHVjdCgkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctVmlld2luZ1Byb2R1Y3QnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93blByb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LWNvdW50RG93bicpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5maW5kKCdbZGF0YS1zbGlja10nKS5zbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctZm9yJykuZ2V0KDApLnNsaWNrLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFRodW1ibmFpbHNIZWlnaHQoc2NvcGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvTm90aWZ5TWUoJChzY29wZSksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvWW91dHViZUNhcm91c2VsKCQoc2NvcGUpLmZpbmQoJ1tkYXRhLXNsaWNrXScpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5vbignY2xpY2snLCAnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1vcGVuJykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChzY29wZSkuZmluZCgnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudScpLmxlbmd0aCA9PT0gMCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJChzY29wZSksIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0RGV0YWlscztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmlld2luZ1Byb2R1Y3Qod3JhcHBlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdyYXBwZXIubGVuZ3RoID4gMCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmlld2VyVGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyX3RleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF92aWV3ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyTGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1ZpZXdlcl90ZXh0ICsgXCJdXCIpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNWaWV3ZXJJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzVmlld2VyTGlzdC5sZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWV5ZVwiLz48L3N2Zz4nICsgbnVtYmVyc1ZpZXdlckxpc3RbbnVtYmVyc1ZpZXdlckl0ZW1dICsgXCIgXCIgKyB2aWV3ZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApOyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb3VudERvd25Qcm9kdWN0KHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnREb3duID0gd3JhcHBlci5kYXRhKCdjb3VudGRvd24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQgPSB3cmFwcGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyQ291bnREb3duID0gJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tYmVsbFwiLz48L3N2Zz48c3BhbiBjbGFzcz1cInRleHRcIj48c3Bhbj5MaW1pdGVkIHRpbWUgb2ZmZXIsIGVuZCBpbjo8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrZGF5cysnZCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicraG91cnMrJ2ggOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK21pbnV0ZXMrJ20gOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK3NlY29uZHMrJ3M8L3NwYW4+JztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNvbGRQcm9kdWN0KHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0X3RleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc190ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0MiA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzX3RleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0TGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1Byb2R1Y3RfdGV4dCArIFwiXVwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzUHJvZHVjdEl0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNQcm9kdWN0TGlzdC5sZW5ndGgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0xpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNIb3Vyc190ZXh0ICsgXCJdXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzSXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc0hvdXJzTGlzdC5sZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZmlyZVwiLz48L3N2Zz48c3Bhbj4nICsgbnVtYmVyc1Byb2R1Y3RMaXN0W251bWJlcnNQcm9kdWN0SXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dCArIFwiIFwiICsgbnVtYmVyc0hvdXJzTGlzdFtudW1iZXJzSG91cnNJdGVtXSArIFwiIFwiICsgc29sZFByb2R1Y3RUZXh0MiArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0VGh1bWJuYWlsc0hlaWdodCgkc2NvcGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2Fyb3VzZWxfbmF2ID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LW5hdicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRjYXJvdXNlbF9mb3IuZmluZCgnLnNsaWNrLWFycm93JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yLnBhcmVudCgpLmFkZENsYXNzKCdhcnJvd3MtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYXJvdXNlbF9mb3IucGFyZW50KCkuYWRkQ2xhc3MoJ2Fycm93cy1kaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9tZVBhcmFsbGF4QmFubmVyKCl7XG4gICAgICAgIGlmKCQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciB3cmFwID0gJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycycpLFxuICAgICAgICAgICAgICAgIGltYWdlID0gd3JhcC5maW5kKCdbZGF0YS1pbWFnZV0nKS5kYXRhKCdpbWFnZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3cmFwLmZpbmQoJ1tkYXRhLWltYWdlXScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJytpbWFnZSsnKScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKCl7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgaWYoJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCAkcHJvZFdyYXBJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJy5oYWxvLWJsb2NrIC5wcm9kdWN0R3JpZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLmhhbG8tYmxvY2sgLnByb2R1Y3RHcmlkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgJHByb2RXcmFwSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsICRwcm9kV3JhcElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmFubmVyIHBhcmFsbGF4IDJcbiAgICBjdXN0b21lclJldmlld0Nhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycyAuaGFsby1yb3cnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycyAuaGFsby1yb3cnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzIC5oYWxvLXJvdycpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdOZXh0IFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LW5leHQ+PC91c2U+PC9zdmc+XCIsIFxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvcFJldmlld0Nhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnI2hhbG9fdG9wX3Jldmlld3MgLmhhbG8tcm93JykubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoISQoJyNoYWxvX3RvcF9yZXZpZXdzIC5oYWxvLXJvdycpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSkge1xuICAgICAgICAgICAgICAgICQoJyNoYWxvX3RvcF9yZXZpZXdzIC5oYWxvLXJvdycpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcyNSUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGVjdGlvbnNMaXN0Q2Fyb3VzZWwoKSB7XG4gICAgICAgIGlmICgkKCcuY29sbGVjdGlvbnMtbGlzdF9fY2Fyb3VzZWwnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghJCgnLmNvbGxlY3Rpb25zLWxpc3RfX2Nhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XG4gICAgICAgICAgICAgICAgJCgnLmNvbGxlY3Rpb25zLWxpc3RfX2Nhcm91c2VsJykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93JyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXJDb2xsZWN0aW9uc0Nhcm91c2VsKCkge1xuICAgICAgICBpZiAoJCgnLnBvcHVsYXItY29sbGVjdGlvbl9fY2Fyb3VzZWwnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghJCgnLnBvcHVsYXItY29sbGVjdGlvbl9fY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpIHtcbiAgICAgICAgICAgICAgICAkKCcucG9wdWxhci1jb2xsZWN0aW9uX19jYXJvdXNlbCcpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcbiAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9I3NsaWNrLWFycm93LXByZXY+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoJy5wb3B1bGFyLWNvbGxlY3Rpb25fX2Nhcm91c2VsJykub24oJ2JlZm9yZUNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FsYyA9ICggKG5leHRTbGlkZSkgLyAoc2xpY2suc2xpZGVDb3VudC0xKSApICogMTAwO1xuICAgICAgICAgICAgICAgIC8vICQoJy5wb3B1bGFyLWNvbGxlY3Rpb25fX3Byb2dyZXNzJykuYXR0cignYXJpYS12YWx1ZW5vdycsIGNhbGMpO1xuICAgICAgICAgICAgICAgICQoJy5wb3B1bGFyLWNvbGxlY3Rpb25fX3Byb2dyZXNzIC5wcm9ncmVzcycpLmNzcygnYmFja2dyb3VuZC1zaXplJywgY2FsYyArICclIDEwMCUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCgpIHtcbiAgICAgICAgY29uc3QgJGhvbWVQR0YgPSAkKCcuaG9tZTItYmxvY2stcmVjb21tZW5kZWQnKTtcbiAgICAgICAgY29uc3QgJGhvbWVQR0ZfZ3JpZCA9ICRob21lUEdGLmZpbmQoJy5wcm9kdWN0R3JpZCcpO1xuICAgICAgICBjb25zdCBob21lUEdGX2l0ZW1MZW5ndGggPSAkaG9tZVBHRl9ncmlkLmZpbmQoJy5wcm9kdWN0JykubGVuZ3RoO1xuICAgICAgICBjb25zdCAkaG9tZVBHRl9idG5CbG9jayA9ICQoJy5ob21lUEdGX2J0bicpO1xuICAgICAgICBjb25zdCAkaG9tZVBHRl9idG4gPSAkKCcuaG9tZVBHRl9idG4gYScpO1xuICAgICAgICBjb25zdCBkYXRhQ29sdW1uID0gJGhvbWVQR0ZfZ3JpZC5kYXRhKCdjb2x1bW5zJyk7XG4gICAgICAgIGxldCB0dF9wcm9kdWN0U2hvdztcblxuICAgICAgICBpZiAoJGhvbWVQR0YubGVuZ3RoICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgICAgICBpZiAoZldpZHRoID4gMTI3OSAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiAxMCkge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gMTI3OSAmJiBmV2lkdGggPiA5OTEgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gOCkge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gOTkxICYmIGZXaWR0aCA+IDc2NyAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiA2KSB7XG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZXaWR0aCA8PSA3NjcgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICRob21lUEdGX2J0bkJsb2NrLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRob21lUEdGX2J0bi5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgICAgIGlmICh3V2lkdGggPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdXaWR0aCA8PSAxMjc5ICYmIHdXaWR0aCA+IDk5MSkge1xuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdXaWR0aCA8PSA5OTEgJiYgd1dpZHRoID4gNzY3KSB7XG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdDpoaWRkZW4nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuOmx0KCcrdHRfcHJvZHVjdFNob3crJyknKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRob21lUEdGX2J0bi50ZXh0KCdObyBNb3JlIFByb2R1Y3RzJykuYXR0cignZGlzYWJsZWQnLCAnJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY291bnREb3duQmFubmVyKCkge1xuICAgICAgICBjb25zdCAkdGhpc0NvdW50RG93biA9ICQoJy5jb3VudGRvd24tYmFubmVyX19jb3VudGRvd24nKTtcbiAgICAgICAgaWYgKCR0aGlzQ291bnREb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZSgkdGhpc0NvdW50RG93bi5hdHRyKCdkYXRhLWNvdW50LWRvd24nKSkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICB2YXIgY291bnRkb3duZnVuY3Rpb24gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAkdGhpc0NvdW50RG93bi5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJDb3VudERvd24gPSBcIjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK2RheXMrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3RleHQnPkRheXM8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIraG91cnMrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3RleHQnPkhvdXJzPC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK21pbnV0ZXMrXCI8L3NwYW4+PHNwYW4gY2xhc3M9J3RleHQnPk1pbnV0ZXM8L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz0nY2xvY2staXRlbSc+PHNwYW4gY2xhc3M9J251bSc+XCIrc2Vjb25kcytcIjwvc3Bhbj48c3BhbiBjbGFzcz0ndGV4dCc+U2Vjb25kczwvc3Bhbj48L2Rpdj5cIjtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNDb3VudERvd24uaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9OZXdzbGV0dGVyKCkge1xuICAgICAgICAkKCcuYnRuLWd0LW5ld3NsZXR0ZXInKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJy5mb290ZXItc3Vic2NyaXB0aW9uJykub2Zmc2V0KCkudG9wfSwgNzAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpbWFnZUNvbXBhcmlzb24oKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VzQ29udGFpbmVyID0gZW50cmllc1swXS50YXJnZXQucXVlcnlTZWxlY3RvcignW2RhdGEtaW1hZ2VzLWNvbnRhaW5lcl0nKTtcbiAgICAgICAgICAgICAgICBpbWFnZXNDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGVmdC1wb3MnLCAnNTAlJyk7XG4gICAgICAgICAgICAgICAgaW1hZ2VzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItdGh1bWItYXJyb3dzJykuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGltYWdlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKSwgMTAwMClcblxuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aHJlc2hvbGQ6IC43XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWFnZUNvbXBhcmlzb25CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWltYWdlLWNvbXBhcmlzaW9uXScpO1xuICAgICAgICBpZiAoIWltYWdlQ29tcGFyaXNvbkJsb2NrKSByZXR1cm47XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZUNvbXBhcmlzb25CbG9jayk7XG5cbiAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gaW1hZ2VDb21wYXJpc29uQmxvY2sucXVlcnlTZWxlY3RvcignW2RhdGEtaW1hZ2VzLWNvbnRhaW5lcl0nKVxuICAgICAgICB0aGlzLnNsaWRlciA9IGltYWdlQ29tcGFyaXNvbkJsb2NrLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWltYWdlLXNsaWRlcl0nKTtcbiAgICAgICAgdGhpcy5pbWFnZU92ZXJsYXkgPSBpbWFnZUNvbXBhcmlzb25CbG9jay5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtY29tcGFyaXNvbl9faW1hZ2UtLWZpcnN0Jyk7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuaW1hZ2VPdmVybGF5Lm9mZnNldFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuaW1hZ2VPdmVybGF5Lm9mZnNldEhlaWdodDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2xpZGVSZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuc2xpZGVSZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnNsaWRlRmluaXNoLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnNsaWRlRmluaXNoLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHNsaWRlUmVhZHkoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5zbGlkZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLnNsaWRlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBzbGlkZU1vdmUoZSkge1xuICAgICAgICBpZiAoIXRoaXMuY2xpY2tlZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMZWZ0UGVyY2VudCA9IHRoaXMuZ2V0Q3Vyc29yTGVmdChlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGVmdC1wb3MnLCBgJHtjdXJyZW50TGVmdFBlcmNlbnR9JWApO1xuICAgIH1cblxuICAgIHNsaWRlRmluaXNoKGUpIHtcbiAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0Q3Vyc29yTGVmdChlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZS5jaGFuZ2VkVG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgeyBsZWZ0LCB3aWR0aCB9ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHNsaWRlckJ1dHRvbldpZHRoUGVyY2VudCA9ICh0aGlzLnNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIDQpICogMTAwIC8gd2lkdGg7XG4gICAgICAgIGNvbnN0IG1pbiA9IHNsaWRlckJ1dHRvbldpZHRoUGVyY2VudCAvIDI7XG4gICAgICAgIGNvbnN0IG1heCA9IDEwMCAtIG1pbjtcblxuICAgICAgICBjb25zdCBkZWx0YSA9IGV2ZW50LnBhZ2VYIC0gbGVmdDtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSAoZGVsdGEgLyB3aWR0aCkgKiAxMDA7ICAgIFxuXG4gICAgICAgIGlmIChwZXJjZW50IDwgbWluKSBwZXJjZW50ID0gbWluO1xuICAgICAgICBpZiAocGVyY2VudCA+IG1heCkgcGVyY2VudCA9IG1heDtcblxuICAgICAgICByZXR1cm4gcGVyY2VudDsgICAgXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIiQiLCJQYXJhbGxheFNjcm9sbCIsImluaXQiLCJzaG93TG9ncyIsInJvdW5kIiwiX2xvZyIsIl9pbml0ZWQiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYSIsImIiLCJzZXRUaW1lb3V0IiwiX29uU2Nyb2xsIiwiX3Byb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJjIiwiaGVpZ2h0IiwiZWFjaCIsInByb3h5IiwiZCIsImUiLCJmIiwiZyIsImgiLCJpIiwiZGF0YSIsImF0dHIiLCJrIiwiaiIsInB1c2giLCJsIiwibGVuZ3RoIiwibSIsIm4iLCJNYXRoIiwibWF4Iiwib2Zmc2V0IiwidG9wIiwibyIsImRpc3RhbmNlIiwicCIsInEiLCJlYXNpbmciLCJyIiwicyIsImR1cmF0aW9uIiwidCIsInUiLCJ2Iiwic21vb3RobmVzcyIsInciLCJtaW4iLCJtYXAiLCJjZWlsIiwieiIsIngiLCJwZXJzcGVjdGl2ZSIsInkiLCJwYXJlbnQiLCJzY2FsZVgiLCJzY2FsZVkiLCJzY2FsZVoiLCJzY2FsZSIsIkEiLCJyb3RhdGVYIiwicm90YXRlWSIsInJvdGF0ZVoiLCJCIiwiQyIsImZhbmN5Ym94IiwiUGFnZU1hbmFnZXIiLCJ1dGlscyIsImhhbG9BZGRPcHRpb24iLCJwYXJhbGxheCIsIlByb2R1Y3REZXRhaWxzIiwiZGVmYXVsdE1vZGFsIiwibW9kYWxUeXBlcyIsImhhbG9Zb3V0dWJlQ2Fyb3VzZWwiLCJoYWxvTm90aWZ5TWUiLCJIb21lIiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsImNhbGwiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJjb3VudERvd25IZXJvQ2Fyb3VzZWwiLCJjdXN0b21QYWdpbmciLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyIiwiZmFuY3lib3hWaWRlb0Jhbm5lciIsImZhcXNUb2dnbGUiLCJyZWNlbnRCbG9nU2xpZGVyIiwiaG9tZVNwZWNpYWxQcm9kdWN0IiwiaG9tZVBhcmFsbGF4QmFubmVyIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCIsInRvcFJldmlld0Nhcm91c2VsIiwiY29sbGVjdGlvbnNMaXN0Q2Fyb3VzZWwiLCJwb3B1bGFyQ29sbGVjdGlvbnNDYXJvdXNlbCIsImhvbWVQcm9kdWN0UmVjb21tZW5kZWQiLCJjb3VudERvd25CYW5uZXIiLCJzY3JvbGxUb05ld3NsZXR0ZXIiLCJpbWFnZUNvbXBhcmlzb24iLCJpbmRleCIsImVsZW1lbnQiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJjb3VudERvd24iLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJzZWZ0IiwiY291bnRkb3duZnVuY3Rpb24iLCJzZXRJbnRlcnZhbCIsIm5vdyIsImNsZWFySW50ZXJ2YWwiLCJodG1sIiwiZGF5cyIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0ckNvdW50RG93biIsImhlcm9DdXN0b20iLCJoZXJvQ3VzdG9tU2xpZGUiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiaW5maW5pdGUiLCJhc05hdkZvciIsInNsaWRlIiwiZmluZCIsInRleHQiLCJvbiIsImV2ZW50Iiwic2xpZGVyIiwicG9zIiwiJHNsaWRlcyIsInJlbW92ZUNsYXNzIiwib3B0aW9ucyIsInRlbXBsYXRlIiwiaGVhZGVyX2hlaWdodCIsInNjcm9sbCIsInNldEZsYWciLCJ3cmFwIiwiY2F0SWQiLCJjYXRVcmwiLCJibG9ja0lkIiwibG9hZENhdGVnb3J5IiwiaWQiLCJ1cmwiLCJvcHRpb24iLCJhcGkiLCJnZXRQYWdlIiwiZXJyIiwicmVzcG9uc2UiLCJzbGlja0Nhcm91c2VsIiwicmVtb3ZlIiwibmV4dEFycm93IiwicHJldkFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInBhcnNlSW50IiwidGhlbWVTZXR0aW5ncyIsImhvbWVfcHJvZHVjdF9ibG9ja19jb2wiLCJibG9jayIsInNob3ciLCJ0YWIiLCJjdXJyZW50VGFyZ2V0IiwiaGFzQ2xhc3MiLCJob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCIsIiR0YWJTb3J0aW5nIiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiZGF0YVRhYiIsIiR0aGlzQmxvY2siLCJjbG9zZXN0IiwibG9jYXRpb24iLCJocmVmIiwibGFiZWxGbGFzaERlYWxzIiwic2xpY2tDYXJvdXNlbDQiLCJzbGlja0Nhcm91c2VsMyIsInNsaWNrQ2Fyb3VzZWwyIiwiaG9tZV9wcm9kdWN0X2Jsb2NrX3dpdGhfYmFubmVyX2NvbCIsIiRpdGVtU2lkZSIsIiR0aGlzTGFiZWwiLCJsYWJlbCIsImFwcGVuZCIsIm5vdCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJ3aWR0aCIsInJlc2l6ZSIsImhvbWVfcHJvZHVjdF9ibG9ja19zcGVjaWFsIiwicHJvZHVjdElkIiwidmlld2luZ1Byb2R1Y3QiLCJ3cmFwcGVyIiwidmlld2VyVGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfdGV4dCIsIm51bWJlcnNWaWV3ZXJfdGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyIiwibnVtYmVyc1ZpZXdlckxpc3QiLCJKU09OIiwicGFyc2UiLCJudW1iZXJzVmlld2VySXRlbSIsInJhbmRvbSIsImNvdW50RG93blByb2R1Y3QiLCJzb2xkUHJvZHVjdCIsIm51bWJlcnNQcm9kdWN0X3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzIiwibnVtYmVyc0hvdXJzX3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzIiwic29sZFByb2R1Y3RUZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0Iiwic29sZFByb2R1Y3RUZXh0MiIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dCIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIm51bWJlcnNQcm9kdWN0SXRlbSIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwiaW5pdFRodW1ibmFpbHNIZWlnaHQiLCIkc2NvcGUiLCJlbCIsIiRjYXJvdXNlbF9uYXYiLCIkY2Fyb3VzZWxfZm9yIiwicHJvZHVjdCIsImdldEJ5SWQiLCJzY29wZSIsImdldCIsInNldFBvc2l0aW9uIiwic2libGluZ3MiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJwcm9kdWN0RGV0YWlscyIsInNldFByb2R1Y3RWYXJpYW50IiwiaW1hZ2UiLCJjc3MiLCIkcHJvZFdyYXBJZCIsImFkYXB0aXZlSGVpZ2h0IiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCJjYWxjIiwic2xpZGVDb3VudCIsIiRob21lUEdGIiwiJGhvbWVQR0ZfZ3JpZCIsImhvbWVQR0ZfaXRlbUxlbmd0aCIsIiRob21lUEdGX2J0bkJsb2NrIiwiJGhvbWVQR0ZfYnRuIiwiZGF0YUNvbHVtbiIsInR0X3Byb2R1Y3RTaG93IiwiZldpZHRoIiwiaW5uZXJXaWR0aCIsIndXaWR0aCIsIiR0aGlzQ291bnREb3duIiwiYW5pbWF0ZSIsIl90aGlzIiwiaGFuZGxlciIsImVudHJpZXMiLCJvYnNlcnZlciIsImlzSW50ZXJzZWN0aW5nIiwiaW1hZ2VzQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0cmFuc2Zvcm0iLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJpbWFnZUNvbXBhcmlzb25CbG9jayIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNsaWNrZWQiLCJjb250YWluZXIiLCJpbWFnZU92ZXJsYXkiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGlkZVJlYWR5IiwiYmluZCIsInNsaWRlRmluaXNoIiwic2xpZGVNb3ZlIiwiY3VycmVudExlZnRQZXJjZW50IiwiZ2V0Q3Vyc29yTGVmdCIsImNoYW5nZWRUb3VjaGVzIiwiX3RoaXMkY29udGFpbmVyJGdldEJvIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInNsaWRlckJ1dHRvbldpZHRoUGVyY2VudCIsImRlbHRhIiwicGFnZVgiLCJwZXJjZW50IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
