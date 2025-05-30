"use strict";
(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_brands_js"],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brands)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloAZBrands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./halothemes/haloAZBrands */ "./assets/js/theme/halothemes/haloAZBrands.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Brands = /*#__PURE__*/function (_PageManager) {
  function Brands(context) {
    return _PageManager.call(this, context) || this;
  }
  _inheritsLoose(Brands, _PageManager);
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    (0,_halothemes_haloAZBrands__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context);
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/halothemes/haloAZBrands.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAZBrands.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var azWrapper = $('#haloAZBrandsWrapper'),
    azNavigation = $('#haloAZBrandsTable');
  var requestOptions = {
    config: {
      blog: {
        posts: {
          limit: context.themeSettings.brandpage_brands_per_page
        }
      }
    },
    template: 'halothemes/halo-all-brands'
  };
  if (context.themeSettings.halo_brandlayout === 'aztable') {
    getAllBrand();
    brandNavigationEvent();
  }
  function getAllBrand() {
    azWrapper.addClass('is-loading');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage('/brands.php', requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function brandNavigationEvent() {
    azNavigation.on('click', 'a', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      azNavigation.children('li').removeClass('is-active');
      $target.parent().addClass('is-active');
      var letter = $target.data('href');
      if (letter !== undefined || letter) {
        azWrapper.removeClass('active-all');
        azWrapper.find('.azBrands-group').removeClass('is-active');
        azWrapper.find('[data-letter=' + letter + ']').addClass('is-active');
      } else {
        azWrapper.addClass('active-all');
      }
    });
  }
  function parseListBrand(list) {
    azWrapper.find('.azBrands-group').each(function (index, element) {
      var letter = $(element).data('letter');
      if (!isLetter(letter)) {
        for (var i = 0; i < 10; i++) {
          $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + i + ']'));
        }
      } else {
        $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + letter + ']'));
      }
      if ($('.azBrands-group-list', element).children().length > 0) {
        azNavigation.find('[data-letter=' + letter + ']').removeClass('disable').addClass('has-letter');
      }
    });
  }
  function loadMoreBrands(url) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZHNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWTtBQUFBLElBRWhDRSxNQUFNLDBCQUFBQyxZQUFBO0VBQzFCLFNBQUFELE9BQVlFLE9BQU8sRUFBRTtJQUFBLE9BQ2RELFlBQUEsQ0FBQUUsSUFBQSxPQUFNRCxPQUFPLENBQUM7RUFDbEI7RUFBQ0UsY0FBQSxDQUFBSixNQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLE1BQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBRUpFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDVFIsb0VBQVksQ0FBQyxJQUFJLENBQUNHLE9BQU8sQ0FBQztFQUN4QixDQUFDO0VBQUEsT0FBQUYsTUFBQTtBQUFBLEVBUCtCRixxREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUUvQyw2QkFBZSxvQ0FBVUksT0FBTyxFQUFFO0VBQzlCLElBQU1RLFNBQVMsR0FBR0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZDQyxZQUFZLEdBQUdELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztFQUUxQyxJQUFNRSxjQUFjLEdBQUc7SUFDbkJDLE1BQU0sRUFBRTtNQUNKQyxJQUFJLEVBQUU7UUFDRkMsS0FBSyxFQUFFO1VBQ0hDLEtBQUssRUFBRWYsT0FBTyxDQUFDZ0IsYUFBYSxDQUFDQztRQUNqQztNQUNKO0lBQ0osQ0FBQztJQUNEQyxRQUFRLEVBQUU7RUFDZCxDQUFDO0VBRUQsSUFBSWxCLE9BQU8sQ0FBQ2dCLGFBQWEsQ0FBQ0csZ0JBQWdCLEtBQUssU0FBUyxFQUFFO0lBQ3REQyxXQUFXLENBQUMsQ0FBQztJQUNiQyxvQkFBb0IsQ0FBQyxDQUFDO0VBQzFCO0VBRUEsU0FBU0QsV0FBV0EsQ0FBQSxFQUFFO0lBQ2xCWixTQUFTLENBQUNjLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFFaENmLHNFQUFTLENB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QUMsQ0FBQ1AsTUFBTSxHQUFHLENBQUMsRUFBQztRQUN4RHpCLFlBQVksQ0FBQ29DLElBQUksQ0FBQyxlQUFlLEdBQUNGLE1BQU0sR0FBQyxHQUFHLENBQUMsQ0FBQ1osV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDVixRQUFRLENBQUMsWUFBWSxDQUFDO01BQy9GO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTUyxjQUFjQSxDQUFDcUIsR0FBRyxFQUFFO0lBQ3pCN0Msc0VBQVMsQ0FBQ2lCLE9BQU8sQ0FBQzRCLEdBQUcsRUFBRXpDLGNBQWMsRUFBRSxVQUFDYyxLQUFLLEVBQUVDLFFBQVEsRUFBSztNQUN4RCxJQUFJRCxLQUFLLEVBQUU7UUFDUCxPQUFPLEVBQUU7TUFDYjtNQUVBLElBQUlFLElBQUksR0FBR2xCLENBQUMsQ0FBQ2lCLFFBQVEsQ0FBQztNQUV0QkUsY0FBYyxDQUFDRCxJQUFJLENBQUM7TUFFcEIsSUFBTUUsT0FBTyxHQUFHRixJQUFJLENBQUNHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztNQUU3QyxJQUFJRCxPQUFPLEVBQUU7UUFDVEUsY0FBYyxDQUFDRixPQUFPLENBQUM7TUFDM0IsQ0FBQyxNQUFLO1FBQ0ZyQixTQUFTLENBQUN3QixXQUFXLENBQUMsWUFBWSxDQUFDO01BQ3ZDO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWFubmllcy8uL2Fzc2V0cy9qcy90aGVtZS9icmFuZHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0FaQnJhbmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgaGFsb0FaQnJhbmRzIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQVpCcmFuZHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZHMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgfVxuICAgIFxuXHRvblJlYWR5KCkge1xuXHRcdGhhbG9BWkJyYW5kcyh0aGlzLmNvbnRleHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgY29uc3QgYXpXcmFwcGVyID0gJCgnI2hhbG9BWkJyYW5kc1dyYXBwZXInKSxcbiAgICAgICAgYXpOYXZpZ2F0aW9uID0gJCgnI2hhbG9BWkJyYW5kc1RhYmxlJyk7XG5cbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICBibG9nOiB7XG4gICAgICAgICAgICAgICAgcG9zdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGNvbnRleHQudGhlbWVTZXR0aW5ncy5icmFuZHBhZ2VfYnJhbmRzX3Blcl9wYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvaGFsby1hbGwtYnJhbmRzJyxcbiAgICB9O1xuXG4gICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX2JyYW5kbGF5b3V0ID09PSAnYXp0YWJsZScpIHtcbiAgICAgICAgZ2V0QWxsQnJhbmQoKTtcbiAgICAgICAgYnJhbmROYXZpZ2F0aW9uRXZlbnQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxCcmFuZCgpe1xuICAgICAgICBheldyYXBwZXIuYWRkQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcblxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSgnL2JyYW5kcy5waHAnLCByZXF1ZXN0T3B0aW9ucywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICBwYXJzZUxpc3RCcmFuZChsaXN0KTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dFVybCA9IGxpc3QuZGF0YSgnYnJhbmRzLWxpc3QtbmV4dCcpO1xuXG4gICAgICAgICAgICBpZiAobmV4dFVybCkge1xuICAgICAgICAgICAgICAgIGxvYWRNb3JlQnJhbmRzKG5leHRVcmwpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0xldHRlcihzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5sZW5ndGggPT09IDEgJiYgc3RyLm1hdGNoKC9bYS16XS9pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBicmFuZE5hdmlnYXRpb25FdmVudCgpe1xuICAgICAgICBhek5hdmlnYXRpb24ub24oJ2NsaWNrJywgJ2EnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICBhek5hdmlnYXRpb24uY2hpbGRyZW4oJ2xpJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAkdGFyZ2V0LnBhcmVudCgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gJHRhcmdldC5kYXRhKCdocmVmJyk7XG5cbiAgICAgICAgICAgIGlmIChsZXR0ZXIgIT09IHVuZGVmaW5lZCB8fCBsZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICBheldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1hbGwnKTtcbiAgICAgICAgICAgICAgICBheldyYXBwZXIuZmluZCgnLmF6QnJhbmRzLWdyb3VwJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5maW5kKCdbZGF0YS1sZXR0ZXI9JytsZXR0ZXIrJ10nKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5hZGRDbGFzcygnYWN0aXZlLWFsbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZUxpc3RCcmFuZChsaXN0KXtcbiAgICAgICAgYXpXcmFwcGVyLmZpbmQoJy5hekJyYW5kcy1ncm91cCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgbGV0dGVyID0gJChlbGVtZW50KS5kYXRhKCdsZXR0ZXInKTtcblxuICAgICAgICAgICAgaWYoIWlzTGV0dGVyKGxldHRlcikpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAkKCcuYXpCcmFuZHMtZ3JvdXAtbGlzdCcsIGVsZW1lbnQpLmFwcGVuZChsaXN0LmZpbmQoJ1tkYXRhLWJyYW5kLWxldHRlcj0nK2krJ10nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcuYXpCcmFuZHMtZ3JvdXAtbGlzdCcsIGVsZW1lbnQpLmFwcGVuZChsaXN0LmZpbmQoJ1tkYXRhLWJyYW5kLWxldHRlcj0nK2xldHRlcisnXScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoJCgnLmF6QnJhbmRzLWdyb3VwLWxpc3QnLCBlbGVtZW50KS5jaGlsZHJlbigpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGF6TmF2aWdhdGlvbi5maW5kKCdbZGF0YS1sZXR0ZXI9JytsZXR0ZXIrJ10nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpLmFkZENsYXNzKCdoYXMtbGV0dGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRNb3JlQnJhbmRzKHVybCkge1xuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHJlcXVlc3RPcHRpb25zLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBsaXN0ID0gJChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgIHBhcnNlTGlzdEJyYW5kKGxpc3QpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0VXJsID0gbGlzdC5kYXRhKCdicmFuZHMtbGlzdC1uZXh0Jyk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0VXJsKSB7XG4gICAgICAgICAgICAgICAgbG9hZE1vcmVCcmFuZHMobmV4dFVybCk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsImhhbG9BWkJyYW5kcyIsIkJyYW5kcyIsIl9QYWdlTWFuYWdlciIsImNvbnRleHQiLCJjYWxsIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiZGVmYXVsdCIsInV0aWxzIiwiYXpXcmFwcGVyIiwiJCIsImF6TmF2aWdhdGlvbiIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiYmxvZyIsInBvc3RzIiwibGltaXQiLCJ0aGVtZVNldHRpbmdzIiwiYnJhbmRwYWdlX2JyYW5kc19wZXJfcGFnZSIsInRlbXBsYXRlIiwiaGFsb19icmFuZGxheW91dCIsImdldEFsbEJyYW5kIiwiYnJhbmROYXZpZ2F0aW9uRXZlbnQiLCJhZGRDbGFzcyIsImFwaSIsImdldFBhZ2UiLCJlcnJvciIsInJlc3BvbnNlIiwibGlzdCIsInBhcnNlTGlzdEJyYW5kIiwibmV4dFVybCIsImRhdGEiLCJsb2FkTW9yZUJyYW5kcyIsInJlbW92ZUNsYXNzIiwiaXNMZXR0ZXIiLCJzdHIiLCJsZW5ndGgiLCJtYXRjaCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJsZXR0ZXIiLCJ1bmRlZmluZWQiLCJmaW5kIiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsImkiLCJhcHBlbmQiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9
