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
        (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(_this.context, 'product-listing-container');
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
              (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
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
      (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
    }
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ29CO0FBQ0o7QUFDaUI7QUFDRjtBQUNZO0FBQ2hCO0FBQ1A7QUFBQSxJQUVuQ1MsUUFBUSwwQkFBQUMsWUFBQTtFQUFBLFNBQUFELFNBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosUUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxRQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN6QkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNOZCxvRUFBZSxDQUFDLElBQUksQ0FBQ2UsT0FBTyxDQUFDQyxJQUFJLENBQUM7SUFFbEMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRXhCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE1BQU0sRUFBRTtNQUM3QixJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwRHZCLDZEQUFLLENBQUN3QixFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDRixjQUFjLENBQUM7O01BRWpEO01BQ0EsSUFBTUcsU0FBUyxHQUFHLElBQUlDLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztNQUU3RCxJQUFJSixTQUFTLENBQUNLLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUMvQlYsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNXLElBQUksQ0FBQyxDQUFDO01BQzlCO01BRUFYLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDWSxJQUFJLENBQUMsT0FBTyxFQUFFUCxTQUFTLENBQUNRLEdBQUcsQ0FBQyxXQUFX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QUFDLG9DQUFvQyxDQUFDLENBQUNaLFFBQVEsQ0FBQztRQUM3QyxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLFNBQVMsRUFBRyxDQUFDO1FBQ2IsT0FBTyxFQUFHLEdBQUc7UUFDYixRQUFRLEVBQUcsR0FBRztRQUNkLFdBQVcsRUFBRyxLQUFLO1FBQ25CLGNBQWMsRUFBRyxNQUFNO1FBQ3ZCLGVBQWUsRUFBRztNQUN0QixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFBQU0sTUFBQSxDQUVEdUIsd0JBQXdCLEdBQXhCLFNBQUFBLHdCQUF3QkEsQ0FBQ3BCLE9BQU8sRUFBQztJQUM3QixJQUFHRyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztNQUN4Q2YsbUZBQXVCLENBQUNXLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQztJQUN6RDtJQUVBLElBQUdHLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO01BQ25EZixtRkFBdUIsQ0FBQ1csT0FBTyxFQUFFLDJCQUEyQixDQUFDO0lBQ2pFO0VBQ0osQ0FBQztFQUFBLE9BQUFSLFFBQUE7QUFBQSxFQXhLaUNSLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHByb2R1Y3REaXNwbGF5TW9kZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZSc7XG5pbXBvcnQgaGFsb1NpZGVBbGxDYXRlZ29yeSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGVBbGxDYXRlZ29yeSc7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5pbXBvcnQgaGFsb1N0aWNreVRvb2xiYXIgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyJztcbmltcG9ydCBmYW5jeWJveCBmcm9tICcuL2hhbG90aGVtZXMvanF1ZXJ5LmZhbmN5Ym94Lm1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuXG4gICAgICAgIGlmICghJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHJhbmdlIHZpZXcgd2hlbiBzaG9wLWJ5LXByaWNlIGVuYWJsZWRcbiAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICAgICAgICAgIGlmICh1cmxQYXJhbXMuaGFzKCdzZWFyY2hfcXVlcnknKSkge1xuICAgICAgICAgICAgICAgICQoJy5yZXNldC1maWx0ZXJzJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWluXCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9taW4nKSk7XG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWF4XCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9tYXgnKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGhhbG9TaWRlQWxsQ2F0ZWdvcnkoKTtcbiAgICAgICAgcHJvZHVjdERpc3BsYXlNb2RlKCk7XG4gICAgICAgIGhhbG9TdGlja3lUb29sYmFyKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHBhZ2luYXRvckNvbnRhaW5lciA9ICQoJy5wYWdpbmF0aW9uJyk7XG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3I6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LXBhZ2luYXRvcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coMzMyMTMxMik7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICRwYWdpbmF0b3JDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcucGFnaW5hdGlvbicpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgJHNob3dNb3JlQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCh0aGlzLmNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHNQZXJQYWdlKCl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICB2YXIgYyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGltaXRcIik7XG4gICAgICAgICAgICBpZihjICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCNsaW1pdCBvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxpbWl0LCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudmFsdWUgPT0gYyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHt9XG4gICAgfVxuXG4gICAgc2hvd01vcmVQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKSxcbiAgICAgICAgICAgICAgICBsaW5rID0gbmV4dFBhZ2UuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7XG5cbiAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgICAgICAgdXJsOiBsaW5rLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiLy9cIiksXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5hcHBlbmQoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpLmJsdXIoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSkgPD0gTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKS50ZXh0KCdObyBtb3JlIHByb2R1Y3RzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZhbmN5Ym94VmlkZW9CYW5uZXIoKXtcbiAgICAgICAgaWYgKCQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZChjb250ZXh0KXtcbiAgICAgICAgaWYoJCgnI2ZlYXR1cmVkLXByb2R1Y3RzIC5jYXJkJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAnZmVhdHVyZWQtcHJvZHVjdHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJjb21wYXJlUHJvZHVjdHMiLCJGYWNldGVkU2VhcmNoIiwicHJvZHVjdERpc3BsYXlNb2RlIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwiaGFsb1N0aWNreVRvb2xiYXIiLCJmYW5jeWJveCIsIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJjb250ZXh0IiwidXJscyIsImluaXRGYWNldGVkU2VhcmNoIiwiJCIsImxlbmd0aCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsIm9uIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXMiLCJzaG93IiwiYXR0ciIsImdldCIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJzaG93TW9yZVByb2R1Y3RzIiwiZmFuY3lib3hWaWRlb0Jhbm5lciIsImxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCIsIl90aGlzIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkcGFnaW5hdG9yQ29udGFpbmVyIiwiJHNob3dNb3JlQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInBhZ2luYXRvciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImZpbmQiLCJjaGlsZHJlbiIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInVybCIsIlVSTCIsImhyZWYiLCJjIiwic2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmb3JFYWNoIiwiY2FsbCIsImVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGVkIiwiZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXh0UGFnZSIsIm5leHQiLCJsaW5rIiwiYWRkQ2xhc3MiLCJhamF4IiwidHlwZSIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZGF0YSIsImFwcGVuZCIsInJlbW92ZUNsYXNzIiwiYmx1ciIsIk51bWJlciIsInRleHQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
