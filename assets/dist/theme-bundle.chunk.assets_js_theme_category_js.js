"use strict";
(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }









var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    this.initFacetedSearch();
    if (!$('#facetedSearch').length) {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    }
    this.showProductsPerPage();
    this.showMoreProducts();
    this.fancyboxVideoBanner();
    this.loadOptionForProductCard(this.context);
    (0,_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;
    var $productListingContainer = $('#product-listing-container .productListing');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $paginatorContainer = $('.pagination');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        sidebar: 'category/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      console.log(3321312);
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $paginatorContainer.html($(content.paginator).find('.pagination').children());
      $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
      $('body').triggerHandler('compareReset');
      if ($('#product-listing-container .product').length > 0) {
        _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6___default()(_this.context, 'product-listing-container');
      }
      _this.showProductsPerPage();
      _this.showMoreProducts();
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  _proto.showProductsPerPage = function showProductsPerPage() {
    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");
      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };
  _proto.showMoreProducts = function showMoreProducts() {
    var context = this.context;
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
        link = nextPage.find("a").attr("href");
      $('#listing-showmoreBtn > a').addClass('loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          if ($(data).find('#product-listing-container .productListing').length > 0) {
            $('#product-listing-container .productListing').append($(data).find('#product-listing-container .productListing').children());
            $('.pagination-list').html($(data).find(".pagination-list").html());
            $('#listing-showmoreBtn > a').removeClass('loading').blur();
            if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .end').text());
            } else {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .total').text());
            }
            nextPage = $(".pagination-item--current").next();
            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
            }
            if ($(data).find('#product-listing-container .product').length > 0) {
              _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6___default()(context, 'product-listing-container');
            }
          }
        }
      });
    });
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
  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6___default()(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6___default()(context, 'product-listing-container');
    }
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ2lCO0FBQ0Y7QUFDWTtBQUNoQjtBQUNQO0FBQUEsSUFFbkNTLFFBQVEsMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxTQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLFFBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsUUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDekJFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTmQsb0VBQWUsQ0FBQyxJQUFJLENBQUNlLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO0lBRWxDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUV4QixJQUFJLENBQUNDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7TUFDN0IsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDcER2Qiw2REFBSyxDQUFDd0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQ0YsY0FBYyxDQUFDOztNQUVqRDtNQUNBLElBQU1HLFNBQVMsR0FBRyxJQUFJQyxlQUFlLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7TUFFN0QsSUFBSUosU0FBUyxDQUFDSyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDL0JWLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDVyxJQUFJLENBQUMsQ0FBQztNQUM5QjtNQUVBWCxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ1ksSUFBSSxDQUFDLE9BQU8sRUFBRVAsU0FBUyxDQUFDUSxHQUFHLENBQUMsV0FB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Q0FBQyxvQ0FBb0MsQ0FBQyxDQUFDWixRQUFRLENBQUM7UUFDN0MsZ0JBQWdCLEVBQUUsS0FBSztRQUN2QixTQUFTLEVBQUcsQ0FBQztRQUNiLE9BQU8sRUFBRyxHQUFHO1FBQ2IsUUFBUSxFQUFHLEdBQUc7UUFDZCxXQUFXLEVBQUcsS0FBSztRQUNuQixjQUFjLEVBQUcsTUFBTTtRQUN2QixlQUFlLEVBQUc7TUFDdEIsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBQUFNLE1BQUEsQ0FFRHVCLHdCQUF3QixHQUF4QixTQUFBQSx3QkFBd0JBLENBQUNwQixPQUFPLEVBQUM7SUFDN0IsSUFBR0csQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUM7TUFDeENmLDhFQUF1QixDQUFDVyxPQUFPLEVBQUUsbUJBQW1CLENBQUM7SUFDekQ7SUFFQSxJQUFHRyxDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztNQUNuRGYsOEVBQXVCLENBQUNXLE9BQU8sRUFBRSwyQkFBMkIsQ0FBQztJQUNqRTtFQUNKLENBQUM7RUFBQSxPQUFBUixRQUFBO0FBQUEsRUF4S2lDUixnREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9jYXRlZ29yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuaW1wb3J0IGhhbG9TaWRlQWxsQ2F0ZWdvcnkgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TaWRlQWxsQ2F0ZWdvcnknO1xuaW1wb3J0IGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XG5pbXBvcnQgZmFuY3lib3ggZnJvbSAnLi9oYWxvdGhlbWVzL2pxdWVyeS5mYW5jeWJveC5taW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcblxuICAgICAgICBpZiAoISQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcblxuICAgICAgICAgICAgLy8gUmVmcmVzaCByYW5nZSB2aWV3IHdoZW4gc2hvcC1ieS1wcmljZSBlbmFibGVkXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgICAgICAgICBpZiAodXJsUGFyYW1zLmhhcygnc2VhcmNoX3F1ZXJ5JykpIHtcbiAgICAgICAgICAgICAgICAkKCcucmVzZXQtZmlsdGVycycpLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21pblwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWluJykpO1xuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21heFwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWF4JykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICB0aGlzLmZhbmN5Ym94VmlkZW9CYW5uZXIoKTtcbiAgICAgICAgdGhpcy5sb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBoYWxvU2lkZUFsbENhdGVnb3J5KCk7XG4gICAgICAgIHByb2R1Y3REaXNwbGF5TW9kZSgpO1xuICAgICAgICBoYWxvU3RpY2t5VG9vbGJhcih0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRwYWdpbmF0b3JDb250YWluZXIgPSAkKCcucGFnaW5hdGlvbicpO1xuICAgICAgICBjb25zdCAkc2hvd01vcmVDb250YWluZXIgPSAkKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDMzMjEzMTIpO1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkcGFnaW5hdG9yQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24nKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICRzaG93TW9yZUNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QodGhpcy5jb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cblxuICAgIHNob3dNb3JlUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWxpc3QnKS5odG1sKCQoZGF0YSkuZmluZChcIi5wYWdpbmF0aW9uLWxpc3RcIikuaHRtbCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5ibHVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCkpIDw9IE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJykudGV4dCgnTm8gbW9yZSBwcm9kdWN0cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmYW5jeWJveFZpZGVvQmFubmVyKCl7XG4gICAgICAgIGlmICgkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xuICAgICAgICAgICAgICAgICdhdXRvRGltZW5zaW9ucyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6IDYwMCxcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uT3V0JyA6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xuICAgICAgICAgICAgICAgICdhdXRvRGltZW5zaW9ucyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6IDYwMCxcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uT3V0JyA6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoY29udGV4dCl7XG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ2ZlYXR1cmVkLXByb2R1Y3RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsInByb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TaWRlQWxsQ2F0ZWdvcnkiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCIsImhhbG9TdGlja3lUb29sYmFyIiwiZmFuY3lib3giLCJDYXRlZ29yeSIsIl9DYXRhbG9nUGFnZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiY29udGV4dCIsInVybHMiLCJpbml0RmFjZXRlZFNlYXJjaCIsIiQiLCJsZW5ndGgiLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJvbiIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaGFzIiwic2hvdyIsImF0dHIiLCJnZXQiLCJzaG93UHJvZHVjdHNQZXJQYWdlIiwic2hvd01vcmVQcm9kdWN0cyIsImZhbmN5Ym94VmlkZW9CYW5uZXIiLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCJfdGhpcyIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJHBhZ2luYXRvckNvbnRhaW5lciIsIiRzaG93TW9yZUNvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJwYWdpbmF0b3IiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJmaW5kIiwiY2hpbGRyZW4iLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ1cmwiLCJVUkwiLCJocmVmIiwiYyIsInNlYXJjaFBhcmFtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZm9yRWFjaCIsImNhbGwiLCJlbGVtZW50IiwidmFsdWUiLCJzZWxlY3RlZCIsImUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV4dFBhZ2UiLCJuZXh0IiwibGluayIsImFkZENsYXNzIiwiYWpheCIsInR5cGUiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRhdGEiLCJhcHBlbmQiLCJyZW1vdmVDbGFzcyIsImJsdXIiLCJOdW1iZXIiLCJ0ZXh0IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
