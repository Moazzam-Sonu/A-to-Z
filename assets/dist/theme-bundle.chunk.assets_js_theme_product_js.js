"use strict";
(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/halothemes/haloBundleProducts.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloBundleProducts.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($scope, context) {
  var thisProuctId = parseInt(context.productId),
    $relateTab = $('#halo-related-products'),
    $bundle = $('#halo-bundle-products'),
    $bundleList = $bundle.find('.halo-product-list');
  var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('#modal')[0];
  var currency = context.money;
  showBundle();
  $(document).on('click', '.halo-toggle-options', function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    $('.halo-toggle-options').not($target).removeClass('is-focus');
    $('.halo-detail-options').not($target.next('.halo-detail-options')).removeClass('is-open');
    if (!$target.next('.halo-detail-options').hasClass('is-open')) {
      $target.addClass('is-focus');
      $target.next('.halo-detail-options').addClass('is-open');
    } else {
      $target.next('.halo-detail-options').removeClass('is-open');
      $target.removeClass('is-focus');
    }
  });
  $(document).on('click', '.halo-option-close', function (event) {
    event.preventDefault();
    $('.halo-detail-options').removeClass('is-open');
    $('.halo-toggle-options').removeClass('is-focus');
  });
  $(document).on('click', function (event) {
    if ($('.halo-detail-options').hasClass('is-open')) {
      if ($(event.target).closest('.halo-detail-options').length === 0 && $(event.target).closest('.halo-toggle-options').length === 0) {
        $('.halo-detail-options').removeClass('is-open');
        $('.halo-toggle-options').removeClass('is-focus');
      }
    }
  });
  $(document).on('change', '.halo-detail-checkbox', function (event) {
    var $target = $(event.currentTarget),
      id = $target.attr('id').replace('fbt_product', ''),
      product = $('.halo-product-item[data-product-id="' + id + '"]');
    if ($target.is(':checked') == false) {
      product.removeClass('isChecked');
      product.find('.halo-product-iconAdd').removeClass('halo-product-iconChecked');
    } else {
      product.addClass('isChecked');
      product.find('.halo-product-iconAdd').addClass('halo-product-iconChecked');
    }
    totalPrice();
  });
  $(document).on('click', '#halo-addAll', function (event) {
    event.preventDefault();
    var $form = $('form', $bundle);
    var arrPro = new Array();
    $('.halo-detail-checkbox').each(function (index, val) {
      if ($(val).is(':checked')) {
        arrPro.push(index);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        var k = arrPro.length;
        $bundle.find('.loadingOverlay').show();
        addToCart($form, 0, arrPro, k);
      }
    } else {
      var errorMessage = 'Please make sure all options have been filled in.';
      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(tmp.textContent || tmp.innerText);
      }
    }
    event.preventDefault();
  });
  function showBundle() {
    var options = {
      template: {
        item: 'halothemes/products/halo-bundle-products-tmp',
        options: 'halothemes/products/halo-bundle-products-options'
      }
    };
    var prodBundleId = [],
      totalBlock = '';
    firstItem();
    if ($bundle.hasClass('halo-bundle-login')) {
      totalBlock = '<div class="halo-product-total">\
                            <div class="total-price">\
                                <span class="text">Log in for pricing</span>\
                            </div>\
                        </div>';
    } else {
      totalBlock = '<div class="halo-product-total">\
                            <div class="total-price">\
                                <span class="text">Total:</span>\
                                <span class="price"></span>\
                            </div>\
                            <a class="button button--primary halo-product-total-button" id="halo-addAll" href="#">Add All To Cart</a>\
                        </div>';
    }
    $bundle.find('.bundle-product-right').append(totalBlock);
    $.each(context.productCustomFields, function (index, obj) {
      if (obj.name == '__bundleid') {
        prodBundleId = JSON.parse('[' + obj.value + ']');
      }
    });
    prodBundleId = $.grep(prodBundleId, function (value) {
      return value != thisProuctId;
    });
    if ($bundle.length > 0 && prodBundleId.length == 0) {
      var num = 0,
        list = [];
      $relateTab.find('.card').each(function (index, val) {
        list.push({
          index: index,
          data: ""
        });
        var pId = $(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.index == index) {
                element.data = response;
              }
            });
            num++;
            if (num == $relateTab.find('.card').length) {
              showList(list);
            }
          });
        }
      });
    } else if ($bundle.length > 0 && prodBundleId.length > 0) {
      var num = 0,
        list = [],
        listFilter = $.unique(prodBundleId);
      $.each(listFilter, function (index, val) {
        list.push({
          index: index,
          data: ""
        });
        var pId = val;
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.index == index) {
                element.data = response;
              }
            });
            num++;
            if (num == prodBundleId.length) {
              showList(list);
            }
          });
        }
      });
    }
  }
  function firstItem() {
    var firstItem = $bundleList.find('.halo-product-itemFirst'),
      pId = firstItem.data('product-id'),
      form = firstItem.find('form'),
      hasOptions = form.find('[data-fbt-option-change]').length,
      hasDefaultOptions = form.find('[data-default]').length;
    if (hasDefaultOptions && hasOptions) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        updateProductAttributes(form, attributesData);
        if (hasDefaultOptions) {
          updateView(form, attributesData, attributesContent);
        } else {
          updateDefaultAttributesForOOS(attributesData);
        }
      });
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      $bundleList.append(response.item);
      if (response.options.trim() != "") {
        var pId = $(response.item).data('product-id'),
          $form = $bundleList.find('.halo-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = $('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = $(response.options).find('[data-default]').length;
        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            if (response != undefined) {
              var attributesData = response.data || {};
              var attributesContent = response.content || {};
              updateProductAttributes($form, attributesData);
              if (hasDefaultOptions) {
                updateView($form, attributesData, attributesContent);
              } else {
                updateDefaultAttributesForOOS(attributesData);
              }
            }
          });
        }
        setProductVariant();
      }
    });
    productOptions();
    showSlickSlider($bundleList);
    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }
    $bundle.removeClass('halo-block-disable');
  }
  function showSlickSlider(wrap) {
    if (wrap.length > 0) {
      wrap.slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: false,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href='#slick-arrow-next'></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href='#slick-arrow-prev'></use></svg>",
        responsive: [{
          breakpoint: 1600,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 5,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 551,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
    }
  }
  function checkProduct(form, arrPro) {
    var check = true;
    for (var i = 0; i < arrPro.length; i++) {
      var k = arrPro[i],
        $form = $(form[k]);
      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);
        if (check == false) {
          return false;
        }
      }
    }
    return check;
  }
  function checkBeforeAdd($attributes) {
    var check = true,
      att = "";
    $attributes.find('input:text, input:password, input:file, textarea').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('input:radio, input:checkbox').each(function (index, element) {
      if (att != $(element).attr("name")) {
        att = $(element).attr("name");
        if (!$(element).prop('required')) {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {}
          }
          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }
  function addToCart(form, i, arrP, k) {
    if (window.FormData === undefined) {
      return;
    }
    var prod = arrP[i];
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[prod])), function (err, response) {
      var errorMessage = err || response.data.error;
      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
        k = k - 1;
      }
      i++;
      if (i >= arrP.length) {
        $bundle.find('.loadingOverlay').hide();
        modal.$modal.removeClass().addClass('modal modal--preview modal--previewMini modal--previewMini2');
        modal.open({
          size: 'small'
        });
        if ($(".modal-background:visible").length > 0) {
          $('.modal-background:visible').hide();
        }
        var response;
        if (k > 0) {
          response = '<div class="modal-header">\
                        <h2 class="modal-header-title">\
                            Ok, ' + k + ' item was added to your cart. What\'s next?\
                        </h2>\
                    </div>\
                    <div class="modal-body">\
                        <div class="previewCart previewCart2">\
                            <section class="previewCartCheckout previewCartCheckout2">\
                                <a href="/checkout.php" class="button button--primary">\
                                    Proceed To Checkout\
                                </a>\
                                <p class="previewCartCheckout-autoClose" data-auto-close="10">Auto close after <span class="count"></span>s</p>\
                            </section>\
                        </div>\
                    </div>';
        } else {
          response = '<div class="modal-header">\
                        <h2 class="modal-header-title">\
                            Ok, ' + k + ' item was added to your cart. What\'s next?\
                        </h2>\
                    </div>\
                    <div class="modal-body">\
                        <div class="previewCart previewCart2">\
                            <section class="previewCartCheckout previewCartCheckout2">\
                                <p class="previewCartCheckout-text">Sorry! We don\'t have enough product for your selection!</p>\
                                <p class="previewCartCheckout-autoClose" data-auto-close="10">Auto close after <span class="count"></span>s</p>\
                            </section>\
                        </div>\
                    </div>';
        }
        var $body = $('body');
        var quantity = parseInt($body.find('.cartDesktop .cart-quantity').text()) + k;
        $body.trigger('cart-quantity-update', quantity);
        modal.updateContent(response);
        return;
      }
      addToCart(form, i, arrP, k);
    });
  }
  function totalPrice() {
    var total = 0,
      symbol,
      symbolChange,
      decimalPlaces,
      decimalSeparator,
      thousandsSeparator,
      symbolLocation,
      curr,
      token1,
      token2,
      length;
    decimalPlaces = currency.decimal_places;
    decimalSeparator = currency.decimal_token;
    thousandsSeparator = currency.thousands_token;
    symbolLocation = currency.currency_location;
    symbol = currency.currency_token;
    $bundleList.find('.halo-product-item.isChecked').each(function (index, val) {
      var price = parseFloat($(val).find('[data-price-value]').attr('data-price-value'));
      total = total + price;
    });
    if ($('.productView-product .productView-price > .price-section > .price.price--withTax', $scope).length) {
      curr = $('.productView-product .productView-price > .price-section > .price.price--withTax', $scope).data('value-price');
    } else {
      curr = $('.productView-product .productView-price > .price-section > .price.price--withoutTax', $scope).data('value-price');
    }
    symbolChange = curr.replace(/[0-9]/g, "").replace(".", "").replace(",", "");
    if (symbol != symbolChange) {
      symbol = symbolChange;
      token1 = curr.indexOf('.');
      token2 = curr.indexOf(',');
      length = curr.length - 1;
      if (curr.indexOf(symbol) != -1) {
        symbolLocation = curr.indexOf(symbol);
      }
      if (token1 < token2) {
        thousandsSeparator = '.';
        decimalSeparator = ',';
        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token2;
        } else {
          decimalPlaces = length - token2 - 1;
        }
      } else {
        thousandsSeparator = ',';
        decimalSeparator = '.';
        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token1;
        } else {
          decimalPlaces = length - token1 - 1;
        }
      }
    }
    if (total == 0) {
      $bundle.find('#halo-addAll').attr('disabled', true);
    } else {
      $bundle.find('#halo-addAll').attr('disabled', false);
    }
    total = formatMoney(total, decimalPlaces, decimalSeparator, thousandsSeparator);
    if (symbolLocation == "left" || symbolLocation == 0) {
      total = symbol + total;
    } else {
      total = total + symbol;
    }
    $bundle.find('.halo-product-total .price').html(total);
  }
  function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  }
  ;
  function productOptions() {
    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }
    var $form = $('form', $bundle),
      $productOptionsElement = $('[data-fbt-option-change]', $form);
    $(document).on('change', $productOptionsElement, function (event) {
      productOptionsChanged(event);
      setProductVariant(event);
    });
  }
  function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-fbt-option-change] [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          $(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
              $(value.children[0]).find('[data-option-value]').text(label);
            }
          }
          if (type === 'swatch') {
            var _label = checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
              $(value.children[0]).find('[data-option-value]').text(_label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);
      if (!$bundle.hasClass('halo-bundle-login')) {
        totalPrice();
      }
    });
    return false;
  }
  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }
  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }
  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.imageSrcset.getSrcset(data.image.data, {
        '1x': context.themeSettings.productgallery_size
      });
      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    } else {
      var _mainImageUrl = $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr('data-srcset');
      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': _mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    showMessageBox(data.stock_message || data.purchasing_message, $scope);
    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.stock)) {
      if (data.stock <= parseInt(context.themeSettings.halo_stock_level_limit) && data.stock > 0) {
        viewModel.$stockLeftWrapper.removeClass('u-hiddenVisually');
        viewModel.$stockLeft.text(data.stock);
      } else {
        viewModel.$stockLeftWrapper.addClass('u-hiddenVisually');
      }
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = $('[name="product_id"]', $scope).val(),
      product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
      productCheckbox = product.find('.halo-detail-checkbox');
    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = $('[name="product_id"]', $scope).val(),
      product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
      productCheckbox = product.find('.halo-detail-checkbox');
    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }
  function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      priceData: {
        $div: $('[data-price-value]', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      $stockLeft: $('[data-stock-left]', $scope),
      $stockLeftWrapper: $('.productView-optionsStock', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      $sku: $('[data-product-sku]'),
      $upc: $('[data-product-upc]'),
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }
  function showMessageBox(message, $scope) {
    var $messageBox = $('.productAttributes-message', $scope);
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }
  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.with_tax.value);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.without_tax.value);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }
  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData["delete"](key);
        }
      }
    } catch (e) {
      console.error(e);
    }
    return formData;
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloNextProducts.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloNextProducts.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if ($('.productView-nextProducts').length) {
    var getProduct = function getProduct(arr) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                query MyQuery {\n                    site {\n                        products (entityIds: [" + arr + "]) {\n                          edges {\n                            product: node {\n                              ...ProductFields\n                              }\n                            }\n                        }\n                        currency (currencyCode: " + curCode + ") {\n                            display {\n                                symbol\n                                symbolPlacement\n                                decimalToken\n                                thousandsToken\n                                decimalPlaces\n                            }\n                        }\n                    }\n                }\n                fragment ProductFields on Product {\n                    id\n                    entityId\n                    name\n                    path\n                    defaultImage {\n                        img70px: url(width: 70)\n                        altText\n                    }\n                    prices {\n                        priceRange {\n                            min {\n                                ...MoneyFields\n                            }\n                            max {\n                                ...MoneyFields\n                            }\n                        }\n                        retailPrice {\n                            ...MoneyFields\n                        }\n                        basePrice {\n                            ...MoneyFields\n                        }\n                        price {\n                            ...MoneyFields\n                        }\n                    }\n                }\n                fragment MoneyFields on Money {\n                    value\n                    currencyCode\n                }\n            "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };
    var formatMoney = function formatMoney(n, c, d, t) {
      var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
    var renderProduct = function renderProduct(product, curDisplay) {
      if (product != undefined) {
        $.each(product, function (index, element) {
          var item = element.product,
            symbol = curDisplay.symbol,
            symbolPlacement = curDisplay.symbolPlacement.toLowerCase(),
            decimalToken = curDisplay.decimalToken,
            decimalPlaces = curDisplay.decimalPlaces,
            thousandsToken = curDisplay.thousandsToken;
          var title, price;
          if (context.themeSettings.halo_card_title == 'ellipsis') {
            title = '<a href="' + item.path + '" class="card-ellipsis" style="-webkit-box-orient: vertical;">' + item.name + '</a>';
          } else {
            title = '<a href="' + item.path + '">' + item.name + '</a>';
          }
          if ($('.body').hasClass('is-login') || context.themeSettings.restrict_to_login !== true) {
            if (item.prices.priceRange.min.value < item.prices.priceRange.max.value && context.themeSettings.price_ranges) {
              var priceMin = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.min.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              var priceMax = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.max.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                    </div>\
                                    <div class="price-section price-section--withoutTax">\
                                        <span data-product-price-without-tax="" class="price price--withoutTax">' + priceMin + ' - ' + priceMax + '</span>\
                                    </div>';
            } else {
              var priceDef = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.price.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              if (item.prices.retailPrice == null) {
                if (item.prices.basePrice.value > item.prices.price.value) {
                  var priceBas = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.basePrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceBas + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              } else {
                if (item.prices.retailPrice.value > item.prices.price.value) {
                  var priceRet = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.retailPrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceRet + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              }
            }
          } else {
            price = '<p translate>Log in for pricing</p>';
          }
          var html_card = '<div class="card card-custom" data-product-id="' + item.entityId + '">\
                                        <div class="card-image">\
                                            <a class="card-link" href="' + item.path + '">\
                                                <img src="' + item.defaultImage.img70px + '" alt="' + item.name + '" title="' + item.name + '" />\
                                            </a>\
                                        </div>\
                                        <div class="card-content">\
                                            <h4 class="card-title">' + title + '</h4>\
                                            <div class="card-price" data-test-info-type="price">' + price + '</div>\
                                        </div>\
                                    </div>';
          if (item.entityId == prevId) {
            if (item.path !== undefined) {
              $prodIcons.find('.prev-icon').attr('href', item.path);
              $prodIcons.find('.prev-icon').removeClass('disable');
              $prodWrap.find('#prev-product-modal').append(html_card);
            } else {
              $prodIcons.find('.prev-icon').remove();
              $prodWrap.find('#prev-product-modal').remove();
            }
          }
          if (item.entityId == nextId) {
            if (item.path !== undefined) {
              $prodIcons.find('.next-icon').attr('href', item.path);
              $prodIcons.find('.next-icon').removeClass('disable');
              $prodWrap.find('#next-product-modal').append(html_card);
            } else {
              $prodIcons.find('.next-icon').remove();
              $prodWrap.find('#next-product-modal').remove();
            }
          }
        });
      }
    };
    var token = context.token;
    var curCode = $('.body').data('currency-code');
    var productId = $('.productView-nextProducts').data('product-id'),
      nextId = productId + 1,
      prevId = productId - 1,
      nextLink,
      prevLink,
      list;
    var $prodWrap = $('.productView-nextProducts .next-prev-modal'),
      $prodIcons = $('.productView-nextProducts .next-prev-icons');
    if (prevId != undefined && nextId != undefined) {
      list = [prevId, nextId];
      getProduct(list).then(function (data) {
        renderProduct(data.site.products.edges, data.site.currency.display);
      });
    }
    $prodIcons.on('mouseover', function () {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function () {
      $prodWrap.removeClass('is-active');
    });
    $('.next-icon', $prodIcons).on('mouseover', function () {
      $('#prev-product-modal').removeClass('is-show');
      $('#next-product-modal').addClass('is-show');
    });
    $('.prev-icon', $prodIcons).on('mouseover', function () {
      $('#next-product-modal').removeClass('is-show');
      $('#prev-product-modal').addClass('is-show');
    });
    $prodWrap.on('mouseover', function () {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function () {
      $prodWrap.removeClass('is-active');
    });
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloProductLookbook.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductLookbook.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context, el) {
  var $popup = $('.lookbook-popup');
  var $el = el;
  var $options = {
    template: 'halothemes/products/halo-lookbook-tmp'
  };
  $el.find('.item .item-point').on('click', function (event) {
    $popup.removeClass('is-open').empty();
    var $prodId = $(event.target).data('product-id'),
      position = $(event.target).offset(),
      container = $el.offset();
    if ($prodId != undefined) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }
        $popup.html(response);
      });
      if ($(window).width() >= 551) {
        $popup.css({
          'top': position.top - container.top - 100,
          'left': position.left - container.left + 30
        });
      } else {
        $popup.css({
          'top': position.top - container.top + 15,
          'left': 15
        });
      }
      $popup.addClass("is-open");
    }
  });
  $(document).on('click', '.close-product', function (event) {
    event.preventDefault();
    if ($popup.hasClass("is-open")) {
      $popup.removeClass("is-open");
    }
  });
  $(document).on('click', function (event) {
    if ($popup.hasClass("is-open")) {
      if ($(event.target).closest($popup).length === 0 && $(event.target).closest('.item .item-point').length === 0) {
        $popup.removeClass("is-open");
      }
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyAddToCart.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyAddToCart.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($scope, context) {
  if ($('#form-action-addToCart').length) {
    var scroll = $('#form-action-addToCart').offset(),
      h_statc = $('#halo_sticky_addToCart').outerHeight(),
      scrollTop = scroll.top;
    $(window).scroll(function () {
      var $sticky = $('#halo_sticky_addToCart');
      if ($(window).scrollTop() > scrollTop + 400) {
        if (!$('#halo_sticky_addToCart').hasClass('show_sticky')) {
          $('#halo_sticky_addToCart').addClass('show_sticky');
          if ($(window).width() > 550) {
            $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
            $('.halo-ask-an-expert').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
          } else {
            if ($('#halo_sticky_addToCart').length) {
              $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 30);
              $('.halo-ask-an-expert').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 130);
            } else {
              $('#recently_bought_list').css("bottom", 30);
              $('.halo-ask-an-expert').css("bottom", 150);
            }
          }
        }
      } else {
        $('#halo_sticky_addToCart').removeClass('show_sticky');
        $('.pop-up-option').removeClass('is-open');
        $('body').removeClass('openPopupOption');
        $('.choose_options_add').removeClass('is-active');
        $('#recently_bought_list').css("bottom", 30);
        if ($(window).width() > 550) {
          $('.halo-ask-an-expert').css("bottom", 30);
        } else {
          $('.halo-ask-an-expert').css("bottom", 150);
        }
      }
    });
    $(document).on('click', '.choose_options_add', function (event) {
      $(this).toggleClass('is-active');
      $('.pop-up-option').toggleClass('is-open');
      $('body').addClass('openPopupOption');
    });
    $(document).on('click', '.pop-up-option .btn-close', function (event) {
      $(".pop-up-option").removeClass('is-open');
      $('body').removeClass('openPopupOption');
      $('.choose_options_add').removeClass('is-active');
    });
    $(document).on('click', '.sticky-product-expand', function (event) {
      if ($('#halo_sticky_addToCart').hasClass('show-full-sticky')) {
        $('#halo_sticky_addToCart').removeClass('show-full-sticky');
      } else {
        $('#halo_sticky_addToCart').addClass('show-full-sticky');
      }
    });
    window.onload = function () {
      if ($(window).scrollTop() > scrollTop + 400) {
        if (!$('#halo_sticky_addToCart').hasClass('show_sticky')) {
          $('#halo_sticky_addToCart').addClass('show_sticky');
          if ($(window).width() > 550) {
            $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
            $('.halo-ask-an-expert').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
          } else {
            if ($('#halo_sticky_addToCart').length) {
              $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 30);
              $('.halo-ask-an-expert').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 130);
            } else {
              $('#recently_bought_list').css("bottom", 30);
              $('.halo-ask-an-expert').css("bottom", 150);
            }
          }
        }
      }
    };
  }
}

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
/* harmony import */ var _halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloBundleProducts */ "./assets/js/theme/halothemes/haloBundleProducts.js");
/* harmony import */ var _halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloNextProducts */ "./assets/js/theme/halothemes/haloNextProducts.js");
/* harmony import */ var _halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloStickyAddToCart */ "./assets/js/theme/halothemes/haloStickyAddToCart.js");
/* harmony import */ var _halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloVideo */ "./assets/js/theme/halothemes/haloVideo.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */














