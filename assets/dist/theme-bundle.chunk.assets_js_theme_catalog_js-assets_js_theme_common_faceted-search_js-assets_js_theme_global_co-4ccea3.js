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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2dsb2JhbF9jby00Y2NlYTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBQ3BCO0FBQUEsSUFFREcsV0FBVywwQkFBQUMsWUFBQTtFQUFBLFNBQUFELFlBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosV0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxXQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUM1QkUsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUNDLEtBQUssRUFBRTtJQUNsQixJQUFNQyxHQUFHLEdBQUdWLHNDQUFTLENBQUNZLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2pELElBQU1DLFdBQVcsR0FBR0MsQ0FBQyxDQUFDUCxLQUFLLENBQUNRLGFBQWEsQ0FBQyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBRWpFVCxHQUFHLENBQUNVLEtBQUssQ0FBQ0wsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsT0FBT0wsR0FBRyxDQUFDVSxLQUFLLENBQUNDLElBQUk7SUFFckJaLEtBQUssQ0FBQ2EsY0FBYyxDQUFDLENBQUM7SUFDdEJWLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHYix1Q0FBVSxDQUFDO01BQUV3QixRQUFRLEVBQUVkLEdBQUcsQ0FBQ2MsUUFBUTtNQUFFQyxNQUFNLEVBQUUxQix5REFBUSxDQUFDMkIsZ0JBQWdCLENBQUNoQixHQUFHLENBQUNVLEtBQUs7SUFBRSxDQUFDLENBQUM7RUFDMUcsQ0FBQztF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LENBQUMwRSxNQUFNLENBQUMsQ0FBQyxFQUFFO1VBQ25ERCxPQUFPLENBQUM1QixXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM3RSxRQUFRLENBQUMsYUFBYSxDQUFDO1VBRXhELElBQUlrSCxNQUFNLEdBQUdYLGdCQUFnQixFQUFFO1lBQzNCRixLQUFLLENBQUNyRyxRQUFRLENBQUMsbUJBQW1CLENBQUM7VUFDdkMsQ0FBQyxNQUFNO1lBQ0hxRyxLQUFLLENBQUN4QixXQUFXLENBQUMsbUJBQW1CLENBQUM7VUFDMUM7UUFDSjtNQUNKO01BRUFtQyxhQUFhLEdBQUdFLE1BQU07SUFDMUIsQ0FBQyxDQUFDO0VBQ047RUFFQSxJQUFJdE4sQ0FBQyxDQUFDSixNQUFNLENBQUMsQ0FBQzhOLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFO0lBQzFCaEIsY0FBYyxDQUFDLENBQUM7RUFDcEIsQ0FBQyxNQUFLO0lBQ0ZELEtBQUssQ0FBQ3hCLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQztFQUMxQztBQUNKOzs7Ozs7Ozs7O0FDeERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9mYWNldGVkLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU2lkZUFsbENhdGVnb3J5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy9pZ25vcmVkfEM6XFxVc2Vyc1xcTEFQVE9QIFdBTEFcXERlc2t0b3BcXEJpZ0NvbW1lcmVjZVxcQStUbytaLTEuMS45XFxub2RlX21vZHVsZXNcXG9iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi9mb3JtLXV0aWxzJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcbiAgICAgICAgICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyJyxcbiAgICAgICAgICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgICAgICAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgICAgICAgICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID8gJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nIDogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPXByaWNlX21heF0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID8gJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nIDogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPXByaWNlX21pbl0nLFxuICAgICAgICAgICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgICAgICAgICBmYWNldGVkU2VhcmNoRmlsdGVySXRlbXM6ICcjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dCcsXG4gICAgICAgICAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICAgICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIC8vIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHJhbmdlIHZpZXcgd2hlbiBzaG9wLWJ5LXByaWNlIGVuYWJsZWRcbiAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICAgICAgICAgIGlmICh1cmxQYXJhbXMuaGFzKCdzZWFyY2hfcXVlcnknKSkge1xuICAgICAgICAgICAgICAgICQoJy5yZXNldC1maWx0ZXJzJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWluXCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9taW4nKSk7XG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWF4XCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9tYXgnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFJlbW92ZVxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgJCgnI21vZGFsJykuYWRkQ2xhc3MoJ21vZGFsLS1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICQoZWxlbWVudCkudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMpO1xuXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHZpc2libGUgaXRlbXNcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICB9XG5cbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xuICAgIH1cblxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKS5zcGxpdCgnJicpO1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHVybFV0aWxzLnBhcnNlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeVtrZXldID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBvcFN0YXRlKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCAhPT0gJycpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcblxuICAgIHBhcnNlUXVlcnlQYXJhbXM6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBxdWVyeURhdGFbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBbMF0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zW3RlbXBbMF1dKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0ucHVzaCh0ZW1wWzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSBbcGFyYW1zW3RlbXBbMF1dLCB0ZW1wWzFdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IHRlbXBbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmxVdGlscztcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJsQ29udGV4dCkge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVDb3VudGVyID0gW107XG5cbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpIDogW107XG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZyA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLFxuICAgICAgICAkZ3JpZCA9ICQoJyNncmlkLXZpZXcnKSxcbiAgICAgICAgJGxpc3QgPSAkKCcjbGlzdC12aWV3JyksXG4gICAgICAgICRncmlkTW9iaWxlID0gJCgnI2dyaWQtdmlldy1tb2JpbGUnKSxcbiAgICAgICAgJGxpc3RNb2JpbGUgPSAkKCcjbGlzdC12aWV3LW1vYmlsZScpO1xuXG4gICAgJGxpc3Qub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoISRsaXN0Lmhhc0NsYXNzKCdjdXJyZW50LXZpZXcnKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICAgICAkbGlzdC5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGxpc3RNb2JpbGUuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRncmlkLnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkZ3JpZE1vYmlsZS5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nLnJlbW92ZUNsYXNzKCdwcm9kdWN0R3JpZCcpLmFkZENsYXNzKCdwcm9kdWN0TGlzdCcpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfVxuICAgfSk7XG5cbiAgICAkZ3JpZC5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghJGdyaWQuaGFzQ2xhc3MoJ2N1cnJlbnQtdmlldycpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICRncmlkLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkZ3JpZE1vYmlsZS5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGxpc3QucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRsaXN0TW9iaWxlLnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmcucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3RMaXN0JykuYWRkQ2xhc3MoJ3Byb2R1Y3RHcmlkJyk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkbGlzdE1vYmlsZS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghJGxpc3RNb2JpbGUuaGFzQ2xhc3MoJ2N1cnJlbnQtdmlldycpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICRsaXN0LmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkbGlzdE1vYmlsZS5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGdyaWQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRncmlkTW9iaWxlLnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmcucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3RHcmlkJykuYWRkQ2xhc3MoJ3Byb2R1Y3RMaXN0Jyk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkZ3JpZE1vYmlsZS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghJGdyaWRNb2JpbGUuaGFzQ2xhc3MoJ2N1cnJlbnQtdmlldycpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICRncmlkLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkZ3JpZE1vYmlsZS5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGxpc3QucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRsaXN0TW9iaWxlLnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmcucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3RMaXN0JykuYWRkQ2xhc3MoJ3Byb2R1Y3RHcmlkJyk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYWxsLWNhdGVnb3JpZXMtbGlzdCAuaWNvbi1kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKS5wYXJlbnQoKTtcblxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCBjdXJyZW50LWNhdGUnKTtcbiAgICAgICAgICAgICR0aGlzLnRvZ2dsZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygpLmZpbmQoXCI+IC5kcm9wZG93bi1jYXRlZ29yeS1saXN0XCIpLnNsaWRlVXAoXCJzbG93XCIpO1xuICAgICAgICAgICAgJHRoaXMuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVUb2dnbGUoXCJzbG93XCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCBsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnY3VycmVudC1jYXRlJykpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCI+IC5kcm9wZG93bi1jYXRlZ29yeS1saXN0XCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXG4gICAgZnVuY3Rpb24gdG9vbGJhcl9zdGlja3koKSB7XG4gICAgICAgIHZhciB0b29sYmFyX3Bvc2l0aW9uLCB0b29sYmFyX2hlaWdodCxcbiAgICAgICAgICAgIHRvb2xiYXIgPSAkKCcucGFnZS1saXN0aW5nIC5oYWxvLXRvb2xiYXInKTtcblxuICAgICAgICB0b29sYmFyX2hlaWdodCA9IHRvb2xiYXIuaGVpZ2h0KCk7XG4gICAgICAgIHRvb2xiYXJfcG9zaXRpb24gPSB0b29sYmFyLm9mZnNldCgpLnRvcCArIHRvb2xiYXIub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKHRvb2xiYXIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b29sYmFyX3Njcm9sbCh0b29sYmFyX3Bvc2l0aW9uLCB0b29sYmFyX2hlaWdodCwgdG9vbGJhcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b29sYmFyX3Njcm9sbCh0b29sYmFyX3Bvc2l0aW9uLCB0b29sYmFyX2hlaWdodCwgdG9vbGJhcikge1xuICAgICAgICB2YXIgZGlkU2Nyb2xsLFxuICAgICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IDAsXG4gICAgICAgICAgICBkZWx0YSA9IDU7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYoTWF0aC5hYnMobGFzdFNjcm9sbFRvcCAtIHNjcm9sbCkgPD0gZGVsdGEpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjcm9sbCA+IGxhc3RTY3JvbGxUb3AgJiYgc2Nyb2xsID4gdG9vbGJhcl9wb3NpdGlvbil7XG4gICAgICAgICAgICAgICAgdG9vbGJhci5yZW1vdmVDbGFzcygnc3RpY2t5LWRvd24nKS5hZGRDbGFzcygnc3RpY2t5LXVwJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbCA+IHRvb2xiYXJfcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ2hhcy1zdGlja3lUb29sYmFyJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ2hhcy1zdGlja3lUb29sYmFyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihzY3JvbGwgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPCAkKGRvY3VtZW50KS5oZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB0b29sYmFyLnJlbW92ZUNsYXNzKCdzdGlja3ktdXAnKS5hZGRDbGFzcygnc3RpY2t5LWRvd24nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gdG9vbGJhcl9wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ2hhcy1zdGlja3lUb29sYmFyJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnaGFzLXN0aWNreVRvb2xiYXInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xuICAgICAgICB0b29sYmFyX3N0aWNreSgpO1xuICAgIH0gZWxzZXtcbiAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ2hhcy1zdGlja3lUb29sYmFyJyk7XG4gICAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwidXJsVXRpbHMiLCJVcmwiLCJDYXRhbG9nUGFnZSIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwidXJsIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsIiQiLCJjdXJyZW50VGFyZ2V0Iiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiYnVpbGRRdWVyeVN0cmluZyIsImRlZmF1bHQiLCJob29rcyIsImFwaSIsIm1vZGFsRmFjdG9yeSIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlZhbGlkYXRvcnMiLCJub2QiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJfdGhpcyIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsImxlbmd0aCIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxPcGVuIiwiX2V4dGVuZCIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsIl90aGlzMiIsInNob3ciLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiaGFzIiwiYXR0ciIsImdldCIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImlkIiwiX3dpdGhvdXQiLCJoYXNNb3JlUmVzdWx0cyIsIl91bmlvbiIsInRvZ2dsZUZhY2V0SXRlbXMiLCJfaW5jbHVkZXMiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiX3RoaXMzIiwiZmFjZXQiLCJmYWNldFVybCIsInNob3dNb3JlIiwidGVtcGxhdGUiLCJwYXJhbXMiLCJsaXN0X2FsbCIsInJlc3BvbnNlIiwib3BlbiIsImFkZENsYXNzIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCJfdGhpczQiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsIl90aGlzNSIsInZhbGlkYXRvciIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiX3RoaXM2IiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRzIiwiX3RoaXM3IiwidW5iaW5kRXZlbnRzIiwib24iLCJvblBvcFN0YXRlIiwiZG9jdW1lbnQiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwicGFyc2VRdWVyeVBhcmFtcyIsImtleSIsImhhc093blByb3BlcnR5IiwiaGFzaCIsInRyaWdnZXIiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJyZXBsYWNlUGFyYW1zIiwicGFyc2VkIiwicGFyYW0iLCJxdWVyeURhdGEiLCJvdXQiLCJBcnJheSIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciLCJpIiwidGVtcCIsInNob3dBbGVydE1vZGFsIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInVwZGF0ZUNvdW50ZXJOYXYiLCJ1cmxDb250ZXh0IiwiY29tcGFyZSIsImpvaW4iLCJmaW5kIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsIl9tYXAiLCJ2YWx1ZSIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJHRoaXMiLCJwcm9kdWN0c1RvQ29tcGFyZSIsIiRjbGlja2VkQ2hlY2tlZElucHV0IiwiJHByb2R1Y3RMaXN0aW5nIiwiJGdyaWQiLCIkbGlzdCIsIiRncmlkTW9iaWxlIiwiJGxpc3RNb2JpbGUiLCJoYXNDbGFzcyIsInBhcmVudCIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiY29udGV4dCIsIiRib2R5IiwidG9vbGJhcl9zdGlja3kiLCJ0b29sYmFyX3Bvc2l0aW9uIiwidG9vbGJhcl9oZWlnaHQiLCJ0b29sYmFyIiwiaGVpZ2h0Iiwib2Zmc2V0IiwidG9wIiwib3V0ZXJIZWlnaHQiLCJ0b29sYmFyX3Njcm9sbCIsImRpZFNjcm9sbCIsImxhc3RTY3JvbGxUb3AiLCJkZWx0YSIsInNjcm9sbCIsInNjcm9sbFRvcCIsIk1hdGgiLCJhYnMiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=
