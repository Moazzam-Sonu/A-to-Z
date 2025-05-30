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
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11__);
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
          _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11___default()(_this5.context, 'product-listing-container');
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
              _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11___default()(context, 'product-listing-container');
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
      _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11___default()(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_11___default()(context, 'product-listing-container');
    }
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ2dCO0FBQ0k7QUFDZDtBQUNwQjtBQUNnQztBQUN0QztBQUNlO0FBQ3NDO0FBQ0Y7QUFDWTtBQUNoQjtBQUFBLElBRTFDWSxNQUFNLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsT0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixNQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLE1BQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3ZCRSwyQkFBMkIsR0FBM0IsU0FBQUEsMkJBQTJCQSxDQUFDQyxJQUFJLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQzlCLElBQU1DLFFBQVEsR0FBRztNQUNiQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBSTtNQUNmQyxFQUFFLEVBQUVMLElBQUksQ0FBQ00sUUFBUSxDQUFDRCxFQUFFO01BQ3BCRSxLQUFLLEVBQUU7UUFDSEMsUUFBUSxFQUFFUixJQUFJLENBQUNRO01BQ25CO0lBQ0osQ0FBQztJQUVELElBQUlSLElBQUksQ0FBQ08sS0FBSyxFQUFFO01BQ1pMLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFNLEdBQUdULElBQUksQ0FBQ08sS0FBSyxLQUFLLE1BQU07TUFDN0NMLFFBQVEsQ0FBQ1EsUUFBUSxHQUFHLElBQUk7SUFDNUI7SUFFQSxJQUFJVixJQUFJLENBQUNVLFFBQVEsRUFBRTtNQUNmUixRQUFRLENBQUNRLFFBQVEsR0FBRyxFQUFFO01BQ3RCVixJQUFJLENBQUNVLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNDLFNBQVMsRUFBSztRQUNqQ1YsUUFBUSxDQUFDUSxRQUFRLENBQUNHLElBQUksQ0FBQ1osS0FBSSxDQUFDRiwyQkFBMkIsQ0FB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RyxDQUFDLEVBQUM7TUFDbkRuRCwrRUFBdUIsQ0FBQ3lDLE9BQU8sRUFBRSwyQkFBMkIsQ0FBQztJQUNqRTtFQUNKLENBQUM7RUFBQSxPQUFBdkMsTUFBQTtBQUFBLEVBOWMrQlgsZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCAnanN0cmVlJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuaW1wb3J0IGhhbG9TaWRlQWxsQ2F0ZWdvcnkgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TaWRlQWxsQ2F0ZWdvcnknO1xuaW1wb3J0IGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKG5hdmlnYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCBzcGFuJykuZGF0YSgpO1xuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRlbnQobmF2aWdhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50IHNwYW4nKS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxuICAgICAgICAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyNzZWFyY2hfcXVlcnlfYWR2JykpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgdHJlZURhdGEucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSA9IHRyZWVEYXRhO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5VHJlZSgkY2F0ZWdvcnlUcmVlQ29udGFpbmVyKTtcblxuICAgICAgICAkc2VhcmNoRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9ICRjYXRlZ29yeVRyZWVDb250YWluZXIuanN0cmVlKCkuZ2V0X3NlbGVjdGVkKCk7XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLmNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNlYXJjaEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNhdGVnb3J5XFxbXFxdXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJZCBvZiBzZWxlY3RlZENhdGVnb3J5SWRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5W10nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRzZWFyY2hGb3JtLmFwcGVuZChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICB0aGlzLnNob3dNb3JlUHJvZHVjdHMoKTtcbiAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmZhbmN5Ym94VmlkZW9CYW5uZXIoKTtcblxuICAgICAgICBoYWxvU2lkZUFsbENhdGVnb3J5KCk7XG4gICAgICAgIHByb2R1Y3REaXNwbGF5TW9kZSgpO1xuICAgICAgICBoYWxvU3RpY2t5VG9vbGJhcih0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKTtcbiAgICAgICAgY29uc3QgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hIZWFkaW5nID0gJCgnI3NlYXJjaC1yZXN1bHRzLWhlYWRpbmcnKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQnKTtcbiAgICAgICAgY29uc3QgJGNvbnRlbnRDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRwYWdpbmF0b3JDb250YWluZXIgPSAkKCcucGFnaW5hdGlvbicpO1xuICAgICAgICBjb25zdCAkc2hvd01vcmVDb250YWluZXIgPSAkKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRMaXN0aW5nOiAnc2VhcmNoL2NvbnRlbnQtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ3NlYXJjaC9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnc2VhcmNoL2hlYWRpbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudDogJ3NlYXJjaC9wcm9kdWN0LWNvdW50JyxcbiAgICAgICAgICAgICAgICBjb250ZW50Q291bnQ6ICdzZWFyY2gvY29udGVudC1jb3VudCcsXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAgICAgJHNlYXJjaENvdW50Lmh0bWwoY29udGVudC5wcm9kdWN0Q291bnQpO1xuICAgICAgICAgICAgICAgICRwYWdpbmF0b3JDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcucGFnaW5hdGlvbicpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgICAgICRzaG93TW9yZUNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KHRoaXMuY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0VmFsaWRhdGlvbigkZm9ybSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCRlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0c1BlclBhZ2UoKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKTtcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGltaXQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICB9XG5cbiAgICBzaG93TW9yZVByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IGdldFVybFBhcmFtZXRlciA9IHRoaXMuZ2V0VXJsUGFyYW1ldGVyKCdsaW1pdCcpO1xuXG4gICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpLFxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICB1cmw6IGxpbmsucmVwbGFjZShcImh0dHA6Ly9cIiwgXCIvL1wiKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmFwcGVuZCgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmNoaWxkcmVuKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1saXN0JykuaHRtbCgkKGRhdGEpLmZpbmQoXCIucGFnaW5hdGlvbi1saXN0XCIpLmh0bWwoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJykuYmx1cigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJykudGV4dCgnTm8gbW9yZSBwcm9kdWN0cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoJCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGdldFVybFBhcmFtZXRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDdXJyZW50ID0gcGFyc2VJbnQoJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQgPiBhXCIpLnRleHQoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGxpbWl0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSBjb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KHBhcnNlSW50KHByb2R1Y3RQZXJQYWdlKSpwYWdlQ3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQoZGF0YSkuZmluZCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dJdGVtKCkge1xuICAgICAgICB2YXIgdG90YWwgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSksXG4gICAgICAgICAgICBsaW1pdCA9IHRoaXMuZ2V0VXJsUGFyYW1ldGVyKCdsaW1pdCcpLFxuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2U7XG5cbiAgICAgICAgaWYgKGxpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gdGhpcy5jb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdGFydCA9IDEsXG4gICAgICAgICAgICBlbmQgPSB0b3RhbCxcbiAgICAgICAgICAgIGNoZWNrTGFzdFBhZ2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGxhc3RQYWdlID0gMTtcbiAgICAgICAgICAgIFxuICAgICAgICB2YXIgY2hlY2tMaW5rID0gJChcIi5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XG4gICAgICAgIHZhciBwYWdlTm90TGFzdCA9IGxhc3RQYWdlIC0gMTtcbiAgICAgICAgdmFyIHRvdGFsTm90TGFzdCA9IHBhZ2VOb3RMYXN0ICogcHJvZHVjdFBlclBhZ2U7XG4gICAgICAgIHZhciBwcm9kdWN0c0xhc3RQYWdlID0gdG90YWwgLSB0b3RhbE5vdExhc3Q7XG4gICAgICAgIHZhciBjdXJyZW50UGFnZSA9IHBhcnNlSW50KCQoJy5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQgPiBhJykudGV4dCgpKTtcbiAgICAgICAgdmFyIHByZXZQYWdlID0gY3VycmVudFBhZ2UgLSAxO1xuXG4gICAgICAgIGlmIChjaGVja0xpbmsubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsYXN0UGFnZSA9IHBhcnNlSW50KCQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLmZpbmQoXCJhXCIpLnRleHQoKSk7XG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RQYWdlID0gcGFyc2VJbnQoY2hlY2tMaW5rLmZpbmQoXCJhXCIpLnRleHQoKSk7XG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0b3RhbCA8PSBwcm9kdWN0UGVyUGFnZSkge1xuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuc3RhcnQnKS50ZXh0KHN0YXJ0KTtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSAxKSB7XG4gICAgICAgICAgICAgICAgZW5kID0gcHJvZHVjdFBlclBhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gKHByZXZQYWdlICogcHJvZHVjdFBlclBhZ2UpICsgMTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tMYXN0UGFnZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCQoJy5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tbmV4dCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdG90YWxOb3RMYXN0ICsgcHJvZHVjdHNMYXN0UGFnZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRvdGFsTm90TGFzdCArIHByb2R1Y3RzTGFzdFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuc3RhcnQnKS50ZXh0KHN0YXJ0KTtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoZW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZhbmN5Ym94VmlkZW9CYW5uZXIoKXtcbiAgICAgICAgaWYgKCQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLnZpZGVvLWJsb2NrLWltYWdlW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgICAgICAgICAnYXV0b0RpbWVuc2lvbnMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxuICAgICAgICAgICAgICAgICd3aWR0aCcgOiA5NzAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCcgOiA2MDAsXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbkluJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbk91dCcgOiAnbm9uZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xuICAgICAgICAgICAgICAgICdhdXRvRGltZW5zaW9ucyc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6IDAsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6IDYwMCxcbiAgICAgICAgICAgICAgICAnYXV0b1NjYWxlJyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uT3V0JyA6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRVcmxQYXJhbWV0ZXIoc1BhcmFtKSB7XG4gICAgICAgIHZhciBzUGFnZVVSTCA9IGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSksXG4gICAgICAgICAgICBzVVJMVmFyaWFibGVzID0gc1BhZ2VVUkwuc3BsaXQoJyYnKSxcbiAgICAgICAgICAgIHNQYXJhbWV0ZXJOYW1lLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc1VSTFZhcmlhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc1BhcmFtZXRlck5hbWUgPSBzVVJMVmFyaWFibGVzW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgICAgIGlmIChzUGFyYW1ldGVyTmFtZVswXSA9PT0gc1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNQYXJhbWV0ZXJOYW1lWzFdID09PSB1bmRlZmluZWQgPyB0cnVlIDogc1BhcmFtZXRlck5hbWVbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoY29udGV4dCl7XG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ2ZlYXR1cmVkLXByb2R1Y3RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiRmFjZXRlZFNlYXJjaCIsImNvbXBhcmVQcm9kdWN0cyIsInVybFV0aWxzIiwiVXJsIiwiY29sbGFwc2libGVGYWN0b3J5Iiwibm9kIiwicHJvZHVjdERpc3BsYXlNb2RlIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwiaGFsb1N0aWNreVRvb2xiYXIiLCJTZWFyY2giLCJfQ2F0YWxvZ1BhZ2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlIiwibm9kZSIsIl90aGlzIiwibm9kZURhdGEiLCJ0ZXh0IiwiZGF0YSIsImlkIiwibWV0YWRhdGEiLCJzdGF0ZSIsInNlbGVjdGVkIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwicHVzaCIsInNob3dQcm9kdWN0cyIsIm5hdmlnYXRlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwicmVtb3ZlQ2xhc3MiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciIsImFkZENsYXNzIiwiJCIsInNlYXJjaERhdGEiLCJ1cmwiLCJjb3VudCIsInJlcGxhY2VQYXJhbXMiLCJwYWdlIiwiZ29Ub1VybCIsInNob3dDb250ZW50Iiwib25SZWFkeSIsIl90aGlzMiIsImNvbnRleHQiLCJ1cmxzIiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwiZmluZCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidHJlZURhdGEiLCJsZW5ndGgiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5Iiwic2VjdGlvbiIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImNhdGVnb3J5SWQiLCJ2YWx1ZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJhcHBlbmQiLCJzaG93UHJvZHVjdHNQZXJQYWdlIiwic2hvd01vcmVQcm9kdWN0cyIsInNob3dJdGVtIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiZmFuY3lib3hWaWRlb0Jhbm5lciIsImxvYWRUcmVlTm9kZXMiLCJjYiIsIl90aGlzMyIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJfdGhpczQiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwiX3RoaXM1IiwiJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyIiwiJHNlYXJjaEhlYWRpbmciLCIkc2VhcmNoQ291bnQiLCIkY29udGVudENvdW50IiwiJHBhZ2luYXRvckNvbnRhaW5lciIsIiRzaG93TW9yZUNvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsImNvbnRlbnRMaXN0aW5nIiwic2lkZWJhciIsImhlYWRpbmciLCJwcm9kdWN0Q291bnQiLCJjb250ZW50Q291bnQiLCJwYWdpbmF0b3IiLCJjb25maWciLCJwcm9kdWN0X3Jlc3VsdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiJGZvcm0iLCJzdWJtaXQiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJVUkwiLCJjIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJjYWxsIiwiZWxlbWVudCIsImUiLCJnZXRVcmxQYXJhbWV0ZXIiLCJuZXh0UGFnZSIsIm5leHQiLCJsaW5rIiwiYXR0ciIsInJlcGxhY2UiLCJzdWNjZXNzIiwiYmx1ciIsInByb2R1Y3RQZXJQYWdlIiwicGFnZUN1cnJlbnQiLCJwYXJzZUludCIsInVuZGVmaW5lZCIsInRvdGFsIiwic3RhcnQiLCJlbmQiLCJjaGVja0xhc3RQYWdlIiwibGFzdFBhZ2UiLCJjaGVja0xpbmsiLCJwYWdlTm90TGFzdCIsInRvdGFsTm90TGFzdCIsInByb2R1Y3RzTGFzdFBhZ2UiLCJjdXJyZW50UGFnZSIsInByZXZQYWdlIiwiZmFuY3lib3giLCJzUGFyYW0iLCJzUGFnZVVSTCIsImRlY29kZVVSSUNvbXBvbmVudCIsInNlYXJjaCIsInN1YnN0cmluZyIsInNVUkxWYXJpYWJsZXMiLCJzcGxpdCIsInNQYXJhbWV0ZXJOYW1lIiwiaSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9