var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    this.bulkPricingHandler();
    this.productCustomTab();
    this.productTabToggle();
    this.compareColors();
    this.productViewInfoTabs();
    this.soldProduct($('.productView-soldProduct'));
    this.viewingProduct($('.productView-ViewingProduct'));
    this.countDownProduct($('.productView-countDown'));
    this.loadOptionForProductCard();
    (0,_halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
    (0,_halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_11__["default"])($('.productView'), this.context);
    (0,_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context, $('.productView-lookbook'));
    (0,_halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_9__["default"])($('.productView-slick'), this.context);
    (0,_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_13__["default"])($('.productView-slick'), this.context);
    (0,_halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_12__["default"])($('.productView-slick [data-slick]'));
    var $reviewForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.classifyForm)('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  _proto.productCustomTab = function productCustomTab() {
    if ($('.productView-description [data-custom-tab]').length > 0) {
      $('.productView-description [data-custom-tab]').appendTo('#halo-custom-tab .card-body');
      $('#halo-custom-tab').removeClass('u-hiddenVisually');
      $('.productView-shortDesc [data-custom-tab]').remove();
      $('#halo-productView-description .productView-tabs .card-body').addClass('has-customTab');
    } else {
      $('#halo-productView-description .productView-tabs .card.warranty .title').addClass('no-customTab');
    }
  };
  _proto.productTabToggle = function productTabToggle() {
    $('.productView-tabs .card .title').on('click', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      $('.productView-tabs .card .title').not($target).removeClass('collapsed');
      if ($target.hasClass('collapsed')) {
        $target.removeClass('collapsed');
      } else {
        $target.addClass('collapsed');
      }
      $('.productView-tabs .card').each(function (index, element) {
        if ($('.title', element).hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
    $('.productView-tabs .card:nth-child(1) .title').trigger('click');
  };
  _proto.soldProduct = function soldProduct($wrapper) {
    if ($wrapper.length > 0) {
      var numbersProduct_text = this.context.themeSettings.product_soldProduct_products,
        numbersHours_text = this.context.themeSettings.product_soldProduct_hours,
        soldProductText = this.context.themeSettings.product_soldProduct_text,
        soldProductText2 = this.context.themeSettings.product_soldProduct_hours_text;
      var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
        numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
        numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
        numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
      $wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fire"/></svg><span class="text">' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + '</span>');
      $wrapper.show();
    }
  };
  _proto.countDownProduct = function countDownProduct($wrapper) {
    if ($wrapper.length > 0) {
      var countDown = $wrapper.data('countdown'),
        countDownDate = new Date(countDown).getTime(),
        seft = $wrapper;
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
  _proto.viewingProduct = function viewingProduct($wrapper) {
    if ($wrapper.length > 0) {
      var viewerText = this.context.themeSettings.product_viewingProduct_text,
        numbersViewer_text = this.context.themeSettings.product_viewingProduct_viewer,
        numbersViewerList = JSON.parse("[" + numbersViewer_text + "]");
      setInterval(function () {
        var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
        $wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
        $wrapper.removeClass('u-hiddenVisually').show();
      }, 10000);
    }
  };
  _proto.compareColors = function compareColors() {
    var $swatchWrapper = $('.halo-compareColors-swatch'),
      $imageWrapper = $('.halo-compareColors-image'),
      $textWrapper = $('.halo-compareColors-text');
    $('.form-option', $swatchWrapper).on('click', function (event) {
      var $this = $(event.currentTarget);
      $this.toggleClass('show-color');
      var title = $this.find('.form-option-variant').attr('title'),
        id = $this.data('product-swatch-value'),
        $color,
        $color2,
        $color3,
        $img,
        $pattern;
      if ($this.hasClass('show-color')) {
        if ($this.find('.form-option-variant--color').length) {
          $color = $this.find('.form-option-variant--color').attr('style');
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color" style="' + $color + ';"></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--color2').length) {
          $color = $this.find('.form-option-variant--color2 span:nth-child(1)').attr('style');
          $color2 = $this.find('.form-option-variant--color2 span:nth-child(2)').attr('style');
          $('.halo-compareColors-image').append('<div class="item item-color item-' + id + '"><span class="color color2"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--color3').length) {
          $color = $this.find('.form-option-variant--color3 span:nth-child(1)').attr('style');
          $color2 = $this.find('.form-option-variant--color3 span:nth-child(2)').attr('style');
          $color3 = $this.find('.form-option-variant--color3 span:nth-child(3)').attr('style');
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color color3"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span><span style="' + $color3 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--pattern').length) {
          $img = $this.find('.form-option-variant--pattern').attr('style');
          $pattern = $this.find('.form-option-variant--pattern').attr('data-pattern');
          $imageWrapper.append('<div class="item item-partern item-' + id + '"><span class="image"><img src=' + $pattern + ' alt=' + title + ' title=' + title + '></span><span class="title">' + title + '</span></div>');
        }
      } else {
        $('.item-' + id + '', $imageWrapper).remove();
      }
      if ($imageWrapper.children().length > 0) {
        $textWrapper.hide();
      } else {
        $textWrapper.show();
      }
      if ($(window).width() >= 1025) {
        var el = document.getElementById('color-swatch-image');
        new sortablejs__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
          animation: 150
        });
      }
    });
  };
  _proto.productViewInfoTabs = function productViewInfoTabs() {
    $('.productView-infoTabs .productView-infoTab a').on('click', function (event) {
      event.preventDefault();
      var $block = $(event.currentTarget).attr('href');
      $('html, body').animate({
        scrollTop: $($block).offset().top - $('.header').height()
      }, 700);
      if ($block == '#halo-productView-description') {
        if (!$('.productView-tabs .card:nth-child(1) .title').hasClass('collapsed')) {
          $('.productView-tabs .card:nth-child(1) .title').trigger('click');
        }
      }
    });
    $('.productView-moreDesc a').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $('#halo-productView-description').offset().top - $('.header').height()
      }, 700);
      if (!$('.productView-tabs .card:nth-child(1) .title').hasClass('collapsed')) {
        $('.productView-tabs .card:nth-child(1) .title').trigger('click');
      }
    });
  };
  _proto.loadOptionForProductCard = function loadOptionForProductCard() {
    var _this3 = this;
    if ($('.productCarousel').length > 0) {
      $('.productCarousel').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_7___default()(_this3.context, $prodWrapId);
      });
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#tab-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#tab-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #tab-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #tab-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFFNkI7QUFFNUUsNkJBQWUsb0NBQVNJLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0VBQ3JDLElBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDRixPQUFPLENBQUNHLFNBQVMsQ0FBQztJQUM1Q0MsVUFBVSxHQUFHQyxDQUFDLENBQUMsd0JBQXdCLENBQUM7SUFDeENDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO0lBQ3BDRSxXQUFXLEdBQUdELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0VBRXBELElBQU1DLEtBQUssR0FBR2IseURBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFdkMsSUFBSWMsUUFBUSxHQUFHVixPQUFPLENBQUNXLEtBQUs7RUFFNUJDLFVBQVUsQ0FBQyxDQUFDO0VBRVpQLENBQUMsQ0FBQ1EsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsVUFBQUMsS0FBSyxFQUFJO0lBQ3JEQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRXRCLElBQUlDLE9BQU8sR0FBR1osQ0FBQyxDQUFDVSxLQUFLLENBQUNHLGFBQWEsQ0FBQztJQUVwQ2IsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNjLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDLENBQUNHLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDOURmLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDYyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUUxRixJQUFJLENBQUNILE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFT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QUFBVixZQUFBO0FBQUE7QUFHVSxTQUFTOUgsWUFBWUEsQ0FBQSxFQUFHO0VBQ25DLElBQU15SSxTQUFTLEdBQUcsZUFBZTtFQUNqQyxJQUFNQyxhQUFhLEdBQUd6ZSxDQUFDLFlBQVV3ZSxTQUFTLE1BQUcsQ0FBQztFQUU5Q0MsYUFBYSxDQUFDMWMsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRXNDLE9BQU8sRUFBSztJQUNuQyxJQUFNaVEsR0FBRyxHQUFHdlUsQ0FBQyxDQUFDc0UsT0FBTyxDQUFDO0lBQ3RCLElBQU1vYSxhQUFhLEdBQUduSyxHQUFHLENBQUN6USxJQUFJLENBQUMwYSxTQUFTLENBQUMsWUFBWVgsWUFBWTtJQUVqRSxJQUFJYSxhQUFhLEVBQUU7TUFDZjtJQUNKO0lBRUFuSyxHQUFHLENBQUN6USxJQUFJLENBQUMwYSxTQUFTLEVBQUUsSUFBSVgsWUFBWSxDQUFDdEosR0FBRyxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQnVuZGxlUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb05leHRQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvUHJvZHVjdExvb2tib29rLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9TdGlja3lBZGRUb0NhcnQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkc2NvcGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0aGlzUHJvdWN0SWQgPSBwYXJzZUludChjb250ZXh0LnByb2R1Y3RJZCksXG4gICAgICAgICRyZWxhdGVUYWIgPSAkKCcjaGFsby1yZWxhdGVkLXByb2R1Y3RzJyksXG4gICAgICAgICRidW5kbGUgPSAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMnKSxcbiAgICAgICAgJGJ1bmRsZUxpc3QgPSAkYnVuZGxlLmZpbmQoJy5oYWxvLXByb2R1Y3QtbGlzdCcpO1xuXG4gICAgY29uc3QgbW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdO1xuXG4gICAgdmFyIGN1cnJlbmN5ID0gY29udGV4dC5tb25leTtcblxuICAgIHNob3dCdW5kbGUoKTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaGFsby10b2dnbGUtb3B0aW9ucycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5ub3QoJHRhcmdldCkucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XG4gICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykubm90KCR0YXJnZXQubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKSkucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcblxuICAgICAgICBpZiAoISR0YXJnZXQubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdpcy1mb2N1cycpO1xuICAgICAgICAgICAgJHRhcmdldC5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGFyZ2V0Lm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaGFsby1vcHRpb24tY2xvc2UnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaGFsby10b2dnbGUtb3B0aW9ucycpLmxlbmd0aCA9PT0gMCkpe1xuICAgICAgICAgICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5oYWxvLWRldGFpbC1jaGVja2JveCcsIGV2ZW50ID0+IHtcbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgaWQgPSAkdGFyZ2V0LmF0dHIoJ2lkJykucmVwbGFjZSgnZmJ0X3Byb2R1Y3QnLCcnKSxcbiAgICAgICAgICAgIHByb2R1Y3QgPSAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJzpjaGVja2VkJykgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb2R1Y3QucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuICAgICAgICAgICAgcHJvZHVjdC5maW5kKCcuaGFsby1wcm9kdWN0LWljb25BZGQnKS5yZW1vdmVDbGFzcygnaGFsby1wcm9kdWN0LWljb25DaGVja2VkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pY29uQWRkJykuYWRkQ2xhc3MoJ2hhbG8tcHJvZHVjdC1pY29uQ2hlY2tlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG90YWxQcmljZSgpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNoYWxvLWFkZEFsbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkYnVuZGxlKTtcbiAgICAgICAgdmFyIGFyclBybyA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgICQoJy5oYWxvLWRldGFpbC1jaGVja2JveCcpLmVhY2goKGluZGV4LCB2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHZhbCkuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICBhcnJQcm8ucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjaGVjayA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2hlY2sgPSBjaGVja1Byb2R1Y3QoJGZvcm0sIGFyclBybyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBrID0gYXJyUHJvLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICRidW5kbGUuZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0KCRmb3JtLCAwLCBhcnJQcm8sIGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ1BsZWFzZSBtYWtlIHN1cmUgYWxsIG9wdGlvbnMgaGF2ZSBiZWVuIGZpbGxlZCBpbi4nO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc2hvd0J1bmRsZSgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBpdGVtOiAnaGFsb3RoZW1lcy9wcm9kdWN0cy9oYWxvLWJ1bmRsZS1wcm9kdWN0cy10bXAnLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiAnaGFsb3RoZW1lcy9wcm9kdWN0cy9oYWxvLWJ1bmRsZS1wcm9kdWN0cy1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcblxuICAgICAgICB2YXIgcHJvZEJ1bmRsZUlkID0gW10sXG4gICAgICAgICAgICB0b3RhbEJsb2NrID0gJyc7XG5cbiAgICAgICAgZmlyc3RJdGVtKCk7XG5cbiAgICAgICAgIGlmKCRidW5kbGUuaGFzQ2xhc3MoJ2hhbG8tYnVuZGxlLWxvZ2luJykpe1xuICAgICAgICAgICAgdG90YWxCbG9jayA9ICc8ZGl2IGNsYXNzPVwiaGFsby1wcm9kdWN0LXRvdGFsXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtcHJpY2VcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5Mb2cgaW4gZm9yIHByaWNpbmc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdG90YWxCbG9jayA9ICc8ZGl2IGNsYXNzPVwiaGFsby1wcm9kdWN0LXRvdGFsXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtcHJpY2VcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5Ub3RhbDo8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGhhbG8tcHJvZHVjdC10b3RhbC1idXR0b25cIiBpZD1cImhhbG8tYWRkQWxsXCIgaHJlZj1cIiNcIj5BZGQgQWxsIFRvIENhcnQ8L2E+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgIH1cblxuICAgICAgICAkYnVuZGxlLmZpbmQoJy5idW5kbGUtcHJvZHVjdC1yaWdodCcpLmFwcGVuZCh0b3RhbEJsb2NrKTtcblxuICAgICAgICAkLmVhY2goY29udGV4dC5wcm9kdWN0Q3VzdG9tRmllbGRzLCBmdW5jdGlvbihpbmRleCwgb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLm5hbWUgPT0gJ19fYnVuZGxlaWQnKSB7XG4gICAgICAgICAgICAgICAgcHJvZEJ1bmRsZUlkID0gSlNPTi5wYXJzZSgnWycrb2JqLnZhbHVlKyddJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2RCdW5kbGVJZCA9ICQuZ3JlcChwcm9kQnVuZGxlSWQsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9IHRoaXNQcm91Y3RJZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCRidW5kbGUubGVuZ3RoID4gMCAmJiBwcm9kQnVuZGxlSWQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciBudW0gPSAwLFxuICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcblxuICAgICAgICAgICAgJHJlbGF0ZVRhYi5maW5kKCcuY2FyZCcpLmVhY2goKGluZGV4LCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFwiXCJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBwSWQgPSAkKHZhbCkuZGF0YSgncHJvZHVjdC1pZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmluZGV4ID09IGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gJHJlbGF0ZVRhYi5maW5kKCcuY2FyZCcpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKCRidW5kbGUubGVuZ3RoID4gMCAmJiBwcm9kQnVuZGxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG51bSA9IDAsXG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdLFxuICAgICAgICAgICAgICAgIGxpc3RGaWx0ZXIgPSAkLnVuaXF1ZShwcm9kQnVuZGxlSWQpO1xuXG4gICAgICAgICAgICAkLmVhY2gobGlzdEZpbHRlciwgKGluZGV4LCB2YWwpID0+e1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJcIlxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBJZCA9IHZhbDtcblxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5pbmRleCA9PSBpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09IHByb2RCdW5kbGVJZC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0SXRlbSgpe1xuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW1GaXJzdCcpLFxuICAgICAgICAgICAgcElkID0gZmlyc3RJdGVtLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgIGZvcm0gPSBmaXJzdEl0ZW0uZmluZCgnZm9ybScpLFxuICAgICAgICAgICAgaGFzT3B0aW9ucyA9IGZvcm0uZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoLFxuICAgICAgICAgICAgaGFzRGVmYXVsdE9wdGlvbnMgPSBmb3JtLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuXG4gICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHBJZCwgZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhmb3JtLCBhdHRyaWJ1dGVzRGF0YSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldyhmb3JtLCBhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dMaXN0KGxpc3Qpe1xuICAgICAgICBsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGVsZW1lbnQuZGF0YTtcblxuICAgICAgICAgICAgJGJ1bmRsZUxpc3QuYXBwZW5kKHJlc3BvbnNlLml0ZW0pO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub3B0aW9ucy50cmltKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHZhciBwSWQgPSAkKHJlc3BvbnNlLml0ZW0pLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgICAgICAkZm9ybSA9ICRidW5kbGVMaXN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcElkICsgJ1wiXSBmb3JtJyk7XG5cbiAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQocmVzcG9uc2Uub3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJChyZXNwb25zZS5vcHRpb25zKS5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2R1Y3RPcHRpb25zKCk7XG4gICAgICAgIHNob3dTbGlja1NsaWRlcigkYnVuZGxlTGlzdCk7XG5cbiAgICAgICAgaWYoISRidW5kbGUuaGFzQ2xhc3MoJ2hhbG8tYnVuZGxlLWxvZ2luJykpe1xuICAgICAgICAgICAgdG90YWxQcmljZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGJ1bmRsZS5yZW1vdmVDbGFzcygnaGFsby1ibG9jay1kaXNhYmxlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1NsaWNrU2xpZGVyKHdyYXApe1xuICAgICAgICBpZih3cmFwLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0nI3NsaWNrLWFycm93LW5leHQnPjwvdXNlPjwvc3ZnPlwiLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPScjc2xpY2stYXJyb3ctcHJldic+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NTEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1Byb2R1Y3QoZm9ybSwgYXJyUHJvKSB7XG4gICAgICAgIHZhciBjaGVjayA9IHRydWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJQcm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrID0gYXJyUHJvW2ldLFxuICAgICAgICAgICAgICAgICRmb3JtID0gJChmb3JtW2tdKTtcblxuICAgICAgICAgICAgaWYgKCRmb3JtLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJGZvcm0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0JlZm9yZUFkZCgkYXR0cmlidXRlcykge1xuICAgICAgICB2YXIgY2hlY2sgPSB0cnVlLFxuICAgICAgICAgICAgYXR0ID0gXCJcIjtcblxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdpbnB1dDp0ZXh0LCBpbnB1dDpwYXNzd29yZCwgaW5wdXQ6ZmlsZSwgdGV4dGFyZWEnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEkKGVsZW1lbnQpLnByb3AoJ3JlcXVpcmVkJykpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLnZhbCgpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnc2VsZWN0JykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghJChlbGVtZW50KS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS52YWwoKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ2lucHV0OnJhZGlvLCBpbnB1dDpjaGVja2JveCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0ICE9ICQoZWxlbWVudCkuYXR0cihcIm5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICBhdHQgPSAkKGVsZW1lbnQpLmF0dHIoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgIGlmICghJChlbGVtZW50KS5wcm9wKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cihcInR5cGVcIikgPT0gXCJyYWRpb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cihcInR5cGVcIikgPT0gXCJyYWRpb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvQ2FydChmb3JtLCBpLCBhcnJQLCBrKSB7XG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb2QgPSBhcnJQW2ldO1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQoZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YShmb3JtW3Byb2RdKSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgYWxlcnQodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIGsgPSBrIC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSsrO1xuXG4gICAgICAgICAgICBpZiAoaSA+PSBhcnJQLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRidW5kbGUuZmluZCgnLmxvYWRpbmdPdmVybGF5JykuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgbW9kYWwuJG1vZGFsLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ21vZGFsIG1vZGFsLS1wcmV2aWV3IG1vZGFsLS1wcmV2aWV3TWluaSBtb2RhbC0tcHJldmlld01pbmkyJyk7XG4gICAgICAgICAgICAgICAgbW9kYWwub3Blbih7IHNpemU6ICdzbWFsbCcgfSk7XG5cbiAgICAgICAgICAgICAgICBpZigkKFwiLm1vZGFsLWJhY2tncm91bmQ6dmlzaWJsZVwiKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWJhY2tncm91bmQ6dmlzaWJsZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG5cbiAgICAgICAgICAgICAgICBpZihrID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gJzxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPaywgJytrKycgaXRlbSB3YXMgYWRkZWQgdG8geW91ciBjYXJ0LiBXaGF0XFwncyBuZXh0P1xcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3Q2FydCBwcmV2aWV3Q2FydDJcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicHJldmlld0NhcnRDaGVja291dCBwcmV2aWV3Q2FydENoZWNrb3V0MlwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY2hlY2tvdXQucGhwXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2NlZWQgVG8gQ2hlY2tvdXRcXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmV2aWV3Q2FydENoZWNrb3V0LWF1dG9DbG9zZVwiIGRhdGEtYXV0by1jbG9zZT1cIjEwXCI+QXV0byBjbG9zZSBhZnRlciA8c3BhbiBjbGFzcz1cImNvdW50XCI+PC9zcGFuPnM8L3A+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbC1oZWFkZXItdGl0bGVcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rLCAnK2srJyBpdGVtIHdhcyBhZGRlZCB0byB5b3VyIGNhcnQuIFdoYXRcXCdzIG5leHQ/XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdDYXJ0IHByZXZpZXdDYXJ0MlwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwcmV2aWV3Q2FydENoZWNrb3V0IHByZXZpZXdDYXJ0Q2hlY2tvdXQyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmV2aWV3Q2FydENoZWNrb3V0LXRleHRcIj5Tb3JyeSEgV2UgZG9uXFwndCBoYXZlIGVub3VnaCBwcm9kdWN0IGZvciB5b3VyIHNlbGVjdGlvbiE8L3A+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmV2aWV3Q2FydENoZWNrb3V0LWF1dG9DbG9zZVwiIGRhdGEtYXV0by1jbG9zZT1cIjEwXCI+QXV0byBjbG9zZSBhZnRlciA8c3BhbiBjbGFzcz1cImNvdW50XCI+PC9zcGFuPnM8L3A+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBwYXJzZUludCgkYm9keS5maW5kKCcuY2FydERlc2t0b3AgLmNhcnQtcXVhbnRpdHknKS50ZXh0KCkpICsgaztcblxuICAgICAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZFRvQ2FydChmb3JtLCBpLCBhcnJQLCBrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG90YWxQcmljZSgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gMCxcbiAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgIHN5bWJvbENoYW5nZSxcbiAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMsXG4gICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yLFxuICAgICAgICAgICAgdGhvdXNhbmRzU2VwYXJhdG9yLFxuICAgICAgICAgICAgc3ltYm9sTG9jYXRpb24sXG4gICAgICAgICAgICBjdXJyLFxuICAgICAgICAgICAgdG9rZW4xLFxuICAgICAgICAgICAgdG9rZW4yLFxuICAgICAgICAgICAgbGVuZ3RoO1xuXG4gICAgICAgIGRlY2ltYWxQbGFjZXMgPSBjdXJyZW5jeS5kZWNpbWFsX3BsYWNlcztcbiAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9IGN1cnJlbmN5LmRlY2ltYWxfdG9rZW47XG4gICAgICAgIHRob3VzYW5kc1NlcGFyYXRvciA9IGN1cnJlbmN5LnRob3VzYW5kc190b2tlbjtcbiAgICAgICAgc3ltYm9sTG9jYXRpb24gPSBjdXJyZW5jeS5jdXJyZW5jeV9sb2NhdGlvbjtcbiAgICAgICAgc3ltYm9sID0gY3VycmVuY3kuY3VycmVuY3lfdG9rZW47XG5cbiAgICAgICAgJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtLmlzQ2hlY2tlZCcpLmVhY2goKGluZGV4LCB2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciBwcmljZSA9IHBhcnNlRmxvYXQoJCh2YWwpLmZpbmQoJ1tkYXRhLXByaWNlLXZhbHVlXScpLmF0dHIoJ2RhdGEtcHJpY2UtdmFsdWUnKSk7XG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgcHJpY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctcHJvZHVjdCAucHJvZHVjdFZpZXctcHJpY2UgPiAucHJpY2Utc2VjdGlvbiA+IC5wcmljZS5wcmljZS0td2l0aFRheCcsICRzY29wZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyID0gJCgnLnByb2R1Y3RWaWV3LXByb2R1Y3QgLnByb2R1Y3RWaWV3LXByaWNlID4gLnByaWNlLXNlY3Rpb24gPiAucHJpY2UucHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLmRhdGEoJ3ZhbHVlLXByaWNlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyID0gJCgnLnByb2R1Y3RWaWV3LXByb2R1Y3QgLnByb2R1Y3RWaWV3LXByaWNlID4gLnByaWNlLXNlY3Rpb24gPiAucHJpY2UucHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLmRhdGEoJ3ZhbHVlLXByaWNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzeW1ib2xDaGFuZ2UgPSBjdXJyLnJlcGxhY2UoL1swLTldL2csIFwiXCIpLnJlcGxhY2UoXCIuXCIsIFwiXCIpLnJlcGxhY2UoXCIsXCIsIFwiXCIpO1xuXG4gICAgICAgIGlmKHN5bWJvbCAhPSBzeW1ib2xDaGFuZ2Upe1xuICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9sQ2hhbmdlO1xuICAgICAgICAgICAgdG9rZW4xID0gKGN1cnIuaW5kZXhPZignLicpKTtcbiAgICAgICAgICAgIHRva2VuMiA9IChjdXJyLmluZGV4T2YoJywnKSk7XG4gICAgICAgICAgICBsZW5ndGggPSBjdXJyLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgIGlmIChjdXJyLmluZGV4T2Yoc3ltYm9sKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbExvY2F0aW9uID0gY3Vyci5pbmRleE9mKHN5bWJvbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b2tlbjEgPCB0b2tlbjIpIHtcbiAgICAgICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IgPSAnLic7XG4gICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9ICcsJztcblxuICAgICAgICAgICAgICAgIGlmIChzeW1ib2xMb2NhdGlvbiA9PSAwIHx8IHN5bWJvbExvY2F0aW9uID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBsZW5ndGggLSB0b2tlbjI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGxlbmd0aCAtIHRva2VuMiAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IgPSAnLCc7XG4gICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9ICcuJztcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sTG9jYXRpb24gPT0gMCB8fCBzeW1ib2xMb2NhdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzID0gbGVuZ3RoIC0gdG9rZW4xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBsZW5ndGggLSB0b2tlbjEgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRvdGFsID09IDApe1xuICAgICAgICAgICAgJGJ1bmRsZS5maW5kKCcjaGFsby1hZGRBbGwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAkYnVuZGxlLmZpbmQoJyNoYWxvLWFkZEFsbCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG90YWwgPSBmb3JtYXRNb25leSh0b3RhbCwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFNlcGFyYXRvciwgdGhvdXNhbmRzU2VwYXJhdG9yKTtcblxuICAgICAgICBpZiAoc3ltYm9sTG9jYXRpb24gPT0gXCJsZWZ0XCIgfHwgc3ltYm9sTG9jYXRpb24gPT0gMCl7XG4gICAgICAgICAgICB0b3RhbCA9IHN5bWJvbCArIHRvdGFsO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgJGJ1bmRsZS5maW5kKCcuaGFsby1wcm9kdWN0LXRvdGFsIC5wcmljZScpLmh0bWwodG90YWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdE1vbmV5KG4sIGMsIGQsIHQpIHtcbiAgICAgICAgdmFyIGMgPSBpc05hTihjID0gTWF0aC5hYnMoYykpID8gMiA6IGMsXG4gICAgICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXG4gICAgICAgICAgICB0ID0gdCA9PSB1bmRlZmluZWQgPyBcIixcIiA6IHQsXG4gICAgICAgICAgICBzID0gbiA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxuICAgICAgICAgICAgaiA9IChqID0gaS5sZW5ndGgpID4gMyA/IGogJSAzIDogMDtcblxuICAgICAgICByZXR1cm4gcyArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogXCJcIikgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdCkgKyAoYyA/IGQgKyBNYXRoLmFicyhuIC0gaSkudG9GaXhlZChjKS5zbGljZSgyKSA6IFwiXCIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwcm9kdWN0T3B0aW9ucygpIHtcbiAgICAgICAgaWYoISRidW5kbGUuaGFzQ2xhc3MoJ2hhbG8tYnVuZGxlLWxvZ2luJykpe1xuICAgICAgICAgICAgdG90YWxQcmljZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJGJ1bmRsZSksXG4gICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LCBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xuICAgICAgICAgICAgc2V0UHJvZHVjdFZhcmlhbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKS50ZXh0KGxhYmVsLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCdpZCcpID09PSAnZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICBzaG93UHJvZHVjdEltYWdlKHByb2R1Y3RJZCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRzY29wZSwgZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7ZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZX0pYDtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCAkc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBkYXRhKSB7XG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoZGF0YS5pbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBkYXRhLmltYWdlLmRhdGEsIHsgJzF4JzogY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RnYWxsZXJ5X3NpemUgfSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmZpbmQoJ2ltZycpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmNzZXQnOiBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3Jjc2V0JzogJCh0aGlzKS5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyY3NldCc6IG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KCRzY29wZSwgZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XG5cbiAgICAgICAgc2hvd01lc3NhZ2VCb3goZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlLCAkc2NvcGUpO1xuXG4gICAgICAgIGlmIChfLmlzTnVtYmVyKGRhdGEuc3RvY2spKSB7XG4gICAgICAgICAgICBpZigoZGF0YS5zdG9jayA8PSBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19zdG9ja19sZXZlbF9saW1pdCkpICYmIChkYXRhLnN0b2NrID4gMCkpIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHN0b2NrTGVmdFdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHN0b2NrTGVmdC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0V3JhcHBlci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uaXNPYmplY3QoZGF0YS5wcmljZSkpIHtcbiAgICAgICAgICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCksXG4gICAgICAgICAgICBwcm9kdWN0ID0gJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJyksXG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3ggPSBwcm9kdWN0LmZpbmQoJy5oYWxvLWRldGFpbC1jaGVja2JveCcpO1xuXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICBwcm9kdWN0LnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQgaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoJHNjb3BlLCBkYXRhKSB7XG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkc2NvcGUpLnZhbCgpLFxuICAgICAgICAgICAgcHJvZHVjdCA9ICRidW5kbGVMaXN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLFxuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94ID0gcHJvZHVjdC5maW5kKCcuaGFsby1kZXRhaWwtY2hlY2tib3gnKTtcblxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgcHJvZHVjdC5yZW1vdmVDbGFzcygnaXNDaGVja2VkIGhhc09wdGlvbnMtLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlRGF0YToge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJ1tkYXRhLXByaWNlLXZhbHVlXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHN0b2NrTGVmdDogJCgnW2RhdGEtc3RvY2stbGVmdF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHN0b2NrTGVmdFdyYXBwZXI6ICQoJy5wcm9kdWN0Vmlldy1vcHRpb25zU3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRza3U6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScpLFxuICAgICAgICAgICAgJHVwYzogJCgnW2RhdGEtcHJvZHVjdC11cGNdJyksXG4gICAgICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UsICRzY29wZSkge1xuICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJywgJHNjb3BlKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XG4gICAgICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VEYXRhLiRkaXYuYXR0cignZGF0YS1wcmljZS12YWx1ZScsIHByaWNlLndpdGhfdGF4LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlRGF0YS4kZGl2LmF0dHIoJ2RhdGEtcHJpY2UtdmFsdWUnLCBwcmljZS53aXRob3V0X3RheC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmlsZSAmJiAhdmFsLm5hbWUgJiYgIXZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgaWYgKCQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMnKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuO1xuICAgICAgICBjb25zdCBjdXJDb2RlID0gJCgnLmJvZHknKS5kYXRhKCdjdXJyZW5jeS1jb2RlJyk7XG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzJykuZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgbmV4dElkID0gcHJvZHVjdElkICsgMSxcbiAgICAgICAgICAgIHByZXZJZCA9IHByb2R1Y3RJZCAtIDEsXG4gICAgICAgICAgICBuZXh0TGluaywgcHJldkxpbmssIGxpc3Q7XG5cbiAgICAgICAgY29uc3QgJHByb2RXcmFwID0gJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cyAubmV4dC1wcmV2LW1vZGFsJyksXG4gICAgICAgIFx0JHByb2RJY29ucyA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMgLm5leHQtcHJldi1pY29ucycpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFByb2R1Y3QoYXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgIHF1ZXJ5IE15UXVlcnkge1xuICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIChlbnRpdHlJZHM6IFtgK2FycitgXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3kgKGN1cnJlbmN5Q29kZTogYCtjdXJDb2RlK2ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcmFnbWVudCBQcm9kdWN0RmllbGRzIG9uIFByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzcwcHg6IHVybCh3aWR0aDogNzApXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9KSxcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByZXZJZCAhPSB1bmRlZmluZWQgJiYgbmV4dElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGlzdCA9IFtwcmV2SWQsIG5leHRJZF07XG5cbiAgICAgICAgICAgIGdldFByb2R1Y3QobGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9kdWN0KGRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcywgZGF0YS5zaXRlLmN1cnJlbmN5LmRpc3BsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRNb25leShuLCBjLCBkLCB0KSB7XG4gICAgICAgICAgICB2YXIgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXG4gICAgICAgICAgICAgICAgdCA9IHQgPT0gdW5kZWZpbmVkID8gXCIsXCIgOiB0LFxuICAgICAgICAgICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxuICAgICAgICAgICAgICAgIGogPSAoaiA9IGkubGVuZ3RoKSA+IDMgPyBqICUgMyA6IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJQcm9kdWN0KHByb2R1Y3QsIGN1ckRpc3BsYXkpIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICQuZWFjaChwcm9kdWN0LCAoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IGN1ckRpc3BsYXkuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sUGxhY2VtZW50ID0gY3VyRGlzcGxheS5zeW1ib2xQbGFjZW1lbnQudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlbiA9IGN1ckRpc3BsYXkuZGVjaW1hbFRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGN1ckRpc3BsYXkuZGVjaW1hbFBsYWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc1Rva2VuID0gY3VyRGlzcGxheS50aG91c2FuZHNUb2tlbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlLCBwcmljZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fY2FyZF90aXRsZSA9PSAnZWxsaXBzaXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICc8YSBocmVmPVwiJytpdGVtLnBhdGgrJ1wiIGNsYXNzPVwiY2FyZC1lbGxpcHNpc1wiIHN0eWxlPVwiLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcIj4nK2l0ZW0ubmFtZSsnPC9hPic7ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAnPGEgaHJlZj1cIicraXRlbS5wYXRoKydcIj4nK2l0ZW0ubmFtZSsnPC9hPic7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmJvZHknKS5oYXNDbGFzcygnaXMtbG9naW4nKSB8fCBjb250ZXh0LnRoZW1lU2V0dGluZ3MucmVzdHJpY3RfdG9fbG9naW4gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5wcmljZVJhbmdlLm1pbi52YWx1ZSA8IGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlICYmIGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcmljZV9yYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZU1pbiA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5wcmljZVJhbmdlLm1pbi52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlTWF4ID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4IHByaWNlLW5vbmVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlTWluKycgLSAnK3ByaWNlTWF4Kyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZURlZiA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5wcmljZS52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLnJldGFpbFByaWNlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLmJhc2VQcmljZS52YWx1ZSA+IGl0ZW0ucHJpY2VzLnByaWNlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUJhcyA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5iYXNlUHJpY2UudmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPicrcHJpY2VCYXMrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggcHJpY2Utbm9uZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj48L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSA+IGl0ZW0ucHJpY2VzLnByaWNlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVJldCA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj4nK3ByaWNlUmV0Kyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4IHByaWNlLW5vbmVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VEZWYrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPHAgdHJhbnNsYXRlPkxvZyBpbiBmb3IgcHJpY2luZzwvcD4nO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHRtbF9jYXJkID0gJzxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtY3VzdG9tXCIgZGF0YS1wcm9kdWN0LWlkPVwiJytpdGVtLmVudGl0eUlkKydcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWxpbmtcIiBocmVmPVwiJytpdGVtLnBhdGgrJ1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicraXRlbS5kZWZhdWx0SW1hZ2UuaW1nNzBweCsnXCIgYWx0PVwiJytpdGVtLm5hbWUrJ1wiIHRpdGxlPVwiJytpdGVtLm5hbWUrJ1wiIC8+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPicrdGl0bGUrJzwvaDQ+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcHJpY2VcIiBkYXRhLXRlc3QtaW5mby10eXBlPVwicHJpY2VcIj4nK3ByaWNlKyc8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmVudGl0eUlkID09IHByZXZJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykuYXR0cignaHJlZicsIGl0ZW0ucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFwcGVuZChodG1sX2NhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5wcmV2LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmVudGl0eUlkID09IG5leHRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5wYXRoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLmF0dHIoJ2hyZWYnLCBpdGVtLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5hcHBlbmQoaHRtbF9jYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5uZXh0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZEljb25zLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICBcdCRwcm9kV3JhcC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkcHJvZFdyYXAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcubmV4dC1pY29uJywgJHByb2RJY29ucykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0JCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgIFx0JCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLmFkZENsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5wcmV2LWljb24nLCAkcHJvZEljb25zKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHQkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgXHQkKCcjcHJldi1wcm9kdWN0LW1vZGFsJykuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHByb2RXcmFwLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICBcdCRwcm9kV3JhcC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0JHByb2RXcmFwLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgZWwpIHtcbiAgICB2YXIgJHBvcHVwID0gJCgnLmxvb2tib29rLXBvcHVwJyk7XG4gICAgdmFyICRlbCA9IGVsO1xuXG4gICAgY29uc3QgJG9wdGlvbnMgPSB7XG4gICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9wcm9kdWN0cy9oYWxvLWxvb2tib29rLXRtcCdcbiAgICB9O1xuXG4gICAgJGVsLmZpbmQoJy5pdGVtIC5pdGVtLXBvaW50Jykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5lbXB0eSgpO1xuXG4gICAgICAgIHZhciAkcHJvZElkID0gJChldmVudC50YXJnZXQpLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJChldmVudC50YXJnZXQpLm9mZnNldCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gJGVsLm9mZnNldCgpO1xuXG4gICAgICAgIGlmKCRwcm9kSWQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQoJHByb2RJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRwb3B1cC5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNTUxKSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lci50b3AgLSAxMDAsICdsZWZ0JzogcG9zaXRpb24ubGVmdCAtIGNvbnRhaW5lci5sZWZ0ICsgMzB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmNzcyh7J3RvcCc6IHBvc2l0aW9uLnRvcCAtIGNvbnRhaW5lci50b3AgKyAxNSwgJ2xlZnQnOiAxNX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcG9wdXAuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLXByb2R1Y3QnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCRwb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoJHBvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgaWYoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCRwb3B1cCkubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5pdGVtIC5pdGVtLXBvaW50JykubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkc2NvcGUsIGNvbnRleHQpe1xuICAgIGlmICgkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JykubGVuZ3RoKSB7XG4gICAgICAgIHZhciBzY3JvbGwgPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0Jykub2Zmc2V0KCksXG4gICAgICAgICAgICBoX3N0YXRjID0gJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCksXG4gICAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGwudG9wO1xuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0ICRzdGlja3kgPSAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jyk7XG5cbiAgICAgICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbFRvcCArIDQwMCl7XG5cbiAgICAgICAgICAgICAgICBpZighJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmhhc0NsYXNzKCdzaG93X3N0aWNreScpKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmFkZENsYXNzKCdzaG93X3N0aWNreScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgNDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYXNrLWFuLWV4cGVydCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDQwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1hc2stYW4tZXhwZXJ0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgMTMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsIDMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1hc2stYW4tZXhwZXJ0JykuY3NzKFwiYm90dG9tXCIsIDE1MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLnJlbW92ZUNsYXNzKCdzaG93X3N0aWNreScpO1xuICAgICAgICAgICAgICAgICQoJy5wb3AtdXAtb3B0aW9uJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5Qb3B1cE9wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCAzMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA1NTApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYXNrLWFuLWV4cGVydCcpLmNzcyhcImJvdHRvbVwiLCAzMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYXNrLWFuLWV4cGVydCcpLmNzcyhcImJvdHRvbVwiLCAxNTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLmNob29zZV9vcHRpb25zX2FkZCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnBvcC11cC1vcHRpb24nKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdvcGVuUG9wdXBPcHRpb24nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLnBvcC11cC1vcHRpb24gLmJ0bi1jbG9zZScsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICQoXCIucG9wLXVwLW9wdGlvblwiKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvcGVuUG9wdXBPcHRpb24nKTtcbiAgICAgICAgICAgICQoJy5jaG9vc2Vfb3B0aW9uc19hZGQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5zdGlja3ktcHJvZHVjdC1leHBhbmQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBpZigkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuaGFzQ2xhc3MoJ3Nob3ctZnVsbC1zdGlja3knKSkge1xuICAgICAgICAgICAgICAgICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5yZW1vdmVDbGFzcygnc2hvdy1mdWxsLXN0aWNreScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuYWRkQ2xhc3MoJ3Nob3ctZnVsbC1zdGlja3knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBzY3JvbGxUb3AgKyA0MDApe1xuICAgICAgICAgICAgICAgIGlmKCEkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuaGFzQ2xhc3MoJ3Nob3dfc3RpY2t5Jykpe1xuICAgICAgICAgICAgICAgICAgICAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuYWRkQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1hc2stYW4tZXhwZXJ0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgNDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWFzay1hbi1leHBlcnQnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyAxMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWFzay1hbi1leHBlcnQnKS5jc3MoXCJib3R0b21cIiwgMTUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGhhbG9BZGRPcHRpb24gZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0Q2FyZCc7XG5pbXBvcnQgaGFsb1Byb2R1Y3RMb29rYm9vayBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vayc7XG5pbXBvcnQgaGFsb0J1bmRsZVByb2R1Y3RzIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQnVuZGxlUHJvZHVjdHMnO1xuaW1wb3J0IGhhbG9OZXh0UHJvZHVjdHMgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9OZXh0UHJvZHVjdHMnO1xuaW1wb3J0IGhhbG9TdGlja3lBZGRUb0NhcnQgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lBZGRUb0NhcnQnO1xuaW1wb3J0IGhhbG9Zb3V0dWJlQ2Fyb3VzZWwgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9WaWRlbyc7XG5pbXBvcnQgaGFsb05vdGlmeU1lIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvTm90aWZ5TWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIGZvdW5kYXRpb24gbW9kYWwgY2xvc2UgZXZlbnRzIHRvIHNhbml0aXplIFVSTCBhZnRlciByZXZpZXcuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbG9zZS5mbmR0bi5yZXZlYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSAmJiB0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICB0aGlzLmJ1bGtQcmljaW5nSGFuZGxlcigpO1xuICAgICAgICB0aGlzLnByb2R1Y3RDdXN0b21UYWIoKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0VGFiVG9nZ2xlKCk7XG4gICAgICAgIHRoaXMuY29tcGFyZUNvbG9ycygpO1xuICAgICAgICB0aGlzLnByb2R1Y3RWaWV3SW5mb1RhYnMoKTtcbiAgICAgICAgdGhpcy5zb2xkUHJvZHVjdCgkKCcucHJvZHVjdFZpZXctc29sZFByb2R1Y3QnKSk7XG4gICAgICAgIHRoaXMudmlld2luZ1Byb2R1Y3QoJCgnLnByb2R1Y3RWaWV3LVZpZXdpbmdQcm9kdWN0JykpO1xuICAgICAgICB0aGlzLmNvdW50RG93blByb2R1Y3QoJCgnLnByb2R1Y3RWaWV3LWNvdW50RG93bicpKTtcbiAgICAgICAgdGhpcy5sb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoKTtcbiAgICAgICAgXG4gICAgICAgIGhhbG9OZXh0UHJvZHVjdHModGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1N0aWNreUFkZFRvQ2FydCgkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1Byb2R1Y3RMb29rYm9vayh0aGlzLmNvbnRleHQsICQoJy5wcm9kdWN0Vmlldy1sb29rYm9vaycpKTtcbiAgICAgICAgaGFsb0J1bmRsZVByb2R1Y3RzKCQoJy5wcm9kdWN0Vmlldy1zbGljaycpLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvTm90aWZ5TWUoJCgnLnByb2R1Y3RWaWV3LXNsaWNrJyksIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGhhbG9Zb3V0dWJlQ2Fyb3VzZWwoJCgnLnByb2R1Y3RWaWV3LXNsaWNrIFtkYXRhLXNsaWNrXScpKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuICAgIH1cblxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9kdWN0Q3VzdG9tVGFiKCl7XG4gICAgICAgIGlmKCQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiBbZGF0YS1jdXN0b20tdGFiXScpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIFtkYXRhLWN1c3RvbS10YWJdJykuYXBwZW5kVG8oJyNoYWxvLWN1c3RvbS10YWIgLmNhcmQtYm9keScpO1xuICAgICAgICAgICAgJCgnI2hhbG8tY3VzdG9tLXRhYicpLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctc2hvcnREZXNjIFtkYXRhLWN1c3RvbS10YWJdJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcjaGFsby1wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAucHJvZHVjdFZpZXctdGFicyAuY2FyZC1ib2R5JykuYWRkQ2xhc3MoJ2hhcy1jdXN0b21UYWInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNoYWxvLXByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIC5wcm9kdWN0Vmlldy10YWJzIC5jYXJkLndhcnJhbnR5IC50aXRsZScpLmFkZENsYXNzKCduby1jdXN0b21UYWInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2R1Y3RUYWJUb2dnbGUoKXtcbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQgLnRpdGxlJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZCAudGl0bGUnKS5ub3QoJHRhcmdldCkucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXG4gICAgICAgICAgICBpZigkdGFyZ2V0Lmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy10YWJzIC5jYXJkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+e1xuICAgICAgICAgICAgICAgIGlmKCQoJy50aXRsZScsIGVsZW1lbnQpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVEb3duKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVVcChcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy10YWJzIC5jYXJkOm50aC1jaGlsZCgxKSAudGl0bGUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cblxuICAgIHNvbGRQcm9kdWN0KCR3cmFwcGVyKSB7XG4gICAgICAgIGlmKCR3cmFwcGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBudW1iZXJzUHJvZHVjdF90ZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNfdGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnMsXG4gICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0LFxuICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dDIgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzX3RleHQ7XG5cbiAgICAgICAgICAgIHZhciBudW1iZXJzUHJvZHVjdExpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNQcm9kdWN0X3RleHQgKyBcIl1cIiksIFxuICAgICAgICAgICAgICAgIG51bWJlcnNQcm9kdWN0SXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc1Byb2R1Y3RMaXN0Lmxlbmd0aCkpLFxuICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0xpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNIb3Vyc190ZXh0ICsgXCJdXCIpLFxuICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0l0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNIb3Vyc0xpc3QubGVuZ3RoKSk7XG4gICAgICAgICBcbiAgICAgICAgICAgICR3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZmlyZVwiLz48L3N2Zz48c3BhbiBjbGFzcz1cInRleHRcIj4nICsgbnVtYmVyc1Byb2R1Y3RMaXN0W251bWJlcnNQcm9kdWN0SXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dCArIFwiIFwiICsgbnVtYmVyc0hvdXJzTGlzdFtudW1iZXJzSG91cnNJdGVtXSArIFwiIFwiICsgc29sZFByb2R1Y3RUZXh0MiArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAkd3JhcHBlci5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb3VudERvd25Qcm9kdWN0KCR3cmFwcGVyKSB7XG4gICAgICAgIGlmKCR3cmFwcGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBjb3VudERvd24gPSAkd3JhcHBlci5kYXRhKCdjb3VudGRvd24nKSxcbiAgICAgICAgICAgICAgICBjb3VudERvd25EYXRlID0gbmV3IERhdGUoY291bnREb3duKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgc2VmdCA9ICR3cmFwcGVyO1xuXG4gICAgICAgICAgICB2YXIgY291bnRkb3duZnVuY3Rpb24gPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gY291bnREb3duRGF0ZSAtIG5vdztcblxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25mdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHNlZnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyQ291bnREb3duID0gJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tYmVsbFwiLz48L3N2Zz48c3BhbiBjbGFzcz1cInRleHRcIj48c3Bhbj5MaW1pdGVkIHRpbWUgb2ZmZXIsIGVuZCBpbjo8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrZGF5cysnZCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicraG91cnMrJ2ggOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK21pbnV0ZXMrJ20gOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK3NlY29uZHMrJ3M8L3NwYW4+JztcblxuICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoc3RyQ291bnREb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZpZXdpbmdQcm9kdWN0KCR3cmFwcGVyKSB7XG4gICAgICAgIGlmKCR3cmFwcGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciB2aWV3ZXJUZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF90ZXh0LFxuICAgICAgICAgICAgICAgIG51bWJlcnNWaWV3ZXJfdGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyLFxuICAgICAgICAgICAgICAgIG51bWJlcnNWaWV3ZXJMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzVmlld2VyX3RleHQgKyBcIl1cIik7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtYmVyc1ZpZXdlckl0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNWaWV3ZXJMaXN0Lmxlbmd0aCkpO1xuXG4gICAgICAgICAgICAgICAgJHdyYXBwZXIuaHRtbCgnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1leWVcIi8+PC9zdmc+JyArIG51bWJlcnNWaWV3ZXJMaXN0W251bWJlcnNWaWV3ZXJJdGVtXSArIFwiIFwiICsgdmlld2VyVGV4dCk7XG4gICAgICAgICAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKS5zaG93KCk7XG4gICAgICAgICAgICB9LCAxMDAwMCk7ICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhcmVDb2xvcnMoKXtcbiAgICAgICAgY29uc3QgJHN3YXRjaFdyYXBwZXIgPSAkKCcuaGFsby1jb21wYXJlQ29sb3JzLXN3YXRjaCcpLFxuICAgICAgICAgICAgJGltYWdlV3JhcHBlciA9ICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtaW1hZ2UnKSxcbiAgICAgICAgICAgICR0ZXh0V3JhcHBlciA9ICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtdGV4dCcpO1xuXG4gICAgICAgICQoJy5mb3JtLW9wdGlvbicsICRzd2F0Y2hXcmFwcGVyKS5vbignY2xpY2snLCAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ3Nob3ctY29sb3InKTtcblxuICAgICAgICAgICAgdmFyIHRpdGxlID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQnKS5hdHRyKCd0aXRsZScpLFxuICAgICAgICAgICAgICAgIGlkID0gJHRoaXMuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKSxcbiAgICAgICAgICAgICAgICAkY29sb3IsICRjb2xvcjIsICRjb2xvcjMsICRpbWcsICRwYXR0ZXJuO1xuXG4gICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3Nob3ctY29sb3InKSl7XG4gICAgICAgICAgICAgICAgaWYoJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJykuYXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAkaW1hZ2VXcmFwcGVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1jb2xvciBpdGVtLScraWQrJ1wiPjxzcGFuIGNsYXNzPVwiY29sb3JcIiBzdHlsZT1cIicrJGNvbG9yKyc7XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjInKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IgPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyIHNwYW46bnRoLWNoaWxkKDEpJykuYXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yMiA9ICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjIgc3BhbjpudGgtY2hpbGQoMiknKS5hdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtaW1hZ2UnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tY29sb3IgaXRlbS0nK2lkKydcIj48c3BhbiBjbGFzcz1cImNvbG9yIGNvbG9yMlwiPjxzcGFuIHN0eWxlPVwiJyskY29sb3IrJztcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCInKyRjb2xvcjIrJztcIj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjMnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IgPSAgJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMyBzcGFuOm50aC1jaGlsZCgxKScpLmF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvcjIgPSAgJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMyBzcGFuOm50aC1jaGlsZCgyKScpLmF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvcjMgPSAgJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMyBzcGFuOm50aC1jaGlsZCgzKScpLmF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGltYWdlV3JhcHBlci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tY29sb3IgaXRlbS0nK2lkKydcIj48c3BhbiBjbGFzcz1cImNvbG9yIGNvbG9yM1wiPjxzcGFuIHN0eWxlPVwiJyskY29sb3IrJztcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCInKyRjb2xvcjIrJztcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCInKyRjb2xvcjMrJztcIj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgJGltZyA9ICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuJykuYXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJHBhdHRlcm4gPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVybicpLmF0dHIoJ2RhdGEtcGF0dGVybicpO1xuXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZVdyYXBwZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLXBhcnRlcm4gaXRlbS0nK2lkKydcIj48c3BhbiBjbGFzcz1cImltYWdlXCI+PGltZyBzcmM9JyskcGF0dGVybisnIGFsdD0nK3RpdGxlKycgdGl0bGU9Jyt0aXRsZSsnPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlXCI+Jyt0aXRsZSsnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkKCcuaXRlbS0nK2lkKycnLCAkaW1hZ2VXcmFwcGVyKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoJGltYWdlV3JhcHBlci5jaGlsZHJlbigpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICR0ZXh0V3JhcHBlci5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJHRleHRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDEwMjUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itc3dhdGNoLWltYWdlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3IFNvcnRhYmxlKGVsLCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2R1Y3RWaWV3SW5mb1RhYnMoKXtcbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LWluZm9UYWJzIC5wcm9kdWN0Vmlldy1pbmZvVGFiIGEnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgJGJsb2NrID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJGJsb2NrKS5vZmZzZXQoKS50b3AgLSAkKCcuaGVhZGVyJykuaGVpZ2h0KCksXG4gICAgICAgICAgICB9LCA3MDApO1xuXG4gICAgICAgICAgICBpZigkYmxvY2sgPT0gJyNoYWxvLXByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uJyl7XG4gICAgICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Vmlldy10YWJzIC5jYXJkOm50aC1jaGlsZCgxKSAudGl0bGUnKS5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgICAgICAgICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZDpudGgtY2hpbGQoMSkgLnRpdGxlJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1tb3JlRGVzYyBhJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnI2hhbG8tcHJvZHVjdFZpZXctZGVzY3JpcHRpb24nKS5vZmZzZXQoKS50b3AgLSAkKCcuaGVhZGVyJykuaGVpZ2h0KCksXG4gICAgICAgICAgICB9LCA3MDApO1xuXG4gICAgICAgICAgICBpZighJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQ6bnRoLWNoaWxkKDEpIC50aXRsZScpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQ6bnRoLWNoaWxkKDEpIC50aXRsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpe1xuICAgICAgICBpZigkKCcucHJvZHVjdENhcm91c2VsJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAkKCcucHJvZHVjdENhcm91c2VsJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgJHByb2RXcmFwSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKHRoaXMuY29udGV4dCwgJHByb2RXcmFwSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3RhYi1yZXZpZXdzJyk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIHRoaXMuaW5qZWN0UGFnaW5hdGlvbkxpbmsoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xuICAgICAqIFRoZSBicm93c2VyIGp1bXBzIHRvIHRoZSByZXZpZXcgcGFnZSBhbmQgc2hvdWxkIGV4cGFuZCB0aGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICovXG4gICAgaW5pdExpbmtCaW5kKCkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICQoJyNwcm9kdWN0UmV2aWV3cy1jb250ZW50JywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdMaW5rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXJldmlld1RhYkxpbmsnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoISRjb250ZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VSZXZpZXdzKCkge1xuICAgICAgICAvLyBXZSdyZSBpbiBwYWdpbmF0aW5nIHN0YXRlLCBkbyBub3QgY29sbGFwc2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyN0YWItcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3RhYi1yZXZpZXdzYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZMaW5rLmF0dHIoJ2hyZWYnLCBgJHskcHJldkxpbmsuYXR0cignaHJlZicpfSAjdGFiLXJldmlld3NgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyVmFsaWRhdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnJhdGluZ1wiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1JhdGluZyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRpdGxlXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3U3ViamVjdCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRleHRcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdDb21tZW50LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy53cml0ZVJldmlldy1mb3JtIFtuYW1lPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0VtYWlsLFxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsidXRpbHMiLCJtb2RhbEZhY3RvcnkiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiJHNjb3BlIiwiY29udGV4dCIsInRoaXNQcm91Y3RJZCIsInBhcnNlSW50IiwicHJvZHVjdElkIiwiJHJlbGF0ZVRhYiIsIiQiLCIkYnVuZGxlIiwiJGJ1bmRsZUxpc3QiLCJmaW5kIiwibW9kYWwiLCJjdXJyZW5jeSIsIm1vbmV5Iiwic2hvd0J1bmRsZSIsImRvY3VtZW50Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJub3QiLCJyZW1vdmVDbGFzcyIsIm5leHQiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwidGFyZ2V0IiwiY2xvc2VzdCIsImxlbmd0aCIsImlkIiwiYXR0ciIsInJlcGxhY2UiLCJwcm9kdWN0IiwiaXMiLCJ0b3RhbFByaWNlIiwiJGZvcm0iLCJhcnJQcm8iLCJBcnJheSIsImVhY2giLCJpbmRleCIsInZhbCIsInB1c2giLCJjaGVjayIsImNoZWNrUHJvZHVjdCIsImsiLCJzaG93IiwiYWRkVG9DYXJ0IiwiZXJyb3JNZXNzYWdlIiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0Iiwib3B0aW9ucyIsInRlbXBsYXRlIiwiaXRlbSIsInByb2RCdW5kbGVJZCIsInRvdGFsQmxvY2siLCJmaXJzdEl0ZW0iLCJhcHBlbmQiLCJwcm9kdWN0Q3VzdG9tRmllbGRzIiwib2JqIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInZhbHVlIiwiZ3JlcCIsIm51bSIsImxpc3QiLCJkYXRhIiwicElkIiwidW5kZWZpbmVkIiwiYXBpIiwiZ2V0QnlJZCIsImVyciIsInJlc3BvbnNlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJzaG93TGlzdCIsImxpc3RGaWx0ZXIiLCJ1bmlxdWUiLCJmb3JtIiwiaGFzT3B0aW9ucyIsImhhc0RlZmF1bHRPcHRpb25zIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidXBkYXRlVmlldyIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwidHJpbSIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJodG1sIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJwcm9kdWN0T3B0aW9ucyIsInNob3dTbGlja1NsaWRlciIsIndyYXAiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1vYmlsZUZpcnN0IiwiaW5maW5pdGUiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiaSIsImNoZWNrQmVmb3JlQWRkIiwiJGF0dHJpYnV0ZXMiLCJhdHQiLCJwcm9wIiwiZm9jdXMiLCJhcnJQIiwid2luZG93IiwiRm9ybURhdGEiLCJwcm9kIiwiY2FydCIsIml0ZW1BZGQiLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJlcnJvciIsImFsZXJ0IiwiaGlkZSIsIiRtb2RhbCIsIm9wZW4iLCJzaXplIiwiJGJvZHkiLCJxdWFudGl0eSIsInRleHQiLCJ0cmlnZ2VyIiwidXBkYXRlQ29udGVudCIsInRvdGFsIiwic3ltYm9sIiwic3ltYm9sQ2hhbmdlIiwiZGVjaW1hbFBsYWNlcyIsImRlY2ltYWxTZXBhcmF0b3IiLCJ0aG91c2FuZHNTZXBhcmF0b3IiLCJzeW1ib2xMb2NhdGlvbiIsImN1cnIiLCJ0b2tlbjEiLCJ0b2tlbjIiLCJkZWNpbWFsX3BsYWNlcyIsImRlY2ltYWxfdG9rZW4iLCJ0aG91c2FuZHNfdG9rZW4iLCJjdXJyZW5jeV9sb2NhdGlvbiIsImN1cnJlbmN5X3Rva2VuIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsImZvcm1hdE1vbmV5IiwibiIsImMiLCJkIiwidCIsImlzTmFOIiwiTWF0aCIsImFicyIsInMiLCJTdHJpbmciLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiaiIsInN1YnN0ciIsInNsaWNlIiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsIm9wdGlvbkxhYmVsIiwiY2hpbGRyZW4iLCJvcHRpb25UaXRsZSIsInNwbGl0IiwicmVxdWlyZWQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJpc1NhdGlzZmllZCIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJzZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZGF0ZVN0cmluZyIsIm1hcCIsIngiLCJqb2luIiwiY2hlY2tlZCIsImxhYmVsIiwibGFiZWxzIiwidGl0bGUiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCJzaG93UHJvZHVjdEltYWdlIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJfaXNQbGFpbk9iamVjdCIsImltYWdlIiwibWFpbkltYWdlVXJsIiwidG9vbHMiLCJpbWFnZVNyY3NldCIsImdldFNyY3NldCIsInRoZW1lU2V0dGluZ3MiLCJwcm9kdWN0Z2FsbGVyeV9zaXplIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwic2hvd01lc3NhZ2VCb3giLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwiX2lzTnVtYmVyIiwic3RvY2siLCJoYWxvX3N0b2NrX2xldmVsX2xpbWl0IiwiJHN0b2NrTGVmdFdyYXBwZXIiLCIkc3RvY2tMZWZ0IiwiX2lzT2JqZWN0IiwidXBkYXRlUHJpY2VWaWV3IiwicHJvZHVjdENoZWNrYm94IiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCJwcmljZURhdGEiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwiJGNvbnRhaW5lciIsIiRpbnB1dCIsIiRza3UiLCIkdXBjIiwiJHRleHQiLCIkYnVsa1ByaWNpbmciLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJmb3JtRGF0YSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsImtleSIsIkZpbGUiLCJlIiwiY29uc29sZSIsImdldFByb2R1Y3QiLCJhcnIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJzdHJpbmdpZnkiLCJxdWVyeSIsImN1ckNvZGUiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlbmRlclByb2R1Y3QiLCJjdXJEaXNwbGF5Iiwic3ltYm9sUGxhY2VtZW50IiwiZGVjaW1hbFRva2VuIiwidGhvdXNhbmRzVG9rZW4iLCJoYWxvX2NhcmRfdGl0bGUiLCJwYXRoIiwicmVzdHJpY3RfdG9fbG9naW4iLCJwcmljZXMiLCJwcmljZVJhbmdlIiwibWluIiwibWF4IiwicHJpY2VfcmFuZ2VzIiwicHJpY2VNaW4iLCJwcmljZU1heCIsInByaWNlRGVmIiwicmV0YWlsUHJpY2UiLCJiYXNlUHJpY2UiLCJwcmljZUJhcyIsInByaWNlUmV0IiwiaHRtbF9jYXJkIiwiZW50aXR5SWQiLCJkZWZhdWx0SW1hZ2UiLCJpbWc3MHB4IiwicHJldklkIiwiJHByb2RJY29ucyIsIiRwcm9kV3JhcCIsInJlbW92ZSIsIm5leHRJZCIsIm5leHRMaW5rIiwicHJldkxpbmsiLCJzaXRlIiwicHJvZHVjdHMiLCJlZGdlcyIsImRpc3BsYXkiLCJlbCIsIiRwb3B1cCIsIiRlbCIsIiRvcHRpb25zIiwiZW1wdHkiLCIkcHJvZElkIiwicG9zaXRpb24iLCJvZmZzZXQiLCJjb250YWluZXIiLCJ3aWR0aCIsImNzcyIsInRvcCIsImxlZnQiLCJzd2FsIiwic2Nyb2xsIiwiaF9zdGF0YyIsIm91dGVySGVpZ2h0Iiwic2Nyb2xsVG9wIiwiJHN0aWNreSIsInRvZ2dsZUNsYXNzIiwib25sb2FkIiwiU29ydGFibGUiLCJQYWdlTWFuYWdlciIsIlJldmlldyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlByb2R1Y3REZXRhaWxzIiwidmlkZW9HYWxsZXJ5IiwiY2xhc3NpZnlGb3JtIiwiaGFsb0FkZE9wdGlvbiIsImhhbG9Qcm9kdWN0TG9va2Jvb2siLCJoYWxvQnVuZGxlUHJvZHVjdHMiLCJoYWxvTmV4dFByb2R1Y3RzIiwiaGFsb1N0aWNreUFkZFRvQ2FydCIsImhhbG9Zb3V0dWJlQ2Fyb3VzZWwiLCJoYWxvTm90aWZ5TWUiLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiX3RoaXMiLCJjYWxsIiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwiJHJldmlld0xpbmsiLCIkYnVsa1ByaWNpbmdMaW5rIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMyIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwicHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCJwcm9kdWN0Q3VzdG9tVGFiIiwicHJvZHVjdFRhYlRvZ2dsZSIsImNvbXBhcmVDb2xvcnMiLCJwcm9kdWN0Vmlld0luZm9UYWJzIiwic29sZFByb2R1Y3QiLCJ2aWV3aW5nUHJvZHVjdCIsImNvdW50RG93blByb2R1Y3QiLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCIkcmV2aWV3Rm9ybSIsInJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiYXBwZW5kVG8iLCJzbGlkZURvd24iLCJzbGlkZVVwIiwiJHdyYXBwZXIiLCJudW1iZXJzUHJvZHVjdF90ZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF9wcm9kdWN0cyIsIm51bWJlcnNIb3Vyc190ZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF9ob3VycyIsInNvbGRQcm9kdWN0VGV4dCIsInByb2R1Y3Rfc29sZFByb2R1Y3RfdGV4dCIsInNvbGRQcm9kdWN0VGV4dDIiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzX3RleHQiLCJudW1iZXJzUHJvZHVjdExpc3QiLCJudW1iZXJzUHJvZHVjdEl0ZW0iLCJmbG9vciIsInJhbmRvbSIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwiY291bnREb3duIiwiY291bnREb3duRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2VmdCIsImNvdW50ZG93bmZ1bmN0aW9uIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImNsZWFySW50ZXJ2YWwiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0ckNvdW50RG93biIsInZpZXdlclRleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQiLCJudW1iZXJzVmlld2VyX3RleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlciIsIm51bWJlcnNWaWV3ZXJMaXN0IiwibnVtYmVyc1ZpZXdlckl0ZW0iLCIkc3dhdGNoV3JhcHBlciIsIiRpbWFnZVdyYXBwZXIiLCIkdGV4dFdyYXBwZXIiLCIkdGhpcyIsIiRjb2xvciIsIiRjb2xvcjIiLCIkY29sb3IzIiwiJGltZyIsIiRwYXR0ZXJuIiwiZ2V0RWxlbWVudEJ5SWQiLCJhbmltYXRpb24iLCIkYmxvY2siLCJhbmltYXRlIiwiaGVpZ2h0IiwiX3RoaXMzIiwiJHByb2RXcmFwSWQiLCJkZWZhdWx0Iiwibm9kIiwiQ29sbGFwc2libGVFdmVudHMiLCJmb3JtcyIsIl9kZWZhdWx0Iiwic3VibWl0IiwiJHJldmlld3NDb250ZW50IiwiJGNvbGxhcHNpYmxlIiwiaW5pdExpbmtCaW5kIiwiaW5qZWN0UGFnaW5hdGlvbkxpbmsiLCJjb2xsYXBzZVJldmlld3MiLCIkY29udGVudCIsImNsaWNrIiwiaGFzaCIsIiRuZXh0TGluayIsIiRwcmV2TGluayIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsImNiIiwicmVzdWx0IiwiZW1haWwiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpc0luaXRpYWxpemVkIl0sInNvdXJjZVJvb3QiOiIifQ==
