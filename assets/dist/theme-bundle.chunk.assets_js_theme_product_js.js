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
        (0,_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_7__["default"])(_this3.context, $prodWrapId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFFNkI7QUFFNUUsNkJBQWUsb0NBQVNJLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0VBQ3JDLElBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDRixPQUFPLENBQUNHLFNBQVMsQ0FBQztJQUM1Q0MsVUFBVSxHQUFHQyxDQUFDLENBQUMsd0JBQXdCLENBQUM7SUFDeENDLE9BQU8sR0FBR0QsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO0lBQ3BDRSxXQUFXLEdBQUdELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0VBRXBELElBQU1DLEtBQUssR0FBR2IseURBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFdkMsSUFBSWMsUUFBUSxHQUFHVixPQUFPLENBQUNXLEtBQUs7RUFFNUJDLFVBQVUsQ0FBQyxDQUFDO0VBRVpQLENBQUMsQ0FBQ1EsUUFBUSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsVUFBQUMsS0FBSyxFQUFJO0lBQ3JEQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRXRCLElBQUlDLE9BQU8sR0FBR1osQ0FBQyxDQUFDVSxLQUFLLENBQUNHLGFBQWEsQ0FBQztJQUVwQ2IsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNjLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDLENBQUNHLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDOURmLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDYyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQ0QsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUUxRixJQUFJLENBQUNILE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUNDLFFBQVEsQ0FBQyxTQUFT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QUFWLFlBQUE7QUFBQTtBQUdVLFNBQVM5SCxZQUFZQSxDQUFBLEVBQUc7RUFDbkMsSUFBTXlJLFNBQVMsR0FBRyxlQUFlO0VBQ2pDLElBQU1DLGFBQWEsR0FBR3plLENBQUMsWUFBVXdlLFNBQVMsTUFBRyxDQUFDO0VBRTlDQyxhQUFhLENBQUMxYyxJQUFJLENBQUMsVUFBQ0MsS0FBSyxFQUFFc0MsT0FBTyxFQUFLO0lBQ25DLElBQU1pUSxHQUFHLEdBQUd2VSxDQUFDLENBQUNzRSxPQUFPLENBQUM7SUFDdEIsSUFBTW9hLGFBQWEsR0FBR25LLEdBQUcsQ0FBQ3pRLElBQUksQ0FBQzBhLFNBQVMsQ0FBQyxZQUFZWCxZQUFZO0lBRWpFLElBQUlhLGFBQWEsRUFBRTtNQUNmO0lBQ0o7SUFFQW5LLEdBQUcsQ0FBQ3pRLElBQUksQ0FBQzBhLFNBQVMsRUFBRSxJQUFJWCxZQUFZLENBQUN0SixHQUFHLENBQUMsQ0FBQztFQUM5QyxDQUFDLENBQUM7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9CdW5kbGVQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvTmV4dFByb2R1Y3RzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0TG9va2Jvb2suanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1N0aWNreUFkZFRvQ2FydC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1hbm5pZXMvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9yZXZpZXdzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3ZpZGVvLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IHNob3dBbGVydE1vZGFsLCBNb2RhbEV2ZW50cyB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRoaXNQcm91Y3RJZCA9IHBhcnNlSW50KGNvbnRleHQucHJvZHVjdElkKSxcbiAgICAgICAgJHJlbGF0ZVRhYiA9ICQoJyNoYWxvLXJlbGF0ZWQtcHJvZHVjdHMnKSxcbiAgICAgICAgJGJ1bmRsZSA9ICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpLFxuICAgICAgICAkYnVuZGxlTGlzdCA9ICRidW5kbGUuZmluZCgnLmhhbG8tcHJvZHVjdC1saXN0Jyk7XG5cbiAgICBjb25zdCBtb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF07XG5cbiAgICB2YXIgY3VycmVuY3kgPSBjb250ZXh0Lm1vbmV5O1xuXG4gICAgc2hvd0J1bmRsZSgpO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLXRvZ2dsZS1vcHRpb25zJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLm5vdCgkdGFyZ2V0KS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5ub3QoJHRhcmdldC5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuXG4gICAgICAgIGlmICghJHRhcmdldC5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoJ2lzLWZvY3VzJyk7XG4gICAgICAgICAgICAkdGFyZ2V0Lm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR0YXJnZXQubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLW9wdGlvbi1jbG9zZScsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICgkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgIGlmICgoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5oYWxvLWRldGFpbC1vcHRpb25zJykubGVuZ3RoID09PSAwKSAmJiAoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykubGVuZ3RoID09PSAwKSl7XG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmhhbG8tZGV0YWlsLWNoZWNrYm94JywgZXZlbnQgPT4ge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpZCA9ICR0YXJnZXQuYXR0cignaWQnKS5yZXBsYWNlKCdmYnRfcHJvZHVjdCcsJycpLFxuICAgICAgICAgICAgcHJvZHVjdCA9ICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgaWQgKyAnXCJdJyk7XG5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnOmNoZWNrZWQnKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvZHVjdC5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgICAgICBwcm9kdWN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaWNvbkFkZCcpLnJlbW92ZUNsYXNzKCdoYWxvLXByb2R1Y3QtaWNvbkNoZWNrZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuICAgICAgICAgICAgcHJvZHVjdC5maW5kKCcuaGFsby1wcm9kdWN0LWljb25BZGQnKS5hZGRDbGFzcygnaGFsby1wcm9kdWN0LWljb25DaGVja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2hhbG8tYWRkQWxsJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICRidW5kbGUpO1xuICAgICAgICB2YXIgYXJyUHJvID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLWNoZWNrYm94JykuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodmFsKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgIGFyclByby5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjaGVjayA9IGNoZWNrUHJvZHVjdCgkZm9ybSwgYXJyUHJvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBhcnJQcm8ubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgJGJ1bmRsZS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQoJGZvcm0sIDAsIGFyclBybywgayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnUGxlYXNlIG1ha2Ugc3VyZSBhbGwgb3B0aW9ucyBoYXZlIGJlZW4gZmlsbGVkIGluLic7XG5cbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzaG93QnVuZGxlKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW06ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tYnVuZGxlLXByb2R1Y3RzLXRtcCcsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tYnVuZGxlLXByb2R1Y3RzLW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwcm9kQnVuZGxlSWQgPSBbXSxcbiAgICAgICAgICAgIHRvdGFsQmxvY2sgPSAnJztcblxuICAgICAgICBmaXJzdEl0ZW0oKTtcblxuICAgICAgICAgaWYoJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICB0b3RhbEJsb2NrID0gJzxkaXYgY2xhc3M9XCJoYWxvLXByb2R1Y3QtdG90YWxcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPkxvZyBpbiBmb3IgcHJpY2luZzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0b3RhbEJsb2NrID0gJzxkaXYgY2xhc3M9XCJoYWxvLXByb2R1Y3QtdG90YWxcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1wcmljZVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlRvdGFsOjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgaGFsby1wcm9kdWN0LXRvdGFsLWJ1dHRvblwiIGlkPVwiaGFsby1hZGRBbGxcIiBocmVmPVwiI1wiPkFkZCBBbGwgVG8gQ2FydDwvYT5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgfVxuXG4gICAgICAgICRidW5kbGUuZmluZCgnLmJ1bmRsZS1wcm9kdWN0LXJpZ2h0JykuYXBwZW5kKHRvdGFsQmxvY2spO1xuXG4gICAgICAgICQuZWFjaChjb250ZXh0LnByb2R1Y3RDdXN0b21GaWVsZHMsIGZ1bmN0aW9uKGluZGV4LCBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PSAnX19idW5kbGVpZCcpIHtcbiAgICAgICAgICAgICAgICBwcm9kQnVuZGxlSWQgPSBKU09OLnBhcnNlKCdbJytvYmoudmFsdWUrJ10nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvZEJ1bmRsZUlkID0gJC5ncmVwKHByb2RCdW5kbGVJZCwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT0gdGhpc1Byb3VjdElkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJGJ1bmRsZS5sZW5ndGggPiAwICYmIHByb2RCdW5kbGVJZC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIG51bSA9IDAsXG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xuXG4gICAgICAgICAgICAkcmVsYXRlVGFiLmZpbmQoJy5jYXJkJykuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJcIlxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBJZCA9ICQodmFsKS5kYXRhKCdwcm9kdWN0LWlkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHBJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaW5kZXggPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PSAkcmVsYXRlVGFiLmZpbmQoJy5jYXJkJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJGJ1bmRsZS5sZW5ndGggPiAwICYmIHByb2RCdW5kbGVJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbnVtID0gMCxcbiAgICAgICAgICAgICAgICBsaXN0ID0gW10sXG4gICAgICAgICAgICAgICAgbGlzdEZpbHRlciA9ICQudW5pcXVlKHByb2RCdW5kbGVJZCk7XG5cbiAgICAgICAgICAgICQuZWFjaChsaXN0RmlsdGVyLCAoaW5kZXgsIHZhbCkgPT57XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBcIlwiXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcElkID0gdmFsO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmluZGV4ID09IGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gcHJvZEJ1bmRsZUlkLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpc3QobGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyc3RJdGVtKCl7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9ICRidW5kbGVMaXN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaXRlbUZpcnN0JyksXG4gICAgICAgICAgICBwSWQgPSBmaXJzdEl0ZW0uZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgZm9ybSA9IGZpcnN0SXRlbS5maW5kKCdmb3JtJyksXG4gICAgICAgICAgICBoYXNPcHRpb25zID0gZm9ybS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgsXG4gICAgICAgICAgICBoYXNEZWZhdWx0T3B0aW9ucyA9IGZvcm0uZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocElkLCBmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGZvcm0sIGF0dHJpYnV0ZXNEYXRhKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVWaWV3KGZvcm0sIGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0xpc3QobGlzdCl7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gZWxlbWVudC5kYXRhO1xuXG4gICAgICAgICAgICAkYnVuZGxlTGlzdC5hcHBlbmQocmVzcG9uc2UuaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcHRpb25zLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBJZCA9ICQocmVzcG9uc2UuaXRlbSkuZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgICAgICRmb3JtID0gJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwSWQgKyAnXCJdIGZvcm0nKTtcblxuICAgICAgICAgICAgICAgICRmb3JtLmFwcGVuZChyZXNwb25zZS5vcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkKHJlc3BvbnNlLm9wdGlvbnMpLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgYXR0cmlidXRlc0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdFZhcmlhbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvZHVjdE9wdGlvbnMoKTtcbiAgICAgICAgc2hvd1NsaWNrU2xpZGVyKCRidW5kbGVMaXN0KTtcblxuICAgICAgICBpZighJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkYnVuZGxlLnJlbW92ZUNsYXNzKCdoYWxvLWJsb2NrLWRpc2FibGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93U2xpY2tTbGlkZXIod3JhcCl7XG4gICAgICAgIGlmKHdyYXAubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPScjc2xpY2stYXJyb3ctbmV4dCc+PC91c2U+PC9zdmc+XCIsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J1ByZXZpb3VzIFNsaWRlJz48dXNlIHhsaW5rOmhyZWY9JyNzbGljay1hcnJvdy1wcmV2Jz48L3VzZT48L3N2Zz5cIixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrUHJvZHVjdChmb3JtLCBhcnJQcm8pIHtcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyclByby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGsgPSBhcnJQcm9baV0sXG4gICAgICAgICAgICAgICAgJGZvcm0gPSAkKGZvcm1ba10pO1xuXG4gICAgICAgICAgICBpZiAoJGZvcm0uZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkZm9ybSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQmVmb3JlQWRkKCRhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHZhciBjaGVjayA9IHRydWUsXG4gICAgICAgICAgICBhdHQgPSBcIlwiO1xuXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ2lucHV0OnRleHQsIGlucHV0OnBhc3N3b3JkLCBpbnB1dDpmaWxlLCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoISQoZWxlbWVudCkucHJvcCgncmVxdWlyZWQnKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdzZWxlY3QnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEkKGVsZW1lbnQpLnByb3AoJ3JlcXVpcmVkJykpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLnZhbCgpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6cmFkaW8sIGlucHV0OmNoZWNrYm94JykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChhdHQgIT0gJChlbGVtZW50KS5hdHRyKFwibmFtZVwiKSkge1xuICAgICAgICAgICAgICAgIGF0dCA9ICQoZWxlbWVudCkuYXR0cihcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgaWYgKCEkKGVsZW1lbnQpLnByb3AoJ3JlcXVpcmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0KGZvcm0sIGksIGFyclAsIGspIHtcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvZCA9IGFyclBbaV07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm1bcHJvZF0pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgICAgICBhbGVydCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgayA9IGsgLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpKys7XG5cbiAgICAgICAgICAgIGlmIChpID49IGFyclAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJGJ1bmRsZS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICBtb2RhbC4kbW9kYWwucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnbW9kYWwgbW9kYWwtLXByZXZpZXcgbW9kYWwtLXByZXZpZXdNaW5pIG1vZGFsLS1wcmV2aWV3TWluaTInKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5vcGVuKHsgc2l6ZTogJ3NtYWxsJyB9KTtcblxuICAgICAgICAgICAgICAgIGlmKCQoXCIubW9kYWwtYmFja2dyb3VuZDp2aXNpYmxlXCIpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYmFja2dyb3VuZDp2aXNpYmxlJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZTtcblxuICAgICAgICAgICAgICAgIGlmKGsgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSAnPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbC1oZWFkZXItdGl0bGVcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rLCAnK2srJyBpdGVtIHdhcyBhZGRlZCB0byB5b3VyIGNhcnQuIFdoYXRcXCdzIG5leHQ/XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXdDYXJ0IHByZXZpZXdDYXJ0MlwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwcmV2aWV3Q2FydENoZWNrb3V0IHByZXZpZXdDYXJ0Q2hlY2tvdXQyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jaGVja291dC5waHBcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2VlZCBUbyBDaGVja291dFxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByZXZpZXdDYXJ0Q2hlY2tvdXQtYXV0b0Nsb3NlXCIgZGF0YS1hdXRvLWNsb3NlPVwiMTBcIj5BdXRvIGNsb3NlIGFmdGVyIDxzcGFuIGNsYXNzPVwiY291bnRcIj48L3NwYW4+czwvcD5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9ICc8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsLWhlYWRlci10aXRsZVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2ssICcraysnIGl0ZW0gd2FzIGFkZGVkIHRvIHlvdXIgY2FydC4gV2hhdFxcJ3MgbmV4dD9cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlld0NhcnQgcHJldmlld0NhcnQyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInByZXZpZXdDYXJ0Q2hlY2tvdXQgcHJldmlld0NhcnRDaGVja291dDJcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByZXZpZXdDYXJ0Q2hlY2tvdXQtdGV4dFwiPlNvcnJ5ISBXZSBkb25cXCd0IGhhdmUgZW5vdWdoIHByb2R1Y3QgZm9yIHlvdXIgc2VsZWN0aW9uITwvcD5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByZXZpZXdDYXJ0Q2hlY2tvdXQtYXV0b0Nsb3NlXCIgZGF0YS1hdXRvLWNsb3NlPVwiMTBcIj5BdXRvIGNsb3NlIGFmdGVyIDxzcGFuIGNsYXNzPVwiY291bnRcIj48L3NwYW4+czwvcD5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHBhcnNlSW50KCRib2R5LmZpbmQoJy5jYXJ0RGVza3RvcCAuY2FydC1xdWFudGl0eScpLnRleHQoKSkgKyBrO1xuXG4gICAgICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkVG9DYXJ0KGZvcm0sIGksIGFyclAsIGspO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b3RhbFByaWNlKCkge1xuICAgICAgICB2YXIgdG90YWwgPSAwLFxuICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgc3ltYm9sQ2hhbmdlLFxuICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyxcbiAgICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IsXG4gICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IsXG4gICAgICAgICAgICBzeW1ib2xMb2NhdGlvbixcbiAgICAgICAgICAgIGN1cnIsXG4gICAgICAgICAgICB0b2tlbjEsXG4gICAgICAgICAgICB0b2tlbjIsXG4gICAgICAgICAgICBsZW5ndGg7XG5cbiAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGN1cnJlbmN5LmRlY2ltYWxfcGxhY2VzO1xuICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gY3VycmVuY3kuZGVjaW1hbF90b2tlbjtcbiAgICAgICAgdGhvdXNhbmRzU2VwYXJhdG9yID0gY3VycmVuY3kudGhvdXNhbmRzX3Rva2VuO1xuICAgICAgICBzeW1ib2xMb2NhdGlvbiA9IGN1cnJlbmN5LmN1cnJlbmN5X2xvY2F0aW9uO1xuICAgICAgICBzeW1ib2wgPSBjdXJyZW5jeS5jdXJyZW5jeV90b2tlbjtcblxuICAgICAgICAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW0uaXNDaGVja2VkJykuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgICAgICAgdmFyIHByaWNlID0gcGFyc2VGbG9hdCgkKHZhbCkuZmluZCgnW2RhdGEtcHJpY2UtdmFsdWVdJykuYXR0cignZGF0YS1wcmljZS12YWx1ZScpKTtcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwcmljZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCQoJy5wcm9kdWN0Vmlldy1wcm9kdWN0IC5wcm9kdWN0Vmlldy1wcmljZSA+IC5wcmljZS1zZWN0aW9uID4gLnByaWNlLnByaWNlLS13aXRoVGF4JywgJHNjb3BlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnIgPSAkKCcucHJvZHVjdFZpZXctcHJvZHVjdCAucHJvZHVjdFZpZXctcHJpY2UgPiAucHJpY2Utc2VjdGlvbiA+IC5wcmljZS5wcmljZS0td2l0aFRheCcsICRzY29wZSkuZGF0YSgndmFsdWUtcHJpY2UnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnIgPSAkKCcucHJvZHVjdFZpZXctcHJvZHVjdCAucHJvZHVjdFZpZXctcHJpY2UgPiAucHJpY2Utc2VjdGlvbiA+IC5wcmljZS5wcmljZS0td2l0aG91dFRheCcsICRzY29wZSkuZGF0YSgndmFsdWUtcHJpY2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN5bWJvbENoYW5nZSA9IGN1cnIucmVwbGFjZSgvWzAtOV0vZywgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIikucmVwbGFjZShcIixcIiwgXCJcIik7XG5cbiAgICAgICAgaWYoc3ltYm9sICE9IHN5bWJvbENoYW5nZSl7XG4gICAgICAgICAgICBzeW1ib2wgPSBzeW1ib2xDaGFuZ2U7XG4gICAgICAgICAgICB0b2tlbjEgPSAoY3Vyci5pbmRleE9mKCcuJykpO1xuICAgICAgICAgICAgdG9rZW4yID0gKGN1cnIuaW5kZXhPZignLCcpKTtcbiAgICAgICAgICAgIGxlbmd0aCA9IGN1cnIubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgaWYgKGN1cnIuaW5kZXhPZihzeW1ib2wpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sTG9jYXRpb24gPSBjdXJyLmluZGV4T2Yoc3ltYm9sKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuMSA8IHRva2VuMikge1xuICAgICAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvciA9ICcuJztcbiAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gJywnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbExvY2F0aW9uID09IDAgfHwgc3ltYm9sTG9jYXRpb24gPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGxlbmd0aCAtIHRva2VuMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzID0gbGVuZ3RoIC0gdG9rZW4yIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvciA9ICcsJztcbiAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gJy4nO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2xMb2NhdGlvbiA9PSAwIHx8IHN5bWJvbExvY2F0aW9uID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBsZW5ndGggLSB0b2tlbjE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGxlbmd0aCAtIHRva2VuMSAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodG90YWwgPT0gMCl7XG4gICAgICAgICAgICAkYnVuZGxlLmZpbmQoJyNoYWxvLWFkZEFsbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICRidW5kbGUuZmluZCgnI2hhbG8tYWRkQWxsJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbCA9IGZvcm1hdE1vbmV5KHRvdGFsLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsU2VwYXJhdG9yLCB0aG91c2FuZHNTZXBhcmF0b3IpO1xuXG4gICAgICAgIGlmIChzeW1ib2xMb2NhdGlvbiA9PSBcImxlZnRcIiB8fCBzeW1ib2xMb2NhdGlvbiA9PSAwKXtcbiAgICAgICAgICAgIHRvdGFsID0gc3ltYm9sICsgdG90YWw7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBzeW1ib2w7XG4gICAgICAgIH1cblxuICAgICAgICAkYnVuZGxlLmZpbmQoJy5oYWxvLXByb2R1Y3QtdG90YWwgLnByaWNlJykuaHRtbCh0b3RhbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0TW9uZXkobiwgYywgZCwgdCkge1xuICAgICAgICB2YXIgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcbiAgICAgICAgICAgIHQgPSB0ID09IHVuZGVmaW5lZCA/IFwiLFwiIDogdCxcbiAgICAgICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xuXG4gICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zKCkge1xuICAgICAgICBpZighJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkYnVuZGxlKSxcbiAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XG4gICAgICAgICAgICBzZXRQcm9kdWN0VmFyaWFudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQobGFiZWwudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ2lkJykgPT09ICdmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCEkYnVuZGxlLmhhc0NsYXNzKCdoYWxvLWJ1bmRsZS1sb2dpbicpKXtcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJHNjb3BlLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsICRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1Byb2R1Y3RJbWFnZShwcm9kdWN0SWQsIGRhdGEpIHtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhLmltYWdlKSkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGRhdGEuaW1hZ2UuZGF0YSwgeyAnMXgnOiBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdGdhbGxlcnlfc2l6ZSB9LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyY3NldCc6IG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9ICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmZpbmQoJ2ltZycpLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnc3Jjc2V0JzogbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgICAgICdkYXRhLXNyY3NldCc6ICQodGhpcykuYXR0cignc3Jjc2V0JyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoJHNjb3BlLCBkYXRhLCBjb250ZW50ID0gbnVsbCkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSBnZXRWaWV3TW9kZWwoJHNjb3BlKTtcblxuICAgICAgICBzaG93TWVzc2FnZUJveChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UsICRzY29wZSk7XG5cbiAgICAgICAgaWYgKF8uaXNOdW1iZXIoZGF0YS5zdG9jaykpIHtcbiAgICAgICAgICAgIGlmKChkYXRhLnN0b2NrIDw9IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3N0b2NrX2xldmVsX2xpbWl0KSkgJiYgKGRhdGEuc3RvY2sgPiAwKSkge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0V3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLiRzdG9ja0xlZnRXcmFwcGVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLnByaWNlKSkge1xuICAgICAgICAgICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJHNjb3BlKS52YWwoKSxcbiAgICAgICAgICAgIHByb2R1Y3QgPSAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKSxcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveCA9IHByb2R1Y3QuZmluZCgnLmhhbG8tZGV0YWlsLWNoZWNrYm94Jyk7XG5cbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgIHByb2R1Y3QucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCBoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgaWYgKCRzY29wZS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUygkc2NvcGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCksXG4gICAgICAgICAgICBwcm9kdWN0ID0gJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJyksXG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3ggPSBwcm9kdWN0LmZpbmQoJy5oYWxvLWRldGFpbC1jaGVja2JveCcpO1xuXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICBwcm9kdWN0LnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQgaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRzY29wZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VEYXRhOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnW2RhdGEtcHJpY2UtdmFsdWVdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0OiAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXG4gICAgICAgICAgICAkc3RvY2tMZWZ0OiAkKCdbZGF0YS1zdG9jay1sZWZ0XScsICRzY29wZSksXG4gICAgICAgICAgICAkc3RvY2tMZWZ0V3JhcHBlcjogJCgnLnByb2R1Y3RWaWV3LW9wdGlvbnNTdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICBzdG9jazoge1xuICAgICAgICAgICAgICAgICRjb250YWluZXI6ICQoJy5mb3JtLWZpZWxkLS1zdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHNrdTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJyksXG4gICAgICAgICAgICAkdXBjOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nKSxcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd01lc3NhZ2VCb3gobWVzc2FnZSwgJHNjb3BlKSB7XG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnLCAkc2NvcGUpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4Lmh0bWwocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZURhdGEuJGRpdi5hdHRyKCdkYXRhLXByaWNlLXZhbHVlJywgcHJpY2Uud2l0aF90YXgudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VEYXRhLiRkaXYuYXR0cignZGF0YS1wcmljZS12YWx1ZScsIHByaWNlLndpdGhvdXRfdGF4LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGaWxlICYmICF2YWwubmFtZSAmJiAhdmFsLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICBpZiAoJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cycpLmxlbmd0aCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGNvbnRleHQudG9rZW47XG4gICAgICAgIGNvbnN0IGN1ckNvZGUgPSAkKCcuYm9keScpLmRhdGEoJ2N1cnJlbmN5LWNvZGUnKTtcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMnKS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICBuZXh0SWQgPSBwcm9kdWN0SWQgKyAxLFxuICAgICAgICAgICAgcHJldklkID0gcHJvZHVjdElkIC0gMSxcbiAgICAgICAgICAgIG5leHRMaW5rLCBwcmV2TGluaywgbGlzdDtcblxuICAgICAgICBjb25zdCAkcHJvZFdyYXAgPSAkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzIC5uZXh0LXByZXYtbW9kYWwnKSxcbiAgICAgICAgXHQkcHJvZEljb25zID0gJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cyAubmV4dC1wcmV2LWljb25zJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0UHJvZHVjdChhcnIpIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgcXVlcnkgTXlRdWVyeSB7XG4gICAgICAgICAgICAgICAgICAgIHNpdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMgKGVudGl0eUlkczogW2ArYXJyK2BdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeSAoY3VycmVuY3lDb2RlOiBgK2N1ckNvZGUrYCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sUGxhY2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZHNUb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyYWdtZW50IFByb2R1Y3RGaWVsZHMgb24gUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nNzBweDogdXJsKHdpZHRoOiA3MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcmljZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH0pLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocHJldklkICE9IHVuZGVmaW5lZCAmJiBuZXh0SWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsaXN0ID0gW3ByZXZJZCwgbmV4dElkXTtcblxuICAgICAgICAgICAgZ2V0UHJvZHVjdChsaXN0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHJlbmRlclByb2R1Y3QoZGF0YS5zaXRlLnByb2R1Y3RzLmVkZ2VzLCBkYXRhLnNpdGUuY3VycmVuY3kuZGlzcGxheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdE1vbmV5KG4sIGMsIGQsIHQpIHtcbiAgICAgICAgICAgIHZhciBjID0gaXNOYU4oYyA9IE1hdGguYWJzKGMpKSA/IDIgOiBjLFxuICAgICAgICAgICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcbiAgICAgICAgICAgICAgICB0ID0gdCA9PSB1bmRlZmluZWQgPyBcIixcIiA6IHQsXG4gICAgICAgICAgICAgICAgcyA9IG4gPCAwID8gXCItXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgICAgICAgICAgaiA9IChqID0gaS5sZW5ndGgpID4gMyA/IGogJSAzIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIHMgKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdCA6IFwiXCIpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHQpICsgKGMgPyBkICsgTWF0aC5hYnMobiAtIGkpLnRvRml4ZWQoYykuc2xpY2UoMikgOiBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlclByb2R1Y3QocHJvZHVjdCwgY3VyRGlzcGxheSkge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJC5lYWNoKHByb2R1Y3QsIChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZWxlbWVudC5wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sID0gY3VyRGlzcGxheS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xQbGFjZW1lbnQgPSBjdXJEaXNwbGF5LnN5bWJvbFBsYWNlbWVudC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFRva2VuID0gY3VyRGlzcGxheS5kZWNpbWFsVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzID0gY3VyRGlzcGxheS5kZWNpbWFsUGxhY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW4gPSBjdXJEaXNwbGF5LnRob3VzYW5kc1Rva2VuO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUsIHByaWNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19jYXJkX3RpdGxlID09ICdlbGxpcHNpcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gJzxhIGhyZWY9XCInK2l0ZW0ucGF0aCsnXCIgY2xhc3M9XCJjYXJkLWVsbGlwc2lzXCIgc3R5bGU9XCItd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1wiPicraXRlbS5uYW1lKyc8L2E+JzsgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICc8YSBocmVmPVwiJytpdGVtLnBhdGgrJ1wiPicraXRlbS5uYW1lKyc8L2E+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcuYm9keScpLmhhc0NsYXNzKCdpcy1sb2dpbicpIHx8IGNvbnRleHQudGhlbWVTZXR0aW5ncy5yZXN0cmljdF90b19sb2dpbiAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWluLnZhbHVlIDwgaXRlbS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWUgJiYgY29udGV4dC50aGVtZVNldHRpbmdzLnByaWNlX3Jhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlTWluID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWluLnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VNYXggPSAoc3ltYm9sUGxhY2VtZW50ID09IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIikgKyAoZm9ybWF0TW9uZXkoaXRlbS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggcHJpY2Utbm9uZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VNaW4rJyAtICcrcHJpY2VNYXgrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRGVmID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnByaWNlLnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmljZXMucmV0YWlsUHJpY2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmljZXMuYmFzZVByaWNlLnZhbHVlID4gaXRlbS5wcmljZXMucHJpY2UudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlQmFzID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLmJhc2VQcmljZS52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+JytwcmljZUJhcysnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VEZWYrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheCBwcmljZS1ub25lXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLnJldGFpbFByaWNlLnZhbHVlID4gaXRlbS5wcmljZXMucHJpY2UudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUmV0ID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnJldGFpbFByaWNlLnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPicrcHJpY2VSZXQrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggcHJpY2Utbm9uZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj48L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8cCB0cmFuc2xhdGU+TG9nIGluIGZvciBwcmljaW5nPC9wPic7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sX2NhcmQgPSAnPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1jdXN0b21cIiBkYXRhLXByb2R1Y3QtaWQ9XCInK2l0ZW0uZW50aXR5SWQrJ1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2VcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNhcmQtbGlua1wiIGhyZWY9XCInK2l0ZW0ucGF0aCsnXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJytpdGVtLmRlZmF1bHRJbWFnZS5pbWc3MHB4KydcIiBhbHQ9XCInK2l0ZW0ubmFtZSsnXCIgdGl0bGU9XCInK2l0ZW0ubmFtZSsnXCIgLz5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+Jyt0aXRsZSsnPC9oND5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1wcmljZVwiIGRhdGEtdGVzdC1pbmZvLXR5cGU9XCJwcmljZVwiPicrcHJpY2UrJzwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZW50aXR5SWQgPT0gcHJldklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wYXRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5wcmV2LWljb24nKS5hdHRyKCdocmVmJywgaXRlbS5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5wcmV2LWljb24nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5maW5kKCcjcHJldi1wcm9kdWN0LW1vZGFsJykuYXBwZW5kKGh0bWxfY2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLnByZXYtaWNvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5maW5kKCcjcHJldi1wcm9kdWN0LW1vZGFsJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZW50aXR5SWQgPT0gbmV4dElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLnBhdGggIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcubmV4dC1pY29uJykuYXR0cignaHJlZicsIGl0ZW0ucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcubmV4dC1pY29uJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLmFwcGVuZChodG1sX2NhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5maW5kKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kSWNvbnMub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0JHByb2RXcmFwLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRwcm9kV3JhcC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5uZXh0LWljb24nLCAkcHJvZEljb25zKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHQkKCcjcHJldi1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgXHQkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnByZXYtaWNvbicsICRwcm9kSWNvbnMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICBcdCQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICBcdCQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcHJvZFdyYXAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0JHByb2RXcmFwLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHQkcHJvZFdyYXAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCBlbCkge1xuICAgIHZhciAkcG9wdXAgPSAkKCcubG9va2Jvb2stcG9wdXAnKTtcbiAgICB2YXIgJGVsID0gZWw7XG5cbiAgICBjb25zdCAkb3B0aW9ucyA9IHtcbiAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3RzL2hhbG8tbG9va2Jvb2stdG1wJ1xuICAgIH07XG5cbiAgICAkZWwuZmluZCgnLml0ZW0gLml0ZW0tcG9pbnQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnaXMtb3BlbicpLmVtcHR5KCk7XG5cbiAgICAgICAgdmFyICRwcm9kSWQgPSAkKGV2ZW50LnRhcmdldCkuZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSAkKGV2ZW50LnRhcmdldCkub2Zmc2V0KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSAkZWwub2Zmc2V0KCk7XG5cbiAgICAgICAgaWYoJHByb2RJZCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZCgkcHJvZElkLCAkb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHBvcHVwLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA1NTEpIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCAtIDEwMCwgJ2xlZnQnOiBwb3NpdGlvbi5sZWZ0IC0gY29udGFpbmVyLmxlZnQgKyAzMH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCArIDE1LCAnbGVmdCc6IDE1fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2xvc2UtcHJvZHVjdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoJHBvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZigkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgICBpZigoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJHBvcHVwKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLml0ZW0gLml0ZW0tcG9pbnQnKS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSwgY29udGV4dCl7XG4gICAgaWYgKCQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnKS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnKS5vZmZzZXQoKSxcbiAgICAgICAgICAgIGhfc3RhdGMgPSAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jykub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgJHN0aWNreSA9ICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKTtcblxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsVG9wICsgNDAwKXtcblxuICAgICAgICAgICAgICAgIGlmKCEkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuaGFzQ2xhc3MoJ3Nob3dfc3RpY2t5Jykpe1xuICAgICAgICAgICAgICAgICAgICAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuYWRkQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1hc2stYW4tZXhwZXJ0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgNDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWFzay1hbi1leHBlcnQnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyAxMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWFzay1hbi1leHBlcnQnKS5jc3MoXCJib3R0b21cIiwgMTUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykucmVtb3ZlQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XG4gICAgICAgICAgICAgICAgJCgnLnBvcC11cC1vcHRpb24nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3BlblBvcHVwT3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAkKCcuY2hvb3NlX29wdGlvbnNfYWRkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsIDMwKTtcblxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU1MCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1hc2stYW4tZXhwZXJ0JykuY3NzKFwiYm90dG9tXCIsIDMwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1hc2stYW4tZXhwZXJ0JykuY3NzKFwiYm90dG9tXCIsIDE1MCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCcuY2hvb3NlX29wdGlvbnNfYWRkJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ29wZW5Qb3B1cE9wdGlvbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCcucG9wLXVwLW9wdGlvbiAuYnRuLWNsb3NlJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgJChcIi5wb3AtdXAtb3B0aW9uXCIpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5Qb3B1cE9wdGlvbicpO1xuICAgICAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLnN0aWNreS1wcm9kdWN0LWV4cGFuZCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGlmKCQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5oYXNDbGFzcygnc2hvdy1mdWxsLXN0aWNreScpKSB7XG4gICAgICAgICAgICAgICAgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLnJlbW92ZUNsYXNzKCdzaG93LWZ1bGwtc3RpY2t5Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5hZGRDbGFzcygnc2hvdy1mdWxsLXN0aWNreScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbFRvcCArIDQwMCl7XG4gICAgICAgICAgICAgICAgaWYoISQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5oYXNDbGFzcygnc2hvd19zdGlja3knKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5hZGRDbGFzcygnc2hvd19zdGlja3knKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA1NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDQwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWFzay1hbi1leHBlcnQnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYXNrLWFuLWV4cGVydCcpLmNzcyhcImJvdHRvbVwiLCAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jykub3V0ZXJIZWlnaHQoKSArIDEzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tYXNrLWFuLWV4cGVydCcpLmNzcyhcImJvdHRvbVwiLCAxNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IFNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnO1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbiBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RDYXJkJztcbmltcG9ydCBoYWxvUHJvZHVjdExvb2tib29rIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvUHJvZHVjdExvb2tib29rJztcbmltcG9ydCBoYWxvQnVuZGxlUHJvZHVjdHMgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9CdW5kbGVQcm9kdWN0cyc7XG5pbXBvcnQgaGFsb05leHRQcm9kdWN0cyBmcm9tICcuL2hhbG90aGVtZXMvaGFsb05leHRQcm9kdWN0cyc7XG5pbXBvcnQgaGFsb1N0aWNreUFkZFRvQ2FydCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1N0aWNreUFkZFRvQ2FydCc7XG5pbXBvcnQgaGFsb1lvdXR1YmVDYXJvdXNlbCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1ZpZGVvJztcbmltcG9ydCBoYWxvTm90aWZ5TWUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Ob3RpZnlNZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLWJ1bGstcHJpY2luZ1wiXScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdEN1c3RvbVRhYigpO1xuICAgICAgICB0aGlzLnByb2R1Y3RUYWJUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5jb21wYXJlQ29sb3JzKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdFZpZXdJbmZvVGFicygpO1xuICAgICAgICB0aGlzLnNvbGRQcm9kdWN0KCQoJy5wcm9kdWN0Vmlldy1zb2xkUHJvZHVjdCcpKTtcbiAgICAgICAgdGhpcy52aWV3aW5nUHJvZHVjdCgkKCcucHJvZHVjdFZpZXctVmlld2luZ1Byb2R1Y3QnKSk7XG4gICAgICAgIHRoaXMuY291bnREb3duUHJvZHVjdCgkKCcucHJvZHVjdFZpZXctY291bnREb3duJykpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpO1xuICAgICAgICBcbiAgICAgICAgaGFsb05leHRQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvU3RpY2t5QWRkVG9DYXJ0KCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvUHJvZHVjdExvb2tib29rKHRoaXMuY29udGV4dCwgJCgnLnByb2R1Y3RWaWV3LWxvb2tib29rJykpO1xuICAgICAgICBoYWxvQnVuZGxlUHJvZHVjdHMoJCgnLnByb2R1Y3RWaWV3LXNsaWNrJyksIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGhhbG9Ob3RpZnlNZSgkKCcucHJvZHVjdFZpZXctc2xpY2snKSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1lvdXR1YmVDYXJvdXNlbCgkKCcucHJvZHVjdFZpZXctc2xpY2sgW2RhdGEtc2xpY2tdJykpO1xuXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xuICAgICAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KCRyZXZpZXdGb3JtKTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcmV2aWV3Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRyZXZpZXdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBidWxrUHJpY2luZ0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjYnVsa19wcmljaW5nJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2R1Y3RDdXN0b21UYWIoKXtcbiAgICAgICAgaWYoJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIFtkYXRhLWN1c3RvbS10YWJdJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24gW2RhdGEtY3VzdG9tLXRhYl0nKS5hcHBlbmRUbygnI2hhbG8tY3VzdG9tLXRhYiAuY2FyZC1ib2R5Jyk7XG4gICAgICAgICAgICAkKCcjaGFsby1jdXN0b20tdGFiJykucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1zaG9ydERlc2MgW2RhdGEtY3VzdG9tLXRhYl0nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJyNoYWxvLXByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIC5wcm9kdWN0Vmlldy10YWJzIC5jYXJkLWJvZHknKS5hZGRDbGFzcygnaGFzLWN1c3RvbVRhYicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI2hhbG8tcHJvZHVjdFZpZXctZGVzY3JpcHRpb24gLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQud2FycmFudHkgLnRpdGxlJykuYWRkQ2xhc3MoJ25vLWN1c3RvbVRhYicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvZHVjdFRhYlRvZ2dsZSgpe1xuICAgICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZCAudGl0bGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy10YWJzIC5jYXJkIC50aXRsZScpLm5vdCgkdGFyZ2V0KS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG5cbiAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT57XG4gICAgICAgICAgICAgICAgaWYoJCgnLnRpdGxlJywgZWxlbWVudCkuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZURvd24oXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZVVwKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQ6bnRoLWNoaWxkKDEpIC50aXRsZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuXG4gICAgc29sZFByb2R1Y3QoJHdyYXBwZXIpIHtcbiAgICAgICAgaWYoJHdyYXBwZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0X3RleHQgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzLFxuICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc190ZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9ob3VycyxcbiAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X3RleHQsXG4gICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0MiA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dDtcblxuICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0TGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1Byb2R1Y3RfdGV4dCArIFwiXVwiKSwgXG4gICAgICAgICAgICAgICAgbnVtYmVyc1Byb2R1Y3RJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzUHJvZHVjdExpc3QubGVuZ3RoKSksXG4gICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzTGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc0hvdXJzX3RleHQgKyBcIl1cIiksXG4gICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzSXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc0hvdXJzTGlzdC5sZW5ndGgpKTtcbiAgICAgICAgIFxuICAgICAgICAgICAgJHdyYXBwZXIuaHRtbCgnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1maXJlXCIvPjwvc3ZnPjxzcGFuIGNsYXNzPVwidGV4dFwiPicgKyBudW1iZXJzUHJvZHVjdExpc3RbbnVtYmVyc1Byb2R1Y3RJdGVtXSArIFwiIFwiICsgc29sZFByb2R1Y3RUZXh0ICsgXCIgXCIgKyBudW1iZXJzSG91cnNMaXN0W251bWJlcnNIb3Vyc0l0ZW1dICsgXCIgXCIgKyBzb2xkUHJvZHVjdFRleHQyICsgJzwvc3Bhbj4nKTtcbiAgICAgICAgICAgICR3cmFwcGVyLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvdW50RG93blByb2R1Y3QoJHdyYXBwZXIpIHtcbiAgICAgICAgaWYoJHdyYXBwZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGNvdW50RG93biA9ICR3cmFwcGVyLmRhdGEoJ2NvdW50ZG93bicpLFxuICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICBzZWZ0ID0gJHdyYXBwZXI7XG5cbiAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xuXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bmZ1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc2VmdC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJDb3VudERvd24gPSAnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1iZWxsXCIvPjwvc3ZnPjxzcGFuIGNsYXNzPVwidGV4dFwiPjxzcGFuPkxpbWl0ZWQgdGltZSBvZmZlciwgZW5kIGluOjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+JytkYXlzKydkIDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+Jytob3VycysnaCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrbWludXRlcysnbSA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrc2Vjb25kcysnczwvc3Bhbj4nO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlld2luZ1Byb2R1Y3QoJHdyYXBwZXIpIHtcbiAgICAgICAgaWYoJHdyYXBwZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHZpZXdlclRleHQgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQsXG4gICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlcl90ZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF92aWV3ZXIsXG4gICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlckxpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNWaWV3ZXJfdGV4dCArIFwiXVwiKTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBudW1iZXJzVmlld2VySXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc1ZpZXdlckxpc3QubGVuZ3RoKSk7XG5cbiAgICAgICAgICAgICAgICAkd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWV5ZVwiLz48L3N2Zz4nICsgbnVtYmVyc1ZpZXdlckxpc3RbbnVtYmVyc1ZpZXdlckl0ZW1dICsgXCIgXCIgKyB2aWV3ZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpLnNob3coKTtcbiAgICAgICAgICAgIH0sIDEwMDAwKTsgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGFyZUNvbG9ycygpe1xuICAgICAgICBjb25zdCAkc3dhdGNoV3JhcHBlciA9ICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtc3dhdGNoJyksXG4gICAgICAgICAgICAkaW1hZ2VXcmFwcGVyID0gJCgnLmhhbG8tY29tcGFyZUNvbG9ycy1pbWFnZScpLFxuICAgICAgICAgICAgJHRleHRXcmFwcGVyID0gJCgnLmhhbG8tY29tcGFyZUNvbG9ycy10ZXh0Jyk7XG5cbiAgICAgICAgJCgnLmZvcm0tb3B0aW9uJywgJHN3YXRjaFdyYXBwZXIpLm9uKCdjbGljaycsICBldmVudCA9PiB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAkdGhpcy50b2dnbGVDbGFzcygnc2hvdy1jb2xvcicpO1xuXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudCcpLmF0dHIoJ3RpdGxlJyksXG4gICAgICAgICAgICAgICAgaWQgPSAkdGhpcy5kYXRhKCdwcm9kdWN0LXN3YXRjaC12YWx1ZScpLFxuICAgICAgICAgICAgICAgICRjb2xvciwgJGNvbG9yMiwgJGNvbG9yMywgJGltZywgJHBhdHRlcm47XG5cbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnc2hvdy1jb2xvcicpKXtcbiAgICAgICAgICAgICAgICBpZigkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3InKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IgPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3InKS5hdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZVdyYXBwZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLWNvbG9yIGl0ZW0tJytpZCsnXCI+PHNwYW4gY2xhc3M9XCJjb2xvclwiIHN0eWxlPVwiJyskY29sb3IrJztcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPicrdGl0bGUrJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMicpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvciA9ICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjIgc3BhbjpudGgtY2hpbGQoMSknKS5hdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IyID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMiBzcGFuOm50aC1jaGlsZCgyKScpLmF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tY29tcGFyZUNvbG9ycy1pbWFnZScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1jb2xvciBpdGVtLScraWQrJ1wiPjxzcGFuIGNsYXNzPVwiY29sb3IgY29sb3IyXCI+PHNwYW4gc3R5bGU9XCInKyRjb2xvcisnO1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cIicrJGNvbG9yMisnO1wiPjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPicrdGl0bGUrJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMycpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvciA9ICAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IzIHNwYW46bnRoLWNoaWxkKDEpJykuYXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yMiA9ICAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IzIHNwYW46bnRoLWNoaWxkKDIpJykuYXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yMyA9ICAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IzIHNwYW46bnRoLWNoaWxkKDMpJykuYXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAkaW1hZ2VXcmFwcGVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1jb2xvciBpdGVtLScraWQrJ1wiPjxzcGFuIGNsYXNzPVwiY29sb3IgY29sb3IzXCI+PHNwYW4gc3R5bGU9XCInKyRjb2xvcisnO1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cIicrJGNvbG9yMisnO1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cIicrJGNvbG9yMysnO1wiPjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPicrdGl0bGUrJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm4nKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAkaW1nID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm4nKS5hdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAkcGF0dGVybiA9ICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuJykuYXR0cignZGF0YS1wYXR0ZXJuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGltYWdlV3JhcHBlci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tcGFydGVybiBpdGVtLScraWQrJ1wiPjxzcGFuIGNsYXNzPVwiaW1hZ2VcIj48aW1nIHNyYz0nKyRwYXR0ZXJuKycgYWx0PScrdGl0bGUrJyB0aXRsZT0nK3RpdGxlKyc+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICQoJy5pdGVtLScraWQrJycsICRpbWFnZVdyYXBwZXIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZigkaW1hZ2VXcmFwcGVyLmNoaWxkcmVuKCkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgJHRleHRXcmFwcGVyLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkdGV4dFdyYXBwZXIuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gMTAyNSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvci1zd2F0Y2gtaW1hZ2UnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXcgU29ydGFibGUoZWwsIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxNTBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvZHVjdFZpZXdJbmZvVGFicygpe1xuICAgICAgICAkKCcucHJvZHVjdFZpZXctaW5mb1RhYnMgLnByb2R1Y3RWaWV3LWluZm9UYWIgYScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciAkYmxvY2sgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkYmxvY2spLm9mZnNldCgpLnRvcCAtICQoJy5oZWFkZXInKS5oZWlnaHQoKSxcbiAgICAgICAgICAgIH0sIDcwMCk7XG5cbiAgICAgICAgICAgIGlmKCRibG9jayA9PSAnI2hhbG8tcHJvZHVjdFZpZXctZGVzY3JpcHRpb24nKXtcbiAgICAgICAgICAgICAgICBpZighJCgnLnByb2R1Y3RWaWV3LXRhYnMgLmNhcmQ6bnRoLWNoaWxkKDEpIC50aXRsZScpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy10YWJzIC5jYXJkOm50aC1jaGlsZCgxKSAudGl0bGUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LW1vcmVEZXNjIGEnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCcjaGFsby1wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbicpLm9mZnNldCgpLnRvcCAtICQoJy5oZWFkZXInKS5oZWlnaHQoKSxcbiAgICAgICAgICAgIH0sIDcwMCk7XG5cbiAgICAgICAgICAgIGlmKCEkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZDpudGgtY2hpbGQoMSkgLnRpdGxlJykuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctdGFicyAuY2FyZDpudGgtY2hpbGQoMSkgLnRpdGxlJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKCl7XG4gICAgICAgIGlmKCQoJy5wcm9kdWN0Q2Fyb3VzZWwnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Q2Fyb3VzZWwnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24odGhpcy5jb250ZXh0LCAkcHJvZFdyYXBJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigkcmV2aWV3Rm9ybSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnQgPSAkKCcjdGFiLXJldmlld3MnKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgdGhpcy5pbml0TGlua0JpbmQoKTtcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlUmV2aWV3cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cbiAgICAgKi9cbiAgICBpbml0TGlua0JpbmQoKSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJCgnI3Byb2R1Y3RSZXZpZXdzLWNvbnRlbnQnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXJldmlld0xpbmsnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3VGFiTGluaycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi1yZXZpZXdzJykgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNlIGNvbGxhcHNlIG9uIHBhZ2UgbG9hZFxuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXG4gICAgICovXG4gICAgaW5qZWN0UGFnaW5hdGlvbkxpbmsoKSB7XG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgY29uc3QgJHByZXZMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5leHRMaW5rLmF0dHIoJ2hyZWYnLCBgJHskbmV4dExpbmsuYXR0cignaHJlZicpfSAjdGFiLXJldmlld3NgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcHJldkxpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkcHJldkxpbmsuYXR0cignaHJlZicsIGAkeyRwcmV2TGluay5hdHRyKCdocmVmJyl9ICN0YWItcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdTdWJqZWN0LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLndyaXRlUmV2aWV3LWZvcm0gW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJ1dGlscyIsIm1vZGFsRmFjdG9yeSIsInNob3dBbGVydE1vZGFsIiwiTW9kYWxFdmVudHMiLCIkc2NvcGUiLCJjb250ZXh0IiwidGhpc1Byb3VjdElkIiwicGFyc2VJbnQiLCJwcm9kdWN0SWQiLCIkcmVsYXRlVGFiIiwiJCIsIiRidW5kbGUiLCIkYnVuZGxlTGlzdCIsImZpbmQiLCJtb2RhbCIsImN1cnJlbmN5IiwibW9uZXkiLCJzaG93QnVuZGxlIiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm5vdCIsInJlbW92ZUNsYXNzIiwibmV4dCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwiaWQiLCJhdHRyIiwicmVwbGFjZSIsInByb2R1Y3QiLCJpcyIsInRvdGFsUHJpY2UiLCIkZm9ybSIsImFyclBybyIsIkFycmF5IiwiZWFjaCIsImluZGV4IiwidmFsIiwicHVzaCIsImNoZWNrIiwiY2hlY2tQcm9kdWN0IiwiayIsInNob3ciLCJhZGRUb0NhcnQiLCJlcnJvck1lc3NhZ2UiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJpdGVtIiwicHJvZEJ1bmRsZUlkIiwidG90YWxCbG9jayIsImZpcnN0SXRlbSIsImFwcGVuZCIsInByb2R1Y3RDdXN0b21GaWVsZHMiLCJvYmoiLCJuYW1lIiwiSlNPTiIsInBhcnNlIiwidmFsdWUiLCJncmVwIiwibnVtIiwibGlzdCIsImRhdGEiLCJwSWQiLCJ1bmRlZmluZWQiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJmb3JFYWNoIiwiZWxlbWVudCIsInNob3dMaXN0IiwibGlzdEZpbHRlciIsInVuaXF1ZSIsImZvcm0iLCJoYXNPcHRpb25zIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJ0cmltIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImh0bWwiLCJzZXRQcm9kdWN0VmFyaWFudCIsInByb2R1Y3RPcHRpb25zIiwic2hvd1NsaWNrU2xpZGVyIiwid3JhcCIsInNsaWNrIiwiZG90cyIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibW9iaWxlRmlyc3QiLCJpbmZpbml0ZSIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJpIiwiY2hlY2tCZWZvcmVBZGQiLCIkYXR0cmlidXRlcyIsImF0dCIsInByb3AiLCJmb2N1cyIsImFyclAiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInByb2QiLCJjYXJ0IiwiaXRlbUFkZCIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsImVycm9yIiwiYWxlcnQiLCJoaWRlIiwiJG1vZGFsIiwib3BlbiIsInNpemUiLCIkYm9keSIsInF1YW50aXR5IiwidGV4dCIsInRyaWdnZXIiLCJ1cGRhdGVDb250ZW50IiwidG90YWwiLCJzeW1ib2wiLCJzeW1ib2xDaGFuZ2UiLCJkZWNpbWFsUGxhY2VzIiwiZGVjaW1hbFNlcGFyYXRvciIsInRob3VzYW5kc1NlcGFyYXRvciIsInN5bWJvbExvY2F0aW9uIiwiY3VyciIsInRva2VuMSIsInRva2VuMiIsImRlY2ltYWxfcGxhY2VzIiwiZGVjaW1hbF90b2tlbiIsInRob3VzYW5kc190b2tlbiIsImN1cnJlbmN5X2xvY2F0aW9uIiwiY3VycmVuY3lfdG9rZW4iLCJwcmljZSIsInBhcnNlRmxvYXQiLCJpbmRleE9mIiwiZm9ybWF0TW9uZXkiLCJuIiwiYyIsImQiLCJ0IiwiaXNOYU4iLCJNYXRoIiwiYWJzIiwicyIsIlN0cmluZyIsIk51bWJlciIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwic2xpY2UiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsImlzU2F0aXNmaWVkIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImpvaW4iLCJjaGVja2VkIiwibGFiZWwiLCJsYWJlbHMiLCJ0aXRsZSIsIiRjaGFuZ2VkT3B0aW9uIiwicGFyZW50cyIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsInByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCIsInNob3dQcm9kdWN0SW1hZ2UiLCJiZWhhdmlvciIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJlbmFibGVBdHRyaWJ1dGUiLCJkaXNhYmxlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlVHlwZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkc2VsZWN0IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsIl9pc1BsYWluT2JqZWN0IiwiaW1hZ2UiLCJtYWluSW1hZ2VVcmwiLCJ0b29scyIsImltYWdlU3Jjc2V0IiwiZ2V0U3Jjc2V0IiwidGhlbWVTZXR0aW5ncyIsInByb2R1Y3RnYWxsZXJ5X3NpemUiLCJ2aWV3TW9kZWwiLCJnZXRWaWV3TW9kZWwiLCJzaG93TWVzc2FnZUJveCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJfaXNOdW1iZXIiLCJzdG9jayIsImhhbG9fc3RvY2tfbGV2ZWxfbGltaXQiLCIkc3RvY2tMZWZ0V3JhcHBlciIsIiRzdG9ja0xlZnQiLCJfaXNPYmplY3QiLCJ1cGRhdGVQcmljZVZpZXciLCJwcm9kdWN0Q2hlY2tib3giLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsInByaWNlRGF0YSIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkd2lzaGxpc3RWYXJpYXRpb24iLCIkY29udGFpbmVyIiwiJGlucHV0IiwiJHNrdSIsIiR1cGMiLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsIm1lc3NhZ2UiLCIkbWVzc2FnZUJveCIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwid2l0aF90YXgiLCJmb3JtYXR0ZWQiLCJ3aXRob3V0X3RheCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsImZvcm1EYXRhIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwia2V5IiwiRmlsZSIsImUiLCJjb25zb2xlIiwiZ2V0UHJvZHVjdCIsImFyciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRva2VuIiwiYm9keSIsInN0cmluZ2lmeSIsInF1ZXJ5IiwiY3VyQ29kZSIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVuZGVyUHJvZHVjdCIsImN1ckRpc3BsYXkiLCJzeW1ib2xQbGFjZW1lbnQiLCJkZWNpbWFsVG9rZW4iLCJ0aG91c2FuZHNUb2tlbiIsImhhbG9fY2FyZF90aXRsZSIsInBhdGgiLCJyZXN0cmljdF90b19sb2dpbiIsInByaWNlcyIsInByaWNlUmFuZ2UiLCJtaW4iLCJtYXgiLCJwcmljZV9yYW5nZXMiLCJwcmljZU1pbiIsInByaWNlTWF4IiwicHJpY2VEZWYiLCJyZXRhaWxQcmljZSIsImJhc2VQcmljZSIsInByaWNlQmFzIiwicHJpY2VSZXQiLCJodG1sX2NhcmQiLCJlbnRpdHlJZCIsImRlZmF1bHRJbWFnZSIsImltZzcwcHgiLCJwcmV2SWQiLCIkcHJvZEljb25zIiwiJHByb2RXcmFwIiwicmVtb3ZlIiwibmV4dElkIiwibmV4dExpbmsiLCJwcmV2TGluayIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwiZGlzcGxheSIsImVsIiwiJHBvcHVwIiwiJGVsIiwiJG9wdGlvbnMiLCJlbXB0eSIsIiRwcm9kSWQiLCJwb3NpdGlvbiIsIm9mZnNldCIsImNvbnRhaW5lciIsIndpZHRoIiwiY3NzIiwidG9wIiwibGVmdCIsInN3YWwiLCJzY3JvbGwiLCJoX3N0YXRjIiwib3V0ZXJIZWlnaHQiLCJzY3JvbGxUb3AiLCIkc3RpY2t5IiwidG9nZ2xlQ2xhc3MiLCJvbmxvYWQiLCJTb3J0YWJsZSIsIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwiUHJvZHVjdERldGFpbHMiLCJ2aWRlb0dhbGxlcnkiLCJjbGFzc2lmeUZvcm0iLCJoYWxvQWRkT3B0aW9uIiwiaGFsb1Byb2R1Y3RMb29rYm9vayIsImhhbG9CdW5kbGVQcm9kdWN0cyIsImhhbG9OZXh0UHJvZHVjdHMiLCJoYWxvU3RpY2t5QWRkVG9DYXJ0IiwiaGFsb1lvdXR1YmVDYXJvdXNlbCIsImhhbG9Ob3RpZnlNZSIsIlByb2R1Y3QiLCJfUGFnZU1hbmFnZXIiLCJfdGhpcyIsImNhbGwiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIiRidWxrUHJpY2luZ0xpbmsiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJfdGhpczIiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsImJ1bGtQcmljaW5nSGFuZGxlciIsInByb2R1Y3RDdXN0b21UYWIiLCJwcm9kdWN0VGFiVG9nZ2xlIiwiY29tcGFyZUNvbG9ycyIsInByb2R1Y3RWaWV3SW5mb1RhYnMiLCJzb2xkUHJvZHVjdCIsInZpZXdpbmdQcm9kdWN0IiwiY291bnREb3duUHJvZHVjdCIsImxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwicmVnaXN0ZXJWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJvZHVjdFJldmlld0hhbmRsZXIiLCJhcHBlbmRUbyIsInNsaWRlRG93biIsInNsaWRlVXAiLCIkd3JhcHBlciIsIm51bWJlcnNQcm9kdWN0X3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzIiwibnVtYmVyc0hvdXJzX3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzIiwic29sZFByb2R1Y3RUZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0Iiwic29sZFByb2R1Y3RUZXh0MiIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dCIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIm51bWJlcnNQcm9kdWN0SXRlbSIsImZsb29yIiwicmFuZG9tIiwibnVtYmVyc0hvdXJzTGlzdCIsIm51bWJlcnNIb3Vyc0l0ZW0iLCJjb3VudERvd24iLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJzZWZ0IiwiY291bnRkb3duZnVuY3Rpb24iLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiY2xlYXJJbnRlcnZhbCIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic3RyQ291bnREb3duIiwidmlld2VyVGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfdGV4dCIsIm51bWJlcnNWaWV3ZXJfdGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyIiwibnVtYmVyc1ZpZXdlckxpc3QiLCJudW1iZXJzVmlld2VySXRlbSIsIiRzd2F0Y2hXcmFwcGVyIiwiJGltYWdlV3JhcHBlciIsIiR0ZXh0V3JhcHBlciIsIiR0aGlzIiwiJGNvbG9yIiwiJGNvbG9yMiIsIiRjb2xvcjMiLCIkaW1nIiwiJHBhdHRlcm4iLCJnZXRFbGVtZW50QnlJZCIsImFuaW1hdGlvbiIsIiRibG9jayIsImFuaW1hdGUiLCJoZWlnaHQiLCJfdGhpczMiLCIkcHJvZFdyYXBJZCIsImRlZmF1bHQiLCJub2QiLCJDb2xsYXBzaWJsZUV2ZW50cyIsImZvcm1zIiwiX2RlZmF1bHQiLCJzdWJtaXQiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsIiRjb250ZW50IiwiY2xpY2siLCJoYXNoIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdDb21tZW50IiwiY2IiLCJyZXN1bHQiLCJlbWFpbCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJiaW5kIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsImlzSW5pdGlhbGl6ZWQiXSwic291cmNlUm9vdCI6IiJ9
