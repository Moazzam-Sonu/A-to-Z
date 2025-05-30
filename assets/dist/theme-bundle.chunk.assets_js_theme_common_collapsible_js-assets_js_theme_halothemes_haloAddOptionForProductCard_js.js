(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_common_collapsible_js-assets_js_theme_halothemes_haloAddOptionForProductCard_js"],{

/***/ "./assets/js/theme/common/collapsible.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/common/collapsible.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collapsible: () => (/* binding */ Collapsible),
/* harmony export */   CollapsibleEvents: () => (/* binding */ CollapsibleEvents),
/* harmony export */   "default": () => (/* binding */ collapsibleFactory)
/* harmony export */ });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_query_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PLUGIN_KEY = 'collapsible';
var CollapsibleEvents = {
  open: 'open.collapsible',
  close: 'close.collapsible',
  toggle: 'toggle.collapsible',
  click: 'click.collapsible'
};
var CollapsibleState = {
  closed: 'closed',
  open: 'open'
};
function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }
  return "#" + id;
}
function optionsFromData($element) {
  return {
    disabledBreakpoint: $element.data(PLUGIN_KEY + "DisabledBreakpoint"),
    disabledState: $element.data(PLUGIN_KEY + "DisabledState"),
    enabledState: $element.data(PLUGIN_KEY + "EnabledState"),
    openClassName: $element.data(PLUGIN_KEY + "OpenClassName")
  };
}

/**
 * Collapse/Expand toggle
 */
var Collapsible = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $toggle - Trigger button
   * @param {jQuery} $target - Content to collapse / expand
   * @param {Object} [options] - Configurable options
   * @param {Object} [options.$context]
   * @param {Object} [options.disabledBreakpoint]
   * @param {Object} [options.disabledState]
   * @param {Object} [options.enabledState]
   * @param {Object} [options.openClassName]
   * @example
   *
   * <button id="#more">Collapse</button>
   * <div id="content">...</div>
   *
   * new Collapsible($('#more'), $('#content'));
   */
  function Collapsible($toggle, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabledBreakpoint = _ref.disabledBreakpoint,
      disabledState = _ref.disabledState,
      enabledState = _ref.enabledState,
      _ref$openClassName = _ref.openClassName,
      openClassName = _ref$openClassName === void 0 ? 'is-open' : _ref$openClassName;
    this.$toggle = $toggle;
    this.$target = $target;
    this.targetId = $target.attr('id');
    this.openClassName = openClassName;
    this.disabledState = disabledState;
    this.enabledState = enabledState;
    if (disabledBreakpoint) {
      this.disabledMediaQueryList = (0,_media_query_list__WEBPACK_IMPORTED_MODULE_1__["default"])(disabledBreakpoint);
    }
    if (this.disabledMediaQueryList) {
      this.disabled = this.disabledMediaQueryList.matches;
    } else {
      this.disabled = false;
    }

    // Auto-bind
    this.onClicked = this.onClicked.bind(this);
    this.onDisabledMediaQueryListMatch = this.onDisabledMediaQueryListMatch.bind(this);

    // Assign DOM attributes
    this.$target.attr('aria-hidden', this.isCollapsed);
    this.$toggle.attr('aria-label', $toggle.text().trim()).attr('aria-controls', $target.attr('id')).attr('aria-expanded', this.isOpen);

    // Listen
    this.bindEvents();
  }
  var _proto = Collapsible.prototype;
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$notify = _ref2.notify,
      notify = _ref2$notify === void 0 ? true : _ref2$notify;
    this.$toggle.addClass(this.openClassName).attr('aria-expanded', true);
    this.$target.addClass(this.openClassName).attr('aria-hidden', false);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.open, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.close = function close(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$notify = _ref3.notify,
      notify = _ref3$notify === void 0 ? true : _ref3$notify;
    this.$toggle.removeClass(this.openClassName).attr('aria-expanded', false);
    this.$target.removeClass(this.openClassName).attr('aria-hidden', true);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.close, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.toggle = function toggle() {
    if (this.isCollapsed) {
      this.open();
    } else {
      this.close();
    }
  };
  _proto.toggleByState = function toggleByState(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    switch (state) {
      case CollapsibleState.open:
        return this.open.apply(this, args);
      case CollapsibleState.closed:
        return this.close.apply(this, args);
      default:
        return undefined;
    }
  };
  _proto.hasCollapsible = function hasCollapsible(collapsibleInstance) {
    return $.contains(this.$target.get(0), collapsibleInstance.$target.get(0));
  };
  _proto.bindEvents = function bindEvents() {
    this.$toggle.on(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.addListener) {
      this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$toggle.off(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.removeListener) {
      this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.onClicked = function onClicked(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    this.toggle();
  };
  _proto.onDisabledMediaQueryListMatch = function onDisabledMediaQueryListMatch(media) {
    this.disabled = media.matches;
  };
  return _createClass(Collapsible, [{
    key: "isCollapsed",
    get: function get() {
      return !this.$target.hasClass(this.openClassName) || this.$target.is(':hidden');
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !this.isCollapsed;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = disabled;
      if (disabled) {
        this.toggleByState(this.disabledState);
      } else {
        this.toggleByState(this.enabledState);
      }
    }
  }]);
}();

/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.$context]
 * @param {Object} [options.disabledBreakpoint]
 * @param {Object} [options.disabledState]
 * @param {Object} [options.enabledState]
 * @param {Object} [options.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */
function collapsibleFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY + "]";
  }
  if (overrideOptions === void 0) {
    overrideOptions = {};
  }
  var $collapsibles = $(selector, overrideOptions.$context);
  return $collapsibles.map(function (index, element) {
    var $toggle = $(element);
    var instanceKey = PLUGIN_KEY + "Instance";
    var cachedCollapsible = $toggle.data(instanceKey);
    if (cachedCollapsible instanceof Collapsible) {
      return cachedCollapsible;
    }
    var targetId = prependHash($toggle.data(PLUGIN_KEY) || $toggle.data(PLUGIN_KEY + "Target") || $toggle.attr('href'));
    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($toggle), overrideOptions);
    var collapsible = new Collapsible($toggle, $(targetId, overrideOptions.$context), options);
    $toggle.data(instanceKey, collapsible);
    return collapsible;
  }).toArray();
}

