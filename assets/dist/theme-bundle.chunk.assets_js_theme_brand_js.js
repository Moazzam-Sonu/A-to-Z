"use strict";
(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
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









var Brand = /*#__PURE__*/function (_CatalogPage) {
  function Brand() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Brand, _CatalogPage);
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    this.showProductsPerPage();
    this.showItem();
    this.loadOptionForProductCard(this.context);
    this.showMoreProducts();
    this.fancyboxVideoBanner();
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
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        sidebar: 'brand/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $paginatorContainer.html($(content.paginator).find('.pagination').children());
      $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
      $('body').triggerHandler('compareReset');
      if ($('#product-listing-container .product').length > 0) {
        _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_6___default()(_this.context, 'product-listing-container');
      }
      _this.showProductsPerPage();
      _this.showItem();
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
  _proto.showItem = function showItem() {
    var total = parseInt($('.pagination-info .total').text()),
      limit = this.getUrlParameter('limit'),
      productPerPage;
    if (limit !== undefined) {
      productPerPage = limit;
    } else {
      productPerPage = this.context.brandProductsPerPage;
    }
    var start = 1,
      end = total,
      checkLastPage = false,
      lastPage = 1;
    var checkLink = $(".pagination-list .pagination-item--current").next();
    var pageNotLast = lastPage - 1;
    var totalNotLast = pageNotLast * productPerPage;
    var productsLastPage = total - totalNotLast;
    var currentPage = parseInt($('.pagination-item--current > a').text());
    var prevPage = currentPage - 1;
    if (checkLink.length === 0) {
      lastPage = parseInt($(".pagination-item--current").find("a").text());
      checkLastPage = true;
    } else {
      lastPage = parseInt(checkLink.find("a").text());
      checkLastPage = false;
    }
    if (total <= productPerPage) {
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    } else {
      if (currentPage <= 1) {
        end = productPerPage;
      } else {
        start = prevPage * productPerPage + 1;
        if (checkLastPage == true) {
          if ($('.pagination-list .pagination-item--next').length > 0) {
            end = totalNotLast + productsLastPage - 1;
          } else {
            end = totalNotLast + productsLastPage;
          }
        } else {
          end = currentPage * productPerPage - 1;
        }
      }
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    }
  };
  _proto.showMoreProducts = function showMoreProducts() {
    var context = this.context;
    var getUrlParameter = this.getUrlParameter('limit');
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
            nextPage = $(".pagination-item--current").next();
            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
              $('.pagination .pagination-info .end').text($('.pagination-info .total').text());
            } else {
              var limit = getUrlParameter,
                productPerPage,
                pageCurrent = parseInt($(".pagination-item--current > a").text());
              if (limit !== undefined) {
                productPerPage = limit;
              } else {
                productPerPage = context.brandProductsPerPage;
              }
              $('.pagination .pagination-info .end').text(parseInt(productPerPage) * pageCurrent);
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
    if ($(".video-block-image[data-fancybox]").length) {
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
    if ($(".button-popup-video[data-fancybox]").length) {
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
  _proto.getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
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
  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ2lCO0FBQ0Y7QUFDWTtBQUNoQjtBQUNQO0FBQUEsSUFFbkNTLEtBQUssMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxNQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLEtBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsS0FBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDdEJFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTmQsb0VBQWUsQ0FBQyxJQUFJLENBQUNlLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO0lBRWxDLElBQUlDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUM1QixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwRHZCLDZEQUFLLENBQUN3QixFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDRixjQUFjLENBQUM7SUFDckQ7SUFFQSxJQUFJLENBQUNHLG1CQUFtQixDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztJQUNmLElBQUksQ0FBQ0Msd0JBQXdCLENBQUMsSUFBSSxDQUFDVixPQUFPLENBQUM7SUFDM0MsSUFBSSxDQUFDVyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQztJQUUxQnhCLDJFQUFtQixDQUFDLENBQUM7SUFDckJELDhFQUFrQixDQUFDLENBQUM7SUFDcEJH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S0EsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxhQUFhLENBQUMxRixNQUFNLEVBQUU2RixDQUFDLEVBQUUsRUFBRTtNQUN2Q0QsY0FBYyxHQUFHRixhQUFhLENBQUNHLENBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUMsR0FBRyxDQUFDO01BRTVDLElBQUlDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBS1AsTUFBTSxFQUFFO1FBQzlCLE9BQU9PLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBS2xDLFNBQVMsR0FBRyxJQUFJLEdBQUdrQyxjQUFjLENBQUMsQ0FBQyxDQUFDO01BQ3JFO0lBQ0o7RUFDSixDQUFDO0VBQUFsRyxNQUFBLENBRURhLHdCQUF3QixHQUF4QixTQUFBQSx3QkFBd0JBLENBQUNWLE9BQU8sRUFBQztJQUM3QixJQUFHRSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztNQUN4Q2QsOEVBQXVCLENBQUNXLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQztJQUN6RDtJQUVBLElBQUdFLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO01BQ25EZCw4RUFBdUIsQ0FBQ1csT0FBTyxFQUFFLDJCQUEyQixDQUFDO0lBQ2pFO0VBQ0osQ0FBQztFQUFBLE9BQUFSLEtBQUE7QUFBQSxFQS9POEJSLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2JyYW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHByb2R1Y3REaXNwbGF5TW9kZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZSc7XG5pbXBvcnQgaGFsb1NpZGVBbGxDYXRlZ29yeSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGVBbGxDYXRlZ29yeSc7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5pbXBvcnQgaGFsb1N0aWNreVRvb2xiYXIgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyJztcbmltcG9ydCBmYW5jeWJveCBmcm9tICcuL2hhbG90aGVtZXMvanF1ZXJ5LmZhbmN5Ym94Lm1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLnNob3dNb3JlUHJvZHVjdHMoKTtcbiAgICAgICAgdGhpcy5mYW5jeWJveFZpZGVvQmFubmVyKCk7XG5cbiAgICAgICAgaGFsb1NpZGVBbGxDYXRlZ29yeSgpO1xuICAgICAgICBwcm9kdWN0RGlzcGxheU1vZGUoKTtcbiAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkcGFnaW5hdG9yQ29udGFpbmVyID0gJCgnLnBhZ2luYXRpb24nKTtcbiAgICAgICAgY29uc3QgJHNob3dNb3JlQ29udGFpbmVyID0gJCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdicmFuZC9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3I6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LXBhZ2luYXRvcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnYnJhbmQvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgJHBhZ2luYXRvckNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5wYWdpbmF0aW9uJykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAkc2hvd01vcmVDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpLmNoaWxkcmVuKCkpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KHRoaXMuY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dNb3JlUHJvZHVjdHMoKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0c1BlclBhZ2UoKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKTtcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGltaXQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICB9XG5cbiAgICBzaG93SXRlbSgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gcGFyc2VJbnQoJCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpLFxuICAgICAgICAgICAgbGltaXQgPSB0aGlzLmdldFVybFBhcmFtZXRlcignbGltaXQnKSxcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlO1xuXG4gICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGxpbWl0O1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IHRoaXMuY29udGV4dC5icmFuZFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGFydCA9IDEsXG4gICAgICAgICAgICBlbmQgPSB0b3RhbCxcbiAgICAgICAgICAgIGNoZWNrTGFzdFBhZ2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RQYWdlID0gMTtcbiAgICAgICAgICAgIFxuICAgICAgICB2YXIgY2hlY2tMaW5rID0gJChcIi5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG4gICAgICAgIHZhciBwYWdlTm90TGFzdCA9IGxhc3RQYWdlIC0gMTtcbiAgICAgICAgdmFyIHRvdGFsTm90TGFzdCA9IHBhZ2VOb3RMYXN0ICogcHJvZHVjdFBlclBhZ2U7XG4gICAgICAgIHZhciBwcm9kdWN0c0xhc3RQYWdlID0gdG90YWwgLSB0b3RhbE5vdExhc3Q7XG4gICAgICAgIHZhciBjdXJyZW50UGFnZSA9IHBhcnNlSW50KCQoJy5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQgPiBhJykudGV4dCgpKTtcbiAgICAgICAgdmFyIHByZXZQYWdlID0gY3VycmVudFBhZ2UgLSAxO1xuXG4gICAgICAgIGlmIChjaGVja0xpbmsubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsYXN0UGFnZSA9IHBhcnNlSW50KCQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLmZpbmQoXCJhXCIpLnRleHQoKSk7XG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RQYWdlID0gcGFyc2VJbnQoY2hlY2tMaW5rLmZpbmQoXCJhXCIpLnRleHQoKSk7XG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0b3RhbCA8PSBwcm9kdWN0UGVyUGFnZSkge1xuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuc3RhcnQnKS50ZXh0KHN0YXJ0KTtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSAxKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gcHJvZHVjdFBlclBhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gKHByZXZQYWdlICogcHJvZHVjdFBlclBhZ2UpICsgMTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tMYXN0UGFnZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCQoJy5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tbmV4dCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdG90YWxOb3RMYXN0ICsgcHJvZHVjdHNMYXN0UGFnZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRvdGFsTm90TGFzdCArIHByb2R1Y3RzTGFzdFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RQZXJQYWdlIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93TW9yZVByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IGdldFVybFBhcmFtZXRlciA9IHRoaXMuZ2V0VXJsUGFyYW1ldGVyKCdsaW1pdCcpO1xuICAgICAgICBcbiAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWxpc3QnKS5odG1sKCQoZGF0YSkuZmluZChcIi5wYWdpbmF0aW9uLWxpc3RcIikuaHRtbCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5ibHVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKS50ZXh0KCdObyBtb3JlIHByb2R1Y3RzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZ2V0VXJsUGFyYW1ldGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUN1cnJlbnQgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCA+IGFcIikudGV4dCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dChwYXJzZUludChwcm9kdWN0UGVyUGFnZSkqcGFnZUN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmYW5jeWJveFZpZGVvQmFubmVyKCl7XG4gICAgICAgIGlmICgkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xuICAgICAgICB2YXIgc1BhZ2VVUkwgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpLFxuICAgICAgICAgICAgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyksXG4gICAgICAgICAgICBzUGFyYW1ldGVyTmFtZSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNQYXJhbWV0ZXJOYW1lID0gc1VSTFZhcmlhYmxlc1tpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzUGFyYW1ldGVyTmFtZVsxXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHNQYXJhbWV0ZXJOYW1lWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKGNvbnRleHQpe1xuICAgICAgICBpZigkKCcjZmVhdHVyZWQtcHJvZHVjdHMgLmNhcmQnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdmZWF0dXJlZC1wcm9kdWN0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiaG9va3MiLCJDYXRhbG9nUGFnZSIsImNvbXBhcmVQcm9kdWN0cyIsIkZhY2V0ZWRTZWFyY2giLCJwcm9kdWN0RGlzcGxheU1vZGUiLCJoYWxvU2lkZUFsbENhdGVnb3J5IiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJoYWxvU3RpY2t5VG9vbGJhciIsImZhbmN5Ym94IiwiQnJhbmQiLCJfQ2F0YWxvZ1BhZ2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvbnRleHQiLCJ1cmxzIiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCJzaG93UHJvZHVjdHNQZXJQYWdlIiwic2hvd0l0ZW0iLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCJzaG93TW9yZVByb2R1Y3RzIiwiZmFuY3lib3hWaWRlb0Jhbm5lciIsIl90aGlzIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkcGFnaW5hdG9yQ29udGFpbmVyIiwiJHNob3dNb3JlQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiYnJhbmRQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwicGFnaW5hdG9yIiwiY29uZmlnIiwic2hvcF9ieV9icmFuZCIsImJyYW5kIiwicHJvZHVjdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiZmluZCIsImNoaWxkcmVuIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYyIsInNlYXJjaFBhcmFtcyIsImdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZm9yRWFjaCIsImNhbGwiLCJlbGVtZW50IiwidmFsdWUiLCJzZWxlY3RlZCIsImUiLCJ0b3RhbCIsInBhcnNlSW50IiwidGV4dCIsImdldFVybFBhcmFtZXRlciIsInByb2R1Y3RQZXJQYWdlIiwidW5kZWZpbmVkIiwic3RhcnQiLCJlbmQiLCJjaGVja0xhc3RQYWdlIiwibGFzdFBhZ2UiLCJjaGVja0xpbmsiLCJuZXh0IiwicGFnZU5vdExhc3QiLCJ0b3RhbE5vdExhc3QiLCJwcm9kdWN0c0xhc3RQYWdlIiwiY3VycmVudFBhZ2UiLCJwcmV2UGFnZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXh0UGFnZSIsImxpbmsiLCJhdHRyIiwiYWRkQ2xhc3MiLCJhamF4IiwidHlwZSIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZGF0YSIsImFwcGVuZCIsInJlbW92ZUNsYXNzIiwiYmx1ciIsInBhZ2VDdXJyZW50Iiwic1BhcmFtIiwic1BhZ2VVUkwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZWFyY2giLCJzdWJzdHJpbmciLCJzVVJMVmFyaWFibGVzIiwic3BsaXQiLCJzUGFyYW1ldGVyTmFtZSIsImkiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
