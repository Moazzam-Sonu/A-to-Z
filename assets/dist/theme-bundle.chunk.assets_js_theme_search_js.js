"use strict";
(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }













var Search = /*#__PURE__*/function (_CatalogPage) {
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Search, _CatalogPage);
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_4__["default"].goToUrl(url);
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_6__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showItem();
    this.loadOptionForProductCard(this.context);
    this.fancyboxVideoBanner();
    (0,_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_12__["default"])(this.context);
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    var $productListingContainer = $('#product-listing-container .productListing');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var $paginatorContainer = $('.pagination');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'halothemes/gallery/halo-product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        $paginatorContainer.html($(content.paginator).find('.pagination').children());
        $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
        _this5.showProducts(false);
        _this5.showProductsPerPage();
        _this5.showItem();
        _this5.showMoreProducts();
        if ($('#product-listing-container .product').length > 0) {
          (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context, 'product-listing-container');
        }
      }
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_8__["default"])({
      submit: $form
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
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
                productPerPage = context.searchProductsPerPage;
              }
              $('.pagination .pagination-info .end').text(parseInt(productPerPage) * pageCurrent);
            }
            if ($(data).find('#product-listing-container .product').length > 0) {
              (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
            }
          }
        }
      });
    });
  };
  _proto.showItem = function showItem() {
    var total = parseInt($('.pagination-info .total').text()),
      limit = this.getUrlParameter('limit'),
      productPerPage;
    if (limit !== undefined) {
      productPerPage = limit;
    } else {
      productPerPage = this.context.searchProductsPerPage;
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
          end = currentPage * productPerPage;
        }
      }
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    }
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
      (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
    }
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDZ0I7QUFDSTtBQUNkO0FBQ3BCO0FBQ2dDO0FBQ3RDO0FBQ2U7QUFDc0M7QUFDRjtBQUNZO0FBQ2hCO0FBQUEsSUFFMUNZLE1BQU0sMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxPQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLE1BQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsTUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDdkJFLDJCQUEyQixHQUEzQixTQUFBQSwyQkFBMkJBLENBQUNDLElBQUksRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDOUIsSUFBTUMsUUFBUSxHQUFHO01BQ2JDLElBQUksRUFBRUgsSUFBSSxDQUFDSSxJQUFJO01BQ2ZDLEVBQUUsRUFBRUwsSUFBSSxDQUFDTSxRQUFRLENBQUNELEVBQUU7TUFDcEJFLEtBQUssRUFBRTtRQUNIQyxRQUFRLEVBQUVSLElBQUksQ0FBQ1E7TUFDbkI7SUFDSixDQUFDO0lBRUQsSUFBSVIsSUFBSSxDQUFDTyxLQUFLLEVBQUU7TUFDWkwsUUFBUSxDQUFDSyxLQUFLLENBQUNFLE1BQU0sR0FBR1QsSUFBSSxDQUFDTyxLQUFLLEtBQUssTUFBTTtNQUM3Q0wsUUFBUSxDQUFDUSxRQUFRLEdBQUcsSUFBSTtJQUM1QjtJQUVBLElBQUlWLElBQUksQ0FBQ1UsUUFBUSxFQUFFO01BQ2ZSLFFBQVEsQ0FBQ1EsUUFBUSxHQUFHLEVBQUU7TUFDdEJWLElBQUksQ0FBQ1UsUUFBUSxDQUFDQyxPQUFPLENBQUMsVUFBQ0MsU0FBUyxFQUFLO1FBQ2pDVixRQUFRLENBQUNRLFFBQVEsQ0FBQ0csSUFBSSxDQUFDWixLQUFJLENBQUNGLDJCQUEyQixDQUFD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LENBQUMsRUFBQztNQUNuRG5ELG9GQUF1QixDQUFDeUMsT0FBTyxFQUFFLDJCQUEyQixDQUFDO0lBQ2pFO0VBQ0osQ0FBQztFQUFBLE9BQUF2QyxNQUFBO0FBQUEsRUE5YytCWCxnREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0ICdqc3RyZWUnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHByb2R1Y3REaXNwbGF5TW9kZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZSc7XG5pbXBvcnQgaGFsb1NpZGVBbGxDYXRlZ29yeSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGVBbGxDYXRlZ29yeSc7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5pbXBvcnQgaGFsb1N0aWNreVRvb2xiYXIgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSB7XG4gICAgICAgIGNvbnN0IG5vZGVEYXRhID0ge1xuICAgICAgICAgICAgdGV4dDogbm9kZS5kYXRhLFxuICAgICAgICAgICAgaWQ6IG5vZGUubWV0YWRhdGEuaWQsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLnNlbGVjdGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobm9kZS5zdGF0ZSkge1xuICAgICAgICAgICAgbm9kZURhdGEuc3RhdGUub3BlbmVkID0gbm9kZS5zdGF0ZSA9PT0gJ29wZW4nO1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoY2hpbGROb2RlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlRGF0YTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHMobmF2aWdhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50IHNwYW4nKS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudChuYXZpZ2F0ZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQgc3BhbicpLmRhdGEoKTtcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgY29uc3QgJHNlYXJjaEZvcm0gPSAkKCdbZGF0YS1hZHZhbmNlZC1zZWFyY2gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGNhdGVnb3J5VHJlZUNvbnRhaW5lciA9ICRzZWFyY2hGb3JtLmZpbmQoJ1tkYXRhLXNlYXJjaC1jYXRlZ29yeS10cmVlXScpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCB0cmVlRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcblxuICAgICAgICAvLyBJbml0IGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnbGkucHJvZHVjdCcpLmxlbmd0aCA9PT0gMCB8fCB1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICB0aGlzLnNob3dJdGVtKCk7XG4gICAgICAgIHRoaXMubG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xuXG4gICAgICAgIGhhbG9TaWRlQWxsQ2F0ZWdvcnkoKTtcbiAgICAgICAgcHJvZHVjdERpc3BsYXlNb2RlKCk7XG4gICAgICAgIGhhbG9TdGlja3lUb29sYmFyKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgbG9hZFRyZWVOb2Rlcyhub2RlLCBjYikge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL3JlbW90ZS92MS9jYXRlZ29yeS10cmVlJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRSZXN1bHRzID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZGF0YU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRSZXN1bHRzLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoZGF0YU5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYihmb3JtYXR0ZWRSZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgdHJlZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb3JlOiB7XG4gICAgICAgICAgICAgICAgZGF0YTogKG5vZGUsIGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYih0aGlzLmNhdGVnb3J5VHJlZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF6eSBsb2FkZWQgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyZWVOb2Rlcyhub2RlLCBjYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgICAgICAgICBpY29uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrYm94OiB7XG4gICAgICAgICAgICAgICAgdGhyZWVfc3RhdGU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcblxuICAgICAgICAkY29udGFpbmVyLmpzdHJlZSh0cmVlT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpO1xuICAgICAgICBjb25zdCAkY29udGVudExpc3RpbmdDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaEhlYWRpbmcgPSAkKCcjc2VhcmNoLXJlc3VsdHMtaGVhZGluZycpO1xuICAgICAgICBjb25zdCAkc2VhcmNoQ291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCcpO1xuICAgICAgICBjb25zdCAkY29udGVudENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQnKTtcbiAgICAgICAgY29uc3QgJHBhZ2luYXRvckNvbnRhaW5lciA9ICQoJy5wYWdpbmF0aW9uJyk7XG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgY29udGVudExpc3Rpbmc6ICdzZWFyY2gvY29udGVudC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdzZWFyY2gvaGVhZGluZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvdW50OiAnc2VhcmNoL3Byb2R1Y3QtY291bnQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb3VudDogJ3NlYXJjaC9jb250ZW50LWNvdW50JyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3I6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LXBhZ2luYXRvcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9yZXN1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHNlYXJjaEhlYWRpbmcuaHRtbChjb250ZW50LmhlYWRpbmcpO1xuXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICAgICAgaWYgKHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgICAgICAkY29udGVudExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LmNvbnRlbnRMaXN0aW5nKTtcbiAgICAgICAgICAgICAgICAkY29udGVudENvdW50Lmh0bWwoY29udGVudC5jb250ZW50Q291bnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XG4gICAgICAgICAgICAgICAgJHBhZ2luYXRvckNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5wYWdpbmF0aW9uJykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAgICAgJHNob3dNb3JlQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJdGVtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QodGhpcy5jb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cblxuICAgIHNob3dNb3JlUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gdGhpcy5nZXRVcmxQYXJhbWV0ZXIoJ2xpbWl0Jyk7XG5cbiAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWxpc3QnKS5odG1sKCQoZGF0YSkuZmluZChcIi5wYWdpbmF0aW9uLWxpc3RcIikuaHRtbCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5ibHVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKS50ZXh0KCdObyBtb3JlIHByb2R1Y3RzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZ2V0VXJsUGFyYW1ldGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUN1cnJlbnQgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCA+IGFcIikudGV4dCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQocGFyc2VJbnQocHJvZHVjdFBlclBhZ2UpKnBhZ2VDdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd0l0ZW0oKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IHBhcnNlSW50KCQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSxcbiAgICAgICAgICAgIGxpbWl0ID0gdGhpcy5nZXRVcmxQYXJhbWV0ZXIoJ2xpbWl0JyksXG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZTtcblxuICAgICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSBsaW1pdDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gMSxcbiAgICAgICAgICAgIGVuZCA9IHRvdGFsLFxuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IGZhbHNlLFxuICAgICAgICAgICAgbGFzdFBhZ2UgPSAxO1xuICAgICAgICAgICAgXG4gICAgICAgIHZhciBjaGVja0xpbmsgPSAkKFwiLnBhZ2luYXRpb24tbGlzdCAucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcbiAgICAgICAgdmFyIHBhZ2VOb3RMYXN0ID0gbGFzdFBhZ2UgLSAxO1xuICAgICAgICB2YXIgdG90YWxOb3RMYXN0ID0gcGFnZU5vdExhc3QgKiBwcm9kdWN0UGVyUGFnZTtcbiAgICAgICAgdmFyIHByb2R1Y3RzTGFzdFBhZ2UgPSB0b3RhbCAtIHRvdGFsTm90TGFzdDtcbiAgICAgICAgdmFyIGN1cnJlbnRQYWdlID0gcGFyc2VJbnQoJCgnLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCA+IGEnKS50ZXh0KCkpO1xuICAgICAgICB2YXIgcHJldlBhZ2UgPSBjdXJyZW50UGFnZSAtIDE7XG5cbiAgICAgICAgaWYgKGNoZWNrTGluay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxhc3RQYWdlID0gcGFyc2VJbnQoJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikuZmluZChcImFcIikudGV4dCgpKTtcbiAgICAgICAgICAgIGNoZWNrTGFzdFBhZ2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFzdFBhZ2UgPSBwYXJzZUludChjaGVja0xpbmsuZmluZChcImFcIikudGV4dCgpKTtcbiAgICAgICAgICAgIGNoZWNrTGFzdFBhZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRvdGFsIDw9IHByb2R1Y3RQZXJQYWdlKSB7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5zdGFydCcpLnRleHQoc3RhcnQpO1xuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dChlbmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDEpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBwcm9kdWN0UGVyUGFnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSAocHJldlBhZ2UgKiBwcm9kdWN0UGVyUGFnZSkgKyAxO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChjaGVja0xhc3RQYWdlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoJCgnLnBhZ2luYXRpb24tbGlzdCAucGFnaW5hdGlvbi1pdGVtLS1uZXh0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSB0b3RhbE5vdExhc3QgKyBwcm9kdWN0c0xhc3RQYWdlIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdG90YWxOb3RMYXN0ICsgcHJvZHVjdHNMYXN0UGFnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGN1cnJlbnRQYWdlICogcHJvZHVjdFBlclBhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5zdGFydCcpLnRleHQoc3RhcnQpO1xuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dChlbmQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmFuY3lib3hWaWRlb0Jhbm5lcigpe1xuICAgICAgICBpZiAoJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xuICAgICAgICAgICAgICAgICdhdXRvRGltZW5zaW9ucyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6IDYwMCxcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uT3V0JyA6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLmJ1dHRvbi1wb3B1cC12aWRlb1tkYXRhLWZhbmN5Ym94XVwiKS5mYW5jeWJveCh7XG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3BhZGRpbmcnIDogMCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnIDogOTcwLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxuICAgICAgICAgICAgICAgICdhdXRvU2NhbGUnIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25JbicgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFVybFBhcmFtZXRlcihzUGFyYW0pIHtcbiAgICAgICAgdmFyIHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKSxcbiAgICAgICAgICAgIHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpLFxuICAgICAgICAgICAgc1BhcmFtZXRlck5hbWUsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzUGFyYW1ldGVyTmFtZSA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHNQYXJhbWV0ZXJOYW1lWzBdID09PSBzUGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc1BhcmFtZXRlck5hbWVbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzUGFyYW1ldGVyTmFtZVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZChjb250ZXh0KXtcbiAgICAgICAgaWYoJCgnI2ZlYXR1cmVkLXByb2R1Y3RzIC5jYXJkJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAnZmVhdHVyZWQtcHJvZHVjdHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJGYWNldGVkU2VhcmNoIiwiY29tcGFyZVByb2R1Y3RzIiwidXJsVXRpbHMiLCJVcmwiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJub2QiLCJwcm9kdWN0RGlzcGxheU1vZGUiLCJoYWxvU2lkZUFsbENhdGVnb3J5IiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJoYWxvU3RpY2t5VG9vbGJhciIsIlNlYXJjaCIsIl9DYXRhbG9nUGFnZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwiX3RoaXMiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwibmF2aWdhdGUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyIiwiYWRkQ2xhc3MiLCIkIiwic2VhcmNoRGF0YSIsInVybCIsImNvdW50IiwicmVwbGFjZVBhcmFtcyIsInBhZ2UiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiX3RoaXMyIiwiY29udGV4dCIsInVybHMiLCIkc2VhcmNoRm9ybSIsIiRjYXRlZ29yeVRyZWVDb250YWluZXIiLCJmaW5kIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0cmVlRGF0YSIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicXVlcnkiLCJzZWN0aW9uIiwidmFsaWRhdG9yIiwiaW5pdFZhbGlkYXRpb24iLCJiaW5kVmFsaWRhdGlvbiIsImNhdGVnb3J5VHJlZSIsImNhdGVnb3J5VHJlZURhdGEiLCJjcmVhdGVDYXRlZ29yeVRyZWUiLCJzZWxlY3RlZENhdGVnb3J5SWRzIiwianN0cmVlIiwiZ2V0X3NlbGVjdGVkIiwiY2hlY2siLCJyZW1vdmUiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiY2F0ZWdvcnlJZCIsInZhbHVlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImFwcGVuZCIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJzaG93TW9yZVByb2R1Y3RzIiwic2hvd0l0ZW0iLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCJmYW5jeWJveFZpZGVvQmFubmVyIiwibG9hZFRyZWVOb2RlcyIsImNiIiwiX3RoaXMzIiwiYWpheCIsInNlbGVjdGVkQ2F0ZWdvcnlJZCIsInByZWZpeCIsImhlYWRlcnMiLCJCQ0RhdGEiLCJjc3JmX3Rva2VuIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsIl90aGlzNCIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCJfdGhpczUiLCIkY29udGVudExpc3RpbmdDb250YWluZXIiLCIkc2VhcmNoSGVhZGluZyIsIiRzZWFyY2hDb3VudCIsIiRjb250ZW50Q291bnQiLCIkcGFnaW5hdG9yQ29udGFpbmVyIiwiJHNob3dNb3JlQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwiY29udGVudExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbnRlbnRDb3VudCIsInBhZ2luYXRvciIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCIkZm9ybSIsInN1Ym1pdCIsIiRlbGVtZW50IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIlVSTCIsImMiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImNhbGwiLCJlbGVtZW50IiwiZSIsImdldFVybFBhcmFtZXRlciIsIm5leHRQYWdlIiwibmV4dCIsImxpbmsiLCJhdHRyIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJibHVyIiwicHJvZHVjdFBlclBhZ2UiLCJwYWdlQ3VycmVudCIsInBhcnNlSW50IiwidW5kZWZpbmVkIiwidG90YWwiLCJzdGFydCIsImVuZCIsImNoZWNrTGFzdFBhZ2UiLCJsYXN0UGFnZSIsImNoZWNrTGluayIsInBhZ2VOb3RMYXN0IiwidG90YWxOb3RMYXN0IiwicHJvZHVjdHNMYXN0UGFnZSIsImN1cnJlbnRQYWdlIiwicHJldlBhZ2UiLCJmYW5jeWJveCIsInNQYXJhbSIsInNQYWdlVVJMIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic3Vic3RyaW5nIiwic1VSTFZhcmlhYmxlcyIsInNwbGl0Iiwic1BhcmFtZXRlck5hbWUiLCJpIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