/***/ }),

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fY29sbGFwc2libGVfanMtYXNzZXRzX2pzX3RoZW1lX2hhbG90aGVtZXNfaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUV2RCxJQUFNQyxVQUFVLEdBQUcsYUFBYTtBQUV6QixJQUFNQyxpQkFBaUIsR0FBRztFQUM3QkMsSUFBSSxFQUFFLGtCQUFrQjtFQUN4QkMsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQkMsTUFBTSxFQUFFLG9CQUFvQjtFQUM1QkMsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVELElBQU1DLGdCQUFnQixHQUFHO0VBQ3JCQyxNQUFNLEVBQUUsUUFBUTtFQUNoQkwsSUFBSSxFQUFFO0FBQ1YsQ0FBQztBQUVELFNBQVNNLFdBQVdBLENBQUNDLEVBQUUsRUFBRTtFQUNyQixJQUFJQSxFQUFFLElBQUlBLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUM3QixPQUFPRCxFQUFFO0VBQ2I7RUFFQSxhQUFXQSxFQUFFO0FBQ2pCO0FBRUEsU0FBU0UsZUFBZUEsQ0FBQ0MsUUFBUSxFQUFFO0VBQy9CLE9BQU87SUFDSEMsa0JBQWtCLEVBQUVELFFBQVEsQ0FBQ0UsSUFBSSxDQUFJZCxVQUFVLHVCQUFvQixDQUFDO0lBQ3BFZSxhQUFhLEVBQUVILFFBQVEsQ0FBQ0UsSUFBSSxDQUFJZCxVQUFVLGtCQUFlLENBQUM7SUFDMURnQixZQUFZLEVBQUVKLFFBQVEsQ0FBQ0UsSUFBSSxDQUFJZCxVQUFVLGlCQUFjLENBQUM7SUFDeERpQixhQUFhLEVBQUVMLFFBQVEsQ0FBQ0UsSUFBSSxDQUFJZCxVQUFVLGtCQUFlO0VBQzdELENBQUM7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDTyxJQUFNa0IsV0FBVztFQUNwQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY29sbGFwc2libGUuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbWVkaWFRdWVyeUxpc3RGYWN0b3J5IGZyb20gJy4vbWVkaWEtcXVlcnktbGlzdCc7XG5cbmNvbnN0IFBMVUdJTl9LRVkgPSAnY29sbGFwc2libGUnO1xuXG5leHBvcnQgY29uc3QgQ29sbGFwc2libGVFdmVudHMgPSB7XG4gICAgb3BlbjogJ29wZW4uY29sbGFwc2libGUnLFxuICAgIGNsb3NlOiAnY2xvc2UuY29sbGFwc2libGUnLFxuICAgIHRvZ2dsZTogJ3RvZ2dsZS5jb2xsYXBzaWJsZScsXG4gICAgY2xpY2s6ICdjbGljay5jb2xsYXBzaWJsZScsXG59O1xuXG5jb25zdCBDb2xsYXBzaWJsZVN0YXRlID0ge1xuICAgIGNsb3NlZDogJ2Nsb3NlZCcsXG4gICAgb3BlbjogJ29wZW4nLFxufTtcblxuZnVuY3Rpb24gcHJlcGVuZEhhc2goaWQpIHtcbiAgICBpZiAoaWQgJiYgaWQuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCMke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbnNGcm9tRGF0YSgkZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpc2FibGVkQnJlYWtwb2ludDogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfURpc2FibGVkQnJlYWtwb2ludGApLFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RGlzYWJsZWRTdGF0ZWApLFxuICAgICAgICBlbmFibGVkU3RhdGU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1FbmFibGVkU3RhdGVgKSxcbiAgICAgICAgb3BlbkNsYXNzTmFtZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfU9wZW5DbGFzc05hbWVgKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIENvbGxhcHNlL0V4cGFuZCB0b2dnbGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRvZ2dsZSAtIFRyaWdnZXIgYnV0dG9uXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBDb250ZW50IHRvIGNvbGxhcHNlIC8gZXhwYW5kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLiRjb250ZXh0XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZEJyZWFrcG9pbnRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkU3RhdGVdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmVuYWJsZWRTdGF0ZV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMub3BlbkNsYXNzTmFtZV1cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogPGJ1dHRvbiBpZD1cIiNtb3JlXCI+Q29sbGFwc2U8L2J1dHRvbj5cbiAgICAgKiA8ZGl2IGlkPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICAgICAqXG4gICAgICogbmV3IENvbGxhcHNpYmxlKCQoJyNtb3JlJyksICQoJyNjb250ZW50JykpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCR0b2dnbGUsICR0YXJnZXQsIHtcbiAgICAgICAgZGlzYWJsZWRCcmVha3BvaW50LFxuICAgICAgICBkaXNhYmxlZFN0YXRlLFxuICAgICAgICBlbmFibGVkU3RhdGUsXG4gICAgICAgIG9wZW5DbGFzc05hbWUgPSAnaXMtb3BlbicsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZSA9ICR0b2dnbGU7XG4gICAgICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSAkdGFyZ2V0LmF0dHIoJ2lkJyk7XG4gICAgICAgIHRoaXMub3BlbkNsYXNzTmFtZSA9IG9wZW5DbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRTdGF0ZSA9IGRpc2FibGVkU3RhdGU7XG4gICAgICAgIHRoaXMuZW5hYmxlZFN0YXRlID0gZW5hYmxlZFN0YXRlO1xuXG4gICAgICAgIGlmIChkaXNhYmxlZEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeShkaXNhYmxlZEJyZWFrcG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXV0by1iaW5kXG4gICAgICAgIHRoaXMub25DbGlja2VkID0gdGhpcy5vbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCA9IHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2guYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBBc3NpZ24gRE9NIGF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy4kdGFyZ2V0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdGhpcy5pc0NvbGxhcHNlZCk7XG4gICAgICAgIHRoaXMuJHRvZ2dsZVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtbGFiZWwnLCAkdG9nZ2xlLnRleHQoKS50cmltKCkpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1jb250cm9scycsICR0YXJnZXQuYXR0cignaWQnKSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5pc09wZW4pO1xuXG4gICAgICAgIC8vIExpc3RlblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgaXNDb2xsYXBzZWQoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy4kdGFyZ2V0Lmhhc0NsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSkgfHwgdGhpcy4kdGFyZ2V0LmlzKCc6aGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgIH1cblxuICAgIHNldCBkaXNhYmxlZChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGVkO1xuXG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCeVN0YXRlKHRoaXMuZGlzYWJsZWRTdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ5U3RhdGUodGhpcy5lbmFibGVkU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgb3Blbih7IG5vdGlmeSA9IHRydWUgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZVxuICAgICAgICAgICAgLmFkZENsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuXG4gICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLm9wZW4sIFt0aGlzXSk7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy50b2dnbGUsIFt0aGlzXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZSh7IG5vdGlmeSA9IHRydWUgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsb3NlLCBbdGhpc10pO1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMudG9nZ2xlLCBbdGhpc10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVCeVN0YXRlKHN0YXRlLCAuLi5hcmdzKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBDb2xsYXBzaWJsZVN0YXRlLm9wZW46XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG4gICAgICAgIGNhc2UgQ29sbGFwc2libGVTdGF0ZS5jbG9zZWQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZS5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NvbGxhcHNpYmxlKGNvbGxhcHNpYmxlSW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuICQuY29udGFpbnModGhpcy4kdGFyZ2V0LmdldCgwKSwgY29sbGFwc2libGVJbnN0YW5jZS4kdGFyZ2V0LmdldCgwKSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlLm9uKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrLCB0aGlzLm9uQ2xpY2tlZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCAmJiB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlLm9mZihDb2xsYXBzaWJsZUV2ZW50cy5jbGljaywgdGhpcy5vbkNsaWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgJiYgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaChtZWRpYSkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gbWVkaWEubWF0Y2hlcztcbiAgICB9XG59XG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBjb25zdHJ1Y3RpbmcgQ29sbGFwc2libGUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLiRjb250ZXh0XVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkQnJlYWtwb2ludF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZFN0YXRlXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmVuYWJsZWRTdGF0ZV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5vcGVuQ2xhc3NOYW1lXVxuICogQHJldHVybiB7QXJyYXl9IGFycmF5IG9mIENvbGxhcHNpYmxlIGluc3RhbmNlc1xuICpcbiAqIEBleGFtcGxlXG4gKiA8YSBocmVmPVwiI2NvbnRlbnRcIiBkYXRhLWNvbGxhcHNpYmxlPkNvbGxhcHNlPC9hPlxuICogPGRpdiBpZD1cImNvbnRlbnRcIj4uLi48L2Rpdj5cbiAqXG4gKiBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sbGFwc2libGVGYWN0b3J5KHNlbGVjdG9yID0gYFtkYXRhLSR7UExVR0lOX0tFWX1dYCwgb3ZlcnJpZGVPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkY29sbGFwc2libGVzID0gJChzZWxlY3Rvciwgb3ZlcnJpZGVPcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkY29sbGFwc2libGVzLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gYCR7UExVR0lOX0tFWX1JbnN0YW5jZWA7XG4gICAgICAgIGNvbnN0IGNhY2hlZENvbGxhcHNpYmxlID0gJHRvZ2dsZS5kYXRhKGluc3RhbmNlS2V5KTtcblxuICAgICAgICBpZiAoY2FjaGVkQ29sbGFwc2libGUgaW5zdGFuY2VvZiBDb2xsYXBzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENvbGxhcHNpYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBwcmVwZW5kSGFzaCgkdG9nZ2xlLmRhdGEoUExVR0lOX0tFWSkgfHxcbiAgICAgICAgICAgICR0b2dnbGUuZGF0YShgJHtQTFVHSU5fS0VZfVRhcmdldGApIHx8XG4gICAgICAgICAgICAkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBfLmV4dGVuZChvcHRpb25zRnJvbURhdGEoJHRvZ2dsZSksIG92ZXJyaWRlT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gbmV3IENvbGxhcHNpYmxlKCR0b2dnbGUsICQodGFyZ2V0SWQsIG92ZXJyaWRlT3B0aW9ucy4kY29udGV4dCksIG9wdGlvbnMpO1xuXG4gICAgICAgICR0b2dnbGUuZGF0YShpbnN0YW5jZUtleSwgY29sbGFwc2libGUpO1xuXG4gICAgICAgIHJldHVybiBjb2xsYXBzaWJsZTtcbiAgICB9KS50b0FycmF5KCk7XG59XG4iLCIvLyBpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuLy8gY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsIHdyYXBwZXIpIHtcbi8vICAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0ID09IHRydWUpIHtcbi8vICAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuLFxuLy8gICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyID0gJCgnIycrd3JhcHBlciksXG4vLyAgICAgICAgICAgICBwcm9kdWN0X2NsYXNzID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkJyk7XG4vLyAgICAgICAgIHZhciAgbGlzdCA9IFtdO1xuXG4vLyAgICAgICAgIGZ1bmN0aW9uIGNhbGxQcm9kdWN0T3B0aW9uKCkge1xuLy8gICAgICAgICAgICAgcHJvZHVjdF9jbGFzcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoXCJwcm9kdWN0LWlkXCIpO1xuXG4vLyAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHByb2R1Y3RJZC50b1N0cmluZygpKTtcbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICBpZihsaXN0Lmxlbmd0aCA+IDApe1xuLy8gICAgICAgICAgICAgICAgIGdldFByb2R1Y3RPcHRpb24obGlzdCkudGhlbihkYXRhID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uKGRhdGEpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICQuZWFjaChsaXN0LCAoaWR4LCBpdGVtKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0ge30sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gbGlzdFtpZHhdO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR4dCA9ICQoZWxlbWVudCkuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbdHh0XSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW3R4dF0gPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCA+IDQpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudE1vcmVPcHRpb24gID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLW9wdGlvbi1zd2F0Y2gnKS5sZW5ndGggLSA0LFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGluayA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCdbZGF0YS1wcm9kdWN0LWlkPVwiJytwcm9kdWN0SWQrJ1wiXScpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluZGV4ID49IDQpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkIC5zaG93bW9yZScpLmxlbmd0aCA8IDEpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLmFwcGVuZCgnPGEgaHJlZj1cIicrcHJvZHVjdExpbmsrJ1wiIGNsYXNzPVwic2hvd21vcmVcIj4rJytjb3VudE1vcmVPcHRpb24rJzwvYT4nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0T3B0aW9uKGxpc3Qpe1xuLy8gICAgICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbi8vICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAgICAgICAgICAgcXVlcnk6IGBcbi8vICAgICAgICAgICAgICAgICAgICAgcXVlcnkgU2V2ZXJhbFByb2R1Y3RzQnlJRCB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyhlbnRpdHlJZHM6IFtgK2xpc3QrYF0sIGZpcnN0OiA1MCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zKGZpcnN0OiA1MCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlTdHlsZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RlZmF1bHRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIFN3YXRjaE9wdGlvblZhbHVlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXhDb2xvcnNcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogNTApXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgIGB9KSxcbi8vICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGZ1bmN0aW9uIHJlbmRlck9wdGlvbihkYXRhKXtcbi8vICAgICAgICAgICAgIHZhciBhRmlsdGVyID0gZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzO1xuXG4vLyAgICAgICAgICAgICAkLmVhY2goYUZpbHRlciwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUuZW50aXR5SWQsXG4vLyAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkOm5vdCguZm9ybS1maWVsZC0tc2l6ZSknKSxcbi8vICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkU2l6ZSA9IHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZC0tc2l6ZScpLFxuLy8gICAgICAgICAgICAgICAgICAgICBhRmlsdGVyMiA9IGFGaWx0ZXJbaW5kZXhdLm5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXM7XG5cbi8vICAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjMgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5U3R5bGUgPT09ICdTd2F0Y2gnO1xuLy8gICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI1ID0gYUZpbHRlcjIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5vZGUuZGlzcGxheU5hbWUgPT09IGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdDI7XG4vLyAgICAgICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICAgICBpZihhRmlsdGVyMy5sZW5ndGggPiAwKXtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIGFGaWx0ZXI0ID0gYUZpbHRlcjNbMF0ubm9kZS52YWx1ZXMuZWRnZXM7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGFGaWx0ZXI0LCAoaWR4LCBlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGVWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUubGFiZWwsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuZW50aXR5SWQsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29sb3JWYXIgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzLmxlbmd0aCxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjEgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzBdLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMiA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMV0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IzID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1syXSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaW1hZ2VVcmw7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxlbmd0aENvbG9yVmFyID09IDIpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjErJ1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jytjb2xvcjIrJ1wiPjwvc3Bhbj48L3NwYW4+PC9sYWJlbD4nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihsZW5ndGhDb2xvclZhciA9PT0gMyl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMysnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKEJvb2xlYW4oY29sb3IxKSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvclwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnK2NvbG9yMSsnXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihpbWcpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcraW1nKycpXCI+PC9zcGFuPjwvbGFiZWw+Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZXtcbi8vICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IucmVtb3ZlKCk7XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgaWYoYUZpbHRlcjUubGVuZ3RoID4gMCl7XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3RGaWVsZFNpemUubGVuZ3RoIDwgMSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNpemVcIj48bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvblwiPicrY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0VGV4dC50b1N0cmluZygpKyc8L2xhYmVsPjwvZGl2PicpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgaWYoKGFGaWx0ZXI1Lmxlbmd0aCA9PSAwKSAmJiAoYUZpbHRlcjMubGVuZ3RoID09IDApKXtcbi8vICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnJykucmVtb3ZlKCk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBjYWxsUHJvZHVjdE9wdGlvbigpO1xuLy8gICAgIH1cbi8vIH1cbiJdLCJuYW1lcyI6WyJtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkiLCJQTFVHSU5fS0VZIiwiQ29sbGFwc2libGVFdmVudHMiLCJvcGVuIiwiY2xvc2UiLCJ0b2dnbGUiLCJjbGljayIsIkNvbGxhcHNpYmxlU3RhdGUiLCJjbG9zZWQiLCJwcmVwZW5kSGFzaCIsImlkIiwiaW5kZXhPZiIsIm9wdGlvbnNGcm9tRGF0YSIsIiRlbGVtZW50IiwiZGlzYWJsZWRCcmVha3BvaW50IiwiZGF0YSIsImRpc2FibGVkU3RhdGUiLCJlbmFibGVkU3RhdGUiLCJvcGVuQ2xhc3NOYW1lIiwiQ29sbGFwc2libGUiLCIkdG9nZ2xlIiwiJHRhcmdldCIsIl90ZW1wIiwiX3JlZiIsIl9yZWYkb3BlbkNsYXNzTmFtZSIsInRhcmdldElkIiwiYXR0ciIsImRpc2FibGVkTWVkaWFRdWVyeUxpc3QiLCJkaXNhYmxlZCIsIm1hdGNoZXMiLCJvbkNsaWNrZWQiLCJiaW5kIiwib25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2giLCJpc0NvbGxhcHNlZCIsInRleHQiLCJ0cmltIiwiaXNPcGVuIiwiYmluZEV2ZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIl90ZW1wMiIsIl9yZWYyIiwiX3JlZjIkbm90aWZ5Iiwibm90aWZ5IiwiYWRkQ2xhc3MiLCJ0cmlnZ2VyIiwiX3RlbXAzIiwiX3JlZjMiLCJfcmVmMyRub3RpZnkiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUJ5U3RhdGUiLCJzdGF0ZSIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJoYXNDb2xsYXBzaWJsZSIsImNvbGxhcHNpYmxlSW5zdGFuY2UiLCIkIiwiY29udGFpbnMiLCJnZXQiLCJvbiIsImFkZExpc3RlbmVyIiwidW5iaW5kRXZlbnRzIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVkaWEiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJoYXNDbGFzcyIsImlzIiwiX2Rpc2FibGVkIiwic2V0IiwiY29sbGFwc2libGVGYWN0b3J5Iiwic2VsZWN0b3IiLCJvdmVycmlkZU9wdGlvbnMiLCIkY29sbGFwc2libGVzIiwiJGNvbnRleHQiLCJtYXAiLCJpbmRleCIsImVsZW1lbnQiLCJpbnN0YW5jZUtleSIsImNhY2hlZENvbGxhcHNpYmxlIiwib3B0aW9ucyIsIl9leHRlbmQiLCJjb2xsYXBzaWJsZSIsInRvQXJyYXkiXSwic291cmNlUm9vdCI6IiJ9
