(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_global_co-4ccea3"],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(CatalogPage, _PageManager);
  var _proto = CatalogPage.prototype;
  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2__.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");












/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=max_price]' : '#facet-range-form [name=price_max]',
      priceRangeMinPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=min_price]' : '#facet-range-form [name=price_min]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    // this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.api.getPage(_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        $('#modal').addClass('modal--filter');
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_9__.Validators.setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    if (document.location.hash !== '') return;
    $(window).trigger('statechange');
  };
  return FacetedSearch;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacetedSearch);

/***/ }),

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};
    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');
      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }
    return params;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urlContext) {
  if (counter.length > 1) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    }) : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.showAlertModal)('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.showAlertModal)('You must select at least two products to compare');
      return false;
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloProductDisplayMode.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductDisplayMode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var $productListing = $('#product-listing-container .productListing'),
    $grid = $('#grid-view'),
    $list = $('#list-view'),
    $gridMobile = $('#grid-view-mobile'),
    $listMobile = $('#list-view-mobile');
  $list.on('click', function (event) {
    if (!$list.hasClass('current-view')) {
      setTimeout(function () {
        $list.addClass('current-view');
        $listMobile.addClass('current-view');
        $grid.removeClass('current-view');
        $gridMobile.removeClass('current-view');
        $productListing.removeClass('productGrid').addClass('productList');
      }, 300);
    }
  });
  $grid.on('click', function (event) {
    if (!$grid.hasClass('current-view')) {
      setTimeout(function () {
        $grid.addClass('current-view');
        $gridMobile.addClass('current-view');
        $list.removeClass('current-view');
        $listMobile.removeClass('current-view');
        $productListing.removeClass('productList').addClass('productGrid');
      }, 300);
    }
  });
  $listMobile.on('click', function (event) {
    if (!$listMobile.hasClass('current-view')) {
      setTimeout(function () {
        $list.addClass('current-view');
        $listMobile.addClass('current-view');
        $grid.removeClass('current-view');
        $gridMobile.removeClass('current-view');
        $productListing.removeClass('productGrid').addClass('productList');
      }, 300);
    }
  });
  $gridMobile.on('click', function (event) {
    if (!$gridMobile.hasClass('current-view')) {
      setTimeout(function () {
        $grid.addClass('current-view');
        $gridMobile.addClass('current-view');
        $list.removeClass('current-view');
        $listMobile.removeClass('current-view');
        $productListing.removeClass('productList').addClass('productGrid');
      }, 300);
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloSideAllCategory.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloSideAllCategory.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if ($('.all-categories-list').length > 0) {
    $(document).on('click', '.all-categories-list .icon-dropdown', function () {
      var $this = $(this).parent();
      $this.siblings().removeClass('is-clicked current-cate');
      $this.toggleClass('is-clicked');
      $this.siblings().find("> .dropdown-category-list").slideUp("slow");
      $this.find("> .dropdown-category-list").slideToggle("slow");
    });
    $('.all-categories-list li').each(function () {
      if ($(this).hasClass('current-cate')) {
        $(this).find("> .dropdown-category-list").slideToggle("slow");
      }
    });
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyToolbar.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyToolbar.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var $body = $('body');
  function toolbar_sticky() {
    var toolbar_position,
      toolbar_height,
      toolbar = $('.page-listing .halo-toolbar');
    toolbar_height = toolbar.height();
    toolbar_position = toolbar.offset().top + toolbar.outerHeight(true);
    if (toolbar.length) {
      toolbar_scroll(toolbar_position, toolbar_height, toolbar);
    }
  }
  function toolbar_scroll(toolbar_position, toolbar_height, toolbar) {
    var didScroll,
      lastScrollTop = 0,
      delta = 5;
    $(window).on('scroll load', function () {
      var scroll = $(window).scrollTop();
      if (Math.abs(lastScrollTop - scroll) <= delta) {
        return;
      }
      if (scroll > lastScrollTop && scroll > toolbar_position) {
        toolbar.removeClass('sticky-down').addClass('sticky-up');
        if (scroll > toolbar_position) {
          $body.addClass('has-stickyToolbar');
        } else {
          $body.removeClass('has-stickyToolbar');
        }
      } else {
        if (scroll + $(window).height() < $(document).height()) {
          toolbar.removeClass('sticky-up').addClass('sticky-down');
          if (scroll > toolbar_position) {
            $body.addClass('has-stickyToolbar');
          } else {
            $body.removeClass('has-stickyToolbar');
          }
        }
      }
      lastScrollTop = scroll;
    });
  }
  if ($(window).width() < 1025) {
    toolbar_sticky();
  } else {
    $body.removeClass('has-stickyToolbar');
  }
}

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2dsb2JhbF9jby00Y2NlYTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBQ3BCO0FBQUEsSUFFREcsV0FBVywwQkFBQUMsWUFBQTtFQUFBLFNBQUFELFlBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosV0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxXQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUM1QkUsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUNDLEtBQUssRUFBRTtJQUNsQixJQUFNQyxHQUFHLEdBQUdWLHNDQUFTLENBQUNZLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2pELElBQU1DLFdBQVcsR0FBR0MsQ0FBQyxDQUFDUCxLQUFLLENBQUNRLGFBQWEsQ0FBQyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBRWpFVCxHQUFHLENBQUNVLEtBQUssQ0FBQ0wsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsT0FBT0wsR0FBRyxDQUFDVSxLQUFLLENBQUNDLElBQUk7SUFFckJaLEtBQUssQ0FBQ2EsY0FBYyxDQUFDLENBQUM7SUFDdEJWLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHYix1Q0FBVSxDQUFDO01BQUV3QixRQUFRLEVBQUVkLEdBQUcsQ0FBQ2MsUUFBUTtNQUFFQyxNQUFNLEVBQUUxQix5REFBUSxDQUFDMkIsZ0JBQWdCLENBQUNoQixHQUFHLENBQUNVLEtBQUs7SUFBRSxDQUFDLENBQUM7RUFDMUcsQ0FBQztF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LENBQUMwRSxNQUFNLENBQUMsQ0FBQyxFQUFFO1VBQ25ERCxPQUFPLENBQUM1QixXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM3RSxRQUFRLENBQUMsYUFBYSxDQUFDO1VBRXhELElBQUlrSCxNQUFNLEdBQUdYLGdCQUFnQixFQUFFO1lBQzNCRixLQUFLLENBQUNyRyxRQUFRLENBQUMsbUJBQW1CLENBQUM7VUFDdkMsQ0FBQyxNQUFNO1lBQ0hxRyxLQUFLLENBQUN4QixXQUFXLENBQUMsbUJBQW1CLENBQUM7VUFDMUM7UUFDSjtNQUNKO01BRUFtQyxhQUFhLEdBQUdFLE1BQU07SUFDMUIsQ0FBQyxDQUFDO0VBQ047RUFFQSxJQUFJdE4sQ0FBQyxDQUFDSixNQUFNLENBQUMsQ0FBQzhOLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFO0lBQzFCaEIsY0FBYyxDQUFDLENBQUM7RUFDcEIsQ0FBQyxNQUFLO0lBQ0ZELEtBQUssQ0FBQ3hCLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztFQUMxQztBQUNKOzs7Ozs7Ozs7O0FDeERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9mYWNldGVkLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU2lkZUFsbENhdGVnb3J5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy9pZ25vcmVkfEM6XFxINVNIXFxXb3JrXFxtZXRhdml6LnByb1xcQSBUbyBaLTEuMS45XFxBIFRvIFotMS4xLjlcXG5vZGVfbW9kdWxlc1xcb2JqZWN0LWluc3BlY3R8Li91dGlsLmluc3BlY3QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5cbi8qKlxuICogRmFjZXRlZCBzZWFyY2ggdmlldyBjb21wb25lbnRcbiAqL1xuY2xhc3MgRmFjZXRlZFNlYXJjaCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZmV0Y2hpbmcgdGVtcGxhdGVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgKiAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXG4gICAgICogICAgIH1cbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgICAgICAgICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgICAgICAgICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICAgICAgICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgICAgICAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgICAgICAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPyAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScgOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9cHJpY2VfbWF4XScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPyAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScgOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9cHJpY2VfbWluXScsXG4gICAgICAgICAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1jb250ZW50IC50b2dnbGVMaW5rJyxcbiAgICAgICAgICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICAgICAgICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgICAgICAgICAgbW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IFtdO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWFyayBpbml0aWFsbHkgY29sbGFwc2VkIGFjY29yZGlvbnNcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5wdXNoKGNvbGxhcHNpYmxlLnRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXG4gICAgICAgIC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSB1c2VyIGV2ZW50c1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblRvZ2dsZUNsaWNrID0gdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BY2NvcmRpb25Ub2dnbGUgPSB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DbGVhckZhY2V0ID0gdGhpcy5vbkNsZWFyRmFjZXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZhY2V0Q2xpY2sgPSB0aGlzLm9uRmFjZXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUmFuZ2VTdWJtaXQgPSB0aGlzLm9uUmFuZ2VTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5maWx0ZXJGYWNldEl0ZW1zID0gdGhpcy5maWx0ZXJGYWNldEl0ZW1zLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZWZyZXNoVmlldyhjb250ZW50KSB7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHZpZXcgc3RhdGVcbiAgICAgICAgLy8gdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKTtcblxuICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVWaWV3KCkge1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggcmFuZ2UgdmlldyB3aGVuIHNob3AtYnktcHJpY2UgZW5hYmxlZFxuICAgICAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblxuICAgICAgICAgICAgaWYgKHVybFBhcmFtcy5oYXMoJ3NlYXJjaF9xdWVyeScpKSB7XG4gICAgICAgICAgICAgICAgJCgnLnJlc2V0LWZpbHRlcnMnKS5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcmljZV9taW5cIl0nKS5hdHRyKCd2YWx1ZScsIHVybFBhcmFtcy5nZXQoJ3ByaWNlX21pbicpKTtcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcmljZV9tYXhcIl0nKS5hdHRyKCd2YWx1ZScsIHVybFBhcmFtcy5nZXQoJ3ByaWNlX21heCcpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcbiAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWwnKS5hZGRDbGFzcygnbW9kYWwtLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25SYW5nZVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KCcmJyk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeVBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybFF1ZXJ5UGFyYW1zKSB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUG9wU3RhdGUoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5oYXNoICE9PSAnJykgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxuXG4gICAgcGFyc2VRdWVyeVBhcmFtczogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXJ5RGF0YVtpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFswXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbdGVtcFswXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXS5wdXNoKHRlbXBbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IFtwYXJhbXNbdGVtcFswXV0sIHRlbXBbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gdGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybENvbnRleHQuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVybENvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcblxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICQoJ2JvZHknKS5vbignY29tcGFyZVJlc2V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGNvbXBhcmVDb3VudGVyID0gJGNoZWNrZWQubGVuZ3RoID8gXy5tYXAoJGNoZWNrZWQsIGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSkgOiBbXTtcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdbZGF0YS1wcm9kdWN0LWNvbXBhcmVdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzVG9Db21wYXJlID0gJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAocHJvZHVjdHNUb0NvbXBhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKCdZb3UgbXVzdCBzZWxlY3QgYXQgbGVhc3QgdHdvIHByb2R1Y3RzIHRvIGNvbXBhcmUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJyksXG4gICAgICAgICRncmlkID0gJCgnI2dyaWQtdmlldycpLFxuICAgICAgICAkbGlzdCA9ICQoJyNsaXN0LXZpZXcnKSxcbiAgICAgICAgJGdyaWRNb2JpbGUgPSAkKCcjZ3JpZC12aWV3LW1vYmlsZScpLFxuICAgICAgICAkbGlzdE1vYmlsZSA9ICQoJyNsaXN0LXZpZXctbW9iaWxlJyk7XG5cbiAgICAkbGlzdC5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghJGxpc3QuaGFzQ2xhc3MoJ2N1cnJlbnQtdmlldycpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICRsaXN0LmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkbGlzdE1vYmlsZS5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGdyaWQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRncmlkTW9iaWxlLnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmcucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3RHcmlkJykuYWRkQ2xhc3MoJ3Byb2R1Y3RMaXN0Jyk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9XG4gICB9KTtcblxuICAgICRncmlkLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCEkZ3JpZC5oYXNDbGFzcygnY3VycmVudC12aWV3JykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgJGdyaWQuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRncmlkTW9iaWxlLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkbGlzdC5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGxpc3RNb2JpbGUucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZy5yZW1vdmVDbGFzcygncHJvZHVjdExpc3QnKS5hZGRDbGFzcygncHJvZHVjdEdyaWQnKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRsaXN0TW9iaWxlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCEkbGlzdE1vYmlsZS5oYXNDbGFzcygnY3VycmVudC12aWV3JykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgJGxpc3QuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRsaXN0TW9iaWxlLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkZ3JpZC5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGdyaWRNb2JpbGUucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZy5yZW1vdmVDbGFzcygncHJvZHVjdEdyaWQnKS5hZGRDbGFzcygncHJvZHVjdExpc3QnKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRncmlkTW9iaWxlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCEkZ3JpZE1vYmlsZS5oYXNDbGFzcygnY3VycmVudC12aWV3JykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgJGdyaWQuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRncmlkTW9iaWxlLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkbGlzdC5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGxpc3RNb2JpbGUucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZy5yZW1vdmVDbGFzcygncHJvZHVjdExpc3QnKS5hZGRDbGFzcygncHJvZHVjdEdyaWQnKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hbGwtY2F0ZWdvcmllcy1saXN0IC5pY29uLWRyb3Bkb3duJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdpcy1jbGlja2VkIGN1cnJlbnQtY2F0ZScpO1xuICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVVcChcInNsb3dcIik7XG4gICAgICAgICAgICAkdGhpcy5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVRvZ2dsZShcInNsb3dcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5hbGwtY2F0ZWdvcmllcy1saXN0IGxpJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdjdXJyZW50LWNhdGUnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVUb2dnbGUoXCJzbG93XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICBmdW5jdGlvbiB0b29sYmFyX3N0aWNreSgpIHtcbiAgICAgICAgdmFyIHRvb2xiYXJfcG9zaXRpb24sIHRvb2xiYXJfaGVpZ2h0LFxuICAgICAgICAgICAgdG9vbGJhciA9ICQoJy5wYWdlLWxpc3RpbmcgLmhhbG8tdG9vbGJhcicpO1xuXG4gICAgICAgIHRvb2xiYXJfaGVpZ2h0ID0gdG9vbGJhci5oZWlnaHQoKTtcbiAgICAgICAgdG9vbGJhcl9wb3NpdGlvbiA9IHRvb2xiYXIub2Zmc2V0KCkudG9wICsgdG9vbGJhci5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICBpZiAodG9vbGJhci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvb2xiYXJfc2Nyb2xsKHRvb2xiYXJfcG9zaXRpb24sIHRvb2xiYXJfaGVpZ2h0LCB0b29sYmFyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvb2xiYXJfc2Nyb2xsKHRvb2xiYXJfcG9zaXRpb24sIHRvb2xiYXJfaGVpZ2h0LCB0b29sYmFyKSB7XG4gICAgICAgIHZhciBkaWRTY3JvbGwsXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gMCxcbiAgICAgICAgICAgIGRlbHRhID0gNTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBpZihNYXRoLmFicyhsYXN0U2Nyb2xsVG9wIC0gc2Nyb2xsKSA8PSBkZWx0YSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2Nyb2xsID4gbGFzdFNjcm9sbFRvcCAmJiBzY3JvbGwgPiB0b29sYmFyX3Bvc2l0aW9uKXtcbiAgICAgICAgICAgICAgICB0b29sYmFyLnJlbW92ZUNsYXNzKCdzdGlja3ktZG93bicpLmFkZENsYXNzKCdzdGlja3ktdXAnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gdG9vbGJhcl9wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygnaGFzLXN0aWNreVRvb2xiYXInKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnaGFzLXN0aWNreVRvb2xiYXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHNjcm9sbCArICQod2luZG93KS5oZWlnaHQoKSA8ICQoZG9jdW1lbnQpLmhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXIucmVtb3ZlQ2xhc3MoJ3N0aWNreS11cCcpLmFkZENsYXNzKCdzdGlja3ktZG93bicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiB0b29sYmFyX3Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygnaGFzLXN0aWNreVRvb2xiYXInKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI1KSB7XG4gICAgICAgIHRvb2xiYXJfc3RpY2t5KCk7XG4gICAgfSBlbHNle1xuICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnaGFzLXN0aWNreVRvb2xiYXInKTtcbiAgICB9XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJ1cmxVdGlscyIsIlVybCIsIkNhdGFsb2dQYWdlIiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJ1cmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInF1ZXJ5UGFyYW1zIiwiJCIsImN1cnJlbnRUYXJnZXQiLCJzZXJpYWxpemUiLCJzcGxpdCIsInF1ZXJ5IiwicGFnZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybWF0IiwicGF0aG5hbWUiLCJzZWFyY2giLCJidWlsZFF1ZXJ5U3RyaW5nIiwiZGVmYXVsdCIsImhvb2tzIiwiYXBpIiwibW9kYWxGYWN0b3J5IiwiY29sbGFwc2libGVGYWN0b3J5IiwiVmFsaWRhdG9ycyIsIm5vZCIsIkZhY2V0ZWRTZWFyY2giLCJyZXF1ZXN0T3B0aW9ucyIsImNhbGxiYWNrIiwib3B0aW9ucyIsIl90aGlzIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwibGVuZ3RoIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJfZXh0ZW5kIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImluaXRQcmljZVZhbGlkYXRvciIsImVhY2giLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJkYXRhIiwiaXNDb2xsYXBzZWQiLCJwdXNoIiwidGFyZ2V0SWQiLCJzZXRUaW1lb3V0IiwiaXMiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJ1cGRhdGVWaWV3IiwiX3RoaXMyIiwic2hvdyIsImdldFBhZ2UiLCJnZXRVcmwiLCJlcnIiLCJoaWRlIiwiRXJyb3IiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJoYXMiLCJhdHRyIiwiZ2V0IiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiaWQiLCJfd2l0aG91dCIsImhhc01vcmVSZXN1bHRzIiwiX3VuaW9uIiwidG9nZ2xlRmFjZXRJdGVtcyIsIl9pbmNsdWRlcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJfdGhpczMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwiYWRkQ2xhc3MiLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIl90aGlzNCIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwiX3RoaXM1IiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCJfdGhpczYiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJfdGhpczciLCJ1bmJpbmRFdmVudHMiLCJvbiIsIm9uUG9wU3RhdGUiLCJkb2N1bWVudCIsIm9mZiIsIiRsaW5rIiwic3RvcFByb3BhZ2F0aW9uIiwiZ29Ub1VybCIsIiR0b2dnbGUiLCJ0b2dnbGVDbGFzcyIsInVybFF1ZXJ5UGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJwYXJzZVF1ZXJ5UGFyYW1zIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJoYXNoIiwidHJpZ2dlciIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ0aXRsZSIsInJlcGxhY2VQYXJhbXMiLCJwYXJzZWQiLCJwYXJhbSIsInF1ZXJ5RGF0YSIsIm91dCIsIkFycmF5IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsImkiLCJ0ZW1wIiwic2hvd0FsZXJ0TW9kYWwiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwidXBkYXRlQ291bnRlck5hdiIsInVybENvbnRleHQiLCJjb21wYXJlIiwiam9pbiIsImZpbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJjb21wYXJlQ291bnRlciIsIiRjb21wYXJlTGluayIsIiRjaGVja2VkIiwiX21hcCIsInZhbHVlIiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiLCIkcHJvZHVjdExpc3RpbmciLCIkZ3JpZCIsIiRsaXN0IiwiJGdyaWRNb2JpbGUiLCIkbGlzdE1vYmlsZSIsImhhc0NsYXNzIiwicGFyZW50Iiwic2libGluZ3MiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJjb250ZXh0IiwiJGJvZHkiLCJ0b29sYmFyX3N0aWNreSIsInRvb2xiYXJfcG9zaXRpb24iLCJ0b29sYmFyX2hlaWdodCIsInRvb2xiYXIiLCJoZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJvdXRlckhlaWdodCIsInRvb2xiYXJfc2Nyb2xsIiwiZGlkU2Nyb2xsIiwibGFzdFNjcm9sbFRvcCIsImRlbHRhIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiTWF0aCIsImFicyIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==
