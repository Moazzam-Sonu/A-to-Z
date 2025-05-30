"use strict";
(self["webpackChunkbigcommerce_annies"] = self["webpackChunkbigcommerce_annies"] || []).push([["assets_js_theme_contact-us_js"],{

/***/ "./assets/js/theme/contact-us.js":
/*!***************************************!*\
  !*** ./assets/js/theme/contact-us.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactUs)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var ContactUs = /*#__PURE__*/function (_PageManager) {
  function ContactUs() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(ContactUs, _PageManager);
  var _proto = ContactUs.prototype;
  _proto.onReady = function onReady() {
    this.registerContactFormValidation();
  };
  _proto.registerContactFormValidation = function registerContactFormValidation() {
    var formSelector = 'form[data-contact-form]';
    var contactUsValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: formSelector + " input[type=\"submit\"]"
    });
    var $contactForm = $(formSelector);
    contactUsValidator.add([{
      selector: formSelector + " input[name=\"contact_email\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.contactEmail
    }, {
      selector: formSelector + " textarea[name=\"contact_question\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].notEmpty(val);
        cb(result);
      },
      errorMessage: this.context.contactQuestion
    }]);
    $contactForm.on('submit', function (event) {
      contactUsValidator.performCheck();
      if (contactUsValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  return ContactUs;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb250YWN0LXVzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVjtBQUNXO0FBQUEsSUFFckJHLFNBQVMsMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxVQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLFNBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsU0FBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDMUJFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFJLENBQUNDLDZCQUE2QixDQUFDLENBQUM7RUFDeEMsQ0FBQztFQUFBSCxNQUFBLENBRURHLDZCQUE2QixHQUE3QixTQUFBQSw2QkFBNkJBLENBQUEsRUFBRztJQUM1QixJQUFNQyxZQUFZLEdBQUcseUJBQXlCO0lBQzlDLElBQU1DLGtCQUFrQixHQUFHWix1REFBRyxDQUFDO01BQzNCYSxNQUFNLEVBQUtGLFlBQVk7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsSUFBTUcsWUFBWSxHQUFHQyxDQUFDLENBQUNKLFlBQVksQ0FBQztJQUVwQ0Msa0JBQWtCLENBQUNJLEdBQUcsQ0FBQyxDQUNuQjtNQUNJQyxRQUFRLEVBQUtOLFlBQVksbUNBQThCO01BQ3ZETyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFQyxHQUFHLEVBQUs7UUFDbkIsSUFBTUMsTUFBTSxHQUFHcEIsNERBQUssQ0FBQ3FCLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO1FBRS9CRCxFQUFFLENBQUNFLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDREUsWUFBWSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDQztJQUMvQixDQUFDLEVBQ0Q7TUFDSVIsUUFBUSxFQUFLTixZQUFZLHlDQUFvQztNQUM3RE8sUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRUMsR0FBRyxFQUFLO1FBQ25CLElBQU1DLE1BQU0sR0FBR3BCLDREQUFLLENBQUN5QixRQUFRLENBQUNOLEdBQUcsQ0FBQztRQUVsQ0QsRUFBRSxDQUFDRSxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RFLFlBQVksRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0c7SUFDL0IsQ0FBQyxDQUNKLENBQUM7SUFFRmIsWUFBWSxDQUFDYyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUMvQmpCLGtCQUFrQixDQUFDa0IsWUFBWSxDQUFDLENBQUM7TUFFakMsSUFBSWxCLGtCQUFrQixDQUFDbUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3BDO01BQ0o7TUFFQUYsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQTlCLFNBQUE7QUFBQSxFQTFDa0NILHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtYW5uaWVzLy4vYXNzZXRzL2pzL3RoZW1lL2NvbnRhY3QtdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0VXMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbnRhY3RGb3JtVmFsaWRhdGlvbigpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWNvbnRhY3QtZm9ybV0nO1xuICAgICAgICBjb25zdCBjb250YWN0VXNWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHtmb3JtU2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgJGNvbnRhY3RGb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuXG4gICAgICAgIGNvbnRhY3RVc1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjb250YWN0X2VtYWlsXCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybVNlbGVjdG9yfSB0ZXh0YXJlYVtuYW1lPVwiY29udGFjdF9xdWVzdGlvblwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLm5vdEVtcHR5KHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmNvbnRhY3RRdWVzdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRjb250YWN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29udGFjdFVzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoY29udGFjdFVzVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwibm9kIiwiZm9ybXMiLCJDb250YWN0VXMiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsInJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uIiwiZm9ybVNlbGVjdG9yIiwiY29udGFjdFVzVmFsaWRhdG9yIiwic3VibWl0IiwiJGNvbnRhY3RGb3JtIiwiJCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInZhbCIsInJlc3VsdCIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwiY29udGV4dCIsImNvbnRhY3RFbWFpbCIsIm5vdEVtcHR5IiwiY29udGFjdFF1ZXN0aW9uIiwib24iLCJldmVudCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByZXZlbnREZWZhdWx0IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
